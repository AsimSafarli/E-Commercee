import React from 'react'
import items from '../../../Data/testimols.json'
import { Rate } from 'antd'
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
function Testimols() {
  const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };
  return (
    <div>
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-row items-end gap-x-4">
          <div className="h-10 w-5 bg-red-500 rounded"></div>
          <div className="text-base font-semibold text-red-500">Testimols</div>
        </div>
        <div className="font-semibold text-4xl md:text-left text-center">What our clients say about us.</div>
      </div>
      <div className='flex md:flex-row gap-x-16 p-5 flex-col justify-center gap-y-10 md:justify-between'>
        {
          items.map((item)=>(
            <div key={item.id} className='flex flex-col items-center justify-center gap-y-5 border border-solid border-gray-500 p-10 rounded-lg'>
             <div>
              <img src={item.image} />

             </div>
             <div className='text-2xl font-bold'>{item.name}</div>
             <div>   
             <Rate
            defaultValue={item.value}
            character={({ index }) => customIcons[index + 1]}
          /></div>
           <div>
            {item.quote}
           </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Testimols