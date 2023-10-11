import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps } from '@mui/material'
import styled from '@emotion/styled'

const StyledMuiButton = styled(MuiIconButton)`
  transition:
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }
`

type Additional = {
  variant?: 'contained' | 'outlined'
}

type IconButtonProps = Additional & MuiIconButtonProps

function IconButton({ children, variant = 'contained', sx, ...rest }: IconButtonProps) {
  const bgColor = variant === 'contained' ? 'primary.main' : 'transparent'

  const color = variant === 'contained' ? 'white' : 'primary.main'

  const hoverBgColor = variant === 'contained' ? 'rgb(72, 40, 128)' : '#eee'

  return (
    <StyledMuiButton
      sx={{
        backgroundColor: bgColor,
        color,
        '&:hover': {
          backgroundColor: hoverBgColor,
        },
        ...sx,
      }}
      disableRipple
      size="large"
      {...rest}
    >
      {children}
    </StyledMuiButton>
  )
}

export default IconButton
