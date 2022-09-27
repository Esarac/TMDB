import { Accordion } from 'react-bootstrap'

function MovieAccordion({ movie }) {
    if (movie)
        return (
            <Accordion defaultActiveKey={['0']} alwaysOpen={true} flush={true}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Overview</Accordion.Header>
                    <Accordion.Body>
                        {movie.overview}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Production companies</Accordion.Header>
                    <Accordion.Body>
                        {movie.production_companies.map((company) => {
                            return <li>{company.name}</li>
                        })}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        )
}

export default MovieAccordion