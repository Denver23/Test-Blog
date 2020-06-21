import {CommentType, GetActionsTypes, PostType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reducers";
import {commentApi, postsApi} from "../api/api";

const ADD_COMMENT = 'ADD_COMMENT';
const LOAD_POST = 'LOAD_POST';

let initialState = {
    id: null as null | number,
    title: null as null | string,
    body: null as null | string,
    comments: [] as Array<CommentType>
}

type InitialStateType = typeof initialState

const postReducer = (state = initialState, action: GetActionsTypes<typeof postReducerActions>): InitialStateType => {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.data]
            };
        case LOAD_POST:
            return {
                ...state,
                ...action.data
            }
        default:
            return {...state}
    }
}

export const postReducerActions = {
    addComment: (comment: CommentType) => ({type: ADD_COMMENT, data: comment} as const),
    loadPost: (post) => ({type: LOAD_POST, data: post} as const)
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, GetActionsTypes<typeof postReducerActions>>
export const addCommentThunk = (postId, body): ThunkType => async (dispatch) => {
    let response = await commentApi.addComment(postId, body);

    if(response.data) {
        dispatch(postReducerActions.addComment(response.data))
    }
}

export const loadPostThunk = (postId): ThunkType => async (dispatch) => {
    let response = await postsApi.retrievePost(postId);

    if(response.data) {
        dispatch(postReducerActions.loadPost(response.data))
    }
}

export default postReducer;