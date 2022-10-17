import React, {useState, useEffect}from 'react'
import './additem.css'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import './EditItems.jsx';


const Form = () => {
  const [item, setItems] = useState("");
  const [kondisi, setKondisi] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();

  
  useEffect(() => {
    const editItems = async () =>{
      const response = await axios.get(`http://localhost:5000/list-todo/${id}`)
      setItems(response.data.item)
      setKondisi(response.data.kondisi)
    };
    editItems();
  },[id]);
  
  const addItems = async (e) =>{
    e.preventDefault();
    try {
      if (item === "") {
        alert("please add todo again")
      }else{
        await axios.post('http://localhost:5000/list-todo',{
          item,
          kondisi
        });
        navigate("/list-todo");
        alert("New List Added");
        window.location.reload(true)

      };
    } catch (error) {
      console.log(error)
    };
  };
  
  
  return (
    <>
      <div class="mb-5">
        <div class="row text-center ">
          <div class="col " onSubmit={addItems}>
            <form >
              <div class="row">
                <div class="col">
                  <p>TASK</p>
                  <input type="text"  value={item} onChange={(e) => setItems(e.target.value)} placeholder="add new task" class="form-control"/> 
                </div>
                <div class="col-3">
                  <p>KONDISI</p>
                  <select class="form-select" value={kondisi} onChange={(e) => setKondisi(e.target.value)}>
                    <option value=""></option>
                    <option value="penting">Penting</option>
                    <option value="mendadak">Mendadak</option>
                    <option value="santuy">Santuy</option>
                  </select>
                </div>
              </div>
              <div class="col mt-4 text-center">
                  <button type="submit"  class="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Form