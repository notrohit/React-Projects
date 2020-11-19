import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const { text, name, job, image } = people[index]

  const nextPerson = ()=>{
    setIndex( index=>{
      let newIndex = index+1
      return newIndex
    })}

    const prevPerson=()=>{
    setIndex((index)=>{
      let newIndex=index-1
      return newIndex
    })}

  return <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img" /> 
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
      <h4 className="author">
        {name}
      </h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson} >
          <FaChevronLeft />
        </button>
         <button className="next-btn" onClick={nextPerson} >
          <FaChevronRight />
        </button>
         <button className="random-btn">
          suprise me
        </button> 
      </div>
    </div>
  </article>
};

export default Review;