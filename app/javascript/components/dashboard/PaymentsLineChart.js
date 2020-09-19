import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import { Chart, Line } from 'react-chartjs-2';
import React, { useContext, useEffect, useState } from 'react';
import { rgbaColor, themeColors } from '../../helpers/utils';
import AppContext from '../../context/Context';
import TradingDialog from './TradingDialog'
import CurrentTickPriceContainer from './CurrentTickPriceContainer';


const PaymentsLineChart = (props) => {
  const { ticks, length, fetchTicks, setCurrentTickPrice, sidebar } = props;
  const { isDark } = useContext(AppContext);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  // const [tickPrice, setTickPrice] = useState(0);
  // ComponentDidMount()
  useEffect(() => {
    fetchTicks();
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
  }, [fetchTicks]);

  const config = {
    data(canvas) {
      const ctx = canvas.getContext('2d');
      const gradientFill = isDark
        ? ctx.createLinearGradient(0, 0, 0, ctx.canvas.height)
        : ctx.createLinearGradient(0, 0, 0, 250);
      gradientFill.addColorStop(1, isDark ? 'rgba(249, 244, 233, 0.5)' : 'rgba(249, 244, 233, 0.5)');
      gradientFill.addColorStop(0.3, isDark ? 'transparent' : '#5F995B');
      return {
        labels: new Array(length).fill(''),
        datasets: [
          {
            borderWidth: 1,
            data: ticks.map(tick => tick.close),
            borderColor: rgbaColor(isDark ? themeColors.primary : '#5F995B'),
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
          label: (tooltipItem) => { setCurrentTickPrice(tooltipItem.yLabel); }
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
  let items = <br />;
  if (sidebar!=true) {
    items = <Row className="text-white align-items-center no-gutters">
      <Col>
        <Row>
          <h4 style={{ padding: "0 1rem", color: "black" }}>{props.symbol}</h4>
          <CurrentTickPriceContainer />
          {modal ? <TradingDialog toggle={toggle} modal={modal} setModal={setModal} /> : null}
        </Row>
      </Col>
      <Button color={'light'} size="sm" className="px-2 sqr-blk-btn" onClick={toggle}>
        Start Trading
          </Button>
      {modal ? <TradingDialog toggle={toggle} modal={modal} setModal={setModal} /> : null}
    </Row>
  } 
   
  let classname = "rounded-soft bg-gradient";
  if (sidebar==true) {
    classname = "rounded-soft bg-gradient mg-pd-0"
  }

  return (
    <Card className="mb-3">
      <CardBody className={classname} >
        {items}
        <Line data={config.data} options={config.options} width={1618} height={375}  />
      </CardBody>
    </Card>
  );
};

export default PaymentsLineChart;
