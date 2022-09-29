import Form from './components/form/Form.jsx'
import Todo from './components/todo/Todo.jsx'
import React from 'react'
import './App.css';

function App() {
  return (
    <>
      <div className='App'>
        <header>
          <h1>To do list</h1>
        </header>
      </div>
      <div className='container konten'>
        <Form />
        <Todo/>
      </div>
    </>
  );
}

export default App;
