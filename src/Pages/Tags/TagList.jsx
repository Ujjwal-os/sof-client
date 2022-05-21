import React from 'react'
import './Tags.css'
import {selectTag} from '../../actions/question.js'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const TagsList = ({ tag }) => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleTag=()=>{
        console.log(tag.tagName)
        var tagValue=tag.tagName
        dispatch(selectTag({"tagValue":tagValue},navigate))
    }

    return (
        <div className='tag'>
            <h5 onClick={handleTag}>{tag.tagName}</h5>
            <p>{tag.tagDesc}</p>
        </div>
    )
}

export default TagsList