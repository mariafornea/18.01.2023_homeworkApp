import React from 'react'

export default function Users(id, firstname, lastname, age) {
  return (
    <div>
      <p>{firstname}</p>
      <p>{lastname}</p>
      <p>{age}</p>
    </div>
  )
}
