import { useState } from "react"
import { Col, Row, Container } from "react-bootstrap"
import './GameBoard.css'

function GameBoard() {
  const [board, setBoard] = useState(["", "X", "", "", "", "", "", "", ""]);

  return (
    <Container style={{height:'300px', width:"300px", backgroundColor:"lightgray"}}>
      <Row>
        <Col className="makeMove" value={board[0]} style={{height:'100px', width:"100px"}}></Col>
        <Col className="makeMove" value={board[1]} style={{height:'100px', width:"100px",backgroundColor:"white" }}></Col>
        <Col className="makeMove" value={board[2]} style={{height:'100px', width:"100px"}}></Col>
      </Row>
      <Row>
        <Col className="makeMove" value={board[3]} style={{height:'100px', width:"100px",backgroundColor:"white"}}></Col>
        <Col className="makeMove" value={board[4]} style={{height:'100px', width:"100px"}}></Col>
        <Col className="makeMove" value={board[5]} style={{height:'100px', width:"100px", backgroundColor:"white"}}></Col>
      </Row> 
      <Row>
        <Col className="makeMove" value={board[6]} style={{height:'100px', width:"100px"}}></Col>
        <Col className="makeMove" value={board[7]} style={{height:'100px', width:"100px",backgroundColor:"white"}}></Col>
        <Col className="makeMove" value={board[8]} style={{height:'100px', width:"100px"}}></Col>
      </Row>
    </Container>
  )
}

export default GameBoard