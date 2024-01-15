import React from 'react'


export default function Card(props) {
  return (
    <>
      <div className="col-md-4 col-sm-12 my-3">
      <div className="skills-Card">
        <div className="p-3">
          <h2 className='skills-img'>{props.heading}</h2>
          <h4 className='percent-text text-center'>{props.progress}</h4>
          <hr/>
        </div>
      </div>
      </div>
    </>
  )
}
