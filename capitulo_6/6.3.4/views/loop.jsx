const React = require('react')
function LoopPage(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <ul>
                {
                    props.movies.map((movie,i) => {
                        return <li key={i}>{movie.name} - {movie.release}</li>
                    })
                }
            </ul>
        </>
    )
}
module.exports = LoopPage
