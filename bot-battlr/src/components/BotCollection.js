import React, { useEffect, useState } from "react";

const BotCollection = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setBots(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {bots.map((bot) => (
        <div key={bot.id}>
          <card>
          <img src={bot.avatar_url} alt="bot avatar" />
          <h2>Name: {bot.name}</h2>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Bot class: {bot.bot_class}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          </card>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
