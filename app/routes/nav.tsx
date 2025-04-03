import { Link } from "react-router";

export default function Nav() {
    return (
    <div className= "Nav">
        <Link to="/" className="title"> Home </Link>
        <ul>
            <li>
                <Link to = "/about">About</Link>
            </li>
            <li>
                <Link to= "/Contact">Contact Us</Link>
            </li>
        </ul>
    </div>
    )
}
