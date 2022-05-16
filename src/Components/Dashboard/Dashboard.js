import { useState } from "react";
import { connect } from "react-redux";
import AdminHome from "./AdminHome/AdminHome";
import Products from "./Products/Products";
import UserHome from "./UserHome/UserHome";
import "./Dashboard.scss";
// import DataTable from "../../Utils/DataTable";
// import ViewUsers from "./ViewUsers/ViewUsers";

function Dashboard({user}) {
    // let columns = [{
    //     name: 'Name',
    //     value: 'name',
    //     render: (data) =>(<span style={{color:'red'}}>{data}
    //     </span>)
    // },
    // {
    //     name: 'Age',
    //     value: 'age',
    //     },
    // {
    //     name: 'Email',
    //     value: 'email',
    //     },
    // {
    //     name: 'Mob No.',
    //     value: 'mob',
    //     }]
    // let row = [{
    //     name: "Shivam",
    //     email: "shivam.mkp@gmail.com",
    //     age: '22',
    //     mob:'966#######'
    // },{
    //     name: "Kanishka",
    //     email: "kanishka.knsk@gmail.com",
    //     age: '21',
    //     mob:'966#######'
    // },{
    //     name: "Parkhar",
    //     email: "prakhar.pps@gmail.com",
    //     age: '23',
    //     mob:'966#######'
    // },{
    //     name: "Harsha",
    //     email: "harsha.ahsrah@gmail.com",
    //     age: '22',
    //     mob:'966#######'
    // },{
    //     name: "Shalini",
    //     email: "Shalini.ss@gmail.com",
    //     age: '21',
    //     mob:'966#######'
    // },{
    //     name: "Kanishka",
    //     email: "kanishka.knsk@gmail.com",
    //     age: '21',
    //     mob:'966#######'
    // },{
    //     name: "Parkhar",
    //     email: "prakhar.pps@gmail.com",
    //     age: '23',
    //     mob:'966#######'
    // },{
    //     name: "Harsha",
    //     email: "harsha.ahsrah@gmail.com",
    //     age: '22',
    //     mob:'966#######'
    // },{
    //     name: "Shalini",
    //     email: "Shalini.ss@gmail.com",
    //     age: '21',
    //     mob:'966#######'
    // },{
    //     name: "Kanishka",
    //     email: "kanishka.knsk@gmail.com",
    //     age: '21',
    //     mob:'966#######'
    // },{
    //     name: "Parkhar",
    //     email: "prakhar.pps@gmail.com",
    //     age: '23',
    //     mob:'966#######'
    // },{
    //     name: "Harsha",
    //     email: "harsha.ahsrah@gmail.com",
    //     age: '22',
    //     mob:'966#######'
    // },{
    //     name: "Shalini",
    //     email: "Shalini.ss@gmail.com",
    //     age: '21',
    //     mob:'966#######'
    // },{
    //     name: "Kanishka",
    //     email: "kanishka.knsk@gmail.com",
    //     age: '21',
    //     mob:'966#######'
    // },{
    //     name: "Parkhar",
    //     email: "prakhar.pps@gmail.com",
    //     age: '23',
    //     mob:'966#######'
    // },{
    //     name: "Harsha",
    //     email: "harsha.ahsrah@gmail.com",
    //     age: '22',
    //     mob:'966#######'
    // },{
    //     name: "Shalini",
    //     email: "Shalini.ss@gmail.com",
    //     age: '21',
    //     mob:'966#######'
    // },{
    //     name: "Kanishka",
    //     email: "kanishka.knsk@gmail.com",
    //     age: '21',
    //     mob:'966#######'
    // },{
    //     name: "Parkhar",
    //     email: "prakhar.pps@gmail.com",
    //     age: '23',
    //     mob:'966#######'
    // },{
    //     name: "Harsha",
    //     email: "harsha.ahsrah@gmail.com",
    //     age: '22',
    //     mob:'966#######'
    // },{
    //     name: "Shalini",
    //     email: "Shalini.ss@gmail.com",
    //     age: '21',
    //     mob:'966#######'
    // }]
    const [select, setselect] = useState(0)
    return (<div className="dashboard">
        <div className="sidebar">
            {user.type === "admin" ? <>
                <h2>Admim Panel</h2>
                <li>Dashboard</li>
                <ul>
                <li style={select === 0 ? {background:'#6666ce',fontWeight:'500'} : {}} onClick={()=>{setselect(0)}}>Main</li>
            </ul></>
                : <>
                    <h2>User Panel</h2>
                                    <li>Dashboard</li>

                <ul>
                        <li style={select === 0 ? {background:'#6666ce',fontWeight:'500'} : {}} onClick={()=>{setselect(0)}}>
                        Main
                    </li>
                    <li style={select === 1 ? {background:'#6666ce',fontWeight:'500'} : {}} onClick={()=>{setselect(1)}}>
                        Products
                    </li>
            </ul>                </>
}
        </div>
        <div className="main">
            {
                user.type === 'admin'
                    ?
                    <>
                        {select===0 && <AdminHome/>}
                    </>
                    :
                    <>
                        {select===0 && <UserHome/>}
                        {select===1 && <Products/>}

                    </>
            }
        </div>
        {/* <ViewUsers /> */}
        {/* <DataTable columns={columns} rows={row} pagination={5} title="All Users"/> */}
    </div> );
}

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    
});

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
