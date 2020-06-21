import Head from "next/head";
import Link from "next/link";
import {Header, Main, Wrapper} from "./styles";
export const siteTitle = 'Test Blog'


const Layout = ({ children, home }) => {
    return (
        <div>
            <Head>
                <meta
                    name="description"
                    content="Test Blog with many options"
                />
                <meta name="title" content={siteTitle} />
            </Head>
            <Header>
                <Wrapper>
                    <Link href={'/'}><a className={'home-link'}>Test Blog</a></Link>
                    <div className={`header-text-block`}>
                        <h1 className={'header-title'}>Test Blog</h1>
                        <span className={`header-description`}>Real stories & opinions about running an independent membership business.</span>
                    </div>
                </Wrapper>
            </Header>
            <Main>{children}</Main>
            {!home && (
                <div>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}
export default Layout;