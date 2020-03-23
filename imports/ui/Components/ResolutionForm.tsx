import React from 'react'

interface Props {
  onSubmit: (value: String) => void
}
export const ResolutionForm: React.FC<Props> = ({ onSubmit }) => {
  const [value, setValue] = React.useState('')

  return (
    <>
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-success"
            type="text"
            placeholder="Add resolution"
            onChange={e => setValue(e.target.value)}
            value={value}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right" onClick={() => onsubmit(value)}>
            <i className="fas fa-check"></i>
          </span>
        </div>
      </div>
    </>
  )
}
