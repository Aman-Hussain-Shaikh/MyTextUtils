import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("Uppercase was clicked: " + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    //copy text function
    const handleCopy=()=>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }

    //Remove extra spaces
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
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
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        <button className='btn btn-primary m-2' onClick={handleUpClick} >Convert to UpperCase</button>
        <button className='btn btn-primary m-2 ' onClick={handleLoClick} >Convert to LowerCase</button>
        <button className='btn btn-primary m-2 ' onClick={handleCopy} >Copy selected text</button>
        <button className='btn btn-primary m-2 ' onClick={handleExtraSpaces} >Remove Extra Spaces</button>

        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1>Your text summary</h1>
            <p> {text.split(" ").length} words and {text.length} characters. </p>
            {/*  -Count Words                        -Count characters */ }
            <p>{0.008 * text.split(" ").length} Minutes Read.</p>
            {/* -Expected time to read - Numbers of words          ( Multiply Both gives us reading time.)*/}

            <h1>Preview</h1>
            <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>

        </div>
        </div>
    </>
  )
}
