import { CloseButton, Fade } from '../components/common/Toast';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import DashboardLayout from './DashboardLayout';
import ErrorLayout from './ErrorLayout';
import React from 'react';

const Layout = () => {

  return (
    <Router fallback={<span />}>
      <Switch>
        <Route path="/errors" component={ErrorLayout} />
        <Route component={DashboardLayout} />
      </Switch>
      <ToastContainer transition={Fade} closeButton={<CloseButton />} position={toast.POSITION.BOTTOM_LEFT} />
    </Router>
  );
};

export default Layout;
