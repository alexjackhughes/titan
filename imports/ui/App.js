import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import ResolutionForm from './ResolutionForm'

const App = ({ data }) => {
  if (data.loading) return null

  return (
    <>
      <h1>Hello World</h1>
      <ResolutionForm refetch={data.refetch} />
      {data.resolutions && data.resolutions.map(item => <p key={item._id}>{item.name}</p>)}
    </>
  )
}

const Query = gql`
  {
    resolutions {
      _id
      name
    }
  }
`

export default graphql(Query)(App)
