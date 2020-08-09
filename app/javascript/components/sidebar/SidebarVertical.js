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

const SidebarVertical = (props) => {
  const {navbarStyle, symbols} = props;
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

  const items = symbols.map((symbol) => <SidebarItem data={totalOrder} symbol={symbol} />)

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
      <Nav className="justify-content-center rounded-pill ">
        <div style={{ display: "block",
                    border:"solid 1px white", 
                    backgroundColor:"white", 
                    borderRadius: "0.375rem",
                    width: "100%",
                    padding: "0.5rem 1.25rem"}}>
          <SidebarSearchBox style={{ display: "contents",
                                    width: "100%" }}  />
          {items}
        </div>
      </Nav>
    </Navbar>
  );
};


export default SidebarVertical;
