import axios from 'axios';

const URL= 'http://localhost:5000'; 

export const authenticateSignup = async (data: any): Promise<any> => {
    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (error) {
        console.log('Error while calling api ', error);
    }
}

