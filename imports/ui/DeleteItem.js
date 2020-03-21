import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class DeleteItem extends React.Component {
  onDelete = () => {
    console.log('woo')
    this.props.deleteResolution({
      variables: {
        _id: this.props._id,
      },
    })
  }

  render() {
    return (
      <div>
        <span onClick={this.onDelete}>delete</span>
      </div>
    )
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
