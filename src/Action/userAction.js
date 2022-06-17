import {postRequest} from '../coreFiles/helper';

export const RegisterAction = (data) => {
    return postRequest( data).then(res => { return res.data })
 }
 