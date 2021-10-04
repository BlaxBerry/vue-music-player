import instance from '../../request'

/*  id  */

const GetArtistInfo = (params) => instance({
    method: 'GET',
    url: '/artists',
    params
})

export default GetArtistInfo