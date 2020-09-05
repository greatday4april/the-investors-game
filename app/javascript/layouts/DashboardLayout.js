import React, { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppContext from '../context/Context';
import Dashboard from '../components/dashboard/Dashboard';
import DashboardAlt from '../components/dashboard-alt/DashboardAlt';
import Footer from '../components/footer/Footer';
import NavbarTop from '../components/navbar/NavbarTop';
import ProductProvider from '../components/e-commerce/ProductProvider';
import PropTypes from 'prop-types';
import SidebarVerticalContainer from '../components/sidebar/SidebarVerticalContainer';
import { getPageName } from '../helpers/utils';
import loadable from '@loadable/component';

const DashboardRoutes = loadable(() => import('./DashboardRoutes'));

const DashboardLayout = ({ location }) => {
  const { isFluid } = useContext(AppContext);

  const symbol = 'AAPL';

  const isKanban = getPageName('kanban');

  useEffect(() => {
    DashboardRoutes.preload();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={isFluid || isKanban ? 'container-fluid' : 'container'}>
      <SidebarVerticalContainer />
      <ProductProvider>
        <div className="content">
          <NavbarTop />
          <Switch>
            <Route path="/" exact component={() => <Dashboard symbol={symbol} />} />
            <Route path="/dashboard-alt" exact component={DashboardAlt} />
            <DashboardRoutes />
          </Switch>
          {!isKanban && <Footer />}
        </div>
      </ProductProvider>
    </div>
  );
};

DashboardLayout.propTypes = { location: PropTypes.object.isRequired };

export default DashboardLayout;
