import React, { useState } from 'react';
import '../Styles/SubsucForm.css';
import './ListItem';

const SubsucForm = ({ state, dispatch }) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')

    const addList = () => {
        dispatch({
            type: 'CREATE_List',
            title,
            price
        })

        setTitle('')
        setPrice('')
    }

    // const deleteAllLists = () => {
    //     const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
    //     if (result) dispatch({ type: 'DELETE_ALL_Lists' })
    // }

    const unCreatable = title === '' || price === ''

    return (
        <>
            <h3>サブスクリプション追加フォーム</h3>
            <form>
                <div className="subsuc_title">
                    <label>サブスクリプション　</label>
                    <input value={title} onChange={ e => setTitle(e.target.value)} />
                </div>

                <div className="subsuc_price">
                    <label>　　　　値段　　　　</label>
                    <input type="number" value={price} onChange={ e => setPrice(e.target.value)} />
                </div>

                <button onClick={addList} disabled={unCreatable}>追加する</button>
                {/* <button onClick={deleteAllLists} disabled={state.length === 0}>全てのイベントを削除する</button> */}
            </form>
        </>
    )
}

export default SubsucForm