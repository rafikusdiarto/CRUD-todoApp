import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Form from './components/form/Form.jsx'
import Todo from './components/todo/Todo.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

