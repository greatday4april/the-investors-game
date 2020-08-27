import React from 'react';
import { Form, Input,Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarSearchBox = () => (
  // <Row className=" border-bottom border-light p-0 py-1 pl-1  bg-white">
  //   <Form className="mr=2">
  //     <Input
  //       type="search"
  //       placeholder="Search..."
  //       aria-label="Search"
  //       className=" align-items-center search-input mr-2"
  //     />
  //     {/* <FontAwesomeIcon icon="search" className="position-absolute text-200 search-box-icon" /> */}
  //   </Form>
  // </Row>
  <div style={{ margin: "1rem 0rem"}}>
    <Row className="border-bottom border-light border-2x px-2 py-2 rounded-soft-top"
          style={{display: "contents"}}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 3C14.6421 3 18 6.35786 18 10.5C18 12.2101 17.4276 13.7866 16.464 15.0483L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3466 20.0676 18.7794 20.0953 18.3871 19.7903L18.2929 19.7071L15.0483 16.464C13.7866 17.4276 12.2101 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3ZM10.5 5C7.46243 5 5 7.46243 5 10.5C5 13.5376 7.46243 16 10.5 16C11.8511 16 13.0885 15.5128 14.0459 14.7045C14.091 14.5536 14.1738 14.412 14.2929 14.2929C14.412 14.1738 14.5536 14.091 14.7041 14.0446C15.5128 13.0885 16 11.8511 16 10.5C16 7.46243 13.5376 5 10.5 5Z" fill="#7E84A3" />
      </svg>

      <Form >
        <Input type="search" placeholder="Search..." className="rounded-pill px-3 side-bar-search-input"  />
      </Form>
    </Row>
  </div>
);

export default SidebarSearchBox;
