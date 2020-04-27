import React, { useEffect, useState } from 'react'
import { styled } from 'linaria/react'
import { useQuery } from 'graphql-hooks'

import StageCard from './StageCard'
import Button from '../../components/Button'
import AddStage from './AddStage'

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
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        wx.setNavigationBarTitle({
            title: list[parseInt(window.location.pathname.split('/')[2])]
        })
    }, [])
    const { loading, error, data, refetch } = useQuery(STAGE_DICTIONARY_LIST, {
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
    const handleClick = () => {
        setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)
    }
    const handleAddSuccess = () => {
        setShowModal(false)
        refetch()
        wx.showToast({
            title: ' 添加阶段成功',
            icon: 'success',
            duration: 2000
        })
    }
    if (loading) return <div>loading...</div>
    return (
        <Wrap>
            {showModal && (
                <AddStage
                    onClose={handleClose}
                    addSuccess={handleAddSuccess}
                ></AddStage>
            )}
            <Button onClick={handleClick}>新增阶段</Button>
            {data.stageDictionaryList.map(v => (
                <StageCard key={v.id} stage={v}></StageCard>
            ))}
        </Wrap>
    )
}

export default App
