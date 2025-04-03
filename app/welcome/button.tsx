import { Link, type To } from "react-router";


export default function Button(){
    return(
        <Link to="/signPage">
            <button className="not-a-button">Sign Our GuestBook
            </button>
        </Link>
    );
}