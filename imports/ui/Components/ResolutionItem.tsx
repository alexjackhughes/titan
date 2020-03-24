import React from 'react'

interface Props {
  _id: String
  name: String
  completed: boolean
  onClick: (id: String, completed: boolean) => void
  onDelete: (id: String) => void
}

export const ResolutionItem: React.FC<Props> = ({ _id, name, completed, onClick, onDelete }) => (
  <div className="card center">
    <div className="center">
      <span
        className={`icon is-
      medium fas fa-2x ${completed ? 'has-text-success' : 'has-text-grey'}`}
      >
        <i className="fad fa-check-circle is-pointer" onClick={() => onClick(_id, !completed)} />
      </span>
      <span className="title is-6 no-spacing">{name}</span>
    </div>
    <span className={`is-medium fas fa-2x has-text-danger is-pointer`}>
      <i className="fad fa-times-circle" onClick={() => onDelete(_id)} />
    </span>
  </div>
)
