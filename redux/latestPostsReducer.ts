import {GetActionsTypes, PostType} from "../types/types";

const LOAD_POSTS = 'LOAD_POSTS';

let initialState = {
    posts: [] as Array<PostType>
}

type InitialStateType = typeof initialState

const latestPostsReducer = (state = initialState, action: GetActionsTypes<typeof postsReducerActions>): InitialStateType => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                posts: action.data
            };
        default:
            return {...state}
    }
}

export const postsReducerActions = {
    initializePosts: (posts: Array<PostType>) => ({type: LOAD_POSTS, data: posts} as const)
}

export default latestPostsReducer;