import React from 'react'
import { styled } from 'linaria/react'

const Container = styled.div`
    background-color: #6190e8;
    color: #fff;
    padding: 24rpx 20rpx;
    font-weight: bold;
    font-size: 30rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16rpx;
`

const Button = ({ className, children, ...props }) => {
    return (
        <Container className={{ className }} {...props}>
            {children}
        </Container>
    )
}

export default Button
