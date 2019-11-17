import React from 'react';
import { Avatar, Typography } from 'antd';

const { Paragraph } = Typography;

const ProfileThumbnail = () => {
    return (
        <div style={{ padding: '16px 0 0 16px' }}>
            <Avatar size="large" icon="user" />
            <Paragraph style={{ marginTop: '8px' }}>
                Adam Ryvola
            </Paragraph>
        </div>
    );
};

export default ProfileThumbnail;
