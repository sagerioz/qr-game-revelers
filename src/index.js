import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const greeting = <h1>Hello, Zayante! Today is </h1>;
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
