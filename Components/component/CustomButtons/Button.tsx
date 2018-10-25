import classNames from 'classnames'
import React from 'react'

// @material-ui/core components
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import { WithStyles } from '@material-ui/core'
import buttonStyle from './buttonStyle'

interface IProps extends WithStyles<typeof buttonStyle> {
  color?: 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'rose'
    | 'white'
    | 'facebook'
    | 'twitter'
    | 'google'
    | 'github'
    | 'transparent'
  size?: 'sm' | 'lg'
  simple?: boolean,
  round?: boolean
  fullWidth?: boolean
  disabled?: boolean
  block?: boolean
  link?: boolean
  justIcon?: boolean
  className?: string
}
const RegularButton: React.SFC<IProps> = (props) => {
  const {
    classes,
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest } = props
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
  })
  return (
    <Button {...rest} className={btnClasses}>
      {children}
    </Button>
  )
}

export default withStyles(buttonStyle)(RegularButton)
