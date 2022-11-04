import { useState } from "react";
import ReceiverChild from "../child/ReceiverChild";
import SenderChild from "../child/SenderChild";


const Parent=()=>{
    const[count,setCount]=useState(0)
    function IncNum()
    {
        setCount(count+1)
    }
    return(
        <>
                <SenderChild IncNum={IncNum}></SenderChild>
                <ReceiverChild count={count}></ReceiverChild>
        </>
    )
}
export default Parent;