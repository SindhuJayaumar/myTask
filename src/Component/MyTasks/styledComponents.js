import styled from 'styled-components'

export const TagsButtons = styled.button`
  background-color:${props => (props.isActive ? '#f3aa4e' : 'transparent')}
  color: #f1f5f9;
  font-size: 20px;
  font-family: 'Roboto';
  height: 40px;
  width: 100px;
  cursor: pointer;
  outline: none;
  border: 1px solid #ffff;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 5px;
`
