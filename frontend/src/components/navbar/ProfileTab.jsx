import { Dropdown, Menu, Space } from "antd";
import React from "react";
import { useDispatch } from "react-redux"
import { logout } from "../../redux/auth/auth.slice";
 
const ProfileTab = () => {

    const dispatch = useDispatch();

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a onClick={() => dispatch(logout())} >
                            Logout
                        </a>
                    ),
                },
                // {
                //     key: '2',
                //     label: (
                //         <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                //             2nd menu item
                //         </a>
                //     ),
                // },
                // {
                //     key: '3',
                //     label: (
                //         <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                //             3rd menu item
                //         </a>
                //     ),
                // },
            ]}
        />
    );

    return <Space direction="vertical">
            <Dropdown overlay={menu} placement="bottom">
                <img height={"50px"} width={"50px"} src="https://img.icons8.com/office/16/000000/user-male-circle.png" />
            </Dropdown>
        </Space>
}

export default ProfileTab;