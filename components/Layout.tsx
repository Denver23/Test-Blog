import Head from "next/head";
import Link from "next/link";
import {AppGrid, BreadcrumbButton, Footer, Header, Main, Wrapper} from "./styles";

export const siteTitle = 'Test Blog'


const Layout = ({children, home}) => {
    return (
        <AppGrid>
            <Head>
                <meta
                    name="description"
                    content="Test Blog with many options"
                />
                <meta name="title" content={siteTitle}/>
            </Head>
            <Header>
                <Wrapper>
                    <div className={'top-menu'}>
                        <Link href={'/'}><a className={'home-link'}>Test Blog</a></Link>
                        <Link href={'/new'}><a className={'new-post-link'}>Add Post</a></Link>
                    </div>
                    <div className={`header-text-block`}>
                        <h1 className={'header-title'}>Test Blog</h1>
                        <span className={`header-description`}>Real stories & opinions about running an independent membership business.</span>
                    </div>
                </Wrapper>
            </Header>
            <Main>
                {!home && (
                    <Link href="/">
                        <BreadcrumbButton>← Back to home</BreadcrumbButton>
                    </Link>
                )}
                {children}
            </Main>
            <Footer>
                <Wrapper>
                    <Link href={'/'}><a className={'footer-link'}>Test Blog</a></Link>
                    <Link href={'/'}><a className={'footer-description'}>Test Blog © 2020</a></Link>
                </Wrapper>
            </Footer>
        </AppGrid>
    )
}
export default Layout;