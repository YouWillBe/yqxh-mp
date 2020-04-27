import React, { useEffect } from 'react'
import { styled } from 'linaria/react'
import { useQuery } from 'graphql-hooks'

import StageCard from './StageCard'
import Button from '../../components/Button'

const Wrap = styled.div`
    padding: 30rpx;
`

const STAGE_DICTIONARY_LIST = `
    query StageDictionaryList($pageQuery: PageQuery!, $stageDictionaryQuery: StageDictionaryQuery!) {
        stageDictionaryList(pageQuery: $pageQuery, stageDictionaryQuery: $stageDictionaryQuery) {
            id
            name
            environment
            status
        }
    }
`

const environment = ['ONCE_TUNNEL', 'TWICE_TUNNEL', 'MUSHROOM_HOUSE']
const list = ['一次隧道阶段管理', '二次隧道阶段管理', '菇房阶段管理']

function App() {
    useEffect(() => {
        wx.setNavigationBarTitle({
            title: list[parseInt(window.location.pathname.split('/')[2])]
        })
    }, [])
    const { loading, error, data } = useQuery(STAGE_DICTIONARY_LIST, {
        variables: {
            pageQuery: {
                pageNum: 1,
                pageSize: 100
            },
            stageDictionaryQuery: {
                environment:
                    environment[
                        parseInt(window.location.pathname.split('/')[2])
                    ]
            }
        }
    })
    if (loading) return <div>loading...</div>
    return (
        <Wrap>
            <Button>新增阶段</Button>
            {data.stageDictionaryList.map(v => (
                <StageCard key={v.id} stage={v}></StageCard>
            ))}
        </Wrap>
    )
}

export default App
