import React, {Component} from 'react';
import axios from 'axios';
import {updateUser} from '../ducks/reducer';
import {connect} from 'react-redux';




class Register extends Component{

    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleRegister = () => {
        axios.post('/auth/register', {email: this.state.email, password: this.state.password}).then(res => {
            // Redux action
            this.props.updateUser(res.data)
            this.props.history.push('/account')
            this.setState({
                email: '',
                password: ''
            })
        })
        .catch(err => console.log(err))
    }



    render(){
        return (
            <div>
                <h1>Register Here </h1>
                <input 
                    value={this.state.email}
                    name='email'
                    onChange={(e) => this.handleInput(e)}/>
                <input 
                    value={this.state.password}
                    type='password'
                    name='password'
                    onChange={(e) => this.handleInput(e)} />
                <button onClick={this.handleRegister}>Register</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    updateUser
}

export default connect(null, mapDispatchToProps)(Register);