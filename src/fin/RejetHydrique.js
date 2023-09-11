import Table from 'react-bootstrap/Table';
import { DataGrid } from '@mui/x-data-grid';
function RejetHydrique() {


 
  return (

    <>


<label>echantions du </label>
<imput type='Number' />


    <h1> Rapport  des rejets hydriques de l'usine</h1>



<ul> <li>  7980 DO1 (Pit de rejet) : </li></ul>
    <Table  border={2}>
      <thead>
        <tr>
        
          
        <th></th>
          <th>PH</th>
        </tr>
      </thead>
      <tbody>
       
        <tr> 
          <td >Poste I</td>
          <td><input  type='number' /></td>
          
          </tr>
          <tr>
          <td>PosteII </td>
          <td><input  type='number' /></td>
         
          </tr>
          <tr>
          <td>Poste III</td>
          <td><input  type='number' /></td>
      
          
          </tr>
          
          </tbody>
          </Table>
    </>
  )}
  export default RejetHydrique;