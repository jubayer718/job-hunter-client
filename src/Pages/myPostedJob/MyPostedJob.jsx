import React, { useEffect, useState } from 'react';
import AuthJobs from '../../Components/AuthJobs';
import { Link } from 'react-router-dom';

const MyPostedJob = () => {
  const { user } = AuthJobs();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/jobs/?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
      setJobs(data)
    })
  },[user?.email])
  return (
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
        <th>Deadline</th>
        <th>Favorite Color</th>
        <th>application count</th>
        <th> 
         
     applications
      </th>
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
         
        <span className="badge badge-ghost badge-sm">{job.applicationDeadline}</span>
        </td>
        <td>Purple</td>
       <td>
         
        <span className="badge badge-ghost badge-sm">{job.applicationCount}</span>
      </td>
     
      <td>
        <Link
          to={`/viewApplication/jobs/${job._id}`}
        ><button className='btn btn-link'>viewApplication</button></Link>  
        </td>
      </tr>))}
    
    </tbody>

  
  </table>
</div>
  );
};

export default MyPostedJob;