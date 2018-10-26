import { createStyles, WithStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'
import React from 'react'

const cardStyle = (theme: Theme) => createStyles({
  card: {
    border: '0',
    marginBottom: '30px',
    marginTop: '30px',
    borderRadius: '6px',
    color: 'rgba(0, 0, 0, 0.87)',
    background: '#fff',
    width: '100%',
    // tslint:disable-next-line:max-line-length
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '0',
    wordWrap: 'break-word',
    fontSize: '.875rem',
    transition: 'all 300ms linear',
  },
  cardPlain: {
    background: 'transparent',
    boxShadow: 'none',
  },
  cardCarousel: {
    overflow: 'hidden',
  },
})


interface IProps extends WithStyles<typeof cardStyle>  {
  className?: string
  plain?: boolean,
  carousel?: boolean,
}

const Card: React.SFC<IProps> = (props) => {
  const { classes, className, children, plain, carousel, ...rest } = props
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [className]: className !== undefined,
  })
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  )
}

export default withStyles(cardStyle)(Card)
