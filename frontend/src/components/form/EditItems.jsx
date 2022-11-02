import React, {useState, useEffect}from 'react'
import './additem.css'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";


const EditItems = () => {
  const [item, setItems] = useState('');
  const [kondisi, setKondisi] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    const getProductById = async() =>{
      const response = await axios.get(`http://localhost:5000/list-todo/${id}`);
      setItems(response.data.item);
      setKondisi(response.data.kondisi);
    };
    getProductById();
  },[id]);

  const updateItems = async (e) =>{
    e.preventDefault();
    try {
      if (item === "") {
        alert("please add todo again")
      }else{
        await axios.patch(`http://localhost:5000/list-todo/${id}`,{
          item,
          kondisi
        });
        navigate("/list-todo");
        alert("List Updated");
        window.location.reload(true)

      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className="container-sm my-3"  >
        <div className="row text-center">
          <div className="col" onSubmit={updateItems}>
            <p>TASK</p>
            <form>
              <div className="form-group">
                <input type="text"  value={item} onChange={(e) => setItems(e.target.value)} placeholder="add new task" className="form-control"/> 
                <div className="col-3">
                  <p>KONDISI</p>
                  <select className="form-select" value={kondisi} onChange={(e) => setKondisi(e.target.value)}>
                    <option value=""></option>
                    <option value="penting">Penting</option>
                    <option value="mendadak">Mendadak</option>
                    <option value="santuy">Santuy</option>
                  </select>
                </div>
              </div>
              <div className="row p-1 mb-2">
                <div className="col mt-2 text-center">
                    <button type="submit" className="btn btn-primary">Update</button>
                </div>
              </div>

            </form>
          </div>

          {/* <div className="col-3">
            <p>DEADLINE (DD/MM/YYYY)</p>
            <div className="input-group date" id="datepicker">
              <input type="date" className="form-control"/>
            </div>
          </div> */}

        </div>
      </div>
    </>
  )
}

export default EditItems