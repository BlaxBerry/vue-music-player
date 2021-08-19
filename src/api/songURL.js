import instance from './request'

/*  id  */

export const GetSongURL = (params) => instance({
    method: 'GET',
    url: '/song/url',
    params
})
