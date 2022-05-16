import './Navbar.scss'
import * as userAction from '../../js/Actions/userAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function Navbar({ user,userAction }) {
    const onSignOut = () => {
        userAction.sign_out();
    }
    return (<nav className="navbar">
        <h1>React Redux</h1>
        <div>
            {user.status ?
                <li>
                    <span> Hi , {user.name} </span>
                    <span>
                        <button onClick={()=>{onSignOut()}}>Sign-Out</button>
                    </span>
                </li>
                :
                <li>
            </li>}
        </div>
    </nav> );
}
const mapStateToProps = (state) => ({
    user:state.user
})
const mapDispatchToProps = (dispatch => ({
    userAction:bindActionCreators(userAction,dispatch)
}))
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);