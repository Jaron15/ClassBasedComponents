import { Component} from 'react';

import classes from './User.module.css';

class User extends Component {
  // this would be like a clean up function 
  componentWillUnmount() {
    console.log('user will unmount!');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
