import { Card, CardBody, Col, Row } from 'reactstrap';
import React, { Fragment, useEffect, useState } from 'react';

import ActiveUsersBarChart from './ActiveUsersBarChart';
import ButtonIcon from '../common/ButtonIcon';
import DashBoardDepositStatus from './DashboardDepositStatus';
import FalconCardHeader from '../common/FalconCardHeader';
import PaymentsLineChartContainer from './PaymentsLineChartContainer';
import loadable from '@loadable/component';
import { toast } from 'react-toastify';

const PurchasesTable = loadable(() => import('./PurchasesTable'));
const ActiveUsersMap = loadable(() => import('./ActiveUsersMap'));

const Dashboard = () => {
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
      <PaymentsLineChartContainer />
      <DashBoardDepositStatus />
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
