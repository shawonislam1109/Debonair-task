import {Box, Button, TextField} from "@mui/material";
import React, {useState} from "react";

const CreateEmployee = () => {
  const [firstName, setFirstname] = useState({});
  const [lastname, setLastname] = useState({});
  const [empID, setEmpID] = useState({});
  const [division, setDivision] = useState({});
  const [District, setDistrict] = useState({});

  const createEmployee = () => {
    const employeeData = {
      firstName,
      lastname,
      empID,
      division,
      District,
    };
    console.log(employeeData);

    fetch('http://59.152.62.177:8085/api/SaveEmployeeInformation',{
      method: 'PUT',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(employeeData)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  };

  return (
    <div>
      <h1 style={{textAlign: "center", font: "30px"}}>Employee Create</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {mt: 20, width: "25ch"},
        }}
        noValidate
        autoComplete="off"
      />
      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridColumn: "2",
          width: "30%",
          marginLeft: "auto",
          marginRight: "auto",
          gap: "20px",
        }}>
        <TextField
          required
          id="outlined-required"
          label="First Name"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Last name"
          onChange={(e) => setLastname(e.target.value)}
        />
        <TextField
          id="outlined-disabled"
          label="EmpID"
          type="number"
          onChange={(e) => setEmpID(e.target.value)}
        />
        <TextField
        required
          id="outlined-password-input"
          label="Division"
          type="text"
          onChange={(e) => setDivision(e.target.value)}
        />
        <TextField
        required
          id="outlined-read-only-input"
          label="District"
          onChange={(e) => setDistrict(e.target.value)}
        />
        <Button onClick={createEmployee} variant="contained" color="success">
          Create
        </Button>
      </div>
    </div>
  );
};

export default CreateEmployee;
