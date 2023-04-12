import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("Uppercase was clicked: " + text)
        let newText = text.toUpperCase();
        setText(newText);
    }

    //copy text function
    const handleCopy=()=>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,999);
        navigator.clipboard.writeText(text.value);
    }

    //Remove extra spaces
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleLoClick =()=>{
        let newText = text.toLocaleLowerCase();
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
        <button className='btn btn-primary m-2' onClick={handleUpClick} >Convert to UpperCase</button>
        <button className='btn btn-primary m-2 ' onClick={handleLoClick} >Convert to LowerCase</button>
        <button className='btn btn-primary m-2 ' onClick={handleCopy} >Copy selected text</button>
        <button className='btn btn-primary m-2 ' onClick={handleExtraSpaces} >Remove Extra Spaces</button>

        <div className="container">
            <h1>Your text summary</h1>
            <p> {text.split(" ").length} words and {text.length} characters. </p>
            {/*  -Count Words                        -Count characters */ }
            <p>{0.008 * text.split(" ").length} Minutes Read.</p>
            {/* -Expected time to read - Numbers of words          ( Multiply Both gives us reading time.)*/}

            <h1>Preview</h1>
            <p>{text}</p>

        </div>
    </>
  )
}
