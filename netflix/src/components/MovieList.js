import React from 'react'

import Row from 'react-bootstrap/Row';
import Movie from './Movie';
export default function MovieList(props) {
  console.log(props.movies)
  return (
<>
<Row xs={1} md={4} className="g-4">
      {props.movies.map((item, idx) => (
          <Movie item={item} index={idx}/>
      ))}
    </Row>
</>  )
}
