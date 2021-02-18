import React from 'react';
 
export default function Topic(){
  return <div>
      <h3> A route based app :</h3>
      <ul style={{textAlign:'left'}}>
          <li>Using a component-based approach i have created routes for sign in & sign up functionalities</li>
          <li> On the landing page, you have an option for sign in & sign up</li>
          <li> On Sign Up, You redirect to /signup route.</li>
          <li> On the Sign In, You've to redirect to /signin route.</li></ul>
  </div>
}