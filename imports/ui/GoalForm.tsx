import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class GoalForm extends React.Component {
  submitForm = () => {
    this.props.createGoal({
      variables: {
        name: this.name.value,
        resolutionId: this.props.resolutionId,
      },
    })
    this.name.value = ''
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="create goal" ref={input => (this.name = input)} />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    )
  }
}

const createGoal = gql`
  mutation createGoal($name: String!, $resolutionId: String!) {
    createGoal(name: $name, resolutionId: $resolutionId) {
      _id
    }
  }
`

export default graphql(createGoal, {
  name: 'createGoal',
  options: {
    refetchQueries: ['resolutions'],
  },
})(GoalForm)
