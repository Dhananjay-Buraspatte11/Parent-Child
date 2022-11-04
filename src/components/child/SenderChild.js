import React from "react";
import '../child/SenderChild.css'
const SenderChild = (props) => {

    return (
        < >
            <div className="sender-child">
                {/* <h1>{props.IncNum}</h1> */}
                <h3>Sender Child</h3>
                <button onClick={props.IncNum}>Click Me</button>
            </div>
        </>
    )
}
export default SenderChild;