import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import React, { Fragment, useEffect, useState } from 'react';
import ActiveUsersBarChart from './ActiveUsersBarChart';
import ButtonIcon from '../common/ButtonIcon';
import FalconCardHeader from '../common/FalconCardHeader';
import loadable from '@loadable/component';
import { toast } from 'react-toastify';
import NewsItemsTableContainer from './NewsItemsTableContainer';
import TicksChart from './TicksChart';

const PurchasesTableContainer = loadable(() => import('./PurchasesTableContainer'));

const ActiveUsersMap = loadable(() => import('./ActiveUsersMap'));

const Dashboard = ({symbol}) => {
  // State
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    toast(
      <Fragment>
        Welcome to <strong>Falcon React</strong>!<br />
        ReactJS Dashboard and WebApp Template
      </Fragment>
    );
    // TODO clear cache and current price
  }, []);

  return (
    <Fragment>
      <NewsItemsTableContainer symbol={symbol} date={store.warpedTime?.format(MMDDYY)}/>
      <br />
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
