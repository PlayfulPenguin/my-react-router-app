import { useState } from "react";




export default function signIn(){
    const [username, setusername]= useState('')

    
    return(
        <div>
            <input value={username} onChange={(n) => setusername(n.target.value)}> "admin"</input>
        </div>
    )


}