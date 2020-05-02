import React from 'react'
import { styled } from 'linaria/react'

const Container = styled.div`
    border-radius: 10rpx;
    background-color: white;
    margin: 20rpx 0;
    color: #000;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
    font-size: 32rpx;
`

const Box = ({ className, children, ...props }) => {
    return (
        <Container className={{ className }} {...props}>
            {children}
        </Container>
    )
}

export default Box