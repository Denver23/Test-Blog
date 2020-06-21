import {NextPage} from "next";
import {CommentType, PostType, RetrievePostType} from "../../types/types";
import {postsApi} from "../../api/api";
import * as React from "react";
import Layout from "../../components/Layout";
import {
    Comment,
    CommentForm,
    CommentsStyle,
    NewPostForm,
    PostBody,
    PostTitle
} from "../../components/styles";
import {FormEvent, useState} from "react";
import {useEffect} from "react";
import {useDispatch} from 'react-redux'
import {addCommentThunk, loadPostThunk, updatePostThunk} from "../../redux/postReducer";
import {useSelector} from 'react-redux'
import {AppStateType} from "../../redux/reducers";

type PropsType = {
    post: RetrievePostType
    postId: number
}

const Post: NextPage<PropsType> = ({post, postId}) => {

    const newPost = useSelector((state: AppStateType) => state.postReducer);

    let [postValue, changePostValue] = useState<string>('');
    let [titleValue, changeTitleValue] = useState<string>('');
    let [updateStatus, changeUpdateStatus] = useState<boolean>(false)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadPostThunk(postId))
    }, [dispatch])

    let [commentText, changeCommentText] = useState<string>();

    const inputCommentText = (e) => {
        if (e.target.value.length < 200) {
            changeCommentText(e.target.value)
        }
    }

    const commentHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (commentText.length > 0) {
            dispatch(addCommentThunk(post.id, commentText))
            changeCommentText('')
        }
    }

    const toggleUpdateButton = () => {
        changeTitleValue(newPost.title)
        changePostValue(newPost.body)
        changeUpdateStatus(!updateStatus)
    }

    const updatePost = () => {
        dispatch(updatePostThunk(postId, titleValue, postValue));
        changeUpdateStatus(false);
    }

    return <Layout home={false}>
        <button onClick={toggleUpdateButton} className={'update-button'}>{updateStatus == false ? 'Update' : 'Cancel Update'}</button>
        {updateStatus == false ?
            <div>
                <PostTitle>{newPost.title}</PostTitle>
                <PostBody>{newPost.body}</PostBody>
            </div> :
            <NewPostForm onSubmit={(e) => {
                updatePost()
            }}>
                <span>Post Title:</span>
                <input className={'new-post-title'} type="text" value={titleValue} onChange={(e) => {
                    changeTitleValue(e.target.value)
                }}/>
                <span>Post Body:</span>
                <textarea className={'new-post-area'} value={postValue} placeholder={'Input Your Post...'}
                          onChange={(e) => {
                              changePostValue(e.target.value)
                          }}/>
                <input className={'new-post-submit'} type="submit" value="Update"/>
            </NewPostForm>}
        <CommentsStyle>
            {newPost.comments.map((comment: CommentType) => {
                return <Comment>
                    <div className={'id-circle'}>{comment.id}</div>
                    <div className={'comment-body'}>{comment.body}</div>
                </Comment>
            })}
        </CommentsStyle>

        <CommentForm onSubmit={(e) => {
            commentHandleSubmit(e)
        }}>
            <textarea className={'commentTextArea'} placeholder={'input comment'} value={commentText}
                      onChange={inputCommentText}></textarea>
            <input type="submit" value={'Send'}/>
        </CommentForm>
    </Layout>
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

export async function getStaticProps({params}) {
    const postData = await postsApi.retrievePost(params.id);

    return {
        props: {
            post: postData.data,
            postId: params.id
        }
    }
}

export default Post;