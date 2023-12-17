// tollActions.js
export const calculateToll = (origin, destination) => {
  // Replace with actual TollGuru API integration
  // Example: Call API to calculate toll based on origin and destination
  const fakeApiResponse = {
    distance: 100,
    duration: 120,
    tolls: [
      { name: 'Toll Booth 1', cost: 5 },
      { name: 'Toll Booth 2', cost: 8 },
    ],
  };

  return { type: 'CALCULATE_TOLL', payload: fakeApiResponse };
};

export const toggleTooltip = () => {
  return { type: 'TOGGLE_TOOLTIP' };
};