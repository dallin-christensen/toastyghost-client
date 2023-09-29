import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import socket from "../socket"
import { useParams } from 'react-router-dom';

type FieldType = {
  roomName?: string;
  username?: string;
};

function JoinRoomForm() {
  const [username, setUsername] = useState("")
  const { roomId } = useParams()

  const onFinish = () => {
    socket.emit('joinroom', {
      roomId: roomId,
      participant: {
        avatar: "blah",
        handle: username,
      },
    })
  }

  const onFinishFailed = () => {
    
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your user name' }]}
      >
        <Input value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default JoinRoomForm