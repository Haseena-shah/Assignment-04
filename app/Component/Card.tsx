import React from 'react'
interface info{
  Name:string 
  Age: number
  Rollno: number
  Class: string
}
const Card = (props: info) => {
  return (
    <>
    <div className="bg-gradient-to-tr from-purple-100 to-violet-500 mt-5 border border-black-500 rounded-lg p-4 shadow-md m-auto max-w-xs">
     <div className='text-center '> <strong> STUDENT I.D CARD</strong></div>
    <h1><strong>Name: </strong>{props.Name}</h1> 
    <h1><strong>Age: </strong>{props.Age}</h1>
    <h1><strong>Roll.no: </strong>{props.Rollno}</h1>
    <h1><strong>Class: </strong>{props.Class}</h1>
    
    </div>
    
    </>
    
  )
}

export default Card