import {Button} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {Link} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {DataGrid} from "@mui/x-data-grid";

const Employee = () => {

  const columns  = [
    {field: "empID", headerName: "empID", width: 70},
    {field: "firstName", headerName: "First name", width: 130},
    {field: "lastName", headerName: "Last name", width: 130},
    {
      field: "employeeType",
      headerName: "EmployeeType",
      width: 150,
    },
    {
      field: "districeID",
      headerName: "DistricID",
      width: 150,
    },
    {
      field: "district",
      headerName: "District",
      width: 150,
    },
    {
      field: "disvision",
      headerName: "Division",
      width: 150,
    },
  ];

  const rows = [
    {id: 1, lastName: "Snow", firstName: "Jon", age: 35},
    {id: 2, lastName: "Lannister", firstName: "Cersei", age: 42},
    {id: 3, lastName: "Lannister", firstName: "Jaime", age: 45},
    {id: 4, lastName: "Stark", firstName: "Arya", age: 16},
    {id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null},
    {id: 6, lastName: "Melisandre", firstName: null, age: 150},
    {id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44},
    {id: 8, lastName: "Frances", firstName: "Rossini", age: 36},
    {id: 9, lastName: "Roxie", firstName: "Harvey", age: 65},
  ];
  const {data: Employeelist = []} = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await fetch(
        "http://59.152.62.177:8085/api/Employee/EmployeeData"
      );
      const data = res.json();
      return data;
    },
  });
  const employee = Employeelist.readEmployeeData;
 

  return (
    <div>
      <h1 style={{textAlign: "center", color: "#d0689f", fontSize: "50px"}}>
        Employee List
      </h1>
      <Link
        style={{
          color: "black",
          display: "flex",
          placeContent: "center",
          outline: "none",
        }}
        to="/employee">
        <Button
          size="large"
          variant="elevated"
          sx={{fontSize: "20px", font: "bold", backgroundColor: "#d0689f"}}
          startIcon={<AddIcon />}>
          Create Employee
        </Button>
      </Link>

   
      <div style={{height: 400, width: "100%"}}>
      {employee && <DataGrid
    sx={{
      width:'90%',
      mx: 'auto',
      mt: '50px'
      
    }}
      
      rows={ employee && employee.map((data , i) => data)}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />}
      </div>
    </div>
  );
};

export default Employee;
