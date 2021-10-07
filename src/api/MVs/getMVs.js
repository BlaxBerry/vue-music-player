import instance from '../request'

/*
area:
type:
order:顺序
limit:(default 30)
offset:((page-1)*limit)
*/

const GetMVAll= (params) => instance({
    method: 'GET',
    url: '/mv/all',
    params
})

export default GetMVAll