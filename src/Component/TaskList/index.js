import './index.css'

const TaskList = props => {
  const {taskDetails} = props
  const {inputText, selectTag} = taskDetails

  return (
    <div className="task-details">
      <ul className="ul-list">
        <li className="list-Items">
          <p className="content">{inputText}</p>
          <p type="button" className="btn">
            {selectTag}
          </p>
        </li>
      </ul>
    </div>
  )
}

export default TaskList
