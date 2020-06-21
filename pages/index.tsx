import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {postsApi} from "../api/api";
import {NextPage} from "next";
import {PostType} from '../types/types';
import {latestPostsReducerActions} from "../redux/latestPostsReducer";
import * as React from "react";
import LatestPosts from "../components/LatestPosts";
import Layout from "../components/Layout";
import {AppStateType} from "../redux/reducers";
import { useSelector } from 'react-redux'

type PropsType = {
    posts: Array<PostType>
}

const Index: NextPage<PropsType> = (props) => {

    const postsList = useSelector((state: AppStateType) => state.latestPostsReducer.posts);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(latestPostsReducerActions.initializePosts(props.posts))
    }, [dispatch])

    return (
        <Layout home>
            <LatestPosts posts={postsList}/>
        </Layout>
    )
}

export async function getStaticProps() {

    const result = await postsApi.loadPosts();

    return {
        props: {posts: result.data}
    }
}

export default Index
