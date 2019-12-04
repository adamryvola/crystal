import React from 'react';
import { Layout, Avatar, Typography, Divider, Tabs, List } from 'antd';
import AccountCard from '../../Accounts/components/AccountCard';
import Menu from '../../../components/Menu';
import Header from '../../../components/Header';
import ProfileThumbnail from '../../../components/ProfileThumbnail';

const { Content, Sider } = Layout;
const { Text } = Typography;
const { TabPane } = Tabs;

const Root = () => (
    <Layout hasSider style={{ height: '100%', width: '100%', }}>
        <Sider
            collapsedWidth={0}
            breakpoint="sm"
            theme="light"
        >
            <ProfileThumbnail />
            <Divider style={{ margin: '16px 0 8px 0' }} />
            <Menu />
        </Sider>
        <Layout>
            <Content
                style={{
                    padding: '16px 16px 0 16px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Header />
                <Tabs
                    defaultActiveKey="accounts"
                    style={{
                        overflow: 'hidden',
                        flex: 1,
                    }}
                >
                    <TabPane
                        tab="Accounts"
                        key="accounts"
                        style={{
                            overflow: 'hidden',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'columns',
                        }}
                    >
                        <div style={{
                            flex: 1,
                            overflow: 'auto',
                            marginBottom: '60px',
                        }}>
                            <AccountCard
                                name="Dolar"
                                abbr="$"
                                avatar="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png"
                                balance={5300}
                                value={5300}
                            />
                            <AccountCard
                                name="Česká koruna"
                                abbr="CZK"
                                avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/255px-Flag_of_the_Czech_Republic.svg.png"
                                balance="120 000,00"
                                value={5214}
                            />
                            <AccountCard
                                name="Portoflio TOP 10"
                                abbr="T10"
                                avatar="https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/cardano_ada-512.png"
                                balance="34 000"
                                value={1032}
                            />
                        </div>
                    </TabPane>
                    <TabPane
                        tab="Transactions"
                        key="transactions"
                        style={{
                            overflow: 'hidden',
                            height: '100%',
                            width: '100%',
                        }}
                    >
                        <List
                            dataSource={[
                                {},
                                {},
                            ]}
                            renderItem={() => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar size="large" icon="retweet" />}
                                        title={(
                                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                <Avatar size="small">
                                                    <img
                                                        style={{ maxHeight: '24px', maxWidth: '24px' }}
                                                        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png"
                                                        alt="account-logo"
                                                    />
                                                </Avatar>
                                                USD ⟶ CZK
                                                <Avatar size="small">
                                                    <img
                                                        style={{ maxHeight: '24px', maxWidth: '24px' }}
                                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/255px-Flag_of_the_Czech_Republic.svg.png"
                                                        alt="account-logo"
                                                    />
                                                </Avatar>
                                            </div>
                                        )}
                                        description="22.10.2019"
                                    />
                                    <div>
                                        <Text style={{ fontSize: '24px' }}>$ 2 235,00</Text>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </TabPane>
                </Tabs>
            </Content>
        </Layout>
    </Layout>
);

Root.propTypes = {

};

export default Root;
