import { useRoom } from "../context/RoomContext"
import styled from '@emotion/styled'

const Wrapper = styled.header`
  display: flex;
`

function Header() {
  const { room } = useRoom()
  return (
    <Wrapper>
      <h1>GHOST TOAST</h1>
      {
        room?.name
          && (
            <h2>{room?.name?.toLowerCase()}</h2>
          )
      }
    </Wrapper>
  )
}

export default Header