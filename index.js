import axios from 'axios'

const callToServer = async () => {
    const result = await axios({
        method: 'post',
        url: 'https://api.salesloft.com/v2/accounts.json',
        data: {
          name: 'Perico',
          domain: 'perico.com'
        },
        headers: {
            'Authorization':"Bearer v2_ak_103515_2d6b6360594c8162a28a03da5230c1d1aa3b9f344cb533838fefe4e975a237dd"
        }
      });
    return result;
}

const response = callToServer();

console.log(response)


