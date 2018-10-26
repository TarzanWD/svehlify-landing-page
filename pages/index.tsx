import { createStyles, WithStyles } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import React from 'react'
import Components from '../Components/Components'

const styles = (theme: Theme) => createStyles({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
})

interface IProps extends WithStyles<typeof styles> {}

class Index extends React.Component<IProps, null> {
  public render() {

    return (
      <>
        <Components />
      </>
    )
  }
}

export default withStyles(styles)(Index)
