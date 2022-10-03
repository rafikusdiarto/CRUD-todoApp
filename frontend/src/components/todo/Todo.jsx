import React from 'react'
import './todo.css'

const Todo = () => {
  return (
    <>
        <li class="row mb-3 ms-2">
            <div class="col list">
            <h4>makan</h4>
            </div>
            <div class="col-3 list ms-2 text-center">
            <h4>Penting</h4>
            </div>
            <div class="col-3 list ms-2 text-center">
            <h4>29/08/2002</h4>
            </div>
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

      <div class="container">
        
      </div>
    </>
  )
}

export default Todo