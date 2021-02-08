import React, { useState } from 'react'
import { useBackend, useClient } from 'react-vrpc'
import TodoItem from './TodoItemClass'
import Filter from './Filter'

function ShowTodos () {
  const [filter, setFilter] = useState('all')
  const { backend } = useBackend('todos')

  const { client, loading, error } = useClient()

  // console.log('## backend', backend.callAll('getData'))
  console.log(loading, client, error)

  const { ids } = backend
  return (
    <div>
      <ul>
        {ids.map(id => <TodoItem key={id} id={id} filter={filter} />)}
      </ul>
      <Filter
        onClick={setFilter}
        filter={filter}
      />
    </div>
  )
}

export default ShowTodos
