import { useState } from "react"
import { Link } from "react-router"


const Sign=()=>{
    const[name, setName] = useState('')
    const[message, setM] = useState('')

    return(
        <div className="space">
            <div>
            <label className="prompt">Name:</label>
            <input 
            type="text" 
            value={name} 
            required 
            onChange={(n)=> setName(n.target.value)}
            className="box" /> 
            <div className="space">

        </div>
        <div className="space">
            <label className="prompt">Message:</label>
            <textarea 
            required 
            value={message} 
            onChange={(m)=> setM(m.target.value)} 
            className="box">
             </textarea>
            </div>
        </div>

        <div>
            <div className="title"> Does this message look right {name}?</div>
            <p className="info">
                {message}
            </p>
            <button className="not-a-button"> Looks Good!
            </button>
            </div>
        </div>
    )
}
export default Sign