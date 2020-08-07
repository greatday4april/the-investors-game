import React from 'react';
import { Form, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBox = () => (
  <Form inline className="search-box" style={{display: "contents"}}>
    <Input type="search" 
    placeholder="Search..." 
    aria-label="Search" 
    className="rounded-pill search-input" 
    />
    <FontAwesomeIcon icon="search" className="position-absolute text-400 search-box-icon" style={{margin: "0 0.75rem"}} />
  </Form>
);

export default SearchBox;
