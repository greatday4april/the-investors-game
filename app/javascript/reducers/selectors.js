const selectedData = (ticksData, warpedTime) => {
    let data = ticksData.filter(tickData => Date.parse(tickData.tick_time) <= Date.parse(warpedTime));
    console.log(data);
    return data;
}
export default selectedData;