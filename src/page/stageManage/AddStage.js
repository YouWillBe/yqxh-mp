import React, { useState } from 'react'
import { styled } from 'linaria/react'
import { useMutation } from 'graphql-hooks'

import Card from '../../components/Card'

const Wrap = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 40rpx;
    padding-bottom: 40rpx;
`
const Title = styled.div``
const Input = styled.input`
    border: 4rpx solid #6190e8;
    border-radius: 16rpx;
    padding: 24rpx 30rpx;
    width: 70%;
    margin-top: 40rpx;
    margin-bottom: 40rpx;
`
const Button = styled.div`
    padding: 24rpx 40rpx;
    background-color: #6190e8;
    color: #fff;
    font-size: 30rpx;
    border-radius: 16rpx;
`

const ADD_STAGE_DICTIONARY = `
    mutation AddStageDictionary($inputStageDictionary: InputStageDictionary) {
        addStageDictionary(inputStageDictionary: $inputStageDictionary) {
            id
            name
            environment
            status
        }
    }
`

const environment = ['ONCE_TUNNEL', 'TWICE_TUNNEL', 'MUSHROOM_HOUSE']

function AddStage({ onClose, addSuccess }) {
    const [value, setValue] = useState('')
    const [addStageDictionary] = useMutation(ADD_STAGE_DICTIONARY)
    const handleChange = e => {
        setValue(e.target.value)
    }
    const handleAdd = async e => {
        e.stopPropagation()
        if (!value) return
        const { data, error } = addStageDictionary({
            variables: {
                inputStageDictionary: {
                    name: value,
                    environment:
                        environment[
                            parseInt(window.location.pathname.split('/')[2])
                        ],
                    status: 1
                }
            }
        })
        if (error) {
            console.log(error)
        } else {
            addSuccess()
        }
    }
    const handleClick = e => {
        e.stopPropagation()
    }
    return (
        <Wrap onClick={onClose}>
            <Card onClick={handleClick}>
                <Content>
                    <Title>新增阶段</Title>
                    <Input
                        value={value}
                        onChange={handleChange}
                        placeholder='请输入阶段名称'
                    ></Input>
                    <Button onClick={handleAdd}>确认添加</Button>
                </Content>
            </Card>
        </Wrap>
    )
}

export default AddStage
