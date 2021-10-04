import instance from '../../request'

/*  id  */

const GetMVURL = (params) => instance({
    method: 'GET',
    url: '/mv/url',
    params
})

export default GetMVURL
