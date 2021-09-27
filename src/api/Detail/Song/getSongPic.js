import instance from '../../request'

/* ids */

const GetSongPic = (params) => instance({
    method: 'GET',
    url: '/song/detail',
    params
})

export default GetSongPic