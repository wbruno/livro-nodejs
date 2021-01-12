((window, document, undefined) => {
    const ajax = (url, callback) => {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.addEventListener('load', event => {
            callback(null, xhr.response, event)
        })
        xhr.addEventListener('error', callback)
        xhr.send(null)
    }
    const render = ($target, data) => {
        const trs = data.map(item => {
            return `<tr>
                <td>${item._id}</td>
                <td>${item.name}</td>
                <td>${item.patent}</td>
            </tr>`
        })
        $target.querySelector('tbody').innerHTML = trs.join('')
    }
    const $target = document.getElementById('target')
    ajax('http://localhost:3000/troopers', (err, result) => {
        const data = JSON.parse(result)
        render($target, data)
    })
})(window, document)
