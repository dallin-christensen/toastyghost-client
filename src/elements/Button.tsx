import { Button as MuiButton, ButtonProps } from '@mui/material'

function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <MuiButton
      variant="contained"
      disableRipple
      disableElevation
      size="large"
      className={`focus:shadow-buttonfocus ${className}`}
      {...rest}
    >
      {children}
    </MuiButton>
  )
}

export default Button
