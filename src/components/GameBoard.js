import { useState } from "react"
import { Col, Row, Container } from "react-bootstrap"
import './GameBoard.css'

function GameBoard() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X")
  
  const handleCellChange = cellIndex =>{
    setBoard(board.map((value,index)=>{
      if(index === cellIndex) {
        return "X"
      } else {
        return value
      }
    }))
  }
  
  return (
    <Container style={{height:'300px', width:"300px", backgroundColor:"lightgray", marginTop:"1rem"}}>
      <Row>
        <Col onClick={()=>{handleCellChange(0)}} className="makeMove" style={{height:'100px', width:"100px"}}>{board[0]}</Col>
        <Col onClick={()=>{handleCellChange(1)}} className="makeMove" style={{height:'100px', width:"100px",backgroundColor:"white" }}>{board[1]}</Col>
        <Col onClick={()=>{handleCellChange(2)}} className="makeMove" style={{height:'100px', width:"100px"}}>{board[2]}</Col>
      </Row>
      <Row>
        <Col onClick={()=>{handleCellChange(3)}} className="makeMove" style={{height:'100px', width:"100px",backgroundColor:"white"}}>{board[3]}</Col>
        <Col onClick={()=>{handleCellChange(4)}} className="makeMove" style={{height:'100px', width:"100px"}}>{board[4]}</Col>
        <Col onClick={()=>{handleCellChange(5)}} className="makeMove" style={{height:'100px', width:"100px", backgroundColor:"white"}}>{board[5]}</Col>
      </Row> 
      <Row>
        <Col onClick={()=>{handleCellChange(6)}} className="makeMove" style={{height:'100px', width:"100px"}}>{board[6]}</Col>
        <Col onClick={()=>{handleCellChange(7)}} className="makeMove" style={{height:'100px', width:"100px",backgroundColor:"white"}}>{board[7]} </Col>
        <Col onClick={()=>{handleCellChange(8)}} className="makeMove" style={{height:'100px', width:"100px"}}>{board[8]}</Col>
      </Row>
    </Container>
  )
}

export default GameBoard