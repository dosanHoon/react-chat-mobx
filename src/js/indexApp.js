import React, {Component, PropTypes} from 'react'
import { Router, Route, Link, browserHistory , IndexRoute , IndexLink} from 'react-router';

class Login extends Component {
    render () {
        return (
            <div>
                <header>MOBX REACT CHAT</header>
                <menu>
                    <ul>
                        <li><IndexLink to="/">Home</IndexLink></li>
                        <li><Link to="/login" activeClassName="active">LOGIN</Link></li>
                        <li><Link to="/chat" activeClassName="active">CHAT</Link></li>
                    </ul>
                </menu>
                {this.props.children}
            </div>
        )
    }
}

export default Login