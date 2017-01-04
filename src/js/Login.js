import React, {Component, PropTypes} from 'react'
import { Router, Route, Link, browserHistory , IndexRoute , IndexLink} from 'react-router';

class Login extends Component {
    render () {
        return (
            <div>
                <header>LOGIN</header>
                <div className="input_wrap">
                    <input type="text" placeholder="닉네임을입력해주세요"></input>
                    <button>확인</button>
                </div>
            </div>
        )
    }
}

export default Login