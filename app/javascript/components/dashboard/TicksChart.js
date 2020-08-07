import React, { useState } from 'react';
import PaymentsLineChartContainer from './PaymentsLineChartContainer';
import {Button} from 'reactstrap';
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
        </div>
    )
}

export default TicksChart;