import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const App = ({ data }) => {
  if (data.loading) return null

  return (
    <>
      <h1>{data.hi}</h1>
      {data.resolutions.map(item => (
        <p key={item._id}>{item.name}</p>
      ))}
    </>
  )
}

const Query = gql`
  {
    hi
    resolutions {
      _id
      name
    }
  }
`

export default graphql(Query)(App)
