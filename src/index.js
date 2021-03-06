import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

const Hello = (props) => {
  return(
    <div>
    <p> 
    Hello {props.name}, you are {props.age} years old
    </p>
  </div>
)
}

const Footer = () => {
  return (
    <div>
      greeting app created by SANARA 
      <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const App = () => {
const nimi = 'Pekka'
const ika = 10

return (
  <div>
    <h1>Greetings</h1>
    <Hello name="Maya" age={26 + 10} />
    <Hello name={nimi} age={ika} />
    <Footer/>
  </div>
)
}

ReactDOM.render(<App />, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
