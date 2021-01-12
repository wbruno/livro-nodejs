(($, window, document, undefined) => {
    const render = ($target, data) => {
        const trs = data.map(item => {
            return `<tr>
                <td>${item._id}</td>
                <td>${item.name}</td>
                <td>${item.patent}</td>
            </tr>`
        })
        $target.find('tbody').html(trs.join(''))
    }
    const $target = $('#target')
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/troopers'
    })
    .then(data => render($target, data))
})(jQuery, window, document)
