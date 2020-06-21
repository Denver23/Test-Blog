import styled from 'styled-components'
import Link from "next/link";

const width = 1000;
const backgound = '#222';

export const AppGrid = styled.div`
    display: flex;
    min-height: 100%;
    flex-direction: column;
`

export const Header = styled.header`
    background-color: ${backgound};
    padding: 30px 0;
    flex-grow: 0;
    
    .home-link {
        color: #fff;
        font-weight: 600;
        text-decoration: none;
    }
    .header-title {
        color: #fff;
        font-weight: 500;
        text-transform: uppercase;
    }
    .header-text-block {
        margin: 90px 0;
        text-align: center;
    }
    .header-description {
        color: #ccc;
    }
    .top-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .new-post-link {
        padding: 5px 10px;
        border: 1px solid #ccc;
        border-radius: 7px;
        color: #fff;
        text-decoration: none;
        font-size: 12px;
    }
`;

export const Wrapper = styled.div`
    margin: 0 auto;
    max-width: ${width}px;
    padding: 0 20px
`

export const Main = styled.main`
    margin: 0 auto;
    max-width: ${width}px;
    flex-grow: 1;
    padding: 0 20px;
    width: 100%;
`;

export const StyledLink = styled(Link)`
    color: #fff;  
`;

export const PostsList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const PostStyle = styled.li`
    color: #738a94;
    width: 30%;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    
    .post-link {
        color: #000;
        text-decoration: none;
    }
    &:hover {
        .delete-button {
            opacity: 1;
        }
    }
    
    &:after {
        display: block;
        content: '';
        width: 100%;
        height: 1px;
        background-color: #ccc;
        position: absolute;
        bottom: 0;
    }
    .delete-button {
        position: absolute;
        right: 0;
        opacity: 0;
        transition: opacity .3s;
    }
`;

export const BreadcrumbButton = styled.a`
    display: block;
    cursor: pointer;
    margin: 20px 0;
`;

export const Footer = styled.footer`
    background-color: ${backgound};
    padding: 30px 0;
    flex-grow: 0;
    
    .footer-link {
        color: #fff;
        font-weight: 600;
        text-decoration: none;
        text-align: center;
        display: block;
        margin: 20px 0;
    }
    
    .footer-description {
        color: #fff;
        font-weight: 400;
        font-size: 10px;
        font-style: italic;
        text-decoration: none;
        text-align: center;
    }
`;

export const PostTitle = styled.h2`
    color: #888;
    font-weight: 500;
`;

export const PostBody = styled.div`
    color: #000;
    font-size: 14px;
    line-height: 25px;
`;

export const CommentsStyle = styled.div`
    color: #000;
    font-size: 14px;
    line-height: 25px;
    margin-top: 50px;
`;

export const Comment = styled.div`
    color: #000;
    font-size: 14px;
    position: relative;
    margin: 10px 0;
    
    .id-circle {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: #ccc;
    }
    
    .comment-body {
        padding-left: 45px;
    }
    
    &:after {
        display: block;
        content: '';
        width: 100%;
        height: 1px;
        background-color: #ccc;
        position: absolute;
        bottom: 0;
    }
   
`;

export const CommentForm = styled.form`
    
    padding: 10px 0;
    
    .commentTextArea {
        width: 100%;
        resize: none;
    }
`;

export const NewPostForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    
    .new-post-area {
        resize: none;
        margin: 10px 0;
        height: 50px;
    }
    
    .new-post-title {
        margin: 10px 0;
    }
    
    .new-post-submit {
        padding: 5px 20px;
        max-width: 30%;
        align-self: center;
    }
`