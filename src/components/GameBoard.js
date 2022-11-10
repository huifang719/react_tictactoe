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

  return (
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
  )
}

export default GameBoard