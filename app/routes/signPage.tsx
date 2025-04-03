import Nav from "./nav";
import Sign from "./sign";

export default function signPage(){
    return(
        <div className="image">
            <div className="overlay">
                <Nav/>
                <div className="title">
                </div>
                <Sign/>
                
            </div>
        </div>

    )
}