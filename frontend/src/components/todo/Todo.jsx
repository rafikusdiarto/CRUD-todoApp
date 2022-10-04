import React, { useEffect, useState} from 'react'
import './todo.css'
import axios from 'axios';


const Todo = () => {
const [item,setItem] = useState(['']);

useEffect(() =>{
  getItem();
},[]);

const getItem = async () => {
  const response = await axios.get('http://localhost:5000/list-todo');
  setItem(response.data);
}
  return (
    <>
      {item.map((item, index) => (
        <li class="row mb-3 ms-2" key={index}>          
          <div class="col list">
            <h1>{index+1}</h1>
            <h4>{item.item}</h4>
          </div>
          <div class="col-3 list ms-2 text-center">
            <h4>{item.kondisi}</h4>
          </div>
          {/* <div class="col-3 list ms-2 text-center">
            <h4>29/08/2002</h4>
          </div> */}
          <div class="col-3">
            <button class="btn btn-warning me-2" >
                Edit
                <i class="ms-1 fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn btn-danger" >
                Delete
                <i class="ms-1 fa-regular fa-trash-can"></i>
            </button>
          </div>
        </li>
      ))};
    </>
  )
}

export default Todo