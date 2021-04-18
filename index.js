import axios from 'axios'
import csv from 'csv-parser'
import fs from 'fs';
const accounts = [];

fs.createReadStream('SalesloftTest.csv')
  .pipe(csv())
  .on('data', (data) => accounts.push(data))
  .on('end', async () => {
    console.log('Call to server')
    for(let account of accounts){
        console.log(account)
        const result = await axios({
            method: 'post',
            url: 'https://api.salesloft.com/v2/accounts.json',
            data: account,
            headers: {
                'Authorization':"Bearer API_KEY"
            }
          });  
          
        console.log('result.data',result.data)  
    }
    
  });



  





