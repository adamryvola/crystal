import React from 'react';
import { Layout, Input, Icon, Button} from 'antd';

const { Content, Footer } = Layout;

const Root = () => {
    return (
        <Layout style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
            <Content style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: '32px' }}>
                <img style={{ height: '20%' }} src="/logo.svg" alt="logo" />
                <Input
                    autoFocus
                    placeholder="first name"
                    addonBefore={<Icon type="user" />}
                    size="large"
                    style={{ marginTop: '32px' }}
                />
                <Input
                    placeholder="surname"
                    addonBefore={<Icon type="user" />}
                    size="large"
                    style={{ marginTop: '16px' }}
                />
                <Input
                    placeholder="mobile number"
                    type="tel"
                    addonBefore={<Icon type="phone" />}
                    size="large"
                    style={{ marginTop: '16px' }}
                />
                <Input
                    type="email"
                    placeholder="e-mail"
                    addonBefore={<Icon type="mail" />}
                    size="large"
                    style={{ marginTop: '16px' }}
                />
                <Input.Password
                    placeholder="password"
                    addonBefore={<Icon type="lock" />}
                    size="large"
                    style={{ marginTop: '16px' }}
                />
                <Input.Password
                    placeholder="pin"
                    addonBefore={<Icon type="lock" />}
                    size="large"
                    style={{ marginTop: '16px' }}
                />
                <Button
                    htmlType="submit"
                    size="large"
                    type="primary"
                    shape="round"
                    icon="arrow-right"
                    style={{ marginTop: '32px' }}
                >
                    Sign up
                </Button>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                2019 Crystal Invest
            </Footer>
        </Layout>
    );
};

Root.propTypes = {

};

export default Root;
