import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Menu, Input, Row, Col } from 'antd';
import { SEE_ROTATION_REQUEST } from '../reducers/champ';

const AppLayout = ({children}) => { // props
    const dispatch = useDispatch();
    const homeOnClick = () => {
        dispatch({
            type : SEE_ROTATION_REQUEST
        });
        Router.push({
            pathname : '/',
        })
    }
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><a onClick={homeOnClick}>홈</a></Menu.Item>
                {/* <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{verticalAlign : "middle"}} />
                </Menu.Item> */}
            </Menu>
            <Row>
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