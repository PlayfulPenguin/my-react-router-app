import Button from "~/welcome/button"
import Nav from "./nav"

import Profile from "./profile"
import { useState } from "react"
import {useNavigate } from "react-router"



export default function Contact(){
    const [contact,setContact] = useState('')
    const goto = useNavigate()
    const submit=()=>{
        if (contact.trim()){
            goto("./contact/${contact}")
        }

    }
   
    return(
        <div className="image">
            <div className="overlay">
                <Nav/>
                <div className="title">
                    Contact Us!
                </div>
                <input 
                value={contact}
                onChange={(c)=>setContact(c.target.value)}>
                    Who would you like to contact?
                </input>
                <button onClick={submit}>Submit</button>

                <Profile id={contact} />

                <Button/>
                
            </div>
        </div>

    )
}