import React, {useState, useEffect}from 'react'
import './form.css'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import './Form.jsx'


const EditItems = () => {
  const [item, setItems] = useState("");
  const [kondisi, setKondisi] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    editItems();
  },[]);
  
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

      }
    } catch (error) {
      console.log(error)
    }
  }

  const editItems = async () =>{
    const response = await axios.get(`http://localhost:5000/list-todo/${id}`)
    setItems(response.data.item);
    setKondisi(response.data.kondisi)
  }


  
  return (
    <>
      <div class="container-sm my-3"  >
        <div class="row text-center">
          <div class="col" onSubmit={addItems}>
            <p>TASK</p>
            <form >
              <div class="form-group">
                <input type="text"  value={item} onChange={(e) => setItems(e.target.value)} placeholder="add new task" class="form-control"
                /> 
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
              <div class="row p-1 mb-2">
                <div class="col mt-2 text-center">
                    <button type="submit"  class="btn btn-primary">Add</button>
                </div>
              </div>

            </form>
          </div>

          {/* <div class="col-3">
            <p>DEADLINE (DD/MM/YYYY)</p>
            <div class="input-group date" id="datepicker">
              <input type="date" class="form-control"/>
            </div>
          </div> */}

        </div>
      </div>
    </>
  )
}

export default EditItems