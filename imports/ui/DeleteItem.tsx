import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class DeleteItem extends React.Component {
  onDelete = () => {
    this.props.deleteResolution({
      variables: {
        _id: this.props._id,
      },
    })
  }

  render() {
    return <button onClick={this.onDelete}>delete</button>
  }
}

const deleteResolution = gql`
  mutation deleteResolution($_id: String!) {
    deleteResolution(_id: $_id) {
      _id
    }
  }
`

export default graphql(deleteResolution, {
  name: 'deleteResolution',
  options: {
    refetchQueries: ['resolutions'],
  },
})(DeleteItem)
