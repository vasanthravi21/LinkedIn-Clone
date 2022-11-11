
import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import "./Post.css"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

function Post({ name, description, message, photoUrl }){
  return (
      <div className='post'>
          <div className='post__header'>
              <Avatar />
              <div className='post__info'>
                  <h2>Vasanth</h2>
                  <p>Description</p>
              </div>
          </div>

          <div className='post__body'>
              <p>message goes here</p>
          </div>

          <div className='post__buttons'>
              <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
          </div>
      </div>
  )
}

export default Post