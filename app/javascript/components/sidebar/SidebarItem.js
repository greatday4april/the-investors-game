import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FalconCardHeader from '../common/FalconCardHeader';
import { Badge, Card, CardBody, Col, Row, Fragment} from 'reactstrap';
import Flex from '../common/Flex';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import { getGrays, themeColors, rgbaColor, getPosition, numberFormatter } from '../../helpers/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppContext from '../../context/Context';
import Media from 'reactstrap/es/Media';
import Avatar from '../common/Avatar';
import { Link } from 'react-router-dom';

const getOption = (data, isDark) => {
  const grays = getGrays(isDark);
  return {
    tooltip: {
      triggerOn: 'mousemove',
      trigger: 'axis',
      padding: [7, 10],
      formatter: '{b0}: {c0}',
      backgroundColor: grays.white,
      borderColor: grays['300'],
      borderWidth: 1,
      transitionDuration: 0,
      position(pos, params, dom, rect, size) {
        return getPosition(pos, params, dom, rect, size);
      },
      textStyle: { color: themeColors.dark },
    },
    xAxis: {
      type: 'category',
      data: ['Week 4', 'Week 5'],
      boundaryGap: false,
      splitLine: { show: false },
      axisLine: {
        show: false,
        lineStyle: {
          color: grays['300'],
          type: 'dashed',
        },
      },
      axisLabel: { show: false },
      axisTick: { show: false },
      axisPointer: { type: 'none' },
    },
    yAxis: {
      type: 'value',
      splitLine: { show: false },
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      axisPointer: { show: false },
    },
    series: [
      {
        type: 'line',
        lineStyle: {
          color: themeColors.primary,
          width: 3,
        },
        itemStyle: {
          color: grays['100'],
          borderColor: themeColors.primary,
          borderWidth: 2,
        },
        hoverAnimation: true,
        data: data,
        connectNulls: true,
        smooth: 0.6,
        smoothMonotone: 'x',
        symbol: 'circle',
        symbolSize: 8,
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: rgbaColor(themeColors.primary, 0.25),
              },
              {
                offset: 1,
                color: rgbaColor(themeColors.primary, 0),
              },
            ],
          },
        },
      },
    ],
    grid: { bottom: '2%', top: '0%', right: '10px', left: '10px' },
  };
};

const SidebarItem = ({ data}) => {
const { isDark } = useContext(AppContext);
  const total = data.reduce((total, currentValue) => total + currentValue, 0);

  return (
    <div >
      <Row className="align-items-center border-bottom border-light border-2x p-0 py-2 px-2 bg-white">
        <Media className="pl-1">
          <Link to={{
            pathname: "/aapl"
          }}>AAPL</Link>
        </Media>
        <Col xs="auto" className="pl-3 mx-0">
          <ReactEchartsCore
            echarts={echarts}
            option={getOption(data, isDark)}
            style={{ width: '4.355rem', minHeight: '2.5rem', height: '50%' }}
          />
        </Col>
        <Badge pill color="soft-info" className="fs--2 mr-3">
          <FontAwesomeIcon icon="caret-up" className="mr-0" />
          13.6%
        </Badge>
      </Row>
    </div>
  );
};
SidebarItem.propTypes = { data: PropTypes.array.isRequired };
export default SidebarItem;