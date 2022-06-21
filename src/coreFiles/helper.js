import axios from 'axios'


export const request = ( path,data, method) => {
   // const serverPath = 'https://espsofttech.org:6030/api/registration'
  const serverpth= 'https://espsofttech.org:6030/api'

    var options = {
        method: method,
        url: `${serverpth}/${path}`,
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

export const postRequest = async (path,data) => await request(path, data, 'POST')
