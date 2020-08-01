import { connect } from 'react-redux';
import { incrementTimeAction } from '../../actions/warp_time_actions';
import { FRAMES_PER_SEC } from "../../utils/constants"

import React, { useEffect } from 'react';
const WarpedTime = ({ warpedTime, incrementWarpedTime }) => {
    //didMount

    useEffect(() => {
        const id = requestAnimationFrame(incrementWarpedTime);
        return () => cancelAnimationFrame(id);
    }, [incrementWarpedTime]);

    return (<p className='nav-link'> {`Current Time: ${warpedTime.format("dddd, MMMM Do YYYY, h:mm a")}`}</p >) // Todo : change style !!!
};

const mapStateToProps = (state) => ({
    warpedTime: state.warpedTime
});

const mapDispatchToProps = (dispatch) => {
    let lastTime = 0;
    const incrementWarpedTime = (time) => {
        const timeDelta = time - lastTime;
        if (timeDelta >= 1000 / FRAMES_PER_SEC) {
            dispatch(incrementTimeAction(timeDelta));
            lastTime = time;
        }
        requestAnimationFrame(incrementWarpedTime);
    }
    return { incrementWarpedTime: incrementWarpedTime };
};

const WarpedTimeContainer = connect(mapStateToProps, mapDispatchToProps)(WarpedTime);

export default WarpedTimeContainer;