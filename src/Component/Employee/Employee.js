import {Button} from "@mui/material";
import React from "react";
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
          outlineColor: 'black'
        }}
        to="/createEmployee">
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
      
      
      rows = {employee && employee.map(data => data)}
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
