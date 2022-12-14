import React, { useEffect, useState} from 'react'
import './todo.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Todo = () => {
const [item,setItem] = useState(['']);

useEffect(() =>{
  getItem();
},[]);

const getItem = async () => {
  const response = await axios.get('http://localhost:5000/list-todo');
  setItem(response.data);
}


const deleteItems = async (id) => {
  var result = window.confirm("Are you sure to delete?");
  if(result){
    try {
      await axios.delete(`http://localhost:5000/list-todo/${id}`);
      getItem()
    } catch (error) {
      console.log(error)
    }
    console.log("Deleted")
  }
}


  return (
    <>
      {item.map((item, index) => (
        <div className="" key={index}>
          <li className="row mb-3 text-center" >          
            <div className="col list">
              <h4>{item.item}</h4>
            </div>
            <div className="col-3 list ms-2">
              <h4>{item.kondisi}</h4>
            </div>
            {/* <div className="col-3 list ms-2 text-center">
              <h4>29/08/2002</h4>
            </div> */}
            <div className="col-3">
              <Link to={`edit/${item.id}`} className="btn btn-warning me-2">
                  Edit
                  <i className="ms-1 fa-solid fa-pen-to-square"></i>
              </Link>
              <button className="btn btn-danger" onClick={() => deleteItems(item.id)} >
                  Delete
                  <i className="ms-1 fa-regular fa-trash-can"></i>
              </button>
            </div>
          </li>

        </div>
      ))};
    </>
  )
}

export default Todo