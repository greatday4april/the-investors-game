import React from 'react';

const CurrentTickPrice = (props) => {
  return <h4 className="text-white mb-0">{`Price: ${props.tickPrice}`}</h4>;
};
export default CurrentTickPrice;
