import React from 'react'

const ListItem = ({ dispatch, List }) => {
  const id = List.id
  const handleClickDeleteButton = () => {
    dispatch({ type: 'DELETE_List', id })
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{List.title}</td>
      <td>{List.price}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )
}

export default ListItem