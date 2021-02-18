import React from "react";
import { Link, Route,Switch } from 'react-router-dom';
import './style.css';
export default class SignIn extends React.Component{
    render() {
        return <>
        <div>
      <h2>SignUp</h2>
    <label for="username">User Name</label>
    <input type="text" name="username" placeholder="Enter Username"/>

    <label for="email">Last Name</label>
    <input type="text" name="email" placeholder="Enter Email"/>
    <label for="password">Last Name</label>
    <input type="password" name="password" placeholder="Enter Password"/>
    
  
    <input type="submit" value="SignUp"/>
    <Link to='/signup'><h2>SignUp</h2></Link>
</div>

        </>;
      }
}