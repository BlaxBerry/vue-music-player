import instance from './request'

/* ids */

export const GetSongDetail = (params) => instance({
    method: 'GET',
    url: '/song/detail',
    params
})
