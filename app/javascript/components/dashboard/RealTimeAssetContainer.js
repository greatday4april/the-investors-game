import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { ONE_DAY_DURATION } from '../../utils/constants';
import { fetchAllTicks } from '../../actions/tick_actions';
const RealTimeAsset = ({ asset, fetchAllTicks }) => {
  useEffect(() => {
    fetchAllTicks();
  }, [fetchAllTicks]);
  return (<div className="nav-link shadowed-card w-48 nav-top-card">
    <div>
    <p className="nav-top-p">Total Asset:</p>
    <p className="asset">{`$ ${asset}`}</p>
    </div>
    <svg width="60" height="85" viewBox="0 0 60 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.5" d="M29.8331 84.3093C46.2867 84.3093 59.625 81.0038 59.625 76.9262C59.625 72.8486 46.2867 69.5431 29.8331 69.5431C13.3795 69.5431 0.0412598 72.8486 0.0412598 76.9262C0.0412598 81.0038 13.3795 84.3093 29.8331 84.3093Z" fill="#B8CBCD" />
      <path d="M30.0344 21.4338C35.8986 21.4338 40.6525 16.8595 40.6525 11.2169C40.6525 5.57425 35.8986 1 30.0344 1C24.1702 1 19.4163 5.57425 19.4163 11.2169C19.4163 16.8595 24.1702 21.4338 30.0344 21.4338Z" fill="#F6E89A" stroke="#8D4520" stroke-width="2" stroke-miterlimit="10" />
      <path d="M30.0344 4.96249C35.5488 4.96249 40.0806 9.00811 40.6019 14.1831C40.6344 13.855 40.6525 13.5225 40.6525 13.1862C40.6525 7.54374 35.8988 2.96936 30.0344 2.96936C24.17 2.96936 19.4163 7.54311 19.4163 13.1862C19.4163 13.5225 19.4338 13.8544 19.4675 14.1831C19.9881 9.00811 24.52 4.96249 30.0344 4.96249Z" fill="white" />
      <path d="M33.4108 7.89307C34.4483 8.78619 35.1008 10.0837 35.1008 11.5281C35.1008 14.2206 32.8326 16.4031 30.0351 16.4031C27.237 16.4031 24.9683 14.2206 24.9683 11.5281C24.9683 10.1531 25.5601 8.91057 26.5126 8.02432" stroke="#8D4520" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M49.8907 41.815C50.7151 41.1193 51.2376 40.1093 51.2376 38.9831C51.2376 36.885 49.4382 35.1837 47.2182 35.1837H11.6251C9.40506 35.1837 7.60631 36.885 7.60631 38.9831C7.60631 40.1418 8.15631 41.1768 9.02068 41.8737C-7.87931 59.5131 4.74631 76.4337 29.4838 76.4337C54.2488 76.4337 66.8751 59.475 49.8907 41.815Z" fill="#F6AD55" fill-opacity="0.8" stroke="#783741" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path opacity="0.2" d="M35.7545 71.1231C11.0163 71.1231 -1.60927 54.2025 15.2914 36.5631C14.8282 36.19 14.4601 35.7175 14.2132 35.1837H12.5845C10.3651 35.1837 8.56572 36.885 8.56572 38.9831C8.56572 40.1418 9.11573 41.1768 9.98072 41.8737C-6.92052 59.5131 5.7051 76.4337 30.4438 76.4337C42.8151 76.4337 52.157 72.2018 56.2914 65.7637C51.3563 69.1156 44.2732 71.1231 35.7545 71.1231Z" fill="#783741" />
      <path d="M24.8293 34.5582C27.3657 34.5582 29.4218 32.502 29.4218 29.9657C29.4218 27.4293 27.3657 25.3732 24.8293 25.3732C22.2929 25.3732 20.2368 27.4293 20.2368 29.9657C20.2368 32.502 22.2929 34.5582 24.8293 34.5582Z" fill="#F6AD55" fill-opacity="0.8" stroke="#783741" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M34.0145 34.5588C36.5512 34.5588 38.6076 32.5024 38.6076 29.9657C38.6076 27.429 36.5512 25.3726 34.0145 25.3726C31.4778 25.3726 29.4214 27.429 29.4214 29.9657C29.4214 32.5024 31.4778 34.5588 34.0145 34.5588Z" fill="#F6AD55" fill-opacity="0.8" stroke="#783741" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M30.0344 21.4338C35.8986 21.4338 40.6525 16.8595 40.6525 11.2169C40.6525 5.57425 35.8986 1 30.0344 1C24.1702 1 19.4163 5.57425 19.4163 11.2169C19.4163 16.8595 24.1702 21.4338 30.0344 21.4338Z" stroke="#8D4520" stroke-width="2" stroke-miterlimit="10" />
      <path d="M10.0413 42.0587H48.7913" stroke="#783741" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12.5412 56.4337C12.5412 56.4337 10.6662 51.4337 17.5412 42.6837" stroke="#783741" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M41.9163 42.0587C41.9163 42.0587 54.3488 55.1837 41.9163 65.8087" stroke="#783741" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M22.5413 43.3087C22.5413 43.3087 21.2913 46.4337 21.2913 50.1837L22.5413 43.3087Z" fill="#F6AD55" fill-opacity="0.8" />
      <path d="M22.5413 43.3087C22.5413 43.3087 21.2913 46.4337 21.2913 50.1837" stroke="#783741" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    </div>);
};
const mapStateToProps = (state) => ({
  asset: state.asset,
});
const mapDispatchToProps = (dispatch) => ({
  fetchAllTicks: () => {
    dispatch(fetchAllTicks(ONE_DAY_DURATION));
  },
});
const RealTimeAssetContainer = connect(mapStateToProps, mapDispatchToProps)(RealTimeAsset);
export default RealTimeAssetContainer;
