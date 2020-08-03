import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Collapse,
  Card,
  CardBody,
  Badge,
  Nav,
  Navbar,
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ListGroup from 'reactstrap/es/ListGroup';
import ListGroupItem from 'reactstrap/es/ListGroupItem';
import is from 'is_js';
import classNames from 'classnames';
import Logo from '../navbar/Logo';
import NavbarVerticalMenu from '../navbar/NavbarVerticalMenu';
import ToggleButton from '../navbar/ToggleButton';
import AppContext from '../../context/Context';
import Flex from '../common/Flex';
import routes from '../../packs/routes';
import { navbarBreakPoint } from '../../packs/config';
import ChatThread from '../chat/sidebar/ChatThread';
import ChatContext from '../../context/Context';
import { isIterableArray } from '../../helpers/utils';
import SidebarSearchBox from '../sidebar/SidebarSearchBox';
import FalconCardHeader from '../common/FalconCardHeader';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import bgNavbarImg from '../../../assets/images/generic/bg-navbar.png';
import SidebarItem from  './SidebarItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import totalOrder from '../../data/dashboard/totalOrder';

const SidebarVertical = ({ navbarStyle }) => {
  const navBarRef = useRef(null);

  const { showBurgerMenu, isNavbarVerticalCollapsed, setIsNavbarVerticalCollapsed } = useContext(AppContext);
  const { threads } = useContext(ChatContext);

  const HTMLClassList = document.getElementsByTagName('html')[0].classList;
  //Control Component did mount and unmounted of hover effect
  if (isNavbarVerticalCollapsed) {
    HTMLClassList.add('navbar-vertical-collapsed');
  }

  useEffect(() => {
    if (is.windows()) {
      HTMLClassList.add('windows');
    }
    if (is.chrome()) {
      HTMLClassList.add('chrome');
    }
    if (is.firefox()) {
      HTMLClassList.add('firefox');
    }
    return () => {
      HTMLClassList.remove('navbar-vertical-collapsed-hover');
    };
  }, [isNavbarVerticalCollapsed, HTMLClassList]);

  //Control mouseEnter event
  let time = null;
  const handleMouseEnter = () => {
    if (isNavbarVerticalCollapsed) {
      time = setTimeout(() => {
        HTMLClassList.add('navbar-vertical-collapsed-hover');
      }, 100);
    }
  };

  return (
    <Navbar
      expand={navbarBreakPoint}
      className={classNames('navbar-vertical w-25 ml-2', {
        [`navbar-${navbarStyle}`]: navbarStyle !== 'transparent',
      })}
    >
      <Flex align="center">
        <Logo at="navbar-vertical" width={40} />
      </Flex>
      {/* 
      <Collapse
        navbar
        isOpen={showBurgerMenu}
        className="scrollbar justify-content-center align-items-center"
        innerRef={navBarRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => {
          clearTimeout(time);
          HTMLClassList.remove('navbar-vertical-collapsed-hover');
        }}
      > */}
      <Nav className="justify-content-center rounded-pill ">
        <div style={{border:"solid 1px white", padding:"0px 1.25px",backgroundColor:"white", borderRadius: "0.375rem"}}>
          <SidebarSearchBox style={{ alignself: 'center' }}  />
          <SidebarItem data={totalOrder} />
          <SidebarItem data={totalOrder} />
          <SidebarItem data={totalOrder} />
          <SidebarItem data={totalOrder} />
        </div>
      </Nav>
      {/* </Collapse> */}
    </Navbar>
  );
};

// NavbarVertical.protoTypes = {
//   navbarStyle: PropTypes.string,
// };

// NavbarVertical.defaultProps = {
//   navbarStyle: 'transparent',
// };

export default SidebarVertical;
