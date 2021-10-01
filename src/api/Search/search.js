import instance from '../request'

/*
keywords:
type:(song:1,sheet:1000,mv:1004)
limit:(default 30)
offset:((page-1)*limit)
*/

const Search = (params) => instance({
    method: 'GET',
    url: '/search',
    params
})

export default Search