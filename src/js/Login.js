import React, {Component, PropTypes} from 'react'
import { Router, Route, Link, browserHistory , IndexRoute , IndexLink} from 'react-router';

class Login extends Component {
    inputNickName(){
        let nickName = this.refs.nickName.value;
        console.log("nickName",nickName)
        this.props.store.inputNickName(nickName);
    }
    render () {
        return (
            <div>
                <header>LOGIN</header>
                <div className="input_wrap">
                    <input type="text" ref="nickName" placeholder="닉네임을입력해주세요"></input>
                    <button onClick={this.inputNickName.bind(this)}>확인</button>
                </div>
            </div>
        )
    }
}

export default Login