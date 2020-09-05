import React, { Fragment, createRef } from 'react';
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import Badge from 'reactstrap/es/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Row } from 'reactstrap';
import ButtonIcon from '../common/ButtonIcon';
import { Link } from 'react-router-dom';

import purchases from '../../data/dashboard/purchaseList';

const CustomTotal = ({ sizePerPage, totalSize, page, lastIndex }) => (
  <span>
    {(page - 1) * sizePerPage + 1} to {lastIndex > totalSize ? totalSize : lastIndex} of {totalSize} —{' '}
  </span>
);

const customerFormatter = customerName => (
  <Link to="pages/customer-details" className="font-weight-semi-bold">
    {customerName}
  </Link>
);

const badgeFormatter = status => {
  let color = '';
  let icon = '';
  let text = '';
  switch (status) {
    case 'success':
      color = 'success';
      icon = 'check';
      text = 'Success';
      break;
    case 'blocked':
      color = 'secondary';
      icon = 'ban';
      text = 'Blocked';
      break;
    default:
      color = 'warning';
      icon = 'stream';
      text = 'Pending';
  }
  return (
    <Badge color={`soft-${color}`} className="rounded-capsule">
      {text}
      <FontAwesomeIcon icon={icon} transform="shrink-2" className="ml-1" />
    </Badge>
  );
};

const amountFormatter = amount => <Fragment>${amount}</Fragment>;

const columns = [
  {
    dataField: 'symbol',
    text: 'STOCK',
    classes: 'border-0 align-middle order-data',
    headerClasses: 'border-0 order-header',
  },
  {
    dataField: 'price',
    text: 'PRICE',
    classes: 'border-0 align-middle fs-0 order-data',
    headerClasses: 'border-0 order-header',
  },
  {
    dataField: 'type',
    text: 'ACTION',
    classes: 'border-0 align-middle order-data',
    headerClasses: 'border-0 order-header',
  },
  {
    dataField: 'share',
    text: 'SHARE',
    classes: 'border-0 align-middle order-data',
    headerClasses: 'border-0 order-header',
  },
  {
    text: 'GAIN/LOSS',
    classes: 'border-0 align-middle fs-0 order-data',
    headerClasses: 'border-0 order-header',
  },
  {
    dataField: 'date',
    text: 'DATE',
    classes: 'border-0 align-middle order-data',
    headerClasses: 'border-0 order-header',
    align: 'left',
    headerAlign: 'left'
  }
];

const SelectRowInput = ({ indeterminate, rowIndex, ...rest }) => (
  <div className="custom-control custom-checkbox">
    <input
      className="custom-control-input"
      {...rest}
      onChange={() => {}}
      ref={input => {
        if (input) input.indeterminate = indeterminate;
      }}
    />
    <label className="custom-control-label" />
  </div>
);

const selectRow = onSelect => ({
  mode: 'checkbox',
  clickToSelect: false,
  selectionHeaderRenderer: ({ mode, ...rest }) => <SelectRowInput type="checkbox" {...rest} />,
  selectionRenderer: ({ mode, ...rest }) => <SelectRowInput type={mode} {...rest} />,
  headerColumnStyle: { border: 0, verticalAlign: 'middle' },
  selectColumnStyle: { border: 0, verticalAlign: 'middle' },
  onSelect: onSelect,
  onSelectAll: onSelect
});

const options = {
  custom: true,
  sizePerPage: 6,
  totalSize: purchases.length
};

const PurchasesTable = (props) => {
  const { setIsSelected } = props;
  console.log(props);
  let table = createRef();
  const handleNextPage = ({ page, onPageChange }) => () => {
    onPageChange(page + 1);
  };

  const handlePrevPage = ({ page, onPageChange }) => () => {
    onPageChange(page - 1);
  };

  const handleViewAll = ({ onSizePerPageChange }, newSizePerPage) => {
    onSizePerPageChange(newSizePerPage, 1);
  };

  const onSelect = () => {
    setImmediate(() => {
      setIsSelected(!!table.current.selectionContext.selected.length);
    });
  };

  return (
    <PaginationProvider pagination={paginationFactory(options)}>
      {({ paginationProps, paginationTableProps }) => {
        const lastIndex = paginationProps.page * paginationProps.sizePerPage;

        return (
          <Fragment>
            <div className="table-responsive">
              <BootstrapTable
                ref={table}
                bootstrap4
                keyField="id"
                data={props.transactions}
                columns={columns}
                // selectRow={selectRow(onSelect)}
                bordered={false}
                classes="table-dashboard table-sm fs--1 border-bottom border-200 mb-0 table-dashboard-th-nowrap"
                rowClasses="btn-reveal-trigger border-top border-200"
                headerClasses="bg-200 text-900 border-y border-200 bg-color"
                {...paginationTableProps}
              />
            </div>
          </Fragment>
        );
      }}
    </PaginationProvider>
  );
};

export default PurchasesTable;
