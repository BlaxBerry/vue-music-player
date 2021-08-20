import instance from './request'

/*  mvid  */

export const GetMVRecommend = (params) => instance({
    method: 'GET',
    url: '/simi/mv',
    params
})
