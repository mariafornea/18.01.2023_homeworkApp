import React from 'react'
import s from './style.module.css'
export default function User({id, firstname, lastname, age}) {

  return (
    <div className={s.card}>
      <p>{lastname}</p>
      <p>{firstname}</p>
      <p>{age}</p>
    </div>
  )

}
