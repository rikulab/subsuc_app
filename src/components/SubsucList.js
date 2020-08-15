import React, { useReducer } from 'react'
import '../Styles/SubsucList.css'
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './SubsucForm';
import reducer from '../reducers'
import ListItem from './ListItem';

const SubsucList = () => {
    const [state, dispatch] = useReducer(reducer, [])

    return (
        <>
            <h3>マイサブスクリプション</h3>
            <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>タイトル</th>
                    <th>値段</th>
                    <th>
                        <IconButton aria-label="delete" disabled color="primary">
                            <DeleteIcon />
                        </IconButton>
                    </th>
                  </tr>
                </thead>
                <tbody>
                    { state.map((List, index) => (<ListItem key={index} event={List} dispatch={dispatch} />))}
                </tbody>
            </table>
            <Divider />
        </>
    )
}

export default SubsucList;