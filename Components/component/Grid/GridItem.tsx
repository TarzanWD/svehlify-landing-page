import { createStyles, WithStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import React from 'react'

const gridItemStyle = (theme: Theme) => createStyles({
  grid: {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    flexBasis: 'auto',
  },
})

interface IProps extends WithStyles<typeof gridItemStyle> {
  children?: React.ReactNode,
  className?: string,
}

const GridItem: React.SFC<IProps> = (props) => {
  const { classes, children, className, ...rest } = props
  return (
    <Grid item {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  )
}

export default withStyles(gridItemStyle)(GridItem)
