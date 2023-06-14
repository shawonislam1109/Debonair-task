import { Button } from "@mui/material";
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Employee = () =>
{
    const { data: Employeelist = [], refetch, isLoading } = useQuery({
        queryKey: [ 'allUsers' ],
        queryFn: async () =>
        {
            const res = await fetch('http://59.152.62.177:8085/api/Employee/EmployeeData')
            const data = res.json();
            return data
        }
    })
    console.log(Employeelist)

    return (
        <div>
            <h1 style={ { textAlign: "center", color: "#d0689f", fontSize: "50px" } }>
                Employee List
            </h1>
            <Link style={ { color: 'black', display: 'flex', placeContent: 'center', outline: 'none' } } to='/employee'>
                <Button
                    size="large"
                    variant="elevated"
                    sx={ { fontSize: "20px", font: "bold", backgroundColor: "#d0689f" } }
                    startIcon={ <AddIcon /> }>
                    Create Employee
                </Button>
            </Link>
        </div>
    );
};

export default Employee;
