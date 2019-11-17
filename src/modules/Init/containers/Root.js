import React from 'react';
import { Layout, Button } from 'antd';

const { Content } = Layout;

const Root = () => (
    <Layout hasSider style={{ height: '100%', width: '100%' }}>
        <Content
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div style={{ maxWidth: '300px', textAlign: 'center' }}>
                <h1>SITEMAP</h1>
                <Button
                    type="primary"
                    shape="round"
                    size="large"
                    style={{
                        margin: '8px'
                    }}
                    href="/app"
                    block
                    icon="arrow-right"
                >
                    Dashboard
                </Button>
                <Button
                    type="primary"
                    shape="round"
                    size="large"
                    style={{
                        margin: '8px'
                    }}
                    href="/login"
                    block
                    icon="arrow-right"
                >
                    Login
                </Button>
                <Button
                    type="primary"
                    shape="round"
                    size="large"
                    style={{
                        margin: '8px'
                    }}
                    href="/signup"
                    block
                    icon="arrow-right"
                >
                    Sign up
                </Button>
            </div>
        </Content>
    </Layout>
);

Root.propTypes = {

};

export default Root;
