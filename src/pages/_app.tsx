import React from 'react';
import App, { Container } from 'next/app';

import '../app/styles/main.scss';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        );
    }
}

export default MyApp;