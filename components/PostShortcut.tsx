import {NextPage} from "next";
import {PostType} from "../types/types";
import {PostStyle} from "./styles";
import Link from "next/link";
import {useDispatch} from 'react-redux'
import {deletePostThunk} from "../redux/latestPostsReducer";

type PropsType = {
    post: PostType
}

const PostShortcut: NextPage<PropsType> = ({post}) => {

    const dispatch = useDispatch();

    const deletePostHandler = () => {
        dispatch(deletePostThunk(post.id));
    }

    return (
        <PostStyle>
            <button onClick={(e) => {deletePostHandler()}} className={'delete-button'}>Delete</button>
            <Link href={`/posts/${post.id}`}><a className={'post-link'}>
                <div>{post.title}</div>
            </a></Link>
            <div>{post.body.length > 140 ? `${post.body.slice(0, 140)}...` : post.body}</div>
        </PostStyle>
    )
}

export default PostShortcut
