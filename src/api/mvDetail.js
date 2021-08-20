import instance from './request'

/*  mvid  */  

export const GetMVDetail = (params) => instance({
    method: 'GET',
    url: '/mv/detail',
    params
})
