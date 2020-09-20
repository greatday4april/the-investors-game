import { Button, Col, Input, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const TradingDialog = ({ toggle, modal, setModal }) => {
  return (
    // <Modal isOpen={modal} toggle={toggle} className="shadowed-card">
    //   <ModalHeader toggle={toggle}>Start Trading!</ModalHeader>
    //   <ModalBody>
    <div className="shadowed-card w-20">
        <Row noGutters className="font-weight-bold px-4 " style={{marginBottom: '20px'}}>
          <Col xs={9} md={8} className="py-2 px-md-3 text-left text-900">
            <div className='text-title nav-top-p' style={{ top: '713px', marginTop: '30px' }}>
              BUY&SELL
            </div>
          </Col>
        </Row>
      <Row noGutters className="font-weight-bold px-4 " >
        <Col xs={9} md={8} className="py-2 px-md-3 text-left text-900">
          Shares
        </Col>
      </Row>
      <Row noGutters className="font-weight-bold px-4" style={{marginBottom: '10px'}}>
        <Col>
          <Input size="xl" type="number" placeholder="0" min="0" style={{backgroundColor: "#F9F4E9"}}/>
        </Col>
      </Row>
      <Row noGutters className="font-weight-bold px-4" style={{marginBottom: '10px'}}>
        <Col xs={9} md={8} className="py-2 px-md-3 text-left text-900">
          Market Price
        </Col>
        <Col className="py-2 px-md-3 text-left"> $2200 </Col>
      </Row>
      <Row noGutters className="font-weight-bold px-4" style={{marginBottom: '10px'}}>
        <Col xs={9} md={8} className="py-2 px-md-3 text-left text-900">
          Estimate Cost
        </Col>
        <Col className="px-md-3 py-2 text-left">$2200</Col>
      </Row>
      <br />
      <Col xs="auto" className="pr-3 text-center">
        <Button size="md" className="px-4 mb-3 sqr-blk-btn">
          Buy
        </Button>
        <Button size="md" className="px-4 ml-4 mb-3 sqr-blk-btn">
          Sell
        </Button>
      </Col>
      {/* //   </ModalBody> */}
      {/* // </Modal> */}
    </div>
  );
};

export default TradingDialog;
