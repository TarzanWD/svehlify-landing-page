/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import { WithStyles, createStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

const styles = (theme: Theme) => createStyles({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
})

interface IProps extends WithStyles<typeof styles> {}
interface IState {
  open?: boolean
}


class About extends React.Component<IProps, IState> {
  public render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Typography variant='h4' gutterBottom={true}>
          Material-UI
        </Typography>
        <Typography variant='subtitle1' gutterBottom={true}>
          about page
        </Typography>
        <Typography gutterBottom={true}>
          <Link href='/'>
            <a>Go to the main page</a>
          </Link>
        </Typography>
        <Button variant='contained' color='primary'>
          Do nothing button
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(About)
