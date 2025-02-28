import React from 'react'
import { NavLink } from 'react-router-dom';
 
 
class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          
          /* add prop for activeStyle */
          activeStyle={{
            background: 'darkblue'
          }}
        >Home</NavLink>
        <NavLink
          to="/movies"
          exact
          activeStyle={{
            background: 'darkblue'
          }}
        >Movies</NavLink>
        <NavLink
          to="/directors"
          exact
          activeStyle={{
            background: 'darkblue'
          }}
        >Directors</NavLink>
        <NavLink
          to="/actors"
          exact
          activeStyle={{
            background: 'darkblue'
          }}
        >Actors</NavLink>
      </div>
    )
  }
}
 
export default Navbar;