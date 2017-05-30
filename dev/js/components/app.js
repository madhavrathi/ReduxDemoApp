import React from 'react';
import UserList from '../containers/user-list'
require("../../scss/style.scss");

const App = () => {
  return(
    <div>
      <h1>Username List:</h1>
      <UserList />
      <h2>User Details</h2>
    </div>
);

};

export default App;
