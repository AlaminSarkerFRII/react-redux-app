import './App.css';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
     <h2>Welcome to redux</h2>
     <Counter/>
    </div>
  );
}

export default App;


// steps with react - redux

/**
 * 1. state -> count:0
 * 2.  actions --> increment,decrement, reset.
 * 3.1  reducers -> increment -> count -> count + 1.
 * 3.2  reducers -> decrement -> count -> count - 1.
 * 3.3  reducers -> reset -> count -> 0
 * 4. store
 */