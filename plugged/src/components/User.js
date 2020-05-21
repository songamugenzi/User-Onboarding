import React from 'react'

export default function User({ details }) {
    // console.log(details)
    if (!details) {
        return <h3>fetching your user details...</h3>
    }

    return (
        <div className='friend container'>
          <h4>{`Name: ${details.first_name} ${details.last_name}`}</h4>
          <p>Email: {details.email}</p>
          {/* <p>Role: {details.role}</p>
          <p>Civil: {details.civil}</p> */}
        </div>
    );
}