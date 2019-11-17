import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Icon, Typography } from 'antd';

const { Paragraph, Text } = Typography;

const AccountCard = ({ name, abbr, avatar, balance, value }) => {
    return (
        <Col xxl={6} lg={12} xs={24}>
            <Card
                hoverable
                style={{ margin: '8px' }}
                actions={[
                    <Icon type="plus" key="topup" />,
                    <Icon type="retweet" key="exchange" />,
                    <Icon type="line-chart" key="statistics" />,
                ]}
            >
                <Card.Meta
                    title={name}
                    description={abbr}
                    avatar={(
                        <div style={{ height: '50px', width: '50px' }}>
                            <img height="50px" src={avatar} alt="account-logo" />
                        </div>
                    )}
                >
                </Card.Meta>
                <div style={{ marginLeft: '66px' }}>
                    <Paragraph style={{ fontSize: '25px', marginBottom: 0 }}>
                        {balance}
                    </Paragraph>
                    <Text type="secondary">(${value})</Text>
                </div>
            </Card>
        </Col>
    );
};

AccountCard.propTypes = {
    name: PropTypes.string,
    abbr: PropTypes.string,
    balance: PropTypes.number,
    value: PropTypes.number,
    avatar: PropTypes.string,
};

export default AccountCard;
