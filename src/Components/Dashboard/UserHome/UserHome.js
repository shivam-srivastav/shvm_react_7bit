import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from '../../../js/Actions/userAction'
import './UserHome.scss'

function UserHome({user,userAction}) {
    return (<div className="userHome">
        <h1>
            User Basic Details
        </h1>
        <ul>
            <li><span>Name - </span><span>{user.name}</span></li>
            <li><span>Email - </span><span>{user.email}</span></li>
            <li><span>Account Type - </span><span>{ user.type }</span></li>
        </ul>
        
    </div> );
}
const mapStateToProps = (state) => ({
    user: state.user,
})
const mapDispatchToProps = (dispatch) => ({
    userAction:bindActionCreators(userAction,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(UserHome);