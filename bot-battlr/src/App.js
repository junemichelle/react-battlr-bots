// App.js
import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

import './App.css';

function App() {
  const [army, setArmy] = useState([]);

  const addToArmy = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (botId) => {
    const updatedArmy = army.filter((bot) => bot.id !== botId);
    setArmy(updatedArmy);
  };

  return (
    <div className="App">
      <h1 className='text-center my-5'>Battle bots</h1>

      <div className='container'>
        
             <YourBotArmy army={army} removeFromArmy={removeFromArmy} />
         
      </div>

      <div>
        <BotCollection addToArmy={addToArmy} />
      </div>
    </div>
  );
}

export default App;
