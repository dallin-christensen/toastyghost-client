import { useMutation } from '@tanstack/react-query';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import RoomType from '../data/types/RoomType';
import ParticipantType from '../data/types/ParticipantType';
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from '../context/UserContext';
import fetchWithHeaders from '../utilities/fetchWithHeaders';

type FieldType = {
  roomName?: string;
  username?: string;
};

function CreateNewRoomForm() {
  const [roomName, setRoomName] = useState("")
  const [username, setUsername] = useState("")
  const navigate = useNavigate();
  const { setCurrentUser } = useCurrentUser()

  const mutation = useMutation({
    mutationFn: async () => {
      return await fetchWithHeaders("http://localhost:8082/api/rooms/createroom", {
        name: roomName,
          participants: [
            {
              avatar: "avatarblah",
              handle: username
            }
          ]
      })
    },
    onSuccess: ({room, participant}: { room: RoomType, participant: ParticipantType }) => {
      if (room?._id) {
        setCurrentUser(participant)
        navigate(`/room/${room?._id}`)
      }
    },
  })

  const onFinish = () => {
    mutation.mutate()
  }

  const onFinishFailed = () => {
    console.error('room creation failure')
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
        label="Room Name"
        name="roomName"
        rules={[{ required: true, message: 'Please input a room name' }]}
      >
        <Input value={roomName} onChange={e => setRoomName(e.target.value)} />
      </Form.Item>

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

export default CreateNewRoomForm