import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {updateUser} from '../ducks/reducer';




const Account = (props) => {
    const handleLogout = () => {
        axios.post('/auth/logout').then(res => {
            props.history.push('/')
        })
        .catch(err => console.log(err))
    }

    const updateBalance = () => {
        axios.put('/api/balance', {bank_user_id: props.user.bank_user_id, account_balance: props.user.account_balance + 1}).then(res => {
            props.updateUser(res.data)
        })
        .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>Account Page</h1>
            <h3>{props.user.bank_user_email}</h3>
            <h3>${props.user.account_balance}</h3>
            <button onClick={updateBalance}>Update Balance </button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Account);