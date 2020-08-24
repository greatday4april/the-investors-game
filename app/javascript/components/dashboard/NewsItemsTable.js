import React, { useEffect } from 'react';
import { CardBody } from 'reactstrap';
import EventSummary from '../event/EventSummary';
export const NewsItemsTable = ({ newsItems, fetchNewsItems }) => {
  useEffect(() => {
    fetchNewsItems();
  }, [fetchNewsItems]);
  return (
    <div>
      <div
        className="text-title"
        style={{ width: '58px', height: '24px', left: '529px', top: '713px', marginLeft: '30px', marginTop: '30px' }}
      >
        NEWS
      </div>
      <CardBody className="fs--1">
        {newsItems.map(({ ...rest }, index) => (
          <EventSummary {...rest} divider={newsItems.length !== index + 1} key={index}></EventSummary>
        ))}
      </CardBody>
    </div>
  );
};
