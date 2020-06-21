import {NextPage} from "next";
import {PostType} from "../types/types";
import {PostStyle} from "./styles";
import Link from "next/link";

type PropsType = {
    post: PostType
}

const PostShortcut: NextPage<PropsType> = ({post}) => {
    return (
        <PostStyle>
            <Link href={`/posts/${post.id}`}><a>
                <div>{post.id}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
            </a></Link>
        </PostStyle>
    )
}

export default PostShortcut
