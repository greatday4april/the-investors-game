import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
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
  const {navbarStyle, symbols, stats, housingStats, transactions} = props;
  const shares = {};
  symbols.forEach(symbol => shares[symbol] = 0);
  transactions.forEach(transaction => {
    transaction.type == "BUY_STOCK" ? (shares[transaction.symbol] += transaction.share) : (shares[transaction.symbol] -= transaction.share)
  });
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
  
  const cities = Object.keys(props.housings);
  let newsymbols = symbols.concat(cities);
  const items = newsymbols.map((symbol) => <SidebarItem data={totalOrder} stats={stats[symbol]} symbol={symbol} share={shares[symbol]} />);
  items.push(<SidebarItem data={totalOrder} symbol="Account" />);
  

  // const items = symbols.map((symbol) => <SidebarItem data={totalOrder} stats={stats[symbol]} symbol={symbol} />);
  // items.push(<SidebarItem data={totalOrder} stats= {housingStats['NewYork']} symbol="NewYork" />);

  return (
    <Navbar 
      expand={navbarBreakPoint}
      
      className={classNames('navbar-vertical w-25 ml-2 ', {
        [`navbar-${navbarStyle}`]: navbarStyle !== 'transparent',
      })} style={{position: "absolute"}}
    >
      <Flex align="center">
        <Logo at="navbar-vertical" width={40} />
      </Flex>
      <Nav className="justify-content-center rounded-pill ">
        
        <div className="shadowed-card my-inv">
          
          <p className='pt-1r'>MY INVESTMENT</p>
          <svg width="59" height="52" viewBox="0 0 59 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M29.1715 51.6567C41.5117 51.6567 51.5154 49.1776 51.5154 46.1194C51.5154 43.0612 41.5117 40.582 29.1715 40.582C16.8313 40.582 6.82764 43.0612 6.82764 46.1194C6.82764 49.1776 16.8313 51.6567 29.1715 51.6567Z" fill="#B8CBCD" />
            <path d="M8.85929 15.2499C8.85929 15.2499 3.23429 11.4999 3.23429 7.74988C3.23429 2.92363 6.98429 1.65613 8.39054 3.53113C11.203 7.28113 0.89054 9.15613 1.35929 2.12488" stroke="#783741" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M55.7344 18.375H53.2003C52.5933 14.5256 50.5125 11.0363 47.4098 8.26219L47.8392 1.5L42.1101 4.71328C38.3859 2.8725 33.9783 1.80375 29.2495 1.80375C15.9173 1.80375 5.10889 10.2703 5.10889 20.7141C5.10889 26.5528 8.48857 31.7719 13.7972 35.2406L12.8611 37.6772C11.8397 40.3359 13.1672 43.3186 15.8254 44.3395C18.4837 45.3609 21.4664 44.0334 22.4878 41.3752L23.3775 39.0586C25.2576 39.4266 27.2236 39.6248 29.249 39.6248C31.1812 39.6248 33.0576 39.4416 34.8586 39.1064L35.73 41.3756C36.7514 44.0339 39.734 45.3614 42.3923 44.34C45.0506 43.3191 46.3781 40.3364 45.3567 37.6777L44.4764 35.3855C47.069 33.7322 49.2122 31.6645 50.7478 29.3123H55.7334C56.7689 29.3123 57.6084 28.4728 57.6084 27.4373V20.25C57.6094 19.2141 56.7698 18.375 55.7344 18.375Z" fill="#F6AD55" fill-opacity="0.8" />
            <path d="M35.0325 3.84375C37.8398 3.84375 40.5558 4.13719 43.1381 4.67578C39.2428 2.67141 34.5436 1.5 29.4844 1.5C16.0223 1.5 5.10938 9.79031 5.10938 20.0156C5.10938 20.6639 5.15391 21.3042 5.23922 21.9356C8.30578 11.5814 20.4759 3.84375 35.0325 3.84375Z" fill="white" />
            <g opacity="0.2">
              <path opacity="0.2" d="M50.4356 29.7624C44.0156 32.4375 38.8594 33.375 29.7187 32.9063C17.1694 32.2627 6.87891 25.1499 6.09984 15.3525C5.45906 17.0532 5.10938 18.8513 5.10938 20.7141C5.10938 26.5529 8.48906 31.7719 13.7977 35.2407L12.8616 37.6772C11.8402 40.336 13.1677 43.3186 15.8259 44.3396C18.4842 45.361 21.4669 44.0335 22.4883 41.3752L23.378 39.0586C25.2581 39.4266 27.2241 39.6249 29.2495 39.6249C31.1817 39.6249 33.0581 39.4416 34.8591 39.1064L35.7305 41.3757C36.7519 44.0339 39.7345 45.3614 42.3928 44.34C45.0511 43.3191 46.3786 40.3364 45.3572 37.6777L44.4769 35.3855C46.9022 33.8391 48.9267 31.9271 50.4356 29.7624Z" fill="#783741" />
              <path opacity="0.2" d="M50.1094 28.6875L55.7344 29.3123C56.7698 29.3123 57.6094 28.4728 57.6094 27.4373V25.875H51.5156C51.5156 25.875 51.0042 28.3645 50.1094 28.6875Z" fill="#783741" />
            </g>
            <path d="M21.9844 8.06246C24.2152 7.31293 26.6709 6.89856 29.25 6.89856C31.6491 6.89856 33.9417 7.25762 36.0459 7.91059" fill="#FFBAB0" />
            <path d="M21.9844 8.06246C24.2152 7.31293 26.6709 6.89856 29.25 6.89856C31.6491 6.89856 33.9417 7.25762 36.0459 7.91059" stroke="#783741" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M44.7188 19.7812C45.8837 19.7812 46.8281 18.8369 46.8281 17.6719C46.8281 16.5069 45.8837 15.5625 44.7188 15.5625C43.5538 15.5625 42.6094 16.5069 42.6094 17.6719C42.6094 18.8369 43.5538 19.7812 44.7188 19.7812Z" fill="#783741" />
            <path d="M32.7656 16.6561C32.7656 16.6561 31.3594 15.7186 29.4844 15.7186C27.6094 15.7186 26.2031 16.6561 26.2031 18.5311C26.2031 21.8124 33.2344 20.8749 33.2344 24.6249C33.2344 26.0311 32.2969 27.4374 29.9531 27.4374C27.6094 27.4374 26.2031 26.0311 26.2031 26.0311" stroke="#783741" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
            <path d="M29.4844 12.75V30.5625" stroke="#783741" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M39.3281 37.0406C36.1528 38.2946 32.5711 39 28.7812 39" stroke="#783741" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.1728 37.125C16.5413 36.1978 14.1624 34.9017 12.1411 33.3192" stroke="#783741" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M55.7344 18.375H53.2003C52.5933 14.5256 50.5125 11.0363 47.4098 8.26219L47.8392 1.5L42.1101 4.71328C38.3859 2.8725 33.9783 1.80375 29.2495 1.80375C15.9173 1.80375 5.10889 10.2703 5.10889 20.7141C5.10889 26.5528 8.48857 31.7719 13.7972 35.2406L12.8611 37.6772C11.8397 40.3359 13.1672 43.3186 15.8254 44.3395C18.4837 45.3609 21.4664 44.0334 22.4878 41.3752L23.3775 39.0586C25.2576 39.4266 27.2236 39.6248 29.249 39.6248C31.1812 39.6248 33.0576 39.4416 34.8586 39.1064L35.73 41.3756C36.7514 44.0339 39.734 45.3614 42.3923 44.34C45.0506 43.3191 46.3781 40.3364 45.3567 37.6777L44.4764 35.3855C47.069 33.7322 49.2122 31.6645 50.7478 29.3123H55.7334C56.7689 29.3123 57.6084 28.4728 57.6084 27.4373V20.25C57.6094 19.2141 56.7698 18.375 55.7344 18.375Z" stroke="#783741" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </div>
        
        <div className="shadowed-card w-100">
          <SidebarSearchBox style={{ display: "contents",
                                    width: "100%" }}  />

          <p className="nav-top-p">STOCK</p>
          {items}
        </div>
      </Nav>
    </Navbar>
  );
};


export default SidebarVertical;

// style = {{
//   display: "block",
//     border: "solid 1px white",
//       backgroundColor: "white",
//         borderRadius: "0.375rem",
//           width: "100%",
//             padding: "0.5rem 1.25rem"
// }}
