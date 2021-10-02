export default function saveLocalstorage(params, name, type = 'SearchHistory') {
    let savedContent = localStorage.getItem(name);

    if (!savedContent) {
        // localstorage is empty
        let list = []
        list.push(params)
        localStorage.setItem(name, JSON.stringify(list))
    } else {
        // localstorage is not empty
        let list = JSON.parse(savedContent)

        // if (!params) return
        switch (type) {
            case 'SearchHistory':
                // 1. search history
                if (list.find(item => item == params)) return
                list.push(params)
                localStorage.setItem(name, JSON.stringify(list))
                break;
            case 'Song':
                // 2. songs
                if (list.find(item => item.id == params.id)) return
                list.push(params)
                localStorage.setItem(name, JSON.stringify(list))
                break;
        }
    }
}