import React, { useState } from 'react';
import { Button, Divider, Select } from 'antd';
import FullscreenModal from '../FullscreenModal';
import './ExchangeModal.scss';
const { Option } = Select;

const ExchangeModal = ({ onClose }) => {
    const [exchangeValue, setExchangeValue] = useState(-5000);
    return (
        <FullscreenModal onClose={onClose}>
            <div className="exchange-modal">
                <div className="exchange-modal-section-wrapper">
                    <div className="exchange-modal-section">
                        <Select
                            defaultValue="CZK"
                            size="large"
                        >
                            <Option value="USD">USD</Option>
                            <Option value="CZK">CZK</Option>
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
                            defaultValue="USD"
                            size="large"
                        >
                            <Option value="CZK">CZK</Option>
                            <Option value="USD">USD</Option>
                        </Select>
                        <input
                            type="number"
                            value={(-1 * exchangeValue * 0.043).toFixed(2)}
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
