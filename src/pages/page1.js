import React,{useState} from 'react'
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';
import {useNavigate} from "react-router-dom";
import data from "../mock-data.json";
import {nanoid} from "nanoid";


function Page1() {
  let navigate = useNavigate();
  function handleBack(){
    navigate('/home');
  }
  const[contacts,setContacts] = useState(data);

  const handleNext = (event) =>{
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      startDate: addData.startDate,
    endDate : addData.endDate,
    location: addData.location,
    };

    const newContacts = [...contacts,newContact];
    setContacts(newContacts);
    navigate('/page3');
  }
  
  const[addData,setAddData] = useState({
    startDate:'',
    endDate :'',
    location:'',

  })

  const handleFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('startDate');
    const fieldValue = event.target.value;

    const newData = {...addData};
    newData[fieldName]=fieldValue;

    setAddData(newData);


  }
  return (
    <div>
      <form onSubmit={handleNext}>
      <DateTimePickerComponent placeholder='Select Start Date and Time' required='required' name="startDate" onChange={handleFormChange}></DateTimePickerComponent>
      <DateTimePickerComponent placeholder='Select End Date and Time' required='required' name="endDate" onChange={handleFormChange}></DateTimePickerComponent>
      <input placeholder='Match Location' name="location" onChange={handleFormChange}></input>
      <textarea onChange={handleFormChange} name="comments" ></textarea>
      <button onClick={handleBack}>Back</button>
      <button type="submit">Next</button>
      </form>
    </div>
  )
}

export default Page1
