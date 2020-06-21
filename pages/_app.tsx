import {Provider} from 'react-redux'
import {useStore} from '../redux/store'
import { ThemeProvider } from 'styled-components'
import '../styles/global.css'

const theme = {
    primary: 'green',
}

export default function App({Component, pageProps}) {
    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
)
}
