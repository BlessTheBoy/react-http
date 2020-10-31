import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [buttonId, setButtonId] = useState(0)

    const handleClick = () => {
        setButtonId(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => console.log(err))
    }, [buttonId])

    return (
        // <ul>
        //     {
        //         posts.map(post => (<li key={post.id}>{post.title}</li>))
        //     }
        // </ul>
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Click</button>
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetching
