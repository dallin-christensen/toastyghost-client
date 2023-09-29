import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import RoomType from '../data/types/RoomType';
import ParticipantType from '../data/types/ParticipantType';
import { useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import fetchWithHeaders from '../utilities/fetchWithHeaders';
import { useCurrentUser } from '../context/UserContext';
import { useRoom } from '../context/RoomContext';

type FieldType = {
  roomName?: string;
  username?: string;
};

function JoinRoomForm() {
  const [username, setUsername] = useState("")
  const { roomId } = useParams()
  const { setCurrentUser } = useCurrentUser()
  const { setRoom } = useRoom()

  const mutation = useMutation({
    mutationFn: async () => {
      return await fetchWithHeaders("http://localhost:8082/api/rooms/joinRoom", {
        roomId,
        participant: {
          avatar: "avatarblah",
          handle: username
        }
      })
    },
    onSuccess: ({room, participant}: { room: RoomType, participant: ParticipantType }) => {
      if (room?._id) {
        setCurrentUser(participant)
        setRoom(room)
      }
    },
  })


  const onFinish = () => {
    mutation.mutate()
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