import { Card } from 'react-bootstrap';
import { useState, useEffect, React } from 'react';
import Typewriter from 'typewriter-effect';

function Quote() {
  const [quote, setQuote] = useState({});
  const getQuote = () => {
    fetch('https://api.gameofthronesquotes.xyz/v1/random')
      .then((res) => res.json())
      .then((res) => {
        setQuote(res);
      });
  };
  useEffect(getQuote, []);

  return (
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            <Typewriter
              style={{ color: 'lightgrey', fontSize: '2rem' }}
              options={{
                strings: [quote.sentence],
                autoStart: true,
                loop: true,
              }}
            />
            {' '}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Quote;
