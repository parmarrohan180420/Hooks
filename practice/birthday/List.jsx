import React from 'react'
import Persons from './Persons'

const List = ({people}) => {
  return (
    <section>
        {people.map((person) => {
            return <Persons key={person.key} {...person} />
        })}
    </section>
  )
}

export default List
