import React, { useState, useEffect, useRef } from 'react'
import { styled } from 'linaria/react'

const Wrap = styled.div`
    background-color: #00a6f3;
    flex: 1;
`
const list = ['aaa', 'bbb', 'ccc']

function User() {
    const pickerRef = useRef()
    const [current, setCurrent] = useState(0)
    const handleChange = e => {
        console.log(e)
        setCurrent(parseInt(e.detail.value))
    }
    useEffect(() => {
        pickerRef.current.addEventListener('change', handleChange)
        // pickerRef.current.setAttribute('range', JSON.stringify(list))
    }, [])
    return (
        <Wrap>
            <wx-picker
                ref={pickerRef}
                range={list}
                // range={JSON.stringify(list) }
                value={current}
                onChange={handleChange}
            >
                <div>{list[current].text}</div>
            </wx-picker>
        </Wrap>
    )
}

export default User
