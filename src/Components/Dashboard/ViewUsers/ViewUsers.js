import { Link, useLocation } from "react-router-dom";

function ViewUsers() {
    const location = useLocation()
    let data = location.state;
    return (<div>
        <h2><Link to='/dashboard'> Go Back</Link></h2>
        <div style={{display:'flex',width:"100%",alignItems:"center", flexDirection:"column" ,justifyContent:"center"}}>
            <h1>Users Details </h1>
            <ul style={{
                    listStyle:"none"
            }}>
                <li>Name:{data.name}</li>
                <li>Email:{data.email}</li>
                <li>Age:{data.age}</li>
                <li>Phone:{data.phone}</li>
            </ul>
        </div>
    </div> );
}

export default ViewUsers;