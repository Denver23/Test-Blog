export type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
export type GetActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

export type PostType = {
    title: string,
    body: string,
    id: number
}

export type RetrievePostType = {
    id: number,
    title: string,
    body: string,
    comments: Array<CommentType>
}

export type CommentType = {
    id: number,
    postId: number,
    body: string
}