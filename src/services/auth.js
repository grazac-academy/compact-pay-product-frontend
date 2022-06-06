import axios from 'axios';
import {baseLink} from '../axios/base';


export const CreateAccount = async (data) => {
    const response = await axios({
        method: 'post',
        url: `${baseLink}/auth/register`,
        headers: { },
        data : data,
    });
    return response;
   
};
