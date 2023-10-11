import { Box, Paper } from "@mui/material"
import useSocketConnect from "../hooks/useSocketConnect"
import useSocketEventListeners from "../hooks/useSocketEventListeners"
import PostMessageInput from "./PostMessageInput"
import styled from '@emotion/styled'
import RoomFooterActions from "./RoomFooterActions"
import Canvas from "./Canvas"
import Header from "./Header"

const RoomBox = styled(Box)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px;
`

const ActionPaper = styled(Paper)`
  position: absolute;
  border-radius: 6px 6px 0 0;
  background-color: white;
  bottom: 0px;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
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

  return (
    <>
      <Header withLogo />
      <RoomBox>
        <CanvasContainer>
          <Canvas />
        </CanvasContainer>
        <ActionPaper elevation={5} className="action-paper">
          <PostMessageInput />
          <RoomFooterActions />
        </ActionPaper>
      </RoomBox>
    </>
  )
}

export default SubscribedRoom