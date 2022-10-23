import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useNavigate } from "react-router-dom";


const ModalPopUp = ({ MainComponent, isModalOpen, handleOk, handleCancel, btnText , NavigateUrl}) => {

    const navigate = useNavigate();

    return (
        <>
            <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[
                <Button key="back" onClick={handleCancel}>
                    Return
                </Button>,
                <Button key="submit" type="primary" onClick={() => {
                    handleOk()
                    navigate(`${NavigateUrl}`)
                }}>
                    {btnText}
                </Button>,
            ]}>
                <MainComponent />
            </Modal>
        </>
    );
}

export default ModalPopUp;