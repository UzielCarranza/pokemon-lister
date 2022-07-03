
import axios from 'axios';

export const getServerData = url => async () => {
    const response = await axios.get(url);
    console.log(response.data)
    return response.data;

}