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
    <Row className="border-bottom border-light border-2x px-2 py-2 bg-white rounded-soft-top"
          style={{display: "contents"}}>
      <Form >
        <Input type="search" placeholder="Search..." className="bg-white rounded-pill px-3 side-bar-search-input"  />
      </Form>
    </Row>
  </div>
);

export default SidebarSearchBox;
