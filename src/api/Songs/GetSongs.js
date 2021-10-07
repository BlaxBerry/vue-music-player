import instance from '../request'

/*
type
0: 全部
7: 华语
96: 欧美
8: 日本
16: 韩国
*/

const GetSongs = (params) => instance({
    method: 'GET',
    url: '/top/song',
    params
})

export default GetSongs