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
      <Card className="mb-3">
        <FalconCardHeader title="Transaction History" light={false}>
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
          {/* <PurchasesTableContainer setIsSelected={setIsSelected} /> */}
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
