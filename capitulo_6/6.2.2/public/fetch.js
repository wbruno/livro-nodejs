((window, document, undefined) => {
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
    fetch('http://localhost:3000/troopers')
        .then(response => response.json())
        .then(data => render($target, data))
})(window, document)
