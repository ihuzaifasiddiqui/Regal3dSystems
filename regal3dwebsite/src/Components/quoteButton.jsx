import React from 'react';
import { Link } from 'react-router';

const QuoteButton = ({ onClick, label }) => {
    return (
        <Link to="/contact" className="inline-block">
          <button className="bg-blue-600 w-30 font-josefin text-sm text-white px-12 py-4 rounded-full font-light items-center shadow-md hover:bg-white hover:cursor-pointer hover:text-black hover:font-medium hover:stroke-black">
            Get a Quote
          </button>
        </Link>
    );
};

export default QuoteButton;