import { useState } from "react"
import { Link } from "react-router"


const Sign=()=>{
    const[name, setName] = useState('')
    const[message, setM] = useState('')
    const[mesList, setMessList] =  useState<string[]>([]);

    const submit =()=>{
        setMessList([...mesList,message])
        setName('')
        setM('')
        console.log(mesList)
    }
    const deleteMes =()=>{
        mesList.pop()
        const element = document.getElementById("message")
        element.remove()
        console.log(mesList)
    }


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
            <div> Does this message look right {name}?</div>
            <p className="info">
                {message}
            </p>
            <button className="not-a-button" onClick={submit}> Looks Good!
            </button>
            <div>
                {
                    mesList.length ==0
                    ?
                    <p className= "info">
                    no one has signed the guestbook yet...
                    </p>
                    :
                    <table>
                        <th>
                        </th>
                        <tbody>
                            {
                                mesList.map((m)=>(
                                    <tr id="message">
                                        <td>{m}</td>
                                        <button className="get-outta-here-but"
                                        onClick={deleteMes}>x</button>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }
            </div>
            </div>
        </div>
    )
}
export default Sign