import React from 'react';
import AuthJobs from '../../Components/AuthJobs';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const JobApply = () => {
  const { id } = useParams();
  const navigate = useNavigate();
const { user}=AuthJobs()
console.log(user)
  const handleApplyJob = e => {
    e.preventDefault();
    const form = e.target;
    const linkDin = form.linkDin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    // console.log(linkDin, github, resume )
    const applyForJob = {
      job_id: id,
      applicants_email: user?.email,
      linkDin,
      github,
      resume,

    }
    fetch('http://localhost:3000/job_applications', {
      method: 'POST',
      headers: {
        'content-type': "application/json"
        
      },
      body:JSON.stringify(applyForJob)
    }).then(res => res.json()).then(data => {
      if (data.insertedId) {
        Swal.fire('Application submitted')
        navigate('/myApplication')
      }
      console.log(data)
    })
  }
  return (
   
        <div className="card bg-base-100 w-full  shadow-2xl">
                <h1 className="text-5xl font-bold text-center my-3">Apply Now and good luck!!!</h1>

      <form onSubmit={handleApplyJob} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkDin URL</span>
          </label>
          <input type="url" name='linkDin' placeholder="LinkDin URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input type="url" name='github' placeholder="github URL" className="input input-bordered" required />
       
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input type="url" name='resume' placeholder="resume URL" className="input input-bordered" required />
       
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>

  );
};

export default JobApply;