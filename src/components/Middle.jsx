
import React from 'react'


  const newDate = new Date().toLocaleDateString();



export let Middle = () => {
    return (
      <button className="bg-secondary">
        <div className="bg-dark " >
        <div className="bg-light">
        <p>TODAY'S DATE ={newDate} </p>
        </div>     
        </div>  
        </button>
    )
}

export default Middle;
