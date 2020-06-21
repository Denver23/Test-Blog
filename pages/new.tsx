import {FormEvent, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import {NextPage} from "next";
import * as React from "react";

type PropsType = {

}

const NewPost: NextPage = () => {

    let [postValue, changePostValue] = useState('')
    let [titleValue, changeTitleValue] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(postValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={titleValue} onChange={(e) => {changeTitleValue(e.target.value)}}/>
            <input type="text" value={postValue} onChange={(e) => {changePostValue(e.target.value)}}/>
            <input type="submit" value="Отправить" />
        </form>
    )
}

export default NewPost
