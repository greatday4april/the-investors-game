import { Nav, NavItem, NavLink, UncontrolledTooltip } from 'reactstrap';
import React, { useContext } from 'react';

import AppContext from '../../context/Context';
import CartNotification from './CartNotification';
import DailyCheckInModalContainer from '../dashboard/DailyCheckInModalContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LevelUpModalContainer from '../dashboard/LevelUpModalContainer';
import { Link } from 'react-router-dom';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';
import SettingsAnimatedIcon from './SettingsAnimatedIcon';
import WarpedTimeContainer from '../dashboard/WarpedTimeContainer';

const TopNavRightSideNavItem = () => {
  const { isTopNav } = useContext(AppContext);
  return (
    <Nav navbar className="navbar-nav-icons flex-row align-items-center w-48">
      {/* <NavItem>
        <SettingsAnimatedIcon />
        <CartNotification />

        <NotificationDropdown />
        <ProfileDropdown />
      </NavItem> */}
      <DailyCheckInModalContainer />
      <LevelUpModalContainer />
      <WarpedTimeContainer />

      {isTopNav && (
        <NavItem className="d-none d-md-block p-2 px-lg-0 cursor-pointer">
          <NavLink tag={Link} to="/changelog" id="changelog">
            <FontAwesomeIcon icon="code-branch" transform="right-6 grow-4" />
          </NavLink>
          <UncontrolledTooltip autohide={false} placement="left" target="changelog">
            Changelog
          </UncontrolledTooltip>
        </NavItem>
      )}
    </Nav>
  );
};

export default TopNavRightSideNavItem;
