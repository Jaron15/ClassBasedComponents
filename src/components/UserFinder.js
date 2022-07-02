import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
  ];

  class UserFinder extends Component {
    constructor() {
        super()
        this.state = {
            filteredUsers: [],
            searchTerm: '',

        }
    }

    // this runs the first time the component is rendered 
    // Its the equivalent of a UseEffect hook with an empty dependency array []
    componentDidMount() {
        //send http request 
        this.setState({filteredUsers: DUMMY_USERS})
    }

    // this replaces the useEffect hook 
    componentDidUpdate(prevProps, prevState) {
        // the if statement acts as the 'dependencies'
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: 
                DUMMY_USERS.filter((user) => 
                user.name.includes(this.state.searchTerm)
                ),
            })
        }
        
    }

    searchChangeHandler(event) {
        this.setState({searchTerm: event.target.value});
    }

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
              <input type='search' onChange={this.searchChangeHandler.bind(this)} />
              </div>
              <Users users={this.state.filteredUsers} />
            </Fragment>
          );
    }
  }

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//         <div className={classes.finder}>
//       <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;