import { Collapse, Nav, NavItem, Navbar, Row } from 'reactstrap';
import React, { useContext, useState } from 'react';
import { navbarBreakPoint, topNavbarBreakpoint } from '../../packs/config';

import AppContext from '../../context/Context';
import CartNotification from './CartNotification';
import Logo from './Logo';
import NavbarTopDropDownMenus from './NavbarTopDropDownMenus';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';
import ProgressBarContainer from '../../components/dashboard/ProgressBarContainer';
import RealTimeAssetContainer from '../../components/dashboard/RealTimeAssetContainer';
import SearchBox from './SearchBox';
import SettingsAnimatedIcon from './SettingsAnimatedIcon';
import TopNavRightSideNavItem from './TopNavRightSideNavItem';
import classNames from 'classnames';

const NavbarTop = () => {
  const { showBurgerMenu, setShowBurgerMenu, isTopNav } = useContext(AppContext);
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  return (
    <Nav
      light
      className="navbar-glass fs--1 font-weight-semi-bold sticky-kit"
      style={{ backgroundColor: '#F9F4E9' }}
      expand={isTopNav ? topNavbarBreakpoint : navbarBreakPoint}
    >
      <div className="width-fill nav-t">
        <div></div>
        <div className='d-flex w-20'>
        <ProgressBarContainer /> 
        <SettingsAnimatedIcon />
        <NotificationDropdown />
        <ProfileDropdown />
        </div>
      </div>
       
      <div className='d-flex w-100'>
      <RealTimeAssetContainer />
      <Collapse navbar isOpen={navbarCollapsed} className="scrollbar">
        {!isTopNav ? (
          <Nav navbar className=" d-none d-lg-block">
            <NavItem>{/* <SearchBox /> */}</NavItem>
          </Nav>
        ) : (
          <Nav navbar>
            <NavbarTopDropDownMenus setNavbarCollapsed={setNavbarCollapsed} />
          </Nav>
        )}
      </Collapse>
      <TopNavRightSideNavItem />
      </div>
    </Nav>
  );
};

export default NavbarTop;
