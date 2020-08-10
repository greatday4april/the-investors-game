import React from 'react';
import { Col, Row} from 'reactstrap';


const StatsTable = (props) => {
    const { stats, keyWord } = props;

    return (
        <div  className="align-items-center border-bottom border-grey border-2x py-3"
                style={{ justifyContent: 'space-between', fontSize: "1.25rem"}}>
            <Col xs="auto" className="pl-3 mx-0">
                {keyWord}
            </Col>
            <Col xs="auto" className="pl-3 mx-0" style={{fontWeight: "550", color: "black"}}>
                {stats[keyWord]}
            </Col>
        </div>
    )
}

export default StatsTable;