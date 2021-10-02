import instance from '../../request'

/* id */

const GetSheetDetail = (params) => instance({
    method: 'GET',
    url: '/playlist/detail',
    params
})

export default GetSheetDetail