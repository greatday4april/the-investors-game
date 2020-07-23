import 'react-toastify/dist/ReactToastify.min.css';
import 'react-datetime/css/react-datetime.css';
import 'react-image-lightbox/style.css';

import Layout from '../../../app/javascript/layouts/Layout';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  loop(time) {

    if (time - this.lastTime > 1000) {
      this.props.store.dispatch({
        type: 'TICK',
        currentTime: time,
      });
      this.lastTime = time;
    }

    this.id = requestAnimationFrame(this.loop.bind(this));
  };

  componentDidMount() {
    this.lastTime = 0;
    requestAnimationFrame(this.loop.bind(this));
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.id);
  }

  render() {
    return (
      <Router>
        <Layout />
      </Router>
    );
  }
}

export default App;
