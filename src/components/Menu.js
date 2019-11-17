import React from 'react';
import { Icon, Menu } from 'antd';

const CrystalMenu = () => {
    return (
        <Menu theme="light">
            <Menu.Item key="accounts">
                <Icon type="appstore" />
                <span>Accounts</span>
            </Menu.Item>
            <Menu.Item key="settings">
                <Icon type="setting" />
                <span>Settings</span>
            </Menu.Item>
            <Menu.Item key="logout">
                <Icon type="logout" />
                <span>Logout</span>
            </Menu.Item>
        </Menu>
    );
};

CrystalMenu.propTypes = {

};

export default CrystalMenu;
