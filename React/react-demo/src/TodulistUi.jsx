import React from 'react';
import { Input, Space,Button, List } from 'antd'
import 'antd/dist/antd.css'

const TodulistUi = (props) => {
  return (
    <div style={{margin: '20px'}}>
        <Space>
          <Input 
            value={props.inputValue}
            style={{width:'300px'}}
            onChange={props.handleChange}
          />
          <Button type='primary' onClick={props.handleAdd}>Add</Button>
        </Space>
        <List 
            style={{width:'300px'}}
            bordered
            dataSource={props.list}
            renderItem={(item, index) => {
              return(
                <List.Item>
                  {item}
                  <Button danger type='dashed' 
                    style={{float: 'right'}}
                    onClick={() => props.handleDel(index)}
                  >Del</Button>
                </List.Item>
              )
            }}
          />
      </div>
  )
}

export default TodulistUi
