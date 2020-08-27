const preloadedStats = {
  NewYork: {
    'Number of Properties': '758,133',
    'Total Appreciation': '8.94%',
    'Average Annual Rate': '8.94%',
    'Owner to Renter': '2.9% / 97%',
    'Population Growth': '1.90T',
    'Job Growth': '-7.70%',
    'Dividend Yield': '0.70',
    'Average Volume': '46.17M',
    Health: 3,
    Dividend: 0,
    Value: 0,
    Future: 2,
    Past: 4,
  },
};

const housingStatsReducer = (state = preloadedStats, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default housingStatsReducer;
