//Imports
import axios from "axios";

//Export single api call function.
export default function getEmployees(employeeCount)
{
    return axios.get(`https://randomuser.me/api/?results=${employeeCount}&inc=name,email,phone,picture,gender&nat=us`);
}