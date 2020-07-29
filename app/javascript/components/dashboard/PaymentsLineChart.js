import React, { useState, useEffect, useContext } from 'react';
import { Row, Col, Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { Chart, Line } from 'react-chartjs-2';
import { rgbaColor, themeColors } from '../../helpers/utils';
import AppContext from '../../context/Context';
import selectedData from '../../reducers/selectors'

const PaymentsLineChart = ({ data, fetchAllTicks }) => {
  const { isDark } = useContext(AppContext);
  const [modal, setModal] = useState(false);
  const [tickPrice, setTickPrice] = useState(0);
  // ComponentDidMount()
  useEffect(() => {
    fetchAllTicks('2009-01-02 07:06:00', '1d', 'AAPL');

    Chart.pluginService.register({
      afterDraw: function (chart, _easing) {
        if (chart.tooltip._active && chart.tooltip._active.length) {
          const activePoint = chart.controller.tooltip._active[0];
          const ctx = chart.ctx;
          const x = activePoint.tooltipPosition().x;
          const topY = chart.scales['y-axis-0'].top;
          const bottomY = chart.scales['y-axis-0'].bottom;

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x, topY);
          ctx.lineTo(x, bottomY);
          ctx.lineWidth = 0.5;
          ctx.strokeStyle = '#c9ced1';
          ctx.stroke();
          ctx.restore();
        }
      }
    });
  }, [fetchAllTicks]);

  const toggle = () => setModal(!modal);
  const selectedDataSets = selectedData(data, "2009-01-02T08:47:00.000-05:00");
  const config = {
    data(canvas) {
      const ctx = canvas.getContext('2d');
      const gradientFill = isDark
        ? ctx.createLinearGradient(0, 0, 0, ctx.canvas.height)
        : ctx.createLinearGradient(0, 0, 0, 250);
      gradientFill.addColorStop(0, isDark ? 'rgba(44,123,229, 0.5)' : 'rgba(255, 255, 255, 0.3)');
      gradientFill.addColorStop(1, isDark ? 'transparent' : 'rgba(255, 255, 255, 0)');
      return {
        labels: new Array(data.length).fill(''),
        datasets: [
          {
            borderWidth: 1,
            data: selectedDataSets.map(tick => tick.close),
            borderColor: rgbaColor(isDark ? themeColors.primary : '#fff', 0.8),
            backgroundColor: gradientFill,
            pointBorderWidth: 0,
            pointRadius: 0,
          },
        ],
      };
    },
    options: {
      legend: {
        display: false,
      },
      tooltips: {
        mode: 'x-axis',
        xPadding: 20,
        yPadding: 10,
        displayColors: false,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        callbacks: {
          label: (tooltipItem) => setTickPrice(tooltipItem.yLabel),
        },
      },
      scales: {
        xAxes: [
          {
            display: false,
            ticks: {
              fontColor: rgbaColor('#fff', 0.7),
              fontStyle: 600,
            },
            gridLines: {
              drawOnChartArea: false
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
            <h4 className="text-white mb-0">{`Today ${tickPrice} USD`}</h4>
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
