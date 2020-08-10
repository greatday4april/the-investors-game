import React from "react";
import ReactEcharts from "echarts-for-react";

const TickPolygon = ({stats}) =>  {

    const option = {
        tooltip: {
            // show: false
        },
        radar: {
            name: {
                textStyle: {
                    color: '#2F4F4F',
                    padding: [-10, -10],
                    fontWeight: 500,
                    fontSize: '20'
                }
            },
            splitNumber: 3,
            indicator: [
                { name: 'Ability1', max: 255 },
                { name: 'Ability2', max: 255 },
                { name: 'Ability3', max: 255 },
                { name: 'Ability4', max: 255 },
                { name: 'Ability5', max: 255 },
            ],
            radius: '80%',
            center: ['50%', '50%'],
        },
        series: [{
            type: 'radar',
            symbolSize: 5,
            itemStyle: {
                color: 'rgba(1, 1, 1)'
            },
            data: [
                {
                    value: [40, 80, 120, 160, 200],
                    label: {
                        show: true
                    }
                }
            ]
        }]
    };

    return (
        <div>
            <ReactEcharts option={option} style={{ width: "100%" }} />
        </div>)
}

export default TickPolygon;