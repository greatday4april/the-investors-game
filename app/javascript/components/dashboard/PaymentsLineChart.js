import React, { useState, useContext, Fragment } from 'react';
import { Row, Col, Card, CardBody, CustomInput, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import { hours, paymentByStatus } from '../../data/dashboard/payments';
import { rgbaColor, themeColors } from '../../helpers/utils';
import AppContext from '../../context/Context';
import ButtonIcon from '../common/ButtonIcon';

import Modals from '../bootstrap-components/Modals'

const PaymentsLineChart = () => {

  const [paymentStatus, setPaymentStatus] = useState('successful');
  const { isDark } = useContext(AppContext);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


  const config = {
    data(canvas) {
      const ctx = canvas.getContext('2d');
      const gradientFill = isDark
        ? ctx.createLinearGradient(0, 0, 0, ctx.canvas.height)
        : ctx.createLinearGradient(0, 0, 0, 250);
      gradientFill.addColorStop(0, isDark ? 'rgba(44,123,229, 0.5)' : 'rgba(255, 255, 255, 0.3)');
      gradientFill.addColorStop(1, isDark ? 'transparent' : 'rgba(255, 255, 255, 0)');

      return {
        labels: hours.map((hour) => hour.substring(0, hour.length - 3)),
        datasets: [
          {
            borderWidth: 2,
            data: paymentByStatus[paymentStatus].map((d) => (d * 3.14).toFixed(2)),
            borderColor: rgbaColor(isDark ? themeColors.primary : '#fff', 0.8),
            backgroundColor: gradientFill,
          },
        ],
      };
    },
    options: {
      legend: { display: false },
      tooltips: {
        mode: 'x-axis',
        xPadding: 20,
        yPadding: 10,
        displayColors: false,
        callbacks: {
          label: (tooltipItem) => `${hours[tooltipItem.index]} - ${tooltipItem.yLabel} USD`,
          title: () => null,
        },
      },
      hover: { mode: 'label' },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              show: true,
              labelString: 'Month',
            },
            ticks: {
              fontColor: rgbaColor('#fff', 0.7),
              fontStyle: 600,
            },
            gridLines: {
              color: rgbaColor('#fff', 0.1),
              zeroLineColor: rgbaColor('#fff', 0.1),
              lineWidth: 1,
            },
          },
        ],
        yAxes: [
          {
            display: false,
            gridLines: {
              color: rgbaColor('#fff', 1),
            },
          },
        ],
      },
    },
  };

  return (
    <Card className="mb-3">
      <CardBody className="rounded-soft bg-gradient">
        <Row className="text-white align-items-center no-gutters">
          <Col>
            <h4 className="text-white mb-0">Today $764.39</h4>
            <p className="fs--1 font-weight-semi-bold">
              Yesterday <span className="opacity-50">$684.87</span>
            </p>
          </Col>
          <Button color={'light'} size="sm" className="px-4 ml-2" onClick={toggle}>
            Start Trading
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Start Trading!</ModalHeader>
            <ModalBody>
              <Row noGutters className="font-weight-bold px-4 ">
                <Col xs={9} md={8} className="py-2 px-md-3 text-left text-900">
                  Shares
                </Col>
                <Col className="px-3">
                  <Input size="md" type="text" placeholder="0" />
                </Col>
              </Row>
              <Row noGutters className="font-weight-bold px-4">
                <Col xs={9} md={8} className="py-2 px-md-3 text-left text-900">
                  Market Price
                </Col>
                <Col className="py-2 px-md-3 text-left"> $2200 </Col>
              </Row>
              <Row noGutters className="font-weight-bold px-4">
                <Col xs={9} md={8} className="py-2 px-md-3 text-left text-900">
                  Estimate Cost
                </Col>
                <Col className="px-md-3 py-2 text-left">$2200</Col>
              </Row>
              <br />
              <Col xs="auto" className="pr-3 text-center">
                <Button color={'success'} size="md" className="px-4 mb-3">
                  Buy
                </Button>
                <Button color={'success'} size="md" className="px-4 ml-4 mb-3">
                  Sell
                </Button>
              </Col>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Row>
        <Line data={config.data} options={config.options} width={1618} height={375} />
      </CardBody>
    </Card>
  );
};

export default PaymentsLineChart;
