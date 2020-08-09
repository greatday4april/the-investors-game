import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import React, { Fragment, useEffect, useState } from 'react';
import ActiveUsersBarChart from './ActiveUsersBarChart';
import ButtonIcon from '../common/ButtonIcon';
import FalconCardHeader from '../common/FalconCardHeader';
import loadable from '@loadable/component';
import { toast } from 'react-toastify';
import NewsItemsTableContainer from './NewsItemsTableContainer';
import { 
  ONE_WEEK_DURATION, 
  ONE_DAY_DURATION, 
  ONE_MONTH_DURATION,
  SIX_MONTHS_DURATION,
  ONE_YEAR_DURATION 
} from "../../utils/constants";
import TicksChart from './TicksChart';

const PurchasesTable = loadable(() => import('./PurchasesTable'));
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
      <PaymentsLineChartContainer period={scale} symbol={symbol} />
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Button color="link" size="sm" className="ml-4 mb-2" style={{ fontSize: '1.44rem' }} onClick={()=> setScale(ONE_DAY_DURATION)}>
        1 DAY
          </Button>
      <Button color="link" size="sm" className="ml-4 mb-2" style={{ fontSize: '1.44rem' }} onClick={()=> setScale(ONE_WEEK_DURATION)}>
        1 WEEK
          </Button>
      <Button color="link" size="sm" className="ml-4 mb-2" style={{ fontSize: '1.44rem' }} onClick={() => setScale(ONE_MONTH_DURATION)}>
        1 MONTH
          </Button>
      <Button color="link" size="sm" className="ml-4 mb-2" style={{ fontSize: '1.44rem' }} onClick={() => setScale(SIX_MONTHS_DURATION)}>
        6 MONTHS
          </Button>
      <Button color="link" size="sm" className="ml-4 mb-2" style={{ fontSize: '1.44rem' }} onClick={() => setScale(ONE_YEAR_DURATION)}>
        1 YEAR
          </Button>
      </div>
      <NewsItemsTableContainer symbol={symbol} date={store.warpedTime?.format(MMDDYY)}/>
      <br />
      <TicksChart symbol={symbol} />
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
