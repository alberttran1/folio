import React from 'react';

export const Form = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name <br></br></label>
          <input 
            className="form-control" 
            id="name" 
            placeholder="Your first and last name"/>
        </div> <br></br>
        <div className="form-group">
          <label htmlFor="email">Email address <br></br></label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div> <br></br>
        <div className="form-group">
          <label htmlFor="name">Password <br></br></label>
          <input className="form-control" id="password" />
        </div> <br></br>
        <div className="form-group">
          <button class="form-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>

  );
};
export default Form;
