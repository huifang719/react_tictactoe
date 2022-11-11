import GameBoard from './components/GameBoard';
import './App.css';
import { Row } from 'react-bootstrap';
import Quote from './components/Quote';
import GOT from './video/GOT.mp3'
import ReactAudioPlayer from 'react-audio-player';
function App() {
  return (
    <div className="App">
      <ReactAudioPlayer
        src={GOT}
        autoPlay={true}
        loop
      />
      <Row className='text-center mt-2'>
        <h1 style={{fontFamily: "'Dancing Script', cursive",color:"white", fontWeight:"bold",marginTop:"1rem"}}>Tic Tac Toe</h1>
        <Quote />
      </Row>
      <main>
      <GameBoard />
      </main>
    </div>
  );
}

export default App;
