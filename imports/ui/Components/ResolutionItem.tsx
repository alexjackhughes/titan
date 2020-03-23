import React from 'react'

interface Props {
  _id: String
  name: String
  completed: boolean
  onClick: (id: String) => void
  onDelete: (id: String) => void
}

export const ResolutionItem: React.FC<Props> = ({ _id, name, completed, onClick, onDelete }) => (
  <div className="card center">
    <div className="center">
      <span className="icon is-medium fas fa-2x has-text-grey">
        <i className="fad fa-check-circle is-pointer" onClick={() => onClick(_id)} />
      </span>
      <span className="title is-6 no-spacing">{name}</span>
    </div>
    <a className="delete is-small is-pointer" onClick={() => onDelete(_id)} />
  </div>
)
