import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplications = () => {
  const applicationsData = useLoaderData();
  const handleChangeStatus = (e, id) => {
  console.log(e.target.value,id)
    const statusData = { status: e.target.value };
    fetch(`http://localhost:3000/job_application/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(statusData)
    }).then(res => res.json()).then(data => {
      console.log(data)
      if (data.modifiedCount) {
        Swal.fire({
          title: 'status update successful',
          position: 'top',
          icon: 'success',
          
          
        })
      }
    })
  
  }
  return (
    <div>
      <h2 className="text-3xl">{applicationsData.length}</h2>
      
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Number</th>
        <th>email</th>
        <th>status</th>
        <th>update status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
            {
               applicationsData.map((app,idx)=>(   <tr key={app._id}>
                 <th>{ idx+1}</th>
                 <td>{ app.applicants_email}</td>
        <td>Quality Control Specialist</td>
                 <td><select
                   
                   onChange={(e)=>handleChangeStatus(e,app._id)}
                   defaultValue={app?.status || 'change status'} className="select select-bordered select-xs w-full max-w-xs">
  <option disabled >change status</option>
  <option>under review</option>
  <option>set interview</option>
  <option>Hired</option>
  <option>rejected</option>
</select></td>
      </tr>))
  }
    
    </tbody>
  </table>
</div>
    </div>
  );
};

export default ViewApplications;