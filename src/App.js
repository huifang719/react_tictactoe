import GameBoard from './components/GameBoard';
import './App.css';
import { Row } from 'react-bootstrap';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <Row className='text-center mt-2'>
        <h1>Tic Tac Toe</h1>
        <Quote />
      </Row>
      <main>
      <GameBoard />
      </main>
    </div>
  );
}

export default App;
