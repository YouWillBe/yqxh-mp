import React, { useEffect } from 'react'
import { styled } from 'linaria/react'
import Card from '../../../components/Card'

const Wrap = styled.div`
    flex: 1;
`

const roomList = [
    { id: 0, name: '一号菇房' },
    { id: 1, name: '二号菇房' }
]
function RoomList() {
    useEffect(() => {
        wx.setNavigationBarTitle({
            title: '菇房列表'
        })
    }, [])
    const handleCLickRoom = id => {
        window.open(`/room/${id}`)
    }
    return (
        <Wrap>
            {roomList.map(v => (
                <Card onClick={() => handleCLickRoom(v.id)}>{v.name}</Card>
            ))}
        </Wrap>
    )
}

export default RoomList
