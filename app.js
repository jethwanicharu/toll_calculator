// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateToll, toggleTooltip } from './actions/tollActions';
import Map from './components/Map';
import Tooltip from './components/Tooltip';

const App = () => {
  const dispatch = useDispatch();
  const { route, showTooltip } = useSelector((state) => state.toll);

  const handleCalculateToll = () => {
    // Replace with actual TollGuru API integration
    // Example: dispatch(calculateToll(origin, destination));
    dispatch(calculateToll('Origin', 'Destination'));
  };

  const handleMapClick = () => {
    dispatch(toggleTooltip());
  };

  return (
    <div>
      <header id="tollCalculatorHeader">
        <h1>Toll Calculator</h1>
      </header>

      <button id="calculateToll" onClick={handleCalculateToll}>
        Calculate Toll
      </button>

      <Map onClick={handleMapClick} />

      {showTooltip && <Tooltip />}

      <div>
        <h2>Route Details</h2>
        <ul>
          <li>Distance: {route.distance} miles</li>
          <li>Estimated Time: {route.duration} minutes</li>
        </ul>

        <h2>Toll Information</h2>
        {route.tolls.map((toll, index) => (
          <div key={index}>
            <p>{toll.name}</p>
            <p>Cost: {toll.cost}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;