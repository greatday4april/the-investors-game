import React, { Fragment, useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, Button, InputGroup, CustomInput, CardColumns, Input } from 'reactstrap';
import CountUp from 'react-countup';
import CardSummary from './CardSummary';
import ActiveUsersBarChart from './ActiveUsersBarChart';
import PaymentsLineChart from './PaymentsLineChart';
import { toast } from 'react-toastify';
import FalconCardHeader from '../common/FalconCardHeader';
import ButtonIcon from '../common/ButtonIcon';

import loadable from '@loadable/component';
import DashBoardDepositStatus from './DashboardDepositStatus';
const PurchasesTable = loadable(() => import('./PurchasesTable'));
const ActiveUsersMap = loadable(() => import('./ActiveUsersMap'));

const Dashboard = () => {
  // State
  const [isSelected, setIsSelected] = useState(false);
  let currPrice = 2200;



  useEffect(() => {
    toast(
      <Fragment>
        Welcome to <strong>Falcon React</strong>!<br />
        ReactJS Dashboard and WebApp Template
      </Fragment>
    );
  }, []);


  return (
    <Fragment>
      <PaymentsLineChart />
      <DashBoardDepositStatus />
      {/* <div className="card-deck">
        <Card className="mb-4">
          <FalconCardHeader title="Market Order" size="sm" light={false} />
          <CardBody className="p-0 text-center">
            <Row noGutters className="font-weight-bold px-4 ">
              <Col xs={9} md={8} className="py-2 px-md-3 text-left text-900">
                Shares
              </Col>
              <Col className="px-3">
                <Input size="md" type="text" placeholder="0"/>
              </Col>
            </Row>
            <Row noGutters className="font-weight-bold px-4">
              <Col xs={9} md={8} className="py-2 px-md-3 text-left text-900">
                Market Price
              </Col>
              <Col className="py-2 px-md-3 text-left"> ${currPrice}</Col>
            </Row>
            <Row noGutters className="font-weight-bold px-4">
              <Col xs={9} md={8} className="py-2 px-md-3 text-left text-900">
                Estimates Cost
              </Col>
              <Col className="px-md-3 py-2 text-left">$2200</Col>
            </Row>
            <Col xs="auto" className="pr-3 mt-3">
              <Button color={'primary'} size="sm" className="px-4 mb-3">
                Buy
              </Button>
              <Button color={'primary'} size="sm" className="px-4 ml-6 mb-3">
                Sell
              </Button>
            </Col>
          </CardBody>
        </Card>
        <Card className="mb-4">
          <FalconCardHeader title="Position" size="sm" light={false} />
          <CardBody className="p-0">
            {/* <PurchasesTable setIsSelected={setIsSelected} /> */}
            {/* <Col xs="auto" className="pr-3 text-center" />
          </CardBody>
        </Card>
        <Card className="mb-4">
          <FalconCardHeader title="Margin" size="sm" light={false} />
          <CardBody className="p-0">
            <Row noGutters className="font-weight-bold px-1" />
          </CardBody>
        </Card>
      </div> */}

      <Card className="mb-3">
        <FalconCardHeader title="Order History" light={false}>
          <Fragment>
            <ButtonIcon icon="plus" transform="shrink-3 down-2" color="falcon-default" size="sm">
              New
            </ButtonIcon>
            <ButtonIcon icon="filter" transform="shrink-3 down-2" color="falcon-default" size="sm" className="mx-2">
              Filter
            </ButtonIcon>
            <ButtonIcon icon="external-link-alt" transform="shrink-3 down-2" color="falcon-default" size="sm">
              Export
            </ButtonIcon>
          </Fragment>
        </FalconCardHeader>
        <CardBody className="p-0">
          <PurchasesTable setIsSelected={setIsSelected} />
        </CardBody>
      </Card>
      <Row noGutters>
        <Col lg="4" className="pr-lg-2">
          <ActiveUsersBarChart />
        </Col>
        <Col lg="8" className="pl-lg-2">
          <ActiveUsersMap />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Dashboard;
