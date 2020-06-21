import axios from "axios";
import {CommentType, PostType, RetrievePostType} from "../types/types";

export const baseURL = 'https://simple-blog-api.crew.red/';

const instance = axios.create({
    baseURL
});

export const postsApi = {
    loadPosts() {
        return instance.get<Array<PostType>>('/posts');
    },
    retrievePost(id) {
        return instance.get<RetrievePostType>(`/posts/${id}?_embed=comments`);
    },
    addPost(title, body) {
        return instance.post<RetrievePostType>(`/posts`, {title, body});
    },
    deletePost(postId) {
        return instance.delete<RetrievePostType>(`/posts/${postId}`);
    },
    updatePost(postId, title, body) {
        return instance.put<RetrievePostType>(`/posts/${postId}`, {title, body});
    }
}

export const commentApi = {
    addComment(postId, body) {
        return instance.post<CommentType>('/comments', {postId, body});
    }
}

