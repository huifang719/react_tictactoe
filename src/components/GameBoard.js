import { useState } from "react"
import { Col, Row, Container } from "react-bootstrap"

function GameBoard() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  return (
    <Container style={{height:'300px', width:"300px", backgroundColor:"lightgray"}}>
      <Row>
        <Col style={{height:'100px', width:"100px"}}></Col>
        <Col style={{height:'100px', width:"100px",backgroundColor:"white" }}></Col>
        <Col style={{height:'100px', width:"100px"}}></Col>
      </Row>
      <Row>
        <Col style={{height:'100px', width:"100px",backgroundColor:"white"}}></Col>
        <Col style={{height:'100px', width:"100px"}}></Col>
        <Col style={{height:'100px', width:"100px", backgroundColor:"white"}}></Col>
      </Row> 
      <Row>
        <Col style={{height:'100px', width:"100px"}}></Col>
        <Col style={{height:'100px', width:"100px",backgroundColor:"white"}}></Col>
        <Col style={{height:'100px', width:"100px"}}></Col>
      </Row>
    </Container>
  )
}

export default GameBoard