import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectuser} from "../actions/index";


class UserList extends Component{

  createListItems(){
    return this.props.users.map(user => {
        return(
          <li
            onClick={()=> this.props.selectuser(user)}
            key={user.id}>{user.first} {user.last}</li>
        );
      });
  }
  render(){
    return(
      <ul>
        {this.createListItems()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  return{
    users: state.users
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectuser: selectuser},dispatch);
}


export default connect(mapStateToProps,matchDispatchToProps)(UserList);
