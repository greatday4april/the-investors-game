import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import {
  ONE_DAY_DURATION,
  ONE_MONTH_DURATION,
  ONE_WEEK_DURATION,
  ONE_YEAR_DURATION,
  SIX_MONTHS_DURATION,
} from '../../utils/constants';
import React, { Fragment, useEffect, useState } from 'react';

import ActiveUsersBarChart from './ActiveUsersBarChart';
import FalconCardHeader from '../common/FalconCardHeader';
import NewsItemsTableContainer from './NewsItemsTableContainer';
import PaymentsLineChartContainer from '../../components/dashboard/PaymentsLineChartContainer';
import loadable from '@loadable/component';

const PurchasesTableContainer = loadable(() => import('./PurchasesTableContainer'));

const ActiveUsersMap = loadable(() => import('./ActiveUsersMap'));

const Dashboard = ({ symbol, warpedTime }) => {
  let [scale, setScale] = useState(ONE_DAY_DURATION);
  // State
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    // TODO clear cache and current price
  }, []);

  return (
    <Fragment>
      <NewsItemsTableContainer symbol={symbol} date={warpedTime?.format('MMDDYY')} />
      <div className="shadowed-card mb-2r">
        <PaymentsLineChartContainer period={scale} symbol={symbol} />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="time-scale">
          <Button color="link" size="sm" className="p-lr" onClick={() => setScale(ONE_DAY_DURATION)} autoFocus={true}>
            1 DAY
          </Button>
          <Button color="link" size="sm" className="p-lr" onClick={() => setScale(ONE_WEEK_DURATION)}>
            1 WEEK
          </Button>
          <Button color="link" size="sm" className="p-lr" onClick={() => setScale(ONE_MONTH_DURATION)}>
            1 MONTH
          </Button>
          <Button color="link" size="sm" className="p-lr" onClick={() => setScale(SIX_MONTHS_DURATION)}>
            6 MONTHS
          </Button>
          <Button color="link" size="sm" className="p-lr" onClick={() => setScale(ONE_YEAR_DURATION)}>
            1 YEAR
          </Button>
        </div>
      </div>
      <Card className="mb-3 shadowed-card">
        <FalconCardHeader title="ORDER HISTORY" light={false} className="bg-color"></FalconCardHeader>
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
