import React from 'react'

interface Props {
  onClick: (value: string) => void
}

export const ResolutionForm: React.FC<Props> = ({ onClick }) => {
  const [value, setValue] = React.useState('')

  const keyPressed = event => {
    if (event.key === 'Enter') {
      onClick(value)
      setValue('')
    }
  }

  return (
    <div className="resolution-container">
      <div className="field has-addons is-fullwidth">
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            autoFocus
            type="text"
            placeholder="Learn Spanish..."
            onChange={e => setValue(e.target.value)}
            onKeyPress={keyPressed}
            value={value}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-plus" />
          </span>
        </div>
        <div className="control">
          <a
            className="button is-primary"
            onClick={() => {
              onClick(value)
              setValue('')
            }}
          >
            Add Goal
          </a>
        </div>
      </div>
    </div>
  )
}
