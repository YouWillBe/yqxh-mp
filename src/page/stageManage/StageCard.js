import React, { useState } from 'react'
import { styled } from 'linaria/react'
import { useMutation } from 'graphql-hooks'

import Card from '../../components/Card'
import Switch from '../../components/Switch'

const Content = styled.div`
    height: 140rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 30rpx;
    box-sizing: border-box;
`
const SwitchWrap = styled.div`
    border-left: 1px solid #eee;
    height: 100%;
    width: 160rpx;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`
const Name = styled.div``
const Helper = styled.div`
    font-size: 28rpx;
`

const UPDATE_STAGE_DICTIONARY = `
    mutation UpdateStageDictionary($inputStageDictionary: InputStageDictionary) {
        updateStageDictionary(inputStageDictionary: $inputStageDictionary) {
            id
            name
            environment
            status
        }
    }
`

function StageCard({ stage }) {
    const [value, setValue] = useState(!!stage.status)
    const [loading, setLoading] = useState(false)
    const [updateStageDictionary] = useMutation(UPDATE_STAGE_DICTIONARY)
    const handleClick = async () => {
        setLoading(true)
        const { data, error } = await updateStageDictionary({
            variables: {
                inputStageDictionary: {
                    ...stage,
                    status: !value ? 1 : 0
                }
            }
        })
        if (error) {
            console.log(error)
        } else {
            setLoading(false)
            setValue(!!data.updateStageDictionary.status)
        }
    }
    return (
        <Card>
            <Content>
                <Name>{stage.name}</Name>
                <SwitchWrap>
                    <Switch
                        value={value}
                        onClick={handleClick}
                        loading={loading}
                    ></Switch>
                    <Helper>{value ? '已启用' : '已禁用'}</Helper>
                </SwitchWrap>
            </Content>
        </Card>
    )
}

export default StageCard
