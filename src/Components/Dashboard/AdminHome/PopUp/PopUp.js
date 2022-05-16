import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from '../../../../Utils/Input';
import './PopUp.scss';
import * as userAction from '../../../../js/Actions/userAction'
function PopUp({ setpopup,title="No Title",userAction,updatingPopup,handlePopup }) {
    
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!updatingPopup) {
            let action = userAction.add_new_user({ name:handlePopup.name,  age:handlePopup.age, email:handlePopup.email, phone:handlePopup.phone })
            if (action) {
                handlePopup.setage("")
                handlePopup.setemail("")
                handlePopup.setphone("")
                handlePopup.setname("")
                handlePopup.setupdatingPopup(false);
                setpopup(false)
                alert("User Added Successfully")
            }
        }
        else {
            let action = userAction.updating_user({ name:handlePopup.name,  age:handlePopup.age, email:handlePopup.email, phone:handlePopup.phone })
            if (action) {
                handlePopup.setage("")
                handlePopup.setemail("")
                handlePopup.setphone("")
                handlePopup.setname("")
                handlePopup.setupdatingPopup(false);
                setpopup(false)
                alert("User Updated Successfully")
            }
        }
    }
    return (<div className="popup">
            <div className="card">
                <div className='title'>
                    <li>{title}</li>
                    <button onClick={() => {
                    setpopup(false);
                    handlePopup.setage("")
                    handlePopup.setemail("")
                    handlePopup.setphone("")
                    handlePopup.setname("")
                    handlePopup.setupdatingPopup(false);
                    
                    }}>Close</button>
            </div>
            <div className='form'>
                <form onSubmit={(e) => { handleSubmit(e) }}>
                <Input type={'text'} value={handlePopup.name} name={'name'} placeholder={"Name"} handle={handlePopup.setname} />
                <Input type={'number'}  value={handlePopup.age} name={'age'} placeholder={"Age"} handle={handlePopup.setage}/>
                
                <Input type={'email'} value={handlePopup.email} name={'email'} placeholder={"Email"} handle={handlePopup.setemail}/>
                <Input type={'number'} value={handlePopup.phone} name={'phone'} placeholder={"Phone No."} handle={handlePopup.setphone}/>
                    <div>{handlePopup.updatingPopup ? <button>Update</button>
                        :
                        <button>Create </button>}</div>
                </form>   
            </div>
            </div>
        </div>);
}
const mapStateToProps = (state) => ({
    userStatus: state.user.status
})
const mapDispatchToProps = (dispatch) => ({
    userAction:bindActionCreators(userAction, dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(PopUp);