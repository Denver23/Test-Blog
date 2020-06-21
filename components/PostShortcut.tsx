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
            <Link href={`/posts/${post.id}`}><a className={'post-link'}>
                <div>{post.title}</div>
            </a></Link>
            <div>{post.body.length > 140 ? `${post.body.slice(0, 140)}...` : post.body}</div>
        </PostStyle>
    )
}

export default PostShortcut
