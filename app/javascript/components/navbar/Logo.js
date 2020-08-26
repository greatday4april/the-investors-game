import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/illustrations/falcon.png';

const Logo = ({ at, width, className, ...rest }) => {
  return (
    <Link
      to="/"
      className={classNames(
        'text-decoration-none',
        { 'navbar-brand text-left': at === 'navbar-vertical' },
        { 'navbar-brand text-left': at === 'navbar-top' }
      )}
      {...rest}
    >
      <div
        className={classNames(
          'd-flex',
          {
            'align-items-center py-3': at === 'navbar-vertical',
            'align-items-center': at === 'navbar-top',
            'flex-center font-weight-extra-bold fs-5 mb-4': at === 'auth'
          },
          className
        )}
      >
        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19.5" cy="19.5" r="19.5" fill="#F6AD55" />
        </svg>
        <span className="text-sans-serif logo" style={{fontWeight: 550}}>Investor's Game</span>
      </div>
    </Link>
  );
};

Logo.propTypes = {
  at: PropTypes.oneOf(['navbar-vertical', 'navbar-top', 'auth']),
  width: PropTypes.number,
  className: PropTypes.string
};

Logo.defaultProps = { at: 'auth', width: 58 };

export default Logo;
