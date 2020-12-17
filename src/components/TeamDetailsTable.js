import React from 'react'

function TeamDetailsTable(props) {

    return (
        <div>
           <h1 id='title'>Team Members Details</h1>
           
           <table border = "3" align = "center">
              <tbody>
              {props.team.map(member => {
               return(
                <tr>
                <td>{member.empId}</td>
                <td>{member.empName}</td>
                <td>{member.location}</td>
                </tr>
               )
              })}   
              </tbody>
           </table>
        </div>
     )
}

export default TeamDetailsTable
