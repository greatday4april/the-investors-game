import React from 'react';
import { connect } from 'react-redux';
import { Progress } from 'reactstrap';
import { upgradeLevel } from '../../actions/level_actions';
import { LEVELS } from '../../utils/constants';
const ProgressBar = ({ level }) => (
  <svg width="40" height="50" viewBox="0 0 162 203" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M80.8519 203.001C125.505 203.001 161.704 195.261 161.704 185.713C161.704 176.165 125.505 168.426 80.8519 168.426C36.1986 168.426 0 176.165 0 185.713C0 195.261 36.1986 203.001 80.8519 203.001Z"
      fill="#B8CBCD"
    />
    <path
      d="M60.6387 185.857L46.0193 162.017L17.4946 168.227L51.0485 86.1128L94.1926 103.743L60.6387 185.857Z"
      fill="#F6E89A"
      stroke="#8D4520"
      stroke-width="6"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M105.326 185.857L119.947 162.017L148.47 168.227L114.917 86.1128L71.7725 103.743L105.326 185.857Z"
      fill="#F6E89A"
      stroke="#8D4520"
      stroke-width="6"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M117.172 127.376L99.425 125.932L86.4034 138.077L71.3599 128.551L54.1861 133.253L45.293 117.828L27.9004 114.01L27.1948 96.2188L13.5693 84.756L21.2123 68.6762L14.4734 52.1944L28.7162 41.505L30.409 23.7799L47.9849 20.9354L57.7209 6.02599L74.6064 11.676L90.1553 3L102.483 15.8486L120.283 15.394L125.226 32.5L141.199 40.3669L137.628 57.8121L148.114 72.2008L136.844 85.9874L139.443 103.602L123.058 110.57L117.172 127.376Z"
      fill="#B2EDA6"
      stroke="#783741"
      stroke-width="6"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M79.9934 112.095C103.413 112.095 122.398 93.1098 122.398 69.6904C122.398 46.271 103.413 27.2859 79.9934 27.2859C56.574 27.2859 37.5889 46.271 37.5889 69.6904C37.5889 93.1098 56.574 112.095 79.9934 112.095Z"
      fill="white"
      stroke="#8D4520"
      stroke-width="6"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M84.1425 90.5277V49.0142L71.1284 58.3099"
      stroke="#8D4520"
      stroke-width="6"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const mapStateToProps = (state) => ({
  level: state.level,
});
const mapDispatchToProps = (dispatch) => ({
  checkUpgradeCondition: setInterval(() => {
    dispatch(upgradeLevel());
  }, 1000),
});
const ProgressBarContainer = connect(mapStateToProps, mapDispatchToProps)(ProgressBar);
export default ProgressBarContainer;
