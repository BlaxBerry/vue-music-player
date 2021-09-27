import instance from '../../request'

/* id */

export const GetSheetDetail = (params) => instance({
    method: 'GET',
    url: '/playlist/detail',
    params
})
