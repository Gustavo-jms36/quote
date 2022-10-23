import React from "react";
import { useState } from "react";
import quotes from '../quotes.json'

const Phrase = () => {

    console.log(quotes);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const [index, setIndex] = useState(randomIndex);
  
    const changeQuote = () => {
      const anotherRandom = Math.floor(Math.random() * quotes.length);
      setIndex(anotherRandom);
    };

    const colors = [
        "#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#a16f12", "#218735", "#3d1380", "#72295c", "#b00029", "#b94921", "#217d87", "#852187", "#872154", "#6b2e2e"
      ];
      const randomColorIndex = Math.floor(Math.random() * colors.length);
      document.body.style = `background: ${colors[randomColorIndex]}`;
      

    return (
        <div className='quote' style={{ color: colors[randomColorIndex] }}>
            <div className='info'>
            <i class="fa-solid fa-quote-left"></i>
            <h1 className='title'>           
                {quotes[index].quote}
                
            </h1>
            </div>
            <h2 className='author'>
                {quotes[index].author}
            </h2>
            <div onClick={changeQuote}>
            <i className="fa-solid fa-circle-arrow-right next"></i>
            </div>
        </div>
    );
};

export default Phrase;
