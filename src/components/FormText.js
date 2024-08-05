import React, {useState} from 'react'

export default function FormText(props) {

    const handleUpClick = ()=>{
        console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleDownClick = ()=>{
        console.log("Lower case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }

    const handleOnChange = (event)=> {
        console.log("On change");
        setText(event.target.value);
    }

    const clearing = ()=> {
        console.log("Clearing");
        setText('');
        props.showAlert("Text area cleared", "success");
    }

    const [text, setText] = useState("");
    // console.log(text);

  return (
    <>
        <div className="container" style={{color: props.mode ==='light' ? 'black': 'white'}}>
            <h1 className = "my-4">{props.heading}</h1>
            <div className="form-floating" data-bs-theme="grey">
                <textarea className="form-control" value= {text} onChange= {handleOnChange} style={{backgroundColor: props.mode ==='dark' ?'black': 'white', color: props.mode ==='light' ? 'black': 'white'}} placeholder="Leave a comment here" id="floatingTextarea" rows="8"></textarea>
            </div>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="container col-6">
                        <button className="btn btn-success my-4 mx-3" onClick = {handleUpClick}>
                            UPPER CASE
                        </button>
                        <button className="btn btn-success my-4" onClick = {handleDownClick}>
                            Lower CASE
                        </button>
                    </div>
                    <div className="container col6">
                        <button className="btn btn-success my-4 mx-3" onClick = {clearing}>
                            Clear
                        </button>
                    </div>
                </div>
            </div>
            {/* <button className="btn btn-primary my-4 mx-3" onClick = {handleUpClick}>
                UPPER CASE
            </button>
            <button className="btn btn-primary my-4" onClick = {handleDownClick}>
                Lower CASE
            </button>
            <button className="btn btn-primary my-4 mx-3" onClick = {clearing}>
                Clear
            </button> */}
        </div>

        <div className="container my-4 d-flex flex-column  align-content-center">
            <h2>
                Your Text Summary .
            </h2>
            <li>
                No of characters: {text.length}
            </li>
            <li>
                No of Words : {text.split(' ').length-1}
            </li>
            <li>
                Time Required : {0.008*60*(text.split(' ').length-1)} min and {Math.floor(0.008*60*60*(text.split(' ').length-1))} sec
            </li>

            <h3>Preview</h3>
            <em>{text.length>0 ? text : `Enter something to preview it here`}</em>
        </div>

    </>
  )
}
