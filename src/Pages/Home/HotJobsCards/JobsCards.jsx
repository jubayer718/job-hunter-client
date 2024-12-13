import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { IoMdTime } from 'react-icons/io';
import { Link } from 'react-router-dom';

const JobsCards = ({ job }) => {
  console.log(job)


  const { _id, requirements, company, description, salaryRange, location, title,company_logo, applicationDeadline:deadline } =job
  return (
   <div className="card bg-base-100  shadow-xl">
      <div className='flex gap-3'>
         <figure>
        <img
          className='w-14'
      src={company_logo}
      alt="Shoes" />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className='flex items-center gap-2'> <HiLocationMarker /> { location}</p>
        </div>
 </div>
  <div className="card-body">
    <h2 className="card-title">
{title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
        <p>{description}</p>
        <div className='flex gap-2 flex-wrap items-center'>{requirements.map(skill =>
          <p key={skill._id} className='border-2 rounded-md  p-3 hover:bg-gray-200 hover:text-purple-600'>{skill}</p>)}</div>
        <div></div>
        
        <div className="card-actions justify-end">
          <p className='flex items-center gap-1 my-3'>Salary: <FaDollarSign /> {salaryRange.min}-{salaryRange.max} { salaryRange.currency}</p>
          <p className='flex items-center gap-1 my-3'>Deadline: <IoMdTime /> { deadline}</p>
          <Link to={`/jobs/${_id}`} className='btn btn-primary'>Apply Now</Link>
    </div>
  </div>
</div>
  );
};

export default JobsCards;