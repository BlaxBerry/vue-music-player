import Vue from 'vue'
import router from '../router/index'
import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://autumnfish.cn',
    timeout: 5000
})

// request interceptors
instance.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})
// response interceptors
instance.interceptors.response.use(res => {
    return (res.data ? res.data : res)
}, err => {
    console.log('响应error');
})



// Swipe 轮播
// autumnfish.cn/banner
export const GetSwipe = () => instance.get('/banner')

// recommend list 推荐
export const GetRecommendList = () => instance.get('/personalized')

// new song
export const GetnewSong = () => instance.get('/personalized/newsong')

// play 播放
// id
export const GetPlaySongUrl = (id) => instance({
    url: '/song/url',
    method: 'get',
    params: {
        id: id
    }
})

// 推荐MV
export const GetRecommendMV = () => instance.get('/personalized/mv');


// 分类精品歌单
// cat 分类标签
// limit 数量
export const GetHighQualitySong = (params) => instance.get('/top/playlist/highquality', { params });

// 分类歌单列表
// limit: 单页显示数量
// offset分页 （页数-1）*limit
// cat分类标签
export const GetCatrgoryList = (params) => instance.get('/top/playlist/highquality', {params});

// list 歌曲列表
// type 地区id
// 全部:0
// 话语：7
// 欧美：96
// 日本：8
// 韩国：16
export const GetList= (params) => instance.get('/top/song',{params});


// MV 
// area 地区
// type 类型 （官方、原生、现场）
// order 排序 （上升最快、最热、最新）
// limit 数量 默认30
// offset 页数 （页数-1）*limit
export const GetMV= (params) => instance.get('/mv/all',{params});


// 搜索音乐
// keywords: 名
// limit 数量，默认30
// offset： 页数
// type类型 music：1, album:1000, MV：1004
export const SearchMusic= (params) => instance.get('/search',{params});