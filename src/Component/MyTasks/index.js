import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import TaskList from '../TaskList'

import './index.css'

import {TagsButtons} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    inputText: '',
    selectTag: tagsList[0].optionId,
    addedList: [],
    activeTag: 'INITIAL',
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  handledOption = event => {
    this.setState({selectTag: event.target.value})
  }

  onClickActiveTag = event => {
    this.setState(prevState => ({
      activeTag:
        prevState.activeTag === event.target.value
          ? 'INITIAL'
          : event.target.value,
    }))
  }

  onAddButton = event => {
    event.preventDefault()
    const {inputText, selectTag} = this.state
    const newTasks = {
      id: uuidv4(),
      inputText,
      selectTag,
    }

    if (inputText.length !== 0) {
      this.setState(prevTaskList => ({
        addedList: [...prevTaskList.addedList, newTasks],

        inputText: '',
        selectTag: '',
      }))
    }
  }

  render() {
    const {inputText, selectTag, addedList, activeTag} = this.state
    console.log(activeTag)

    const filteringActiveTag =
      activeTag === 'INITIAL'
        ? addedList
        : addedList.filter(each => each.selectTag === activeTag)

    console.log(filteringActiveTag)

    return (
      <div className="bg-container">
        <div className="taskText">
          <h1 className="heading">Create a task!</h1>

          <form className="form-card" onSubmit={this.onAddButton}>
            <div className="form-card">
              <label htmlFor="task" className="label">
                Task
              </label>
              <input
                id="task"
                type="text"
                value={inputText}
                placeholder="Enter the task here"
                className="inputText"
                onChange={this.onChangeInput}
              />
              <label htmlFor="optionInput" className="label">
                Tags
              </label>
              <select
                id="optionInput"
                value={selectTag}
                className="inputText"
                onChange={this.handledOption}
              >
                {tagsList.map(eachOptions => (
                  <option
                    value={eachOptions.optionId}
                    key={eachOptions.optionId}
                  >
                    {eachOptions.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn">
              Add Task
            </button>
          </form>
        </div>

        <div className="task-details">
          <div>
            <h1 className="label">Tags</h1>
            <ul className="list-items">
              {tagsList.map(eachButton => {
                const isActive = activeTag === eachButton.optionId

                return (
                  <li key={eachButton.optionId}>
                    <TagsButtons
                      type="button"
                      className="btn"
                      value={eachButton.optionId}
                      onClick={this.onClickActiveTag}
                      isActive={isActive}
                    >
                      {eachButton.displayText}
                    </TagsButtons>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="addItems">
            <h1 className="label">Tasks</h1>

            {addedList.length === 0 ? (
              <div>
                <p className="content">No Tasks Added Yet</p>
              </div>
            ) : (
              <ul className="ul-list">
                {filteringActiveTag.map(EachItem => (
                  <TaskList taskDetails={EachItem} key={EachItem.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default MyTasks
