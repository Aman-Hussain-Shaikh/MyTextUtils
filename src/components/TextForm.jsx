import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("Uppercase was clicked: " + text)
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter Your Text Here ...")
    //text = "new text" - Wrong way to change the variable
    //setText("new text") - Correct way to change the variable

  return (
    <>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            <textarea className='form-control' value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick} >Convert to UpperCase</button>
    </>
  )
}
