import React, { useEffect, useState } from 'react';
import AuthJobs from '../Components/AuthJobs';
import Swal from 'sweetalert2';
import Loading from '../Loading/Loading';

const MyApplication = () => {
  const { user, loading } = AuthJobs();
  if (loading) {
    return <Loading></Loading>
  }
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/job_application?email=${user?.email}`)
      .then(res => res.json()).then(data => {
      setJobs(data)
    })
  }, [user?.email])
  
  const handleDelete = (id) => {Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:3000/job_application/${id}`, {
      method: 'DELETE',
      
    }).then(res => res.json())
      .then(data => {
        // console.log(data)
        if(data.deletedCount>0
        ) {
      
           Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

          {
            const remaining = jobs.filter(job => job._id !== id);
            setJobs(remaining)
}

}
    })




   
  }
});
   
  }
  return (
    <div>
      <h2 className="text-3xl">my Application:{jobs.length}</h2>
      

      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/*dynamic row  */}
      
    {jobs.map(job=> (<tr key={job._id}>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={job?.company_logo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
            <div className="font-bold">{job?.title}</div>
            <div className="text-sm opacity-50">{ job?.location}</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button onClick={()=>handleDelete(job?._id)} className="btn btn-ghost btn-xs">X</button>
        </th>
      </tr>))}
    
    </tbody>

  
  </table>
</div>
    </div>
  );
};

export default MyApplication;