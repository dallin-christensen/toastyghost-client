import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps } from '@mui/material'

type Additional = {
  variant?: 'contained' | 'outlined'
}

type IconButtonProps = Additional & MuiIconButtonProps

function IconButton({ children, variant = 'contained', sx, className, ...rest }: IconButtonProps) {
  const bgColor = variant === 'contained' ? 'primary.main' : 'transparent'

  const color = variant === 'contained' ? 'white' : 'primary.main'

  const hoverBgColor = variant === 'contained' ? 'rgb(72, 40, 128)' : '#eee'

  return (
    <MuiIconButton
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
      className={`focus:shadow-buttonfocus ${className}`}
      {...rest}
    >
      {children}
    </MuiIconButton>
  )
}

export default IconButton
