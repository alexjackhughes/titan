import React from 'react'

interface Props {
  _id: String
  name: String
  completed: boolean
  onClick: (id: String) => void
  onDelete: (id: String) => void
}

export const ResolutionItem: React.FC<Props> = ({ _id, name, completed, onClick, onDelete }) => (
  <div>
    <span className="title is-3">{name}</span>
    <a className="delete is-danger" />
  </div>
)
