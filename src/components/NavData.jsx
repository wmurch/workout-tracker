import React from 'react'

export default function NavData() {
  return (
    <>
      <div className="NavLinks">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/search"> Add User </Link>
          </li>
          <li>
            <Link to="/build"> View User </Link>
          </li>
          <li>
            <Link to="/active"> All Employees </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
