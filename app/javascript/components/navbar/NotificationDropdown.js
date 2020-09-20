import { Card, Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import React, { useState } from 'react';
import { rawEarlierNotifications, rawNewNotifications } from '../../data/notification/notification';

// import FalconCardHeader from '../common/FalconCardHeader';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';
// import ListGroup from 'reactstrap/es/ListGroup';
// import ListGroupItem from 'reactstrap/es/ListGroupItem';
// import Notification from '../notification/Notification';
import classNames from 'classnames';
// import { isIterableArray } from '../../helpers/utils';
import useFakeFetch from '../../hooks/useFakeFetch';

const NotificationDropdown = () => {
  // State
  const { data: newNotifications, setData: setNewNotifications } = useFakeFetch(rawNewNotifications);
  const { data: earlierNotifications, setData: setEarlierNotifications } = useFakeFetch(rawEarlierNotifications);
  const [isOpen, setIsOpen] = useState(false);
  const [isAllRead, setIsAllRead] = useState(false);

  // Handler
  const handleToggle = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const markAsRead = e => {
    e.preventDefault();
    const updatedNewNotifications = newNotifications.map(notification => {
      if (notification.hasOwnProperty('unread')) {
        return {
          ...notification,
          unread: false
        };
      }
      return notification;
    });
    const updatedEarlierNotifications = earlierNotifications.map(notification => {
      if (notification.hasOwnProperty('unread')) {
        return {
          ...notification,
          unread: false
        };
      }
      setIsAllRead(true);
      return notification;
    });

    setNewNotifications(updatedNewNotifications);
    setEarlierNotifications(updatedEarlierNotifications);
  };

  return (
    // <Dropdown
    //   nav
    //   inNavbar
    //   isOpen={isOpen}
    //   toggle={handleToggle}
    //   onMouseOver={() => {
    //     let windowWidth = window.innerWidth;
    //     windowWidth > 992 && setIsOpen(true);
    //   }}
    //   onMouseLeave={() => {
    //     let windowWidth = window.innerWidth;
    //     windowWidth > 992 && setIsOpen(false);
    //   }}
    // >
    //   <DropdownToggle
    //     nav
    //     className={classNames('px-0', {
    //       'notification-indicator notification-indicator-primary': !isAllRead
    //     })}
    //   >
        <svg width="50" height="50" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg"    style={{ bottom: 0, top: '100%' }}>
          <path d="M9.40396 24.7071H4.78615C4.78615 24.7071 4.12646 22.1781 4.12646 19.4293C4.12646 16.6806 4.78615 14.1515 4.78615 14.1515H9.40396" fill="#B2EDA6" />
          <path d="M9.40396 25.3321H4.78615C4.50178 25.3321 4.25303 25.1402 4.18146 24.8649C4.15365 24.7587 3.50146 22.2262 3.50146 19.4293C3.50146 16.6324 4.15365 14.1002 4.18146 13.9937C4.25303 13.7184 4.50178 13.5265 4.78615 13.5265H9.40396C9.74896 13.5265 10.029 13.8065 10.029 14.1515C10.029 14.4965 9.74896 14.7765 9.40396 14.7765H5.28209C5.09959 15.6168 4.75115 17.4771 4.75115 19.4293C4.75115 21.3859 5.09959 23.2431 5.28209 24.0821H9.40396C9.74896 24.0821 10.029 24.3621 10.029 24.7071C10.029 25.0521 9.74928 25.3321 9.40396 25.3321Z" fill="#3C663E" />
          <path d="M28.5361 23.1159C28.2961 23.1159 28.0561 23.0243 27.8733 22.8412C27.5086 22.4768 27.5071 21.8865 27.8686 21.52C27.894 21.4934 28.698 20.6372 28.698 19.4297C28.698 18.2031 27.8815 17.3522 27.8733 17.3437C27.5071 16.9778 27.5071 16.384 27.8733 16.0181C28.2393 15.6518 28.833 15.6518 29.1989 16.0181C29.2552 16.074 30.573 17.4153 30.573 19.4297C30.573 21.444 29.2552 22.7853 29.1989 22.8412C29.0161 23.0243 28.7758 23.1159 28.5361 23.1159Z" fill="#3C663E" />
          <path d="M33.8142 26.9644C33.5392 26.9644 33.2667 26.8441 33.0814 26.6126C32.7589 26.2094 32.8233 25.6216 33.2245 25.2976C33.332 25.2094 35.6248 23.2798 35.6248 19.4298C35.6248 15.5276 33.2517 13.5835 33.2279 13.5644C32.8236 13.241 32.7583 12.651 33.0814 12.2466C33.4054 11.8423 33.9951 11.7769 34.3992 12.1001C34.5258 12.2013 37.4998 14.636 37.4998 19.4294C37.4998 24.2229 34.5258 26.6576 34.3992 26.7588C34.2261 26.8973 34.0195 26.9644 33.8142 26.9644Z" fill="#3C663E" />
          <path d="M31.2579 24.8882C30.9829 24.8882 30.7104 24.7679 30.5254 24.5363C30.2033 24.1338 30.2667 23.5469 30.6667 23.2226C30.7423 23.1597 32.2036 21.9101 32.2036 19.4297C32.2036 16.9379 30.7286 15.6882 30.6658 15.636C30.2692 15.3079 30.2086 14.7188 30.5333 14.3194C30.8583 13.9204 31.4408 13.8547 31.8429 14.1766C31.9342 14.2494 34.0786 16.0044 34.0786 19.4294C34.0786 22.8544 31.9345 24.6094 31.8429 24.6822C31.6704 24.821 31.4636 24.8882 31.2579 24.8882Z" fill="#3C663E" />
          <path d="M19.8959 38.3662C28.1227 38.3662 34.7919 36.9411 34.7919 35.1831C34.7919 33.4251 28.1227 32 19.8959 32C11.6691 32 5 33.4251 5 35.1831C5 36.9411 11.6691 38.3662 19.8959 38.3662Z" fill="#B8CBCD" />
          <path d="M21.5742 31.1663L9.07424 24.6326C9.07424 24.6326 8.41455 22.3985 8.41455 19.4298C8.41455 16.791 9.07424 14.227 9.07424 14.227L21.5742 7.62134" fill="#B2EDA6" />
          <path d="M21.5739 31.7913C21.4761 31.7913 21.3774 31.7685 21.2849 31.72L8.78486 25.1863C8.63486 25.1079 8.52299 24.9719 8.47486 24.8094C8.44674 24.7147 7.78955 22.4538 7.78955 19.4297C7.78955 16.7425 8.44111 14.1791 8.46893 14.071C8.51299 13.9007 8.62643 13.7566 8.78205 13.6744L21.282 7.0688C21.587 6.90692 21.9655 7.02411 22.1267 7.32911C22.288 7.63442 22.1714 8.01255 21.8664 8.1738L9.61674 14.6469C9.45549 15.3563 9.03924 17.3844 9.03924 19.4294C9.03924 21.7154 9.44455 23.5582 9.60705 24.2057L21.8633 30.6122C22.1692 30.7722 22.2877 31.1497 22.1277 31.4557C22.0167 31.6691 21.7989 31.7913 21.5739 31.7913Z" fill="#3C663E" />
          <path d="M25.6249 19.4297C25.6249 25.9881 24.0743 31.3047 22.1612 31.3047C20.2484 31.3047 18.6978 25.9881 18.6978 19.4297C18.6978 12.8713 20.0837 7.55469 21.9965 7.55469C23.9093 7.55469 25.6249 12.8713 25.6249 19.4297Z" fill="#B2EDA6" />
          <path d="M22.1612 31.9297C19.4771 31.9297 18.0728 25.6413 18.0728 19.4297C18.0728 13.4094 19.3006 6.92969 21.9965 6.92969C24.659 6.92969 26.2499 13.2853 26.2499 19.4297C26.2499 25.6413 24.8456 31.9297 22.1612 31.9297ZM21.9965 8.17969C20.8799 8.17969 19.3228 12.4597 19.3228 19.4297C19.3228 26.2972 21.004 30.6797 22.1612 30.6797C23.3187 30.6797 24.9999 26.2972 24.9999 19.4297C24.9999 12.6666 23.1921 8.17969 21.9965 8.17969Z" fill="#3C663E" />
          <path d="M9.21645 16.7384H4.78613C4.26832 16.7384 3.84863 16.3187 3.84863 15.8009C3.84863 15.2831 4.26832 14.8634 4.78613 14.8634H8.97988L19.1852 9.36779C19.6408 9.12279 20.2096 9.29279 20.4552 9.74873C20.7005 10.2047 20.5302 10.7731 20.0743 11.0187L9.66082 16.6265C9.52426 16.7 9.37145 16.7384 9.21645 16.7384Z" fill="white" />
          <path opacity="0.2" d="M19.2993 29.259C19.153 29.259 19.0049 29.225 18.8661 29.1525L8.98801 23.9956H4.78613C4.26832 23.9956 3.84863 23.5759 3.84863 23.0581C3.84863 22.5403 4.26832 22.1206 4.78613 22.1206H9.21801C9.36895 22.1206 9.51801 22.1572 9.65176 22.2269L19.7339 27.49C20.193 27.7297 20.3708 28.2959 20.1311 28.755C19.9636 29.0756 19.6371 29.259 19.2993 29.259Z" fill="#3C663E" />
          <path d="M19.2998 16.4609C20.9395 16.4609 22.2686 17.79 22.2686 19.4297C22.2686 21.0694 20.9395 22.3984 19.2998 22.3984" fill="white" />
          <path d="M19.2998 23.0234C18.9548 23.0234 18.6748 22.7434 18.6748 22.3984C18.6748 22.0534 18.9548 21.7734 19.2998 21.7734C20.5923 21.7734 21.6436 20.7222 21.6436 19.4297C21.6436 18.1372 20.5923 17.0859 19.2998 17.0859C18.9548 17.0859 18.6748 16.8059 18.6748 16.4609C18.6748 16.1159 18.9548 15.8359 19.2998 15.8359C21.2814 15.8359 22.8936 17.4481 22.8936 19.4297C22.8936 21.4113 21.2817 23.0234 19.2998 23.0234Z" fill="#3C663E" />
          <path d="M22.1037 32.2422C21.7712 32.2422 21.4443 32.1585 21.1321 31.9931L8.98771 25.6447H4.78615C4.35959 25.6447 3.98678 25.3566 3.87896 24.9438C3.85084 24.8356 3.18896 22.266 3.18896 19.4294C3.18896 16.5928 3.85084 14.0231 3.87896 13.915C3.98678 13.5022 4.35959 13.2141 4.78615 13.2141H8.98396L20.7902 6.97501C20.9315 6.88251 21.0771 6.8072 21.2243 6.75126C21.2343 6.7472 21.244 6.74345 21.254 6.7397C21.4783 6.65814 21.709 6.61658 21.939 6.61658C24.9046 6.61658 26.5049 13.2178 26.5049 19.4291C26.5049 25.6003 25.1277 32.2422 22.1037 32.2422ZM5.53521 23.7697H9.21771C9.36896 23.7697 9.51803 23.8063 9.65209 23.8763L22.0049 30.3335C22.0362 30.35 22.0746 30.3669 22.1037 30.3669C22.8593 30.3669 24.6299 26.6456 24.6299 19.4294C24.6299 12.3247 22.7199 8.49189 21.939 8.49189C21.928 8.49189 21.9146 8.49533 21.9033 8.49908C21.9005 8.50001 21.8974 8.50126 21.8946 8.5022C21.8805 8.50751 21.8502 8.52095 21.8043 8.55251C21.774 8.57345 21.7424 8.59251 21.7099 8.6097L9.65459 14.9806C9.51959 15.0522 9.36928 15.0894 9.21646 15.0894H5.53584C5.34928 15.9991 5.06396 17.6781 5.06396 19.4297C5.06396 21.1869 5.34896 22.8622 5.53521 23.7697Z" fill="#3C663E" />
          <path d="M22.1036 31.9297C19.4195 31.9297 18.0151 25.6413 18.0151 19.4297C18.0151 13.4094 19.2429 6.92969 21.9389 6.92969C24.6014 6.92969 26.1923 13.2853 26.1923 19.4297C26.1923 25.6413 24.7879 31.9297 22.1036 31.9297ZM21.9389 8.17969C20.8223 8.17969 19.2651 12.4597 19.2651 19.4297C19.2651 26.2972 20.9464 30.6797 22.1036 30.6797C23.2611 30.6797 24.9423 26.2972 24.9423 19.4297C24.9423 12.6666 23.1345 8.17969 21.9389 8.17969Z" fill="#3C663E" />
          <path d="M9.07424 24.6326C9.07424 24.6326 8.41455 22.3985 8.41455 19.4297C8.41455 16.791 9.07424 14.2269 9.07424 14.2269" fill="#B2EDA6" />
          <path d="M9.07392 25.2576C8.80424 25.2576 8.55518 25.0816 8.47486 24.8094C8.44674 24.7148 7.78955 22.4538 7.78955 19.4298C7.78955 16.7426 8.44111 14.1791 8.46893 14.071C8.55486 13.7369 8.89455 13.5354 9.22986 13.6216C9.56424 13.7076 9.76549 14.0482 9.67955 14.3826C9.67299 14.4076 9.03955 16.9054 9.03955 19.4298C9.03955 22.2751 9.66736 24.4341 9.67361 24.4557C9.77142 24.7866 9.58236 25.1344 9.25111 25.2319C9.19236 25.2494 9.13267 25.2576 9.07392 25.2576Z" fill="#3C663E" />
        </svg>

      // </DropdownToggle>
      /* <DropdownMenu right className="dropdown-menu-card">
        <Card className="card-notification shadow-none" style={{ maxWidth: '20rem' }}>
          <FalconCardHeader className="card-header" title="Notifications" titleTag="h6" light={false}>
            <Link className="card-link font-weight-normal" to="#!" onClick={markAsRead}>
              Mark all as read
            </Link>
          </FalconCardHeader>
          <ListGroup flush className="font-weight-normal fs--1">
            <div className="list-group-title">NEW</div>
            {isIterableArray(newNotifications) &&
              newNotifications.map((notification, index) => (
                <ListGroupItem key={index} onClick={handleToggle}>
                  <Notification {...notification} flush />
                </ListGroupItem>
              ))}
            <div className="list-group-title">EARLIER</div>
            {isIterableArray(earlierNotifications) &&
              earlierNotifications.map((notification, index) => (
                <ListGroupItem key={index} onClick={handleToggle}>
                  <Notification {...notification} flush />
                </ListGroupItem>
              ))}
          </ListGroup>
          <div className="card-footer text-center border-top-0" onClick={handleToggle}>
            <Link className="card-link d-block" to="/pages/notifications">
              View all
            </Link>
          </div>
        </Card>
      </DropdownMenu> */
    // </Dropdown>
  );
};

export default NotificationDropdown;
