import React, { useEffect, useState } from 'react';
import JobsCards from '../HotJobsCards/JobsCards';

const HotJobs = () => {


  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then(res => res.json())
      .then(data => {
      setJobs(data)
    })
  },[])
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5'>
          {
        jobs.map(job=><JobsCards key={job._id} job={job}></JobsCards>)
      }
    </div>
    </div>
  );
};

export default HotJobs;