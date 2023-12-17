import { useContext } from "react";
import { AuthContext } from "./_app";

function DataItem({ }) {
    const {data, setData, msg, setMsg } = useContext(AuthContext);
    return (
        
        data.map((item, index)=>(
        <div key={index} className="data">
            <div>{item.id}</div>
            <div>Bus Name: {item.busName}</div>
            <div>{item.ticketPrice}/-</div>
            <div>From: {item.source}</div>
            <div>To: {item.destination}</div>
            <button onClick={()=>{
                if(!msg){
                    setMsg("Data Deleted")
                    setData(prev=>{
                        const arr = [...prev]
                        console.log(index);
                        arr.splice(index,1)
                        return arr
                    })
                    setTimeout(()=>{
                        setMsg("")
                    },3000)
                }
            }}>Delete</button>
        </div>))
    );
}
export default DataItem;
