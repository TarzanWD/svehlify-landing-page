import React from 'react'
// nodejs library to set properties for components

// @material-ui/core components
import { createStyles, WithStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import withStyles from '@material-ui/core/styles/withStyles'

const gridContainerStyle = (theme: Theme) => createStyles({
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto',
  },
})

interface IProps extends WithStyles<typeof gridContainerStyle> {
  children?: React.ReactNode,
  className?: string,
}

const GridContainer: React.SFC<IProps> = ({ ...props }) => {
  const { classes, children, className, ...rest } = props
  return (
    <Grid container {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  )
}

GridContainer.defaultProps = {
  className: '',
}

export default withStyles(gridContainerStyle)(GridContainer)
