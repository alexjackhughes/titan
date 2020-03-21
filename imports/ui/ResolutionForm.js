import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class ResolutionForm extends React.Component {
  submitForm = () => {
    this.props.createResolution({
      variables: {
        name: this.name.value,
      },
    })
    this.name.value = ''
  }

  render() {
    return (
      <div>
        <input type="text" ref={input => (this.name = input)} />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    )
  }
}

const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`

export default graphql(createResolution, {
  name: 'createResolution',
  options: {
    refetchQueries: ['resolutions'],
  },
})(ResolutionForm)
