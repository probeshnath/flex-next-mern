import Link from 'next/link'
import React from 'react'
import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css'

const Movie = async () => {

  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b9879fac2cmsh2fbc6e841555a6ep12bccajsn8d4c3e121701',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  // console.log(data)


  return (
    <>
      <section className={`${styles.movieSection}`} >
        <div className={styles.container} >


          <h1>Series & Movie</h1>
          {
            main_data.map((curtElem) => (
              <MovieCard key={curtElem.id} curtElem={curtElem} />
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Movie