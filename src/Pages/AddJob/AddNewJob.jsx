import React from 'react';
import Swal from 'sweetalert2';

const AddNewJob = () => {
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    console.log(formData)

    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData)

    const { min, max, currency, ...newJob } = initialData
    newJob.salaryRange = { min, max, currency }
    newJob.requirements = newJob.requirements.split('\n')
    newJob.responsibilities = newJob.responsibilities.split('\n');
    console.log(newJob)

    fetch('http://localhost:3000/addNewJob', {
      method: 'POST',
      headers: {
        'content-type':"application/json"
      },
      body: JSON.stringify(newJob)
    }).then(res => res.json()).then(data => {
      if (data.insertedId) {
        Swal.fire('job added successfully')
      }
    })
  }
  return (
     <div className="card bg-base-100 w-full shadow-2xl">
      <form onSubmit={handleAddJob} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input type="text" name='title' placeholder="Job Title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" name='location' placeholder="location" className="input input-bordered" required />
         
        </div>

          <div className="form-control">
          <label className="label">
            <span className="label-text">Job type</span>
          </label>
         <select name='type' className="select select-ghost w-full max-w-xs">
  <option disabled selected>Pick a job type</option>
  <option>Full Time</option>
  <option>Day shift</option>
  <option>Night shift</option>
  <option>Part Time</option>
</select>
         
        </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
         <select name='jobfield' className="select select-ghost w-full max-w-xs">
  <option disabled selected>Pick a job field</option>
  <option>Engineering</option>
  <option>Marketing</option>
  <option>Freelancing</option>
  <option>Teaching</option>
</select>
         
        </div>

        {/* description */}
         <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
        <textarea  className="textarea textarea-bordered" name='description' required placeholder="Description"></textarea>
         
        </div>


        {/* salary range */}
 <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
  <div className="form-control">
          <label className="label">
            <span className="label-text">Salary Range</span>
          </label>
          <input type="number" name='min' placeholder="min-salary" className="input input-bordered" required />
         
        </div>
  <div className="form-control">
         
          <input type="number" name='max' placeholder="Max-salary" className="input input-bordered" required />
         
        </div>

       
     <div className="form-control">
        
         <select name='currency' className="select select-ghost w-full max-w-xs">
  <option disabled selected>Pick up a currency </option>
  <option>BDT</option>
  <option>USD</option>
  <option>INR</option>
  <option>AUD</option>
</select>
         
        </div>
        </div>


        {/* job requirement */}
           <div className="form-control">
          <label className="label">
            <span className="label-text">Job requirements</span>
          </label>
        <textarea className="textarea textarea-bordered" name='requirements' required placeholder="put each requirement a new line"></textarea>
         
        </div>
        {/* job Responsibilities */}
           <div className="form-control">
          <label className="label">
            <span className="label-text">responsibilities</span>
          </label>
        <textarea className="textarea textarea-bordered" name='responsibilities' required placeholder="put each responsibilities a new line"></textarea>
         
        </div>


        {/* HR Name */}
          <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input type="text" name='hr' placeholder="HR Name" className="input input-bordered" required />
         
        </div>
        {/* HR Email */}
          <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input type="text" name='hrEmail' placeholder="HR Email" className="input input-bordered" required />
         
        </div>

        {/* Company logo URl */}
          <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo URL</span>
          </label>
          <input type="url" name='company_logo' placeholder="company logo URL" className="input input-bordered" required />
         
        </div>
        {/* submit button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewJob;