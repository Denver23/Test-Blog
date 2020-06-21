import axios from "axios";
import {PostType, RetrievePostType} from "../types/types";

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
    }
}

