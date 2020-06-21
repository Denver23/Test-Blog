import {NextPage} from "next";
import {PostType} from "../types/types";
import PostShortcut from "./PostShortcut";
import Head from "next/head";
import {PostsList} from "./styles";

type PropsType = {
    posts: Array<PostType>
}

const LatestPosts: NextPage<PropsType> = (props) => {
    return (
        <div>
            <Head>
                <title>Test Blog: Latest Posts</title>
            </Head>
            <PostsList>
                {
                    props.posts.map((post: PostType) => {
                            return <PostShortcut post={post}/>
                        }
                    )
                }
            </PostsList>
        </div>
    )
}

export default LatestPosts
