import React from 'react'
import { Link } from 'react-router-dom'

export default function NavData() {
  return (
    <>
      <div className="Nav">
        <ul className="NavLinks">
          <li>
            <Link to="/"> Home </Link>
          </li>
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
    </>
  )
}
