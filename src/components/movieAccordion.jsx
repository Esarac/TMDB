import { Accordion } from 'react-bootstrap'
import './movieAccordion.css'

function MovieAccordion({ movie }) {

    const toCurrency = (money, text) => {
        if (money === 0)
            return ''
        else

            return (
                <>
                    <strong>{text + ': '}</strong> {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(money)}
                </>
            )
    }

    if (movie)
        return (
            <Accordion defaultActiveKey={['0']} alwaysOpen={true} flush={true} className='text-white'>
                <Accordion.Item eventKey="0" className='bg-dark text-white'>
                    <Accordion.Header className='bg-dark text-white'>Overview</Accordion.Header>
                    <Accordion.Body>
                        <p>{movie.overview}</p>
                        <p><strong>Status: </strong>{movie.status}</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='bg-dark text-white'>
                    <Accordion.Header className='bg-dark text-white'>Genres</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            {movie.genres.map((genre) => {
                                return <li>{genre.name}</li>
                            })}
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='bg-dark text-white'>
                    <Accordion.Header className='bg-dark text-white'>Spoken languages</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            {movie.spoken_languages.map((language) => {
                                return <li>{language.name + ' (' + language.iso_639_1 + ')'}</li>
                            })}
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='bg-dark text-white'>
                    <Accordion.Header className='bg-dark text-white'>Production countries</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            {movie.production_countries.map((country) => {
                                return <li>{country.name + ' (' + country.iso_3166_1 + ')'}</li>
                            })}
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className='bg-dark text-white'>
                    <Accordion.Header className='bg-dark text-white'>Production companies</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            {movie.production_companies.map((company) => {
                                return <li>{company.name}</li>
                            })}
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className='bg-dark text-white'>
                    <Accordion.Header className='bg-dark text-white'>More details</Accordion.Header>
                    <Accordion.Body>
                        <p><strong>Original title: </strong>{movie.original_title}</p>
                        <p><strong>Release date: </strong>{movie.release_date}</p>
                        <p><strong>Original language: </strong>{movie.original_language}</p>
                        <p>{toCurrency(movie.budget, 'Budget')}</p>
                        <p>{toCurrency(movie.revenue, 'Revenue')}</p>
                        <p><strong>Popularity: </strong>{movie.popularity}</p>
                        <p><strong>Tagline: </strong>{movie.tagline}</p>
                        <p><strong>IMBD ID: </strong>{movie.imdb_id}</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        )
}

export default MovieAccordion