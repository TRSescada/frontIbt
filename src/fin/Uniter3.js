import Table from 'react-bootstrap/Table';
import { DataGrid } from '@mui/x-data-grid';
function Uniter3() {


 
  return (

    <>

      <h1>  acide sulfirique de l'uniter 7500 </h1>
      <p> Direction controle Qualite & Qantite Divion Qualite Controle Qualite   </p>
      <ul>
        <li>
          bacs de circulation
        </li>
      </ul>

      <tr>
        <td> 
       input   facteur de correction ( soude )=  </td>
        <td></td>
      </tr>

      <Table border= {2}>
        <thead>
          <tr> 
            <th>#</th>
            <th>  heure d echontillonnage </th>
            <th> Acidite(%) (D02/1) </th>
            <th> Acidite(%) (D02/2)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>           POSTE I</td>
            <td><input  type='text' /> </td>
            <td><input  type='text' /></td>
            <td><input  type='text' /></td>
          </tr>
          <tr>
            <td>Poste II</td>
            <td> <input  type='text' /></td>
            <td> <input  type='text' /></td>
            <td><input  type='text' /> </td>
            
          </tr>
          <tr>
            <td>Poste III</td>
            <td ><input  type='text' /></td>
            <td><input  type='text' /></td>
            <td><input  type='text' /></td>
          </tr>
        </tbody>
      </Table>
  <h3>Eau déminee (WD)</h3>
      <Table striped bordered hover border={2}>
      
        <thead>
          <tr>
            <th> Poste</th>

            <th>PH eau sortie echangeur 5-1 </th>
            <th>PH eau sortie echangeur 5-2</th>
            <th>PH eau sortie echangeur 5-3</th>
            <th>PH eau sortie echangeur 5-5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 1</td>
            <td ><input  type='text' /> </td>
            <td ><input  type='text' /> </td>
            <td> <input  type='text' /></td>
            <td> <input  type='text' /></td>
          </tr>
          <tr>
            <td> 2</td>
            <td ><input  type='text' /> </td>
            <td ><input  type='text' /> </td>
            <td> <input  type='text' /></td>
            <td> <input  type='text' /></td>
          </tr>
          <tr>
            <td> 3</td>
            <td ><input  type='text' /> </td>
            <td > <input  type='text' /></td>
            <td><input  type='text' /> </td>
            <td> <input  type='text' /></td>
          </tr>
          <tr>
            <td> 4</td>
            <td > <input  type='text' /></td>
            <td ><input  type='text' /> </td>
            <td><input  type='text' /> </td>
            <td> <input  type='text' /></td>
          </tr>
          <tr>
            <td> 5</td>
            <td ><input  type='text' /> </td>
            <td ><input  type='text' /> </td>
            <td > <input  type='text' /></td>
            <td > <input  type='text' /></td>
           
          </tr>
          <tr>
            <td> 6</td>
            <td ><input  type='text' /> </td>
            <td ><input  type='text' /> </td>
            <td> <input  type='text' /></td>
            <td> <input  type='text' /></td>
          </tr>
          <tr>
            <td> 7</td>
            <td ><input  type='text' /> </td>
            <td > <input  type='text' /></td>
            <td><input  type='text' /> </td>
            <td> <input  type='text' /></td>
          </tr>
          <tr>
            <td> 8</td>
            <td ><input  type='text' /> </td>
            <td ><input  type='text' /> </td>
            <td><input  type='text' /> </td>
            <td><input  type='text' /> </td>
          </tr>
          <tr>
            <td> 9</td>
            <td ><input  type='text' /> </td>
            <td > <input  type='text' /></td>
            <td><input  type='text' /> </td>
            <td><input  type='text' /> </td>
          </tr>
        </tbody>
      </Table>


 <h3>Bache  alimentaire 7330 D02:</h3>
      <Table striped bordered hover border={2}>
       
        <thead>
          <tr>
            <th>#</th>
            <th width= {2}>Heure</th>
            <th>Co05</th>
            <th>D01</th>
            <th>D02</th>
            <th>fil 01</th>
            <th> fil 02</th>
            <th>Soufre  dans fosse de reprise  </th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th>teneur en cendre(ppm) </th>

            <tr>
            <td> 6h a 14h </td>
  <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
            </tr>

            <tr>
              <td> 14h a 22h </td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
            </tr>
            <tr>
              <td> 22h a 6h </td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
            </tr>
          </tr>

          <tr>
            <th>teneur  de bitume (ppm) </th>
            <tr>
              <td> 6h a 14h </td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td> 14h a 22h </td>
              <td><input  type='text' /></td>
              <td> <input  type='text' /></td>
              <td> <input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
            </tr>
            <tr>
              <td> 22h a 6h </td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
            </tr>
          </tr>
          <tr>
            <th>teneur en  acide(ppm) </th>
            <tr>
              <td> 6h a 14h </td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
            </tr>

            <tr>
              <td> 14h a 22h </td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
            </tr>
            <tr>
              <td> 22h a 6h </td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
              <td><input  type='text' /></td>
            </tr>
          </tr>
        </tbody>
      </Table>

    </>
  );
}

export default Uniter3;