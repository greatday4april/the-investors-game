import React from "react";
import ReactEcharts from "echarts-for-react";



const TickPolygon = () =>  {
    const abilityValues = 200;
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
            symbolSize: 0,
            itemStyle: {
                color: '#FFF'
            },
            lineStyle: {
                color: 'rgb(128, 128, 128, 0)'
            },
            data: [
                {
                    value: abilityValues,
                    label: {
                        show: true
                    },
                    areaStyle: {
                        opacity: 0.7,
                        color: '#5FDDC0'
                    }
                }
            ]
        }]
    };

    return (
        <div>
            <ReactEcharts option={option} style={{ width: "100%"}} />
        </div>)
}

export default TickPolygon;