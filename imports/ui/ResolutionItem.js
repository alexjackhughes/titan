import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import DeleteItem from './DeleteItem'

class ResolutionItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
    }
  }

  submitForm = () => {
    this.props.createResolution({
      variables: {
        name: this.name.value,
      },
    })
  }

  onChange = () => {
    this.setState({
      name: this.input.value,
    })

    this.props.updateResolution({
      variables: {
        _id: this.props._id,
        name: this.input.value,
      },
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} ref={input => (this.input = input)} onChange={this.onChange} />
        <DeleteItem _id={this.props._id} />
      </div>
    )
  }
}

const updateResolution = gql`
  mutation updateResolution($_id: String!, $name: String!) {
    updateResolution(_id: $_id, name: $name) {
      _id
      name
    }
  }
`

export default graphql(updateResolution, {
  name: 'updateResolution',
  options: {
    refetchQueries: ['resolutions'],
  },
})(ResolutionItem)
