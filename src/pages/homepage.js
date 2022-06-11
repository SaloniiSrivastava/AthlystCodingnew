import React from "react";
import {useNavigate} from "react-router-dom";
import { useState} from "react";


function Homepage() {

    let navigate = useNavigate();
    const[matchType,setMatchType] = useState("");

    function handleSelect(e){
      setMatchType(e.target.value);
      console.log(e.target.value);
    }

    function handleClick() {
     if(matchType === 'friendly'){
          navigate('/page1');
     } else{
      navigate('/page2');
     }
    }
    

  return (
    <div>
      <div>What are you playing?</div>
      <select>
        <option></option>
        <option value="friendly" onClick={handleSelect}>Friendly</option>
        <option value="tournament" onClick={handleSelect}>Tournament</option>
        
      </select>
      <button type="submit" onClick={handleClick}>Next</button>
    </div>
  );
}

export default Homepage;
