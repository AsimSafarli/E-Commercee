import React from 'react'
import { Space, Spin } from 'antd';
function Loading() {
  return (
    <Space size="middle" >
    <Spin size="large" className='flex items-center justify-center'/>
  </Space>
  )
}

export default Loading