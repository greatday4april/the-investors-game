import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import { Chart, Line } from 'react-chartjs-2';
import React, { useContext, useEffect, useState } from 'react';
import { rgbaColor, themeColors } from '../../helpers/utils';

import AppContext from '../../context/Context';
import Dialog from './Dialog'

const PaymentsLineChart = ({ ticks, length, fetchAllTicks }) => {
  const { isDark } = useContext(AppContext);
  const [modal, setModal] = useState(false);
   const toggle = () => setModal(!modal);
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

  const config = {
    data(canvas) {
      const ctx = canvas.getContext('2d');
      const gradientFill = isDark
        ? ctx.createLinearGradient(0, 0, 0, ctx.canvas.height)
        : ctx.createLinearGradient(0, 0, 0, 250);
      gradientFill.addColorStop(0, isDark ? 'rgba(44,123,229, 0.5)' : 'rgba(255, 255, 255, 0.3)');
      gradientFill.addColorStop(1, isDark ? 'transparent' : 'rgba(255, 255, 255, 0)');
      return {
        labels: new Array(length).fill(''),
        datasets: [
          {
            borderWidth: 1,
            data: ticks.map(tick => tick.close),
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
            </p>{' '}
            <Dialog toggle={toggle} modal={modal} setModal={setModal} />
          </Col>
          <Button color={'light'} size="sm" className="px-4 ml-2" onClick={toggle}>
            Start Trading
          </Button>
          <Dialog toggle={toggle} modal={modal} setModal={setModal} />
        </Row>
        <Line data={config.data} options={config.options} width={1618} height={375} />
      </CardBody>
    </Card>
  );
};

export default PaymentsLineChart;
