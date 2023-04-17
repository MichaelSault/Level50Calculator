import logo from './logo.svg';
import TextField  from '@mui/material/TextField';
import './App.css';
import {useState} from 'react';

const level50= 176000000;

function App() {

  const [currentXP, setCurrentXP] = useState({value: 0});
  const [mathCatch, setMathCatch] = useState(0);
  const [mathEgg, setMathEgg] = useState(0);
  const [mathSpin, setMathSpin] = useState(0);
  const [mathRaids, setMathRaids] = useState(0);
  const [mathEvolve, setMathEvolve] = useState(0);

  function handleChange(event) {
    const {name, value} = event.target
    setCurrentXP({
      value: value
    });
    setMathCatch({
      value: Math.ceil((level50-currentXP.value)/100)
    });
    setMathEgg({
      value: Math.ceil((level50-currentXP.value)/500)
    });
    setMathSpin({
      value: Math.ceil((level50-currentXP.value)/100)
    });
    setMathRaids({
      value: Math.ceil((level50-currentXP.value)/10000)
    });
    setMathEvolve({
      value: Math.ceil((level50-currentXP.value)/1000)
    });
 };



  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Level 50 Calculator
        </h1>
        <TextField
          id="outlined-number"
          label="Current XP"
          type="number"
          placeholder='20000000'
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ input: { color: 'lightgrey' } }}

          onChange={handleChange}
          required
          autoFocus
        />

        {(currentXP.value > 0) && (
          <div>
            <br/>
            Complete <b>{mathRaids.value}</b> 5 Star Raids <br/>
            Evolve <b>{mathEvolve.value}</b> Pokémon<br/>
            Hatch <b>{mathEgg.value}</b> 2k Eggs <br/>
            Catch <b>{mathCatch.value}</b> Pokémon <br/>
            Spin <b>{mathSpin.value}</b> Pokéstops <br/>
          </div>
        )}

      </header>
    </div>
  );
}

export default App;
