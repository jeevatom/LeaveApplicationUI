import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../src/styles/style.css';

const MasterLeavePeriod = () => {

  const [leaveTypeShort, setLeaveTypeShort] = useState('');
  const [leaveTypeDesc, setLeaveTypeDesc] = useState('');


  const handleSave = async (e) => {
    e.preventDefault();  
    const data = {
      leaveTypeShort,
      leaveTypeDesc,
    };

    try {
      const response = await fetch('http://localhost:8080/api/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);  // Log response from Api
    } catch (error) {
      console.error('Error :', error);  // Handle any errors that occur during the request
    }
  };

  return (
    <div className="container mt-4">
      <form
        name="frmLeaveApplication"
        id="frmLeaveApplication"
        autoComplete="off"
        className="needs-validation"
        noValidate
        onSubmit={handleSave}  
      >
        <div className="card mb-4">
          <div className="card-header bg-primary text-white">
            <span className="d-flex justify-content-center">Leave Type Master</span>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12"></div>

              <div className="form-group row pb-3">
                <div className="col-md-3">
                  <label>
                    Leave Type Short <span className="red">*</span>
                  </label>
                </div>
                <div className="col-md-3">
                  {/* Input for Leave Type Short */}
                  <input
                    type="text"
                    className="form-control"
                    value={leaveTypeShort}  // Bind the input value to the state
                    onChange={(e) => setLeaveTypeShort(e.target.value)}  // Update the state on change
                    required
                  />
                </div>
              </div>

              <div className="form-group row pb-2">
                <div className="col-md-3">
                  <label>
                    Leave Type Description <span className="red">*</span>
                  </label>
                </div>
                <div className="col-md-3">
                  {/* Input for Leave Type Description */}
                  <input
                    type="text"
                    className="form-control"
                    value={leaveTypeDesc}  // Bind the input value to the state
                    onChange={(e) => setLeaveTypeDesc(e.target.value)}  // Update the state on change
                    required
                  />
                </div>
              </div>

              <div className="form-group d-flex justify-content-center">
                <button type="submit" className="btn btn-success lift rounded-pill" id="SaveId">
                  Save
                </button>
                <button type="button" className="btn btn-primary lift ms-2 rounded-pill">
                  View
                </button>
                <button type="button" className="btn btn-danger lift ms-2 rounded-pill">
                  Refresh
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MasterLeavePeriod;
