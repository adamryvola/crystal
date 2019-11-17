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
    <Layout hasSider style={{ height: '100%', width: '100%' }}>
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
                    padding: '16px',
                    marginBottom: '32px',
                }}
            >
                <Header />
                <Tabs defaultActiveKey="accounts">
                    <TabPane tab="Accounts" key="accounts">
                        <div>
                            <AccountCard
                                name="Bitcoin"
                                abbr="BTC"
                                avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1000px-Bitcoin.svg.png"
                                balance={0.023466}
                                value={528}
                            />
                            <AccountCard
                                name="Ethereum"
                                abbr="ETH"
                                avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/471px-Ethereum_logo_2014.svg.png"
                                balance={0.0522}
                                value={1032}
                            />
                            <AccountCard
                                name="Cardano"
                                abbr="ADA"
                                avatar="https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/cardano_ada-512.png"
                                balance={0.0522}
                                value={1032}
                            />
                            <AccountCard
                                name="Tron"
                                abbr="TRX"
                                avatar="https://cdn.worldvectorlogo.com/logos/tron.svg"
                                balance={0.0522}
                                value={1032}
                            />
                        </div>
                    </TabPane>
                    <TabPane tab="Transactions" key="transactions">
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
                                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1000px-Bitcoin.svg.png"
                                                        alt="account-logo"
                                                    />
                                                </Avatar>
                                                BTC ⟶ ETH
                                                <Avatar size="small">
                                                    <img
                                                        style={{ maxHeight: '24px', maxWidth: '24px' }}
                                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/471px-Ethereum_logo_2014.svg.png"
                                                        alt="account-logo"
                                                    />
                                                </Avatar>
                                            </div>
                                        )}
                                        description="22.10.2019"
                                    />
                                    <div>
                                        <Text style={{ fontSize: '24px' }}>- 0.000523 BTC</Text>
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
