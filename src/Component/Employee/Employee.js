import {Button} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import {Link} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import MaterialTable from "material-table";

const Employee = () => {

  const columns  = [
    {field: "empID", title: 'EmpID'},
    {field: "firstName", title: "Fast-Name"},
    {field: "lastName", title: "Last-Name"},
    {
      field: "employeeType",
      title : 'EmployeeType'
    },
    {
      field: "districeID",
     title: 'DistrictID'
    },
    {
      field: "district",
     title: 'District'
    },
    {
      field: "disvision",
     title : 'Division'
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
     <MaterialTable
      style={{width:'95%', marginLeft:'auto', marginRight:'auto'}}
     title='Employee-List'
     data={employee}
     columns={columns}
     options={
      {
       exportButton: true, 
      }
      
     }
     
     />

    
      </div>
    </div>
  );
};

export default Employee;
