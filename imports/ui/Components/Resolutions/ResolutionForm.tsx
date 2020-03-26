import React from 'react'

interface Props {
  onClick: (value: String) => void
}

export const ResolutionForm: React.FC<Props> = ({ onClick }) => {
  const [value, setValue] = React.useState('')

  return (
    <>
      <div className="field has-addons is-fullwidth">
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="text"
            placeholder="Learn Spanish..."
            onChange={e => setValue(e.target.value)}
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
    </>
  )
}
