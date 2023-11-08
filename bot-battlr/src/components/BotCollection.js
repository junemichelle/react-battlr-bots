
import React, { useEffect, useState } from 'react';

const BotCollection = ({ addToArmy }) => {
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

  const HandleAddToArmy = (bot) => {
    addToArmy(bot);
  }

  return (
    <div>
      <h2>Bot Collection</h2>
      <h3>Create your army!</h3>
      
      {bots.map((bot) => (
        <div key={bot.id} className='container'>
         
          
            <img src={bot.avatar_url} alt="bot avatar" />
            <h3>Name: {bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Bot class: {bot.bot_class}</p>
            <p>Catchphrase: {bot.catchphrase}</p>
            <button className= 'btn btn-success'onClick={() => HandleAddToArmy(bot)}>Enlist</button>
        
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
