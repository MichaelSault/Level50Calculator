import logo from './logo.svg';
import TextField  from '@mui/material/TextField';
import './App.css';

const mathCatch = 10000;
const mathEgg = 10000;
const mathSpin = 10000;
const mathRaids = 10000;


function App() {
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
          InputLabelProps={{
            shrink: true,
          }}
        />

        <h3>Catch <b>{mathCatch}</b> Pokémon <br/>
        Hatch <b>{mathEgg}</b> Eggs <br/>
        Spin <b>{mathSpin}</b> Pokéstops <br/>
        Complete <b>{mathRaids}</b> 5 Star Raids</h3>


      </header>
    </div>
  );
}

export default App;
