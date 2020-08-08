import React from 'react';
import { Col, Row} from 'reactstrap';


const StatsTable = () => {

    return (
        <div >
            <Row className="align-items-center border-bottom border-grey border-2x py-3"
                style={{ justifyContent: 'space-between', fontSize: "1.25rem"}}>
           
                <Col xs="auto" className="pl-3 mx-0">
                    KEY
                </Col>

                <Col xs="auto" className="pl-3 mx-0" style={{fontWeight: "550", color: "black"}}>
                    VALUE
                </Col>
                
            </Row>
        </div>
    )
}

export default StatsTable;