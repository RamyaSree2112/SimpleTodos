import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteUser} = props
  const {title, id} = todoDetails
  const onDelete = () => {
    onDeleteUser(id)
  }
  return (
    <li>
      <div>
        <p>{title}</p>
      </div>
      <button type="button" className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
