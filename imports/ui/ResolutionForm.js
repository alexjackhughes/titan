import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class ResolutionForm extends React.Component {
  submitForm = () => {
    console.log('client: ', this.name.value)
    this.props
      .createResolution({
        variables: {
          name: this.name.value,
        },
      })
      .then(() => {
        this.props.refetch()
      })
      .catch(e => console.log(e))
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
})(ResolutionForm)
