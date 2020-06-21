import styled from 'styled-components'
import Link from "next/link";

const width = 1000;

export const Header = styled.header`
    background-color: #222;
    padding: 30px;
    
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
`;

export const Wrapper = styled.div`
    margin: 0 auto;
    max-width: ${width}px;
`

export const Main = styled.main`
    margin: 0 auto;
    max-width: ${width}px;
`;

export const StyledLink = styled(Link)`
    color: #fff;  
`;

export const PostsList = styled.ul`
    list-style: none;
`

export const PostStyle = styled.li`
    
`