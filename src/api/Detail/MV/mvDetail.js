import instance from '../../request'

/*  mvid  */

const GetMVDetail = (params) => instance({
    method: 'GET',
    url: '/mv/detail',
    params
})

export default GetMVDetail