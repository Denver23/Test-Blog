import {NextPage} from "next";
import {PostType, RetrievePostType} from "../../types/types";
import {postsApi} from "../../api/api";
import * as React from "react";
import Layout from "../../components/Layout";

type PropsType = {
    post: RetrievePostType
}

const Post: NextPage<PropsType> = (props) => {
    return <Layout home={false}>{props.post.body}</Layout>
}

export async function getStaticPaths() {
    const result = await postsApi.loadPosts();

    let paths = result.data.map((post: PostType) => {
        return {
            params: {id: post.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await postsApi.retrievePost(params.id);

    return {
        props: {
            post: postData.data
        }
    }
}

export default Post;