import instance from '../../request'

/*  id  */
 const GetSongURL = (params) => instance({
    method: 'GET',
    url: '/song/url',
    params
})

export default GetSongURL