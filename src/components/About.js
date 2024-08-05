import React, {useState} from 'react'

export default function About(props) {

    const [myStyle, setMyStyle] = useState({
        color:'rgb(90, 90, 23)',
        backgroundColor: 'white',
    })

    const [btnBg, setBtnBg] = useState({
        color:'white',
        backgroundColor: 'rgb(90, 90, 23)'
    })

   const [btnText, setBtnText] =useState("Enable Dark Mode");

    const toggleStyle = ()=>{
        let newColor = myStyle.color === "rgb(90, 90, 23)"? "white" : "rgb(90, 90, 23)";
        let newBg = myStyle.backgroundColor === "white"? "rgb(90, 90, 23)" : "white";
        let newBtnBg = btnBg.backgroundColor === "rgb(90, 90, 23)"? "white" : "rgb(90, 90, 23)";
        let newBtnColor = btnBg.color === "white"? "rgb(90, 90, 23)" : "white";
        setMyStyle({
            color:newColor,
            backgroundColor:newBg
        })

        setBtnBg({
            color: newBtnColor,
            backgroundColor: newBtnBg
        })

        if(btnText === "Enable Dark Mode"){
            setBtnText("Enable Light Mode")
        } else {
            setBtnText("Enable Dark Mode")
        }
    } 

  return (
    <> 
    <hr/> <div className="m-3">
        <div className="container rounded-2 p-3" style = {myStyle}>
            <h2>
                About Us
            </h2>
            <div className="container" style = {myStyle}>
                <div className="accordion" id="accordionExample" style = {myStyle}>
                    <div className="accordion-item" style = {myStyle}>
                        <h2 className="accordion-header">
                        <button className="accordion-button" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                        </h2>
                        <div id="collapseOne" style = {myStyle} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                        </h2>
                        <div id="collapseTwo"style = {myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed"style = {myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                        </h2>
                        <div id="collapseThree"style = {myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <button className="btn " onClick={toggleStyle} style={btnBg}>
                    {btnText}
                </button>
            </div>
        </div>
        </div>
    </>
  )
}
