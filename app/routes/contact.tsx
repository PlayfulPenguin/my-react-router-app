import Button from "~/welcome/button"
import Nav from "./nav"
import Pr1 from "./profile1"

export default function Contact(){
    return(
        <div className="image">
            <div className="overlay">
                <Nav/>
                <div className="title">
                    Contact Us!
                </div>
                <p className="info">
                    choose from a select amout of ppl to Contact
                    <select>
                        <option value="1">profile 1</option>
                        <option value="2">profile 2</option>
                        <option value="3">profile 3</option>
                    </select>
                    {
                        <Pr1/>}
                </p>
                <Button/>
                
            </div>
        </div>

    )
}