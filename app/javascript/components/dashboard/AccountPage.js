import { Card, CardBody, Col, Row } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import React, { useContext, useEffect, useState } from 'react';
import { rgbaColor, themeColors } from '../../helpers/utils';
import AppContext from '../../context/Context';
import TradingDialog from './TradingDialog';
import CurrentAssetAmountContainer from './CurrentAssetAmountContainer';
export const AccountPage = (props) => {
  const { historyAssets, fetchAllTicks, setCurrentAssetAmount } = props;
  const { isDark } = useContext(AppContext);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  useEffect(() => {
    fetchAllTicks();
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
        labels: historyAssets.map(asset => asset.date.format('YYYY/MM/DD')),
        datasets: [
          {
            borderWidth: 1,
            data: historyAssets.map(asset => asset.amount),
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
          label: (tooltipItem) => { setCurrentAssetAmount(tooltipItem.yLabel); }
        },
      },
      scales: {
        xAxes: [
          {
            display: false,
            historyAssets: {
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
            <CurrentAssetAmountContainer />
            {modal ? <TradingDialog toggle={toggle} modal={modal} setModal={setModal} /> : null}
          </Col>
          {modal ? <TradingDialog toggle={toggle} modal={modal} setModal={setModal} /> : null}
        </Row>
        <Line data={config.data} options={config.options} width={1618} height={375} />
      </CardBody>
    </Card>
  );
};
