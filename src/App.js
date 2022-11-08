import GameBoard from './components/GameBoard';
import './App.css';
import { Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Row className='text-center mt-2'>
        <h1>Tic Tac Toe</h1>
        <h4>Games of Throne edition</h4>
        <Quote />
      </Row>
      <main>
      <GameBoard />
      </main>
    </div>
  );
}

export default App;
