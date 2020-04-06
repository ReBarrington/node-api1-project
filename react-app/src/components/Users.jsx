import React, { useState } from 'react';
import axios from 'axios';

const Users = () => {

    let userState = useState([]);

    axios.get('http://localhost:5000/api/users')
        .then(res => {
            userState = [...userState, res.data];
            console.log(userState, ' userState')
        }) 
        .catch(err => {
            console.log('error:', err)
        })


    return(  
        <div className="users-container">
            {UserState.map(user => (
                console.log(user, ' is user')
                // <div>
                //     <h1>Name:{user.name}</h1>
                //     <h3>Bio: {user.bio}</h3>
                // </div>
            ))}
        </div>
    )
}

export default Users