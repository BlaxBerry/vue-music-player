import instance from '../../request'

/* id */

const GetSongComment = (params) => instance({
    method: 'GET',
    url: '/comment/hot?type=0',
    params
})

export default GetSongComment