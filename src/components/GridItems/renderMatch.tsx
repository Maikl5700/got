import React from 'react'
import { store } from 'store'


const renderMatch = (a: string[]) => {
  const { searchSubstr } = store

  return (
    <>
      {a.map((el, i) => {
        return (
          <span key={i}>
            {a[i]}
            {i !== (a.length - 1) && <span className="match_string">{searchSubstr}</span>}
          </span >
        )
      })}
    </>
  )
}


export default renderMatch