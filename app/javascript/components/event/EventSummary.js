import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Badge, Media } from 'reactstrap';
import Calendar from '../common/Calendar';
const EventBadge = ({ text, ...rest }) => <Badge {...rest}>{text}</Badge>;

EventBadge.propTypes = {
  ...Badge.propTypes,
  text: PropTypes.string.isRequired
};

const EventSummary = ({ date, title, badge, source_name, location, divider, news_url, children, text }) => {
  const calendar = {
    month: date.split(" ")[2],
    day: date.split(" ")[1]
  };
  return (
  <Media>
    <Calendar {...calendar} />
    <Media body className="position-relative pl-3">
      <h6 className="fs-0 mb-0">
        <a href={news_url}>{title}</a> {badge && <EventBadge {...badge} className="ml-1" />}
      </h6>
      <p className="ml-1">
        {text}
      </p>
      <p className="mb-1">
        Posted by{' '}
        <Link to="#!" className="text-700">
          {source_name}
        </Link>
      </p>
      {children}
      {location && <p className="mb-0">{location}</p>}
      {divider && <hr className="border-dashed border-bottom-0" />}
    </Media>
  </Media>
)};

EventSummary.propTypes = {
  calendar: PropTypes.shape(Calendar.propTypes),
  title: PropTypes.string,
  organizer: PropTypes.string,
  to: PropTypes.string,
  badge: PropTypes.shape(EventBadge.propTypes),
  location: PropTypes.string,
  children: PropTypes.node,
  divider: PropTypes.bool
};

EventSummary.defaultProps = { divider: true };

export default EventSummary;
