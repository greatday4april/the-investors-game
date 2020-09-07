import { Card, CardBody, Col, Row } from 'reactstrap';
import React, { Fragment, useEffect, useState } from 'react';

import ActiveUsersBarChart from './ActiveUsersBarChart';
import ButtonIcon from '../common/ButtonIcon';
import FalconCardHeader from '../common/FalconCardHeader';
import NewsItemsTableContainer from './NewsItemsTableContainer';
import TicksChart from './TicksChart';
import loadable from '@loadable/component';

const PurchasesTableContainer = loadable(() => import('./PurchasesTableContainer'));

const ActiveUsersMap = loadable(() => import('./ActiveUsersMap'));

const Dashboard = ({symbol, warpedTime}) => {
  // State
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    // TODO clear cache and current price
  }, []);

  return (
    <Fragment>
      <NewsItemsTableContainer symbol={symbol} date={warpedTime?.format('MMDDYY')}/>
      <TicksChart symbol={symbol} />
      <Card className="mb-3 shadowed-card">
        <FalconCardHeader title="ORDER HISTORY" light={false} className="bg-color" >
        </FalconCardHeader>
        <CardBody className="p-0 bg-color">
          <PurchasesTableContainer setIsSelected={setIsSelected} />
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
