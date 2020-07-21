import React from 'react';
import PropTypes from 'prop-types';
import NavbarDropdown from './NavbarDropdown';
import NavbarDropdownComponents from './NavbarDropdownComponents';
import {
  authenticationRoutes,
  chatRoutes,
  componentRoutes,
  ECommerceRoutes,
  emailRoutes,
  homeRoutes,
  pageRoutes,
  pluginRoutes,
  utilityRoutes,
  widgetsRoutes,
  kanbanRoutes
} from '../../packs/routes';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { breakpoints } from '../../helpers/utils';
import { topNavbarBreakpoint } from '../../packs/config';

const NavbarTopDropDownMenus = ({ setNavbarCollapsed }) => {
  const components = [componentRoutes, pluginRoutes, utilityRoutes];
  const pages = [pageRoutes, kanbanRoutes, widgetsRoutes, chatRoutes, emailRoutes, ECommerceRoutes];
  const handleSetNavbarCollapsed = () => {
    const windowWidth = window.innerWidth;
    windowWidth < breakpoints[topNavbarBreakpoint] && setNavbarCollapsed(false);
  };

  return (
    <>
      <NavbarDropdown
        title={homeRoutes.name}
        items={homeRoutes.children}
        handleSetNavbarCollapsed={handleSetNavbarCollapsed}
      />
      <NavbarDropdown title={pageRoutes.name} items={pages} handleSetNavbarCollapsed={handleSetNavbarCollapsed} />
      <NavbarDropdownComponents
        title={componentRoutes.name}
        items={components}
        handleSetNavbarCollapsed={handleSetNavbarCollapsed}
      />
      <NavbarDropdown
        title={authenticationRoutes.name}
        items={authenticationRoutes.children}
        handleSetNavbarCollapsed={handleSetNavbarCollapsed}
      />

      <NavItem onClick={handleSetNavbarCollapsed}>
        <NavLink className="nav-link" to="/documentation">
          Documentation
        </NavLink>
      </NavItem>
    </>
  );
};

NavbarTopDropDownMenus.propTypes = { setNavbarCollapsed: PropTypes.func.isRequired };

export default NavbarTopDropDownMenus;
