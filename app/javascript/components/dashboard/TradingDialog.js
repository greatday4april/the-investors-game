import React from 'react';
import { Row, Col, Button, Modal, ModalHeader, ModalBody, Input } from 'reactstrap';


const TradingDialog = ({ toggle, modal, setModal }) => {
  return (
    <Modal isOpen={modal} toggle={toggle} className="shadowed-card">
      <ModalHeader toggle={toggle}>Start Trading!</ModalHeader>
      <ModalBody>
        <Row noGutters className="font-weight-bold px-4 ">
          <Col xs={9} md={8} className="py-2 px-md-3 text-left text-900">
            Shares
          </Col>
          <Col className="px-3">
            <Input size="md" type="text" placeholder="0" />
          </Col>
        </Row>
        <Row noGutters className="font-weight-bold px-4">
          <Col xs={9} md={8} className="py-2 px-md-3 text-left text-900">
            Market Price
          </Col>
          <Col className="py-2 px-md-3 text-left"> $2200 </Col>
        </Row>
        <Row noGutters className="font-weight-bold px-4">
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
      </ModalBody>
    </Modal>
  );
};

export default TradingDialog;
