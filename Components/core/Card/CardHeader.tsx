import { createStyles, WithStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'
import React from 'react'
import {
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  successCardHeader,
  warningCardHeader,
} from '../../assets/jss/material-kit-react'

const cardHeaderStyle = (theme: Theme) => createStyles({
  cardHeader: {
    borderRadius: '3px',
    padding: '1rem 15px',
    marginLeft: '15px',
    marginRight: '15px',
    marginTop: '-30px',
    border: '0',
    marginBottom: '0',
  },
  cardHeaderPlain: {
    marginLeft: '0px',
    marginRight: '0px',
  },
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
})

interface IProps extends WithStyles<typeof cardHeaderStyle>  {
  className?: string
  plain?: boolean,
  color: 'warning' | 'success' | 'danger' | 'info' | 'primary',
}
const CardHeader: React.SFC<IProps> = (props) => {
  const { classes, className, children, color, plain, ...rest } = props
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + 'CardHeader']]: color,
    [classes.cardHeaderPlain]: plain,
    [className]: className !== undefined,
  })
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  )
}

export default withStyles(cardHeaderStyle)(CardHeader)
