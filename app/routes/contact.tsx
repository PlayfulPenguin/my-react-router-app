import Button from "~/welcome/button"
import Nav from "./nav"
export default function Contact(){
    return(
        <div className="image">
            <div className="overlay">
                <Nav/>
                <div className="title">
                    Contact Us!
                </div>
                <p className="info">
                    since this isnt and actually functioning page,
                    i dont actually want to put contact details and too lazy to code in an email thing
                    :p
                </p>
                <Button/>
                
            </div>
        </div>

    )
}