import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class GoalItem extends React.Component {
  render() {
    return (
      <div key={this.props.goal.name}>
        <input
          name="isGoing"
          type="checkbox"
          checked={this.props.goal.completed}
          onChange={() => this.props.toggleGoal({ variables: { _id: this.props.goal._id } })}
        />
        <span style={{ textDecoration: this.props.goal.completed ? 'strike-through' : 'none' }}>
          {this.props.goal.name}
        </span>
      </div>
    )
  }
}

const toggleGoal = gql`
  mutation toggleGoal($_id: String!) {
    toggleGoal(_id: $_id) {
      _id
    }
  }
`

export default graphql(toggleGoal, {
  name: 'toggleGoal',
  options: {
    refetchQueries: ['resolutions'],
  },
})(GoalItem)
