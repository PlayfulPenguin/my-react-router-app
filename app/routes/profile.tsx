import { useParams } from "react-router-dom";

function Profile(){
    const {id}= useParams<{id:string}>()
    return(<div>
        Hello,
        {id}!
    </div>
        

    )

}



export default Profile;