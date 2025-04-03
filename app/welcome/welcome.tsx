import { Link } from "react-router";
import Nav from "~/routes/nav";
import Button from "./button";



export function Welcome() {


  return (
    <div className="image">
      <div className="overlay">
        <Nav/>
        <div className="center">
        <Button/> 

        </div>
      </div>
    </div>


  );
}