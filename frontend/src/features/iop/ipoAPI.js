import axios from 'axios';

export const ipoApi = async() =>{
    try{
        const response = await axios.get('http://localhost:5000/api/companies/details');
        console.log("Api fetched successfully");
        return response.data;
    }
    catch(err){
        console.log("There is an error in fetching ipoApi.")
    }
}