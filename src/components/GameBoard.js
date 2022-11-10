import { useEffect } from "react";
import { useState } from "react"
import { Col, Row, Container } from "react-bootstrap"
import './GameBoard.css'
import king from '../images/king.png'
import dragon from '../images/dragon.png'
import Image from 'react-bootstrap/Image'

function GameBoard() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(dragon)
  const [gameResult, setGameResult] = useState(null)
  const [scoreBoard, setScoreBoard] = useState({dragon: 0, king: 0})


  const winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  
  const handleCellChange = cellIndex =>{
    if (board[cellIndex] === "") {
      setBoard(board.map((value,index)=>{
            if(index === cellIndex) {
              return player
            } else {
              return value
            }
          }))
    }   
  }

  const switchPlayer = () => {
    if (player === dragon) {
      setPlayer(king)
    } else {
      setPlayer(dragon)
    }
  }

  const checkWinner = () => {
    winningPattern.forEach(pattern => {
      if (board[pattern[0]] === dragon && board[pattern[1]] === dragon && board[pattern[2]]=== dragon) {  
          setScoreBoard({...scoreBoard, dragon: scoreBoard['dragon'] + 1}) 
          setGameResult('House of the Dragon won')       
          gameReset()
          return
      } else if (board[pattern[0]] === king && board[pattern[1]] === king && board[pattern[2]]=== king){    
          setScoreBoard({...scoreBoard, king: scoreBoard['king'] + 1} )       
          setGameResult('The Night King won')
          gameReset() 
          return  
      } else {
          checkDraw()
      }
    })
  }
  
  const showResult =() =>{
    if (gameResult!== null) {
      alert(gameResult)
      setTimeout(setGameResult(null), 5000)
    } 
  }


  useEffect(showResult, [gameResult])
  useEffect(() => {
    switchPlayer();
    checkWinner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board]);

  const checkDraw = () => {
    if(board.includes('') === false && gameResult === null) {
      setGameResult("It's a draw")
      gameReset()
    }
  }
  const gameReset = () => {
    setBoard(["", "", "", "", "", "", "", "", ""])
  }

  const scoreReset = () => {
    setScoreBoard({dragon: 0, king: 0})
    setBoard(["", "", "", "", "", "", "", "", ""])
  }

  return (
    <Container>
    
      <Container style={{height:'300px', width:"300px", backgroundColor:"lightgray", marginTop:"1rem"}}>
        <Row>
          <Col onClick={()=>{handleCellChange(0)}} className="makeMove" style={{height:'100px', width:"100px"}}><Image fluid src={board[0]}></Image></Col>
          <Col onClick={()=>{handleCellChange(1)}} className="makeMove" style={{height:'100px', width:"100px",backgroundColor:"white" }}><Image fluid src={board[1]}></Image></Col>
          <Col onClick={()=>{handleCellChange(2)}} className="makeMove" style={{height:'100px', width:"100px"}}><Image fluid src={board[2]}></Image></Col>
        </Row>
        <Row>
          <Col onClick={()=>{handleCellChange(3)}} className="makeMove" style={{height:'100px', width:"100px",backgroundColor:"white"}}><Image fluid src={board[3]}></Image></Col>
          <Col onClick={()=>{handleCellChange(4)}} className="makeMove" style={{height:'100px', width:"100px"}}><Image fluid src={board[4]}></Image></Col>
          <Col onClick={()=>{handleCellChange(5)}} className="makeMove" style={{height:'100px', width:"100px", backgroundColor:"white"}}><Image fluid src={board[5]}></Image></Col>
        </Row> 
        <Row>
          <Col onClick={()=>{handleCellChange(6)}} className="makeMove" style={{height:'100px', width:"100px"}}><Image fluid src={board[6]}></Image></Col>
          <Col onClick={()=>{handleCellChange(7)}} className="makeMove" style={{height:'100px', width:"100px",backgroundColor:"white"}}><Image fluid src={board[7]}></Image></Col>
          <Col onClick={()=>{handleCellChange(8)}} className="makeMove" style={{height:'100px', width:"100px"}}><Image fluid src={board[8]}></Image></Col>
        </Row>
      </Container>
      <div className="d-flex justify-content-center gap-2 mt-1">
          <p className="align-self-end" style={{color:"white", fontWeight:"bold"}}>King: {scoreBoard['king']}</p>
          <button onClick={gameReset}>Game Reset</button>
          <button onClick={scoreReset}>Score Reset</button>
          <p className="align-self-end" style={{color:"white", fontWeight:"bold"}}>Dragon: {scoreBoard['dragon']}</p>
      </div>
    </Container>
  )
}

export default GameBoard