import React, { useReducer, useState } from 'react';
import '../Styles/SubsucForm.css';
import reducer from '../reducers'
import ListItem from './ListItem';

const List = () => {
    const [state, dispatch] = useReducer(reducer, [])
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')

    const addList = e => {
        e.preventDefualt()
        dispatch({
            type: 'CREATE_List',
            title,
            price
        })

        setTitle('')
        setPrice('')
    }

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
                    <input value={price} onChange={ e => setPrice(e.target.value)} />
                </div>

                <button onClick={addList}>追加する</button>
            </form>
        </>
    )
}

export default List;