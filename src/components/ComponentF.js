import React, {useContext} from 'react'
import { ChannelContext, UserContext } from '../App'

function ComponentF() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    
    return (
        <div>
            {user} is a {channel}
        </div>
    )
}

export default ComponentF
