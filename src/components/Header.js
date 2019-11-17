import React, { useState } from 'react';
import { Button, Typography } from 'antd';
import ExchangeModal from './ExchangeModal';

const { Title, Text } = Typography;

const Header = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {visible ? (
                <ExchangeModal onClose={() => setVisible(false)} />
            ) : null}
            <div style={{ flex: 1, marginBottom: '16px' }}>
                <Title level={1} className="total-balance">$ 455 000,00</Title>
                <Text type="secondary">Total balance</Text>
            </div>
            <div className="header-action-buttons">
                <Button
                    type="ghost"
                    size="large"
                    shape="circle"
                    icon="retweet"
                    style={{ marginLeft: '8px' }}
                    onClick={() => {
                        setVisible(true)
                    }}
                />
                <Button
                    type="primary"
                    size="large"
                    shape="circle"
                    icon="plus"
                    style={{ marginLeft: '8px' }}
                />
            </div>
        </div>
    );
};

export default Header;
