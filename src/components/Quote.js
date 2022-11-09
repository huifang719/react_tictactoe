import { Card } from "react-bootstrap"
import {useState, useEffect} from "react"
function Quote() {
  const [quote, setQuote ] = useState({})
  const getQuote = () => {
    fetch('https://api.gameofthronesquotes.xyz/v1/random')
    .then(res => res.json())
    .then(quote => {
      setQuote(quote)
    })
  } 
  useEffect(getQuote, [])
  
  return (
    <Card>
      <Card.Header>Game of Thrones</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            {quote.sentence}{' '}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  )

}

export default Quote