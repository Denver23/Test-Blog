import {FormEvent, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import {NextPage} from "next";
import * as React from "react";
import Layout from "../components/Layout";
import {NewPostForm} from "../components/styles";
import {addPostThunk} from "../redux/latestPostsReducer";

type PropsType = {

}

const NewPost: NextPage = () => {

    const dispatch = useDispatch()

    let [postValue, changePostValue] = useState<string>('');
    let [titleValue, changeTitleValue] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addPostThunk(titleValue, postValue))
        changePostValue('')
        changeTitleValue('')
    }

    return (
        <Layout home={false}>
            <NewPostForm onSubmit={(e) => {handleSubmit(e)}}>
                <span>Post Title:</span>
                <input className={'new-post-title'} type="text" value={titleValue} onChange={(e) => {changeTitleValue(e.target.value)}}/>
                <span>Post Body:</span>
                <textarea className={'new-post-area'} value={postValue} placeholder={'Input Your Post...'} onChange={(e) => {changePostValue(e.target.value)}}/>
                <input className={'new-post-submit'} type="submit" value="Send" />
            </NewPostForm>
        </Layout>

    )
}

export default NewPost
