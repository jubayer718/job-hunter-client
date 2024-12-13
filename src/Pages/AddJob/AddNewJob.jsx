import React from 'react';

const AddNewJob = () => {
  return (
     <div className="card bg-base-100 w-full shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input type="text" placeholder="Job Title" className="input input-bordered" required />
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
         <select className="select select-ghost w-full max-w-xs">
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
         <select className="select select-ghost w-full max-w-xs">
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
        <textarea className="textarea textarea-bordered" name='description' required placeholder="Description"></textarea>
         
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
        
         <select className="select select-ghost w-full max-w-xs">
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
        <textarea className="textarea textarea-bordered" name='requirement' required placeholder="put each requirement a new line"></textarea>
         
        </div>
        {/* job Responsibilities */}
           <div className="form-control">
          <label className="label">
            <span className="label-text">responsibilities</span>
          </label>
        <textarea className="textarea textarea-bordered" name='responsibilities' required placeholder="put each responsibilities a new line"></textarea>
         
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