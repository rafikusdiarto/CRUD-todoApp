import Form from './components/form/Form.jsx'
import Todo from './components/todo/Todo.jsx'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Form/><Todo/></>}></Route>
        {/* <Route path='add' element={<Form/>}></Route> */}
      </Routes>
      {/* <div className='App'>
        <header>
          <h1>To do list</h1>
        </header>
      </div>
      <div className='container konten'>
        <Form />
        <Todo/>
      </div> */}

    </BrowserRouter>
    </>
  );
}

export default App;
