import Vue from 'vue'

Vue.filter('timeFormat', function (time) {

    let m = parseInt(time / 1000 / 60);
    let s = parseInt((time / 1000) % 60);
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    return m + ":" + s;
})