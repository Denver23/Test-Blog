import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Link from 'next/link'
import {startClock} from '../actions'
import {postsApi} from "../api/api";
import {NextPage} from "next";
import {PostType} from '../types/types';
import {postsReducerActions} from "../redux/postsReducer";
import * as React from "react";
import LatestPosts from "../components/LatestPosts";
import Layout from "../components/Layout";

type PropsType = {
    posts: Array<PostType>
}

const Index: NextPage<PropsType> = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(postsReducerActions.initializePosts(props.posts))
    }, [dispatch])

    return (
        <Layout home>
            <LatestPosts posts={props.posts}/>
        </Layout>
    )
}

export async function getStaticProps() {

    const result = await postsApi.loadPosts();

    return {
        props: {posts: result.data}
    }
}

/*Index.getInitialProps = async (ctx) => {
    const result = await postsApi.loadPosts();
    return result.data
}*/

export default Index
