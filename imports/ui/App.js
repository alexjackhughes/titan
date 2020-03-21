import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import ResolutionForm from './ResolutionForm'
import ResolutionItem from './ResolutionItem'

const App = ({ data }) => {
  if (data.loading) return null

  return (
    <>
      <h1>Hello World</h1>
      <ResolutionForm refetch={data.refetch} />
      {data.resolutions && data.resolutions.map(({ name, _id }) => <ResolutionItem name={name} _id={_id} key={_id} />)}
    </>
  )
}

const Query = gql`
  query resolutions {
    resolutions {
      _id
      name
    }
  }
`

export default graphql(Query)(App)
