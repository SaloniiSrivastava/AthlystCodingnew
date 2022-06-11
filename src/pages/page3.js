import React from 'react';
import {useNavigate} from "react-router-dom";

function Page3() {
    let navigate = useNavigate();
    function handleBack(){
      navigate('/home');
    }
    function handleSubmit(){
        navigate('/table');
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='First Team' required='required'></input>
            <select>
        
        <option value="friendly" >Home</option>
        <option value="tournament" >Away</option>
        
      </select>
            <p>vs</p>
            <input type="text" placeholder='Second Team' required='required'></input>
            <select>
        
        <option value="friendly" >Home</option>
        <option value="tournament" >Away</option>
        
      </select>
      <button onClick={handleBack}>Back</button>
      <button type="submit">Submit</button>

        </form>
    </div>
  )
}

export default Page3