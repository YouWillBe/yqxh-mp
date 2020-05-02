import React, { useState } from 'react'
import { styled } from 'linaria/react'
import { useMutation } from 'graphql-hooks'

import Box from '../../components/Box'
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

const UPDATE_INDICATORS = `
    mutation UpdateIndicators($inputIndicators: InputIndicators) {
        updateIndicators(inputIndicators: $inputIndicators) {
            id
            name
            environment
            isUse
            unit
        }
    }
`

function StageCard({ indicator }) {
    const [value, setValue] = useState(!!indicator.isUse)
    const [loading, setLoading] = useState(false)
    const [updateIndicators] = useMutation(UPDATE_INDICATORS)
    const handleClick = async () => {
        setLoading(true)
        const { data, error } = await updateIndicators({
            variables: {
                inputIndicators: {
                    ...indicator,
                    status: !value ? 1 : 0
                }
            }
        })
        if (error) {
            console.log(error)
        } else {
            setLoading(false)
            setValue(!!data.updateIndicators.status)
        }
    }
    return (
        <Box>
            <Content>
                <Name>{indicator.name}</Name>
                <SwitchWrap>
                    <Switch
                        value={value}
                        onClick={handleClick}
                        loading={loading}
                    ></Switch>
                    <Helper>{value ? '已启用' : '已禁用'}</Helper>
                </SwitchWrap>
            </Content>
        </Box>
    )
}

export default StageCard
