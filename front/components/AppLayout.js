import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';

const AppLayout = ({children}) => { // props
    
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>홈</a></Link></Menu.Item>
                {/* <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{verticalAlign : "middle"}} />
                </Menu.Item> */}
            </Menu>
            <Row gutter={8}>
                {/* <Col xs={24} md={6}>
                    {me
                     ? <UserProfile/>
                    :
                    <LoginForm/>
                    }
                </Col> */}
                <Col xs={24} md={24}>
                    {children}
                </Col>
                {/* <Col xs={24} md={6}>
                    <Link href="#"><a target="_blank">Made by mgw</a></Link>
                </Col> */}
            </Row>
        </div>
    )
};

AppLayout.propTypes = {
    children : PropTypes.node,
}

export default AppLayout;