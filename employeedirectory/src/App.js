import React, { Fragment, useEffect, useState } from "react";
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';
import SearchResultCard from "./components/SearchResultCard";
import getEmployees from "./utils/API";

export default function App()
{
    //Original employee array.
    const [baseSearch, firstArray] = useState([]);
    //Employee array state.
    const [employeeList, createEmployeeList] = useState([]);

    useEffect(() =>
    {
        //Put 10 employeeList into the array.
        getEmployees(10)
            .then(res => { firstArray(res.data.results); createEmployeeList(res.data.results); console.log(res.data.results); })
            .catch(error => { console.error(error); });
    }, []);

    //Sort by last name and then first name
    function lastNameSort(sortType)
    {
        if (sortType === 1)
            createEmployeeList([...employeeList.sort((employeeStart, employeeEnd) => employeeEnd.name.last.localeCompare(employeeStart.name.last))]);
        else
            createEmployeeList([...employeeList.sort((employeeStart, employeeEnd) => employeeStart.name.last.localeCompare(employeeEnd.name.last))]);
    }

    //Filter for gender.
    function genderFilter(gender)
    {
        createEmployeeList(baseSearch.filter(employee => employee.gender === gender));
    }

    //Return baseSearch array.
    function reset()
    {
        createEmployeeList(baseSearch);
    }

    //Return the full component.
    return (
        <Fragment>
            <h1 className="title">Employee Directory</h1>
            <div className="buttons">
                <DropdownButton title="Sort by">
                    <Dropdown.Item onClick={() => lastNameSort(1)}>Last Name Descending</Dropdown.Item>
                    <Dropdown.Item onClick={() => lastNameSort(2)}>Last Name Ascending</Dropdown.Item>
                </DropdownButton>
                <DropdownButton title="Filter by">
                    <Dropdown.Item onClick={() => genderFilter("female")}>Female</Dropdown.Item>
                    <Dropdown.Item onClick={() => genderFilter("male")}>Male</Dropdown.Item>
                </DropdownButton>
                <Button onClick={reset}>Reset</Button>
            </div>
            {/* wrapper */}
            <div className="wrapper">
                {employeeList.map((employee, index) => (
                    <SearchResultCard
                        id={index}
                        key={index}
                        firstName={employee.name.first}
                        lastName={employee.name.last}
                        phone={employee.phone}
                        email={employee.email}
                        thumbnail={employee.picture.large}
                    />
                ))}
            </div>
        </Fragment>
    );
}