import axios from 'axios';

const url = 'http://localhost:8080/times';

class TimeDemoService{

    getTimeDemos(){
        return axios.get(url);
    }

    createTimeDemo(timeDemo){
        return axios.post(url, timeDemo);
    }

}

export default new TimeDemoService();