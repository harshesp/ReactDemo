import axios from 'axios'


export const request = ( data, method) => {
   // const serverPath = 'https://espsofttech.org:6030/api/registration'
  

    var options = {
        method: method,
        url: 'https://espsofttech.org:6030/api/registration',
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: 'json'
    };
   
    if (method === 'GET') {
        options['params'] = data
    } else {
        options['data'] = data
    }
  
    let res = axios(options)
    res.then(res1 => { })
    return res
}

export const postRequest = async (data) => await request( data, 'POST')
