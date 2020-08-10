import React, { useState } from 'react';
import PaymentsLineChartContainer from './PaymentsLineChartContainer';
import {Button, Col, Row} from 'reactstrap';
import StatsTable from './StatsTable';
import TickPolygon from './TickPolygon';
import {
    ONE_WEEK_DURATION,
    ONE_DAY_DURATION,
    ONE_MONTH_DURATION,
    SIX_MONTHS_DURATION,
    ONE_YEAR_DURATION
} from "../../utils/constants";

const TicksChart = (props) => {
    let [scale, setScale] = useState(ONE_DAY_DURATION);
    let symbol = props.symbol || props.match.params.symbol.toUpperCase()
    console.log(props);
    
    let statsComponent;
    if (!props.match) {
        statsComponent = <br/>
    } else {
        let stats = props.stats[symbol];
        statsComponent = <div style={{ margin: "1.5rem" }}>
            <h3 >Stats</h3>
            <div style={{ display: "flex", marginTop: "2rem" }}>
                <Col style={{ width: "65%" }}>
                    <Row style={{ justifyContent: "space-between" }}>
                        <Col style={{ margin: "0 2rem 0 0" }}>
                            <StatsTable stats={stats} keyWord={"CEO"} />
                            <StatsTable stats={stats} keyWord={"Employees"} />
                            <StatsTable stats={stats} keyWord={"Headquarters"}/>
                            <StatsTable stats={stats} keyWord={"Founded"}/>
                        </Col>
                        <Col style={{ margin: "0 0 0 2rem" }}>
                            <StatsTable stats={stats} keyWord={"Market Cap"}/>
                            <StatsTable stats={stats} keyWord={"Earnings Ratio"}/>
                            <StatsTable stats={stats} keyWord={"Dividend Yield"}/>
                            <StatsTable stats={stats} keyWord={"Average Volume"}/>
                        </Col>
                    </Row>
                </Col>
                <Col style={{ width: "30%", marginTop: "2rem" }}>
                    <TickPolygon stats={stats} />
                </Col>
            </div>
        </div>
    }

    return (
        <div>
            <PaymentsLineChartContainer period={scale} symbol={symbol} />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Button color="link" size="sm" className="ml-4 mb-2" style={{ fontSize: '1.44rem' }} onClick={() => setScale(ONE_DAY_DURATION)}>
                    1 DAY
                    </Button>
                <Button color="link" size="sm" className="ml-4 mb-2" style={{ fontSize: '1.44rem' }} onClick={() => setScale(ONE_WEEK_DURATION)}>
                    1 WEEK
                    </Button>
                <Button color="link" size="sm" className="ml-4 mb-2" style={{ fontSize: '1.44rem' }} onClick={() => setScale(ONE_MONTH_DURATION)}>
                    1 MONTH
                    </Button>
                <Button color="link" size="sm" className="ml-4 mb-2" style={{ fontSize: '1.44rem' }} onClick={() => setScale(SIX_MONTHS_DURATION)}>
                    6 MONTHS
                    </Button>
                <Button color="link" size="sm" className="ml-4 mb-2" style={{ fontSize: '1.44rem' }} onClick={() => setScale(ONE_YEAR_DURATION)}>
                    1 YEAR
                    </Button>
            </div>
            {statsComponent}
        </div>
    )
}

export default TicksChart;