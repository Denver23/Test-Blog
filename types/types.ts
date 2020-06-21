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
    comments: Array<Comment>
}

export type Comment = {
    id: number,
    postId: number,
    body: string
}