import { useState } from 'react';
import Input from '../../Utils/Input';
import { bindActionCreators } from "redux";
import * as userAction from '../../js/Actions/userAction';
import { connect } from "react-redux";

import './Login.scss'
function Login({userStatus,userAction}) {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const HandleLogin = () => {
        userAction.login({ username, password });
    }
    return (<div className="login">
        <div className='card'>
            
            <h1>log In</h1>
            <div className='icon'>
                <span>          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="560.000000pt"  viewBox="0 0 560.000000 560.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,560.000000) scale(0.100000,-0.100000)" fill="#6666ce" stroke="none">
<path d="M2562 5499 c-108 -9 -304 -45 -462 -84 -212 -53 -515 -184 -724 -313 -339 -209 -677 -549 -888 -894 -169 -279 -296 -617 -353 -938 -8 -47 -17 -96 -20 -110 -3 -14 -11 -101 -17 -193 -9 -130 -9 -207 0 -335 7 -92 14 -178 17 -192 3 -14 12 -63 21 -110 47 -262 131 -517 250 -754 67 -133 200 -341 293 -459 l53 -67 28 42 c33 53 98 108 216 184 97 63 678 362 827 425 50 22 105 52 122 68 82 77 224 161 272 161 24 0 33 23 54 135 8 44 7 61 -3 74 -7 10 -39 53 -71 95 -32 42 -69 101 -82 129 -21 45 -58 217 -80 370 -7 42 -10 47 -34 47 -51 0 -104 22 -147 62 -93 86 -146 225 -148 393 -1 125 12 161 74 202 56 38 65 32 79 -49 12 -74 34 -191 52 -285 l10 -53 53 0 c29 0 55 2 57 5 3 2 0 42 -7 87 -21 141 -27 316 -15 418 10 84 36 200 45 200 1 0 17 -7 34 -15 66 -33 272 -52 392 -35 47 6 131 27 188 45 l103 35 82 -24 c152 -44 525 -84 551 -59 3 4 -33 21 -81 39 -49 17 -131 52 -183 77 -116 55 -109 62 65 62 103 0 128 -3 180 -24 80 -32 179 -130 224 -223 40 -80 41 -109 12 -358 -30 -250 -33 -232 36 -228 l57 3 46 199 c25 110 50 201 56 203 18 6 77 -40 98 -77 18 -30 21 -51 20 -141 -2 -256 -132 -459 -294 -459 -26 0 -26 -1 -57 -188 -36 -220 -56 -263 -198 -438 -24 -29 -24 -34 -14 -90 20 -114 28 -134 52 -134 48 0 238 -115 285 -173 7 -8 48 -30 90 -48 42 -17 192 -89 332 -159 516 -258 662 -350 731 -458 l27 -42 49 62 c82 105 139 190 171 254 17 33 38 66 47 74 27 23 141 259 201 416 60 158 104 324 128 486 9 56 21 131 26 166 26 161 21 537 -10 682 -5 25 -26 122 -46 215 -43 204 -105 378 -214 600 -84 172 -234 408 -304 477 -23 24 -56 64 -73 89 -48 70 -287 295 -414 390 -142 106 -277 189 -438 268 -136 67 -359 152 -461 175 -36 8 -88 21 -115 29 -28 8 -91 22 -140 31 -50 8 -101 18 -115 21 -108 22 -408 29 -598 14z"/>
<path d="M2741 1495 c-70 -40 -142 -102 -184 -158 -36 -48 -39 -56 -34 -99 8 -68 69 -195 101 -210 32 -14 32 -20 5 -219 -57 -423 -87 -704 -75 -711 15 -10 493 -10 499 0 5 7 -43 419 -82 711 -27 199 -27 205 5 219 32 15 93 142 101 210 5 43 2 51 -34 99 -41 55 -110 114 -184 156 -56 33 -63 33 -118 2z"/>
</g>
</svg></span>
            </div>
        <form onSubmit={(e) => {
                e.preventDefault();
                HandleLogin();
        }}>
            <Input name={'username'}
                type="text"
                value={username}
                placeholder={'Username'}
                handle={setusername}
            />
            <Input name={'password'}
                type="password"
                value={password}
                placeholder={"Password"}
                    handle={setpassword}
                />
            <button>Login</button>
        </form>
        </div>
    </div> );
}

// const Input = ({ name, type,placeholder,value, handle }) => {
//     return<div className="input">
//         <input type={type} name={name} value={value} placeholder={placeholder} onChange={(e) => { handle(e.target.value) }}/>
//     </div>
    
// }
const mapStateToProps = (state) => ({
    userStatus: state.user.status
})
const mapDispatchToProps = (dispatch) => ({
    userAction:bindActionCreators(userAction, dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(Login);