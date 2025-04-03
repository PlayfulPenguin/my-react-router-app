import Button from "~/welcome/button";
import Nav from "./nav";

export default function About(){
    return(
        <div className="image">
            <div className="overlay">
                <Nav/>
                <div className="title">
                    About The Guestbook
                </div>
                <p className="info">
                    a guestbook is a place to leave thoughtful notes, or silly remarks 
                    feel free to add your own 
                </p>
                <Button/>
            </div>
        </div>

    )
}