import { Button as MuiButton, ButtonProps } from "@mui/material"
import styled from '@emotion/styled'

const StyledMuiButton = styled(MuiButton)`
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5);
  }
`

function Button({ children, ...rest }: ButtonProps) {
  return (
    <StyledMuiButton variant="contained" disableRipple disableElevation size='large' {...rest}>{children}</StyledMuiButton>
  )
}

export default Button