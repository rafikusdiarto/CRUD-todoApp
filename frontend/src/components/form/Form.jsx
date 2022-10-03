import React from 'react'
import './form.css'

const Form = () => {
  return (
    <>
      <div class="container-sm my-3">
        <div class="row text-center">
          <div class="col">
            <p>TASK</p>
            <form>
              <div class="form-group">
                <input type="text" placeholder="add new task" class="form-control"
                /> 
              </div>
            </form>
          </div>

          <div class="col-3">
            <p>KONDISI</p>
            <select class="form-select" aria-label="Default select example" required>
              <option value="">penting</option>
              <option value="">mendadak</option>
              <option value="">santuy</option>
            </select>
          </div>

          <div class="col-3">
            <p>DEADLINE (DD/MM/YYYY)</p>
            <div class="input-group date" id="datepicker">
              <input type="date" class="form-control"/>
            </div>
          </div>

          <div class="row p-1 mb-2">
            <div class="col mt-2 text-center">
              <form method="">
                <button type="button" class="btn btn-primary">Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form