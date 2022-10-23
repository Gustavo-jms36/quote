import React from 'react';
import quotes from '../quotes.json'
import { useState } from 'react'
import Phrase from './Phrase';

const QuoteBox = () => {
    return (
        <div>
            <Phrase />
        </div>
    );
};

export default QuoteBox;