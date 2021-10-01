import instance from '../../request'

/*  id  */  

export const GetArtistInfo = (params) => instance({
    method: 'GET',
    url: '/artists',
    params
})
