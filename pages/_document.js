import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" >
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument;