import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';




export default function Suivant() {
  
      /*const [records,setRecords]= React.useState(data);
  function handleFilter (event) {}*/
/*useEffect{()=>{
.then{}
}*/

  
  return ( <>
  < h1> eau reosmosé (Wk)</h1>
    <div className=' container mt-5' style={{ height: 300, width: '50%'   }}>
   <DataGrid editMode="row" rows={rows} columns={columns} />
   <  div className='container mt-5'>
   
     </div>
    </div></>
  );
}

const columns = [
  { field: 'name', headerName: '', width: 100, editable: true },
  
  {
    field: 'PH',
    headerName: 'PH',
    type: 'number',
    editable: true, 
    align: 'left',
    height:50,
    headerAlign: 'left',
  },
  {
    field: 'Condictivite',
    headerName: 'C',
    type: 'number',
    width: 100,
    height:50,
    headerAlign: 'left',
    editable: true,
  },
 
];

const rows = [
  {
    id: 1,
    name:'BWRO'  ,
    ph: 0,
    type: 'number',
    editable: true,
    width: 100,
    height:50,
    //dateCreated: randomCreatedDate(),
    ///lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    name:'7260 TK 02' ,
    //name: randomTraderName(),
    type: 'number',
    ph: 0,
    editable: true,
    width: 100,
    height:50,
   // dateCreated: randomCreatedDate(),
    //lastLogin: randomUpdatedDate(),
  },
  
 
];