import React, { useEffect } from 'react'
import { styled } from 'linaria/react'
import { useQuery } from 'graphql-hooks'

import IndicatorCard from './IndicatorCard'
import Button from '../../components/Button'

const Wrap = styled.div`
    padding: 30rpx;
`

const INDICATORS_LIST = `
    query IndicatorsList($pageQuery: PageQuery!, $indicatorQuery: IndicatorsQuery!) {
        indicatorsList(pageQuery: $pageQuery, indicatorQuery: $indicatorQuery) {
            id
            name
            environment
            isUse
            unit
        }
    }
`

const environment = ['ONCE_TUNNEL', 'TWICE_TUNNEL', 'MUSHROOM_HOUSE']
const list = ['一次隧道指标管理', '二次隧道指标管理', '菇房指标管理']

function App() {
    useEffect(() => {
        wx.setNavigationBarTitle({
            title: list[parseInt(window.location.pathname.split('/')[2])]
        })
    }, [])
    const { loading, error, data } = useQuery(INDICATORS_LIST, {
        variables: {
            pageQuery: {
                pageNum: 1,
                pageSize: 100
            },
            indicatorQuery: {
                environment:
                    environment[
                        parseInt(window.location.pathname.split('/')[2])
                    ]
            }
        }
    })
    const handleClick = () => {}
    if (loading) return <div>loading...</div>
    return (
        <Wrap>
            <Button onClick={handleClick}>新增指标</Button>
            {data.indicatorsList.map(v => (
                <IndicatorCard key={v.id} indicator={v}></IndicatorCard>
            ))}
        </Wrap>
    )
}

export default App
