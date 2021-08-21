import instance from './request'

/*  
id 
limit: (default 20)
offset: (page-1)*limit
*/  

export const GetMVComments = (params) => instance({
    method: 'GET',
    url: '/comment/mv',
    params
})
