import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
require("../../scss/style.scss");

const App = () => {
  return(
    <div>
      <h1>Username List:</h1>
      <UserList />
      <hr />
      <h2>User Details</h2>
      <UserDetail />
    </div>
);

};

export default App;
