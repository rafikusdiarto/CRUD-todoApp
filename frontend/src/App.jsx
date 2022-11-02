import AddItems from './components/form/AddItems.jsx'
import Todo from './components/todo/Todo.jsx'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import EditItems from './components/form/EditItems.jsx';

function App() {
  return (
    <>
      <header className="text-center mt-5">
        <h1>ToDo List</h1>
      </header>
      <div className="container konten p-5">
        <BrowserRouter>
          <Routes>
            <Route path='/list-todo' element={<><AddItems/><Todo/></>}></Route>
            <Route path='/list-todo/edit/:id' element={<EditItems/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
