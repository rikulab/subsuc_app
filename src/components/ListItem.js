import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const ListItem = ({ dispatch, List }) => {
  const id = List.id
  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベント(id=${id})を本当に削除してもいいですか？`)
    if (result) dispatch({ type: 'DELETE_List', id })
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{List.title}</td>
      <td>{List.price}</td>
      <td>
        <IconButton aria-label="delete" type="button" onClick={handleClickDeleteButton}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </td>
    </tr>
  )
}

export default ListItem