import React from 'react';
import User from './User';


const Users = ({allUsers, user}) => {



    const filteredUsers = []
    for(let player of allUsers){
        console.log("user.name", user.name);
        console.log("player.name", player.name);

        if (player.name === user.name){
            filteredUsers.push(player)
        }
    }


    const userElements = filteredUsers.map((user) => {
        return <p>{user.Result}</p>
    })


    return(
        <>
        <h2>{user.name} </h2>
        {userElements}
        </>

    )
}

export default Users;