import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeData() {
  return (
    <>
      <main>
        <div className="homeNav">
          <h1 className="homeTitle">Workout Tracker</h1>
          <ul className="homeLinks">
            <li>
              <Link to="/active"> Active Workout </Link>
            </li>
            <li>
              <Link to="/build"> Build a Workout </Link>
            </li>
            <li>
              <Link to="/search"> Search Exercises</Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}
