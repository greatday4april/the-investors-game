import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../../../app/javascript/layouts/Layout';

import 'react-toastify/dist/ReactToastify.min.css';
import 'react-datetime/css/react-datetime.css';
import 'react-image-lightbox/style.css';

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
