import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Menu, Button, Row, Col } from 'antd';
import { SEE_ROTATION_REQUEST } from '../reducers/champ';

const AppLayout = ({children}) => { // props
    const dispatch = useDispatch();
    const homeOnClick = useCallback(() => {
        dispatch({
            type : SEE_ROTATION_REQUEST
        });
    },[]);
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Button onClick={homeOnClick}>홈</Button></Menu.Item>
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