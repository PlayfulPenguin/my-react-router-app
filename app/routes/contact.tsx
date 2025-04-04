import Button from "~/welcome/button"
import Nav from "./nav"
import { useState } from "react"

import Pr1 from "./profile1"
import Pr2 from "./profile2"
import Pr3 from "./profile3"

export default function Contact(){
    const [val, setVal] = useState("0")
   
    return(
        <div className="image">
            <div className="overlay">
                <Nav/>
                <div className="title">
                    Contact Us!
                </div>
                <p className="info">
                    choose from a select amout of ppl to Contact
                    <select 
                    onChange = {(v) => setVal(v.target.value)}>
                        <option value="0"> Choose person to contact</option>
                        <option value="1">profile 1</option>
                        <option value="2">profile 2</option>
                        <option value="3">profile 3</option>
                    </select>
                    <div>
                        {
                        val == "0"?
                        <div></div>
                        :val == "1"
                        ?
                        <Pr1/>
                        :
                        val == "2"?
                        <Pr2/>
                        :
                        <Pr3/>
                    }
                    </div>
                </p>
                <Button/>
                
            </div>
        </div>

    )
}