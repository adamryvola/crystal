import React, { useState } from 'react';
import { Button, Divider, Select } from 'antd';
import FullscreenModal from '../FullscreenModal';
import './ExchangeModal.scss';
const { Option } = Select;

const ExchangeModal = ({ onClose }) => {
    const [exchangeValue, setExchangeValue] = useState(-0.5);
    return (
        <FullscreenModal onClose={onClose}>
            <div className="exchange-modal">
                <div className="exchange-modal-section-wrapper">
                    <div className="exchange-modal-section">
                        <Select
                            defaultValue="BTC"
                            size="large"
                        >
                            <Option value="BTC">BTC</Option>
                            <Option value="ETH">ETH</Option>
                        </Select>
                        <input
                            type="number"
                            autoFocus
                            value={exchangeValue}
                            onChange={(e) => {
                                setExchangeValue(e.target.value);
                            }}
                        />
                    </div>
                    <Divider type="vertical" />
                    <div className="exchange-modal-section">
                        <Select
                            defaultValue="ETH"
                            size="large"
                        >
                            <Option value="BTC">BTC</Option>
                            <Option value="ETH">ETH</Option>
                        </Select>
                        <input
                            type="number"
                            value={ -1 * exchangeValue * 0.375}
                        />
                    </div>
                </div>
                <div className="exchange-modal-footer">
                    <Button
                        type="primary"
                        shape="round"
                        icon="arrow-right"
                        size="large"
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </FullscreenModal>
    );
};

export default ExchangeModal;
