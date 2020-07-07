import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useHistory, useLocation } from 'react-router-dom'

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(true)

    const loginSubmit = async event => {

        event.preventDefault()
        const response = await fetch('http://localhost:4000/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setAuth(false)
        } else {
            sessionStorage.setItem('token', payload.token)

            let { from } = location.state || { from: { pathname: "/" } };
            history.replace(from);
        }
    }

    return (
        <section id='login'>
            {!auth &&
                <div className="card">
                    <div className="card-body">
                        Invalid credentials, please try again
                       </div>
                </div>
            }
            <form  onSubmit={loginSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="usernameEntry" aria-describedby="emailHelp" placeholder="Enter email"  value={username} onChange={e => setUsername(e.target.value)} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="passwordEntry" placeholder="Password"  onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            </section>
    )
}

export default Login