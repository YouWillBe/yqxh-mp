import React from 'react'
import { styled } from 'linaria/react'
import { css } from 'linaria'

const Wrap = styled.div`
    width: 100rpx;
    height: 50rpx;
    border-radius: 34rpx;
    background-color: #eee;
    transition: all 0.3s ease;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const Handler = styled.div`
    height: 42rpx;
    width: 42rpx;
    border-radius: 50%;
    background-color: #fff;
    transition: all 0.3s ease;
    margin-right: 5rpx;
    margin-left: 5rpx;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Spinner = styled.div`
    background-image: url(https://i.loli.net/2020/04/27/S5iE6jHmIPuWZq4.png);
    background-size: contain;
    height: 30rpx;
    width: 30rpx;
    animation-name: loading;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    @keyframes loading {
        form {
            transform: rotate(0turn);
        }
        to {
            transform: rotate(1turn);
        }
    }
`
const checkedWrap = css`
    background-color: #00a6f3;
    justify-content: flex-end;
`

function Switch({ value, onClick, loading }) {
    return (
        <Wrap className={value && checkedWrap} onClick={onClick}>
            <Handler>{loading && <Spinner />}</Handler>
        </Wrap>
    )
}

export default Switch
