import instance from '../../request'

/*  mvid  */

const GetMVRecommend = (params) => instance({
    method: 'GET',
    url: '/simi/mv',
    params
})

export default GetMVRecommend