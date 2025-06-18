import './App.css';
import GridBoard from './components/GridBoard.jsx';
import NextBlock from './components/NextBlock.jsx';
import ScoreBoard from './components/ScoreBoard.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header>
      <GridBoard />
      <NextBlock />
      <ScoreBoard />
    </div>
  );
}

export default App;
