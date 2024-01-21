import React, { useState } from 'react'

export default function Textform(props) {

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let newText = Text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = Text.toLowerCase();
        setText(newText)
    }
    const handleTiClick = () => {
        let newText = Text.toLowerCase();
        newText = newText.split(' ');
        for (var i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        newText = newText.join(' ');
        setText(newText)
    }
    const handleReSpace = () => {
        let newText = Text.split(' ').join('');
        setText(newText)
    }
    const handleCopy = () => {
        let newText = document.getElementById("myBox");;
        newText.select();
        newText.setSelectionRange(0,99999);
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text copied to clipboard!", "success")
    }

    const [Text, setText] = useState("")

    return (
        <>


            <div className="my-3" style={{color: props.mode==='dark'?"white":"black"}}>
                <h3>{props.heading}</h3>
                <textarea className=" my-2 form-control" id="myBox" rows="8" placeholder='Enter Text Here' value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?"white":"#555557", color: props.mode==='light'?"black":"#11caf0"}} ></textarea>
            </div>
            <button type="button" className="mx-2 btn btn-info" onClick={handleUpClick}>UpperCase</button>
            <button type="button" className="mx-2 btn btn-info" onClick={handleLoClick}>LowerCase</button>
            <button type="button" className="mx-2 btn btn-info" onClick={handleTiClick}>TitleCase</button>
            <button type="button" className="mx-2 btn btn-info" onClick={handleReSpace}>Remove Spaces</button>
            <button type="button" className="mx-2 btn btn-info" onClick={handleCopy}>Copy Text</button>


        </>
    )
}
