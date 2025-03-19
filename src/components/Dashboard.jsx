import React from 'react';
import Admin from './Admin'; // Adjust the path as needed
import User from './User'
function Dashboard(props) {
  return (
    <div>
      <h1>Dashboard</h1>
      <header>
        {
          props.role === "admin" ? <Admin /> : <User/>
        }
      </header>
    </div>
  );
}

export default Dashboard;
