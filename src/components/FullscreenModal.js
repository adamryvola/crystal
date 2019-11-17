import React, { useState } from 'react';
import { Modal, Icon } from 'antd';

const FullscreenModal = ({ children, onClose }) => {
    const [visible, setVisible] = useState(true);
    return (
        <Modal
            onCancel={() => setVisible(false)}
            afterClose={onClose}
            visible={visible}
            bodyStyle={{
                height: '100%',
                width: '100%',
            }}
            footer={null}
            closeIcon={<Icon type="close-circle" style={{ fontSize: '32px', color: '#ddd' }} />}
        >
            {children}
        </Modal>
    );
};

FullscreenModal.propTypes = {

};

export default FullscreenModal;
