import React from 'react'
import '../Styles/SubsucList.css'
import './SubsucForm';
import ListItem from './ListItem';

const SubsucList = ( {state, dispatch }) => {

    return (
        <>
            <h3>マイサブスクリプション</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>タイトル</th>
                        <th>ボディー</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { state.map((List, index) => (<ListItem key={index} List={List} dispatch={dispatch} />))}
                </tbody>
            </table>
        </>
    )
}

export default SubsucList;