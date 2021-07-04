import React, { useState } from 'react';

const NewUserForm = () => {

    const [card, setCard] = useState({
        id: '',
        name: '',
    })

    const handleChanges = e => {
        setCard({...card, [e.target.name]: e.target.value })
    };


    const submitForm = e => {
        e.preventDefault();
        // post
        setCard({
          name: "",
          age: "",
          email: "",
        });
    }

    return (
        <div className="NewUserForm-container">
            <h1>New User Form Here</h1>
            <form onSubmit={submitForm}>
                <label htmlFor='name'>Name:
                <input
                    type='text'
                    name='name'
                    value={card.name}
                    onChange={handleChanges}
                />
                </label>
                <label htmlFor='age'>Bio:
                <input
                    type='text'
                    name='bio'
                    value={card.bio}
                    onChange={handleChanges}
                />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewUserForm