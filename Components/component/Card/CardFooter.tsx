import { createStyles, WithStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'
import React from 'react'

const cardFooterStyle = (theme: Theme) => createStyles({
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: '0.9375rem 1.875rem',
  },
})


interface IProps extends WithStyles<typeof cardFooterStyle>  {
  className: string
}
const CardFooter: React.SFC<IProps> = (props) => {
  const { classes, className, children, ...rest } = props
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [className]: className !== undefined,
  })
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  )
}

export default withStyles(cardFooterStyle)(CardFooter)
