import { Button, Card, CardBody, Col, CustomInput, InputGroup, Row } from 'reactstrap';
import React, { Fragment, useEffect, useState } from 'react';

import ActiveUsersBarChart from './ActiveUsersBarChart';
import ButtonIcon from '../common/ButtonIcon';
import CardSummary from './CardSummary';
import CountUp from 'react-countup';
import DashBoardDepositStatus from './DashboardDepositStatus';
import FalconCardHeader from '../common/FalconCardHeader';
import PaymentsLineChart from './PaymentsLineChart';
import { connect } from 'react-redux'
import loadable from '@loadable/component';
import { toast } from 'react-toastify';

const PurchasesTable = loadable(() => import('./PurchasesTable'));
const ActiveUsersMap = loadable(() => import('./ActiveUsersMap'));

const mapStateToProps = (state) => {
  return {
    currentTime: state.currentTime
  };
};

const Dashboard = ({currentTime}) => {
  // State
  const [isSelected, setIsSelected] = useState(false);

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
      <PaymentsLineChart warpedTime={currentTime} />
      <DashBoardDepositStatus />
      <div className="card-deck">
        <CardSummary rate="-0.23%" title="Customers" color="warning" linkText="See all">
          58.39k
        </CardSummary>
        <CardSummary rate="0.0%" title="Orders" color="info" linkText="All orders">
          73.46k
        </CardSummary>
        <CardSummary content="43,594" rate="9.54%" title="Revenue" color="success" linkText="Statistics">
          <CountUp end={43594} duration={5} prefix="$" separator="," decimal="." />
        </CardSummary>
      </div>
      <Card className="mb-3">
        <FalconCardHeader title="Recent Purchases" light={false}>
          {isSelected ? (
            <InputGroup size="sm" className="input-group input-group-sm">
              <CustomInput type="select" id="bulk-select">
                <option>Bulk actions</option>
                <option value="Refund">Refund</option>
                <option value="Delete">Delete</option>
                <option value="Archive">Archive</option>
              </CustomInput>
              <Button color="falcon-default" size="sm" className="ml-2">
                Apply
              </Button>
            </InputGroup>
          ) : (
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
          )}
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

export default connect(mapStateToProps, null)(Dashboard);
