/*import React, {Component} from "react";
export default class Parent extends Component{
  render()
  {
    return(
      <div>
        <h1><Child /></h1>
      </div>
    )
  }
}
class Child extends React.Component{
  render(){
    return(
      <div>
        Child
      </div>
    )
  }
}*/
/*import React, {Component} from "react";
export default class Parent extends Component{
  state={
    age:20,
    name:'Pandu'
  }
  render()
  {
    return(
      <div>
        <h1>
          <Child age={this.state.age} name={this.state.name} />
        </h1>
      </div>
    )
  }
}
class Child extends React.Component{
  render()
  {
    return(
      <div>
        <p>name:{this.props.name}</p>
        <p>age:{this.props.age}</p>
      </div>
    )
  }
}*/
/*import OnClick from './OnClick'
function Apple()
{
  return(
    <div>
      <OnClick />
    </div>
  )
}
export default Apple
*/
/*import FormExampleOne from './FormExampleOne';

function App() {
  return (
    <div className="App">
      <FormExampleOne />
    </div>
  );
}
export default App;*/
/*import './App.css';
import React from 'react';
import Weather from './Weather'; // Make sure the path is correct

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <Weather />
    </div>
  );
}

export default App;
*/

/*import FormExampleTwo from './FormExampleTwo';

function App() {
  return (
    <div className="App">
      <FormExampleTwo />
    </div>
  );
}
export default App;*/
/*import DynamicFormComponent from './DynamicFormComponent';

function App() {
  return (
    <div className="App">
      <DynamicFormComponent />
    </div>
  );
}
export default App;
*/
/*import UseStateMgm from "./UseStateMgm";

function App(){
  return(
    <div className="App">
      <UseStateMgm />
    </div>
  )
}
export default App;
*/
/*import Resize from "./Resize";

function App(){
  return(
    <div className="App">
      <Resize />
    </div>
  )
}
export default App;*/
/*
import React from 'react';
import ParentComponent from './ParentComponent';

function App() {
  return <ParentComponent />;
}

export default App;*/
/*
import React from 'react';
import DynamicForm from './DynamicForm';

function App() {
  return (
    <div className="App">
      <DynamicForm />
    </div>
  );
}

export default App;
   */
   
/*import React, { useState, useEffect } from 'react';
import Login from './Login';
import ContactUs from './ContactUs';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem('isLoggedIn');
    if (session === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <div>
      {isLoggedIn ? (
        <ContactUs onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;*/
import React, { useState, useEffect } from 'react';
import Login from './Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session === 'active') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('session');
    setUsername('');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;