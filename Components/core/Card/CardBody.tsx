import { createStyles, WithStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'
import React from 'react'

const cardBodyStyle = (theme: Theme) => createStyles({
  cardBody: {
    padding: '0.9375rem 1.875rem',
    flex: '1 1 auto',
  },
})


interface IProps extends WithStyles<typeof cardBodyStyle>  {
  className?: string
}
const CardBody: React.SFC<IProps> = (props) => {
  const { classes, className, children, ...rest } = props
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [className]: className !== undefined,
  })
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  )
}


export default withStyles(cardBodyStyle)(CardBody)
