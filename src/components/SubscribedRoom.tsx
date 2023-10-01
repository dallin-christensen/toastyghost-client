import { Box, Paper } from "@mui/material"
import { useRoom } from "../context/RoomContext"
import useSocketConnect from "../hooks/useSocketConnect"
import useSocketEventListeners from "../hooks/useSocketEventListeners"
import PostMessageInput from "./PostMessageInput"
import styled from '@emotion/styled'
import RoomFooterActions from "./RoomFooterActions"

const RoomBox = styled(Box)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const ActionPaper = styled(Paper)`
  position: absolute;
  border-radius: 6px 6px 0 0;
  background-color: white;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  padding: .7rem .5rem;
  left: 50%;
  transform: translateX(-50%);
`

const CanvasContainer = styled(Box)`
  overflow: hidden;
`


function SubscribedRoom() {
  useSocketConnect()
  useSocketEventListeners()

  const {
    room
  } = useRoom()

  return (
    <RoomBox>
      <CanvasContainer>
        <pre style={{ flex: 1 }}>{JSON.stringify(room, undefined, 2)}</pre>
      </CanvasContainer>
      <ActionPaper elevation={8}>
        <PostMessageInput />
        <RoomFooterActions />
      </ActionPaper>
    </RoomBox>
  )
}

export default SubscribedRoom