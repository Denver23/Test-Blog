import {GetActionsTypes, PostType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reducers";
import {postsApi} from "../api/api";
import {postReducerActions} from "./postReducer";

const LOAD_POSTS = 'LOAD_POSTS';
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [] as Array<PostType>
}

type InitialStateType = typeof initialState

const latestPostsReducer = (state = initialState, action: GetActionsTypes<typeof latestPostsReducerActions>): InitialStateType => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                posts: action.data
            };
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.data]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => {
                    return post.id != action.data;
                })
            }
        default:
            return {...state}
    }
}

export const latestPostsReducerActions = {
    initializePosts: (posts: Array<PostType>) => ({type: LOAD_POSTS, data: posts} as const),
    addPost: (post: PostType) => ({type: ADD_POST, data: post} as const),
    deletePost: (postId: number) => ({type: DELETE_POST, data: postId} as const)
}


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, GetActionsTypes<typeof latestPostsReducerActions>>
export const addPostThunk = (title, body): ThunkType => async (dispatch) => {
    let response = await postsApi.addPost(title, body);

    if(response.data) {
        let post = {
            title: response.data.title,
            body: response.data.body,
            id: response.data.id
        }
        dispatch(latestPostsReducerActions.addPost(post))
    }
}

export const deletePostThunk = (postId): ThunkType => async (dispatch) => {
    let response = await postsApi.deletePost(postId);

    if(response.data) {
        dispatch(latestPostsReducerActions.deletePost(postId))
    }
}

export default latestPostsReducer;