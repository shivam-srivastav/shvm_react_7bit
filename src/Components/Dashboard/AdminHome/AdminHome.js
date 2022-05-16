import { useState } from "react";
import { connect } from "react-redux";
import DataTable from '../../../Utils/DataTable';
import * as userAction from '../../../js/Actions/userAction'
import './AdminHome.scss'
import PopUp from "./PopUp/PopUp";
import { bindActionCreators } from "redux";
import { ethers } from "ethers";
import { Link } from "react-router-dom";
function AdminHome({ user,userAction }) {
    const [popup, setpopup] = useState(false)
    const [updatingPopup, setupdatingPopup] = useState(false)
    const [name, setname] = useState ("");
    const [age, setage] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [address, setaddress] = useState("");
    const [balance, setbalance] = useState("")
    let rows = user.users_list
    const handlePopup = {
        name,
        setname: (data) => {
            setname(data)
        },
        age,
        setage: (data) => {
            setage(data)
        },
        email,
        setemail: (data) => {
            setemail(data)
        },
        phone,
        setphone: (data) => {
            setphone(data)
        },
        setupdatingPopup: (data) => {
            setupdatingPopup(data)
        },
        updatingPopup
    }
    
    const onDelete = (email) => {
        userAction.deleting_user(email);
        
    }
    const handleMetaMask = () => {
        if (window.ethereum) {
            
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
        }
        else {
            alert("Pls Install Metamask Extension")
        }
    }
    const getbalance = (address) => {
  
    // Requesting balance method
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance) => {
        // Setting balance
        setbalance( ethers.utils.formatEther(balance));
      });
  };
  
  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
      setaddress(account);
  
    // Setting a balance
    getbalance(account);
  };
    let columns = [{
        name: 'Name',
        value: 'name',
        render: (row) =>(<Link to="/userPage" state={row}><span style={{color:'blue',textDecoration:'none'}}>{row.name}
        </span></Link>)
    },
    {
        name: 'Age',
        value: 'age',
        },
    {
        name: 'Email',
        value: 'email',
        },
    {
        name: 'Mob No.',
        value: 'phone',
        },
    {
        name: "Actions",
        value: "email",
        render: (row) => (
            <div style={{ display: 'flex',listStyle:"none" }}>
                <li onClick={() => {
                    setupdatingPopup(true);
                    setage(row.age)
                    setemail(row.email)
                    setname(row.name)
                    setphone(row.phone)
                    setpopup(true)

                } } style={{margin:'.5rem',color:"#f5841f",cursor:'pointer',border:"1px solid black",padding:".25rem",borderRadius:"4px"}}>Update</li>
                <li onClick={()=>{onDelete(row.email)}} style={{margin:'.5rem',cursor:'pointer',color:'red',border:"1px solid black",padding:".25rem",borderRadius:"4px"}}>Delete</li>
            </div>
        )
        
    }
    ]

    return (<div className="admin_home">
        {popup ? <PopUp handlePopup={handlePopup} updatingPopup={updatingPopup} setpopup={setpopup} />:<></>}
        <>
            <div className="metamask">
                <p>Meta Mask ID: {address} </p>
                <p>Balance: {balance}</p>
                <button onClick={() => {  handleMetaMask()  }}>Connect</button>
            </div>
        <div className="total_user">
                <p>Total No. of User :{ rows.length}</p>
        </div>
        <div className="user_list">
            <div className="top">
                    <button onClick={() => {
                        setpopup(true)
                        setupdatingPopup(false)
                    }}>
                    Add New User
                </button>
            </div>
        <DataTable columns={columns} rows={rows} pagination={5} title="List of Latest User"/>
        </div>
        </>
    </div>);
}

const mapStateToProps = (state) => ({
    user: state.user,
})
const mapDispatchToProps = (dispatch) => ({
    userAction:bindActionCreators(userAction,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(AdminHome);