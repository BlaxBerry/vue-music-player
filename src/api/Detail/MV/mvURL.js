import instance from '../../request'

/*  id  */

export const GetMVURL = (params) => instance({
    method: 'GET',
    url: '/mv/url',
    params
})
