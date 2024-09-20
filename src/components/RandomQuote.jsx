import React, { useState, useEffect } from 'react';

const RandomQuote = () => {
  const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "Limit your 'always' and your 'nevers'.", author: "Amy Poehler" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
  ];

  const [quote, setQuote] = useState({});
  
  useEffect(() => {
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    };

    getRandomQuote();
  }, []);

  return (
    <div className="quote-container">
      <h2>Quote of the Day</h2>
      <p className="quote-text">"{quote.text}"</p>
      <p className="quote-author">- {quote.author}</p>
    </div>
  );
};

export default RandomQuote;
