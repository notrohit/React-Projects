import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ( {title, info} ) => {
  const [showInfo, setShowInfo] = useState(false)
  // can be done by a simple inline function at btn event listener
  const toggleQuestion = (showInfo)=>{
    setShowInfo(!showInfo)
  }
  return <article className="question">
    <header>
      <h4 >{title}</h4>
      {/* {console.log(title )} */}
      <button onClick={()=>toggleQuestion(showInfo)} className="btn">
      {/* Alternate method to call inline function and setState inline
       <button onClick={()=>setShowInfo(! showInfo)} className="btn"> */}
        {showInfo? <AiOutlineMinus /> : <AiOutlinePlus /> }
      </button>
    </header>
      { showInfo && <p>{info}</p>}

  </article>;
};

export default Question;
