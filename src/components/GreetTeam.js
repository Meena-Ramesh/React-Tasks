import React from 'react';

const GreetTeam = props => {
    const team = [
        {name : "Jack"},
        {name : "Rebecca"},
        {name : "Kevin"},
        {name : "Kate"},
        {name : "Randall"},
    ];

    return (
        <div>
            <h2>Welcome Team!!</h2>
                {team.map(teamMember => (<p>{teamMember.name}</p>))}
        </div>
    )
}

export default GreetTeam