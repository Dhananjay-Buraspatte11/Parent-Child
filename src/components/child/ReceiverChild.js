import '../child/SenderChild.css'
const ReceiverChild = (props) => {

    return (
        <>
            <div className="Receiver-Child">
                <h3>Receiver Child</h3>
                <h1>{props.count}</h1>
            </div>
        </>
    )
}
export default ReceiverChild;