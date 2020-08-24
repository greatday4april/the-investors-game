import React from 'react';
import ReactEcharts from 'echarts-for-react';
const TickPolygon = ({ stats }) => {
  const abilities = ['Health', 'Dividend', 'Value', 'Future', 'Past'];
  let polygonValue = abilities.map((ability) => stats[ability]);
  const option = {
    tooltip: {
      // show: false
    },
    radar: {
      name: {
        textStyle: {
          color: '#131523',
          padding: [-10, -10],
          fontWeight: 'bold',
          fontStyle: 'normal',
          fontFamily: 'Inter',
          fontSize: '16px',
        },
      },
      splitNumber: 3,
      indicator: [
        { name: abilities[0], max: 6 },
        { name: abilities[1], max: 6 },
        { name: abilities[2], max: 6 },
        { name: abilities[3], max: 6 },
        { name: abilities[4], max: 6 },
      ],
      radius: '80%',
      center: ['50%', '50%'],
    },
    series: [
      {
        type: 'radar',
        symbolSize: 5,
        itemStyle: {
          color: '#F6AD55',
        },
        data: [
          {
            value: polygonValue,
            label: {
              show: true,
            },
            areaStyle: {
              color: '#F6AD55',
            },
          },
        ],
      },
    ],
  };

  return (
    <div>
      <ReactEcharts option={option} style={{ width: '100%' }} />
    </div>
  );
};

export default TickPolygon;
