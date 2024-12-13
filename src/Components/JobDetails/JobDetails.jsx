import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {

  const loadedDetailsData = useLoaderData();
  console.log(loadedDetailsData)
  const { _id, requirements, company, description, salaryRange, location, title, company_logo,applicationDeadline:deadline } = loadedDetailsData;


  return (
    <div className='space-y-3 border-2 p-5 rounded-md my-4'>
      <h2 className="text-2xl">Jobs Details for: {title}</h2>
      <p>Apply for: {company}</p>
      <p>Description: {description }</p>
      <p>DeadLine: {deadline}</p>
    <Link to={`/jobApply/${_id}`}>      <button className='btn btn-primary'>Apply Now</button>
</Link>
    </div>
  );
};

export default JobDetails;