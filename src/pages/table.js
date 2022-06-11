import React,{useState} from 'react';
import data from "../mock-data.json";

function Table() {
    
const[contacts,setContacts] = useState(data);
    
    setContacts();
  return (
    <div>
    <table>
        <thead>
          <th>Team1</th>
          <th>Team2</th>
          <th>Match Type </th>
          <th>Tournament name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Location</th>
          <th>Comments</th>
          </thead>
          <tbody>
            { contacts.map((contact)=> <tr>
                <td>{contact.team1}</td>
                <td>{contact.team2}</td>
                <td>{contact.matchType}</td>
                <td>{contact.tournamentName}</td>
                <td>{contact.startDate}</td>
                <td>{contact.endDate}</td>
                <td>{contact.location}</td>
                <td>{contact.comments}</td>
            </tr> )}
           
          </tbody>
        
      </table>
      </div>
  )
}

export default Table
