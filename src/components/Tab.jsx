// Importing necessary modules and state
import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  // Using the snapshot from Valtio to access the state
  const snap = useSnapshot(state);

  // Setting the styles for the active tab
  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 } // If it's a filter tab and it's active, set the background color to the state color and opacity to 0.5
      : { backgroundColor: 'transparent', opacity: 1 }; // If it's not a filter tab or it's not active, set the background color to transparent and opacity to 1

  return (
    <div
      key={tab.name} // Setting the key to the tab name
      className={`tab-btn ${
        isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'
      }`} // Setting the class name based on whether it's a filter tab or not
      onClick={handleClick} // Setting the click handler
      style={activeStyles} // Applying the active styles
    >
      <img
        src={tab.icon} // Setting the source of the image to the tab icon
        alt={tab.name} // Setting the alt text to the tab name
        className={`${
          isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'
        }`} // Setting the class name based on whether it's a filter tab or not
      />
    </div>
  );
};

export default Tab;
