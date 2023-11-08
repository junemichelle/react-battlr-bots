// YourBotArmy.js
import React from "react";

const YourBotArmy = ({ army, removeFromArmy }) => {
  const handleDischarge = (bot) => {
    removeFromArmy(bot.id);
  };

  const handleFrontendDischarge = (bot) => {
    removeFromArmy(bot.id);
  };

  return (
    <div className="container">
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt="bot avatar" />
          <h3>Name: {bot.name}</h3>
          <button
            className="btn btn-danger"
            onClick={() => handleDischarge(bot)}
          >
            Discharge
          </button>
          <button onClick={() => handleFrontendDischarge(bot)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
