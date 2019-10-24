import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../ducks/reducer';



class Landing extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {

    }

    handleLogin = () => {
        // const user = {
        // email: this.state.email,
        // password: this.state.password
        // }
        axios.post('/auth/login', { email: this.state.email, password: this.state.password }).then(res => {
            console.log(res)
            // redux action here 
            // finish later
            this.props.updateUser(res.data)
            this.props.history.push('/account')
            this.setState({
                email: '',
                password: ''
            })
        })
            .catch(err => console.log(err))
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Login here</h1>
                <input
                    value={this.state.email}
                    name='email'
                    onChange={(e) => this.handleInput(e)} />
                <input
                    value={this.state.password}
                    type='password'
                    name='password'
                    onChange={(e) => this.handleInput(e)} />
                <button onClick={this.handleLogin}>Login</button>
                <Link to='/register'>Register</Link>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const { user } = reduxState;
    return {
        user
    }
}

const mapDispatchToProps = {
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
