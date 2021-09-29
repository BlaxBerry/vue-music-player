export default function saveLocalstorage(songSelected) {
    // 1. save song in loaclstorage
    let songListSaved = localStorage.getItem('musicplayer-songs-saved');
    if (!songListSaved) {
        // if there is not a list in localstorage, add and save list 
        let list = []
        list.push(songSelected)
        localStorage.setItem('musicplayer-songs-saved', JSON.stringify(list))
    } else {
        // if there is a list in localstorage, push list
        let list = JSON.parse(songListSaved)
        let isSaved = list.find(item => item.id === songSelected.id)
        if (isSaved) return
        list.push(songSelected)
        localStorage.setItem('musicplayer-songs-saved', JSON.stringify(list))
    }
}