import React, { useState, useEffect } from 'react';


const RandomQuote = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
  
    useEffect(() => {
      // Fetch random quote when the component mounts
      const fetchQuote = async () => {
        try {
          const response = await fetch('https://api.quotable.io/random');
          const data = await response.json();
          setQuote(data.content);
          setAuthor(data.author);
        } catch (error) {
          console.error('Error fetching quote:', error);
        }
      };
      
      fetchQuote();
    }, []); // Empty dependency array ensures it runs only once on component mount
  
    return (
      <div className="quote-container">
        <h2>Quote of the Day</h2>
        <p className="quote-text">"{quote}"</p>
        <p className="quote-author">- {author}</p>
      </div>
    );
}

export default RandomQuote
