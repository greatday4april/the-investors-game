import React, {useEffect} from 'react';
import {Card, CardBody} from 'reactstrap';
import FalconCardHeader from '../common/FalconCardHeader';
import EventSummary from '../event/EventSummary';
export const NewsItemsTable = ({newsItems, fetchNewsItems}) => {
    useEffect(() => {
        fetchNewsItems();
      }, [fetchNewsItems]);
    return (<Card className="mb-3 mb-lg-0">
        <FalconCardHeader title="News" />
            <CardBody className="fs--1">
                {newsItems.map(({...rest}, index) => (
                    <EventSummary {...rest} divider={newsItems.length !== index + 1} key={index}>
                    </EventSummary>
                ))}
            </CardBody>
    </Card>)
};

