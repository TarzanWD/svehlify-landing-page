/* eslint-disable jsx-a11y/anchor-is-valid */

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CodeIcon from '@material-ui/icons/Code'
import React from 'react'

import { createStyles, WithStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

const styles = (theme: Theme) => createStyles({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
    margin: theme.spacing.unit * 2,
  },
  chip: {
    margin: theme.spacing.unit,
  },
})

interface IProps extends WithStyles<typeof styles> {}
interface IState {
  open?: boolean
}

class Index extends React.Component<IProps, IState> {
  public state = {
    open: false,
  }

  public handleClose = () => {
    this.setState({ open: false })
  }

  public handleClick = () => {
    this.setState({ open: true })
  }

  public render() {
    const { classes } = this.props
    const { open } = this.state

    return (
      <div className={classes.root}>
      <Card className={classes.card}>
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    alt='Contemplative Reptile'
                    className={classes.media}
                    height='140'
                    image='https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=730&crop=1'
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        První krůčky s nodejs & GraphQL na serveru
                    </Typography>
                    <Typography component='p'>
                      Lorem ipsum
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    Share
                  </Button>
                  <Button size='small' color='primary'>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    alt='Contemplative Reptile'
                    className={classes.media}
                    height='140'
                    image='https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=730&crop=1'
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Přeorientujte své nudné REST-API na GraphQL
                    </Typography>
                    <Typography component='p'>
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    Share
                  </Button>
                  <Button size='small' color='primary'>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    alt='Contemplative Reptile'
                    className={classes.media}
                    height='140'
                    image='https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=730&crop=1'
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      React frontend
                    </Typography>
                    <Typography component='p'>
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                    <Chip
                      icon={<CodeIcon />}
                      label='React.js'
                      onClick={this.handleClick}
                      onDelete={this.handleDelete}
                      className={classes.chip}
                    />
                    <Chip
                      icon={<CodeIcon />}
                      label='GraphQL'
                      onClick={this.handleClick}
                      onDelete={this.handleDelete}
                      className={classes.chip}
                    />
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    Share
                  </Button>
                  <Button size='small' color='primary'>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        </Grid>
              </Card>
        {/*
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Typography variant='h5' component='h3'>
                This is a sheet of paper.
              </Typography>
              <Typography component='p'>
                Paper can be used to build surface or other elements for your application.
              </Typography>
              <Chip
                icon={<CodeIcon />}
                label='React.js'
                onClick={this.handleClick}
                onDelete={this.handleDelete}
                className={classes.chip}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
        </Grid>
          */}
      {/*
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color='primary' onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant='h4' gutterBottom={true}>
          Material-UI
        </Typography>
        <Typography variant='subtitle1' gutterBottom={true}>
          example project
        </Typography>
        <Typography gutterBottom={true}>
          <Link href='/about'>
            <a>Go to the about page</a>
          </Link>
        </Typography>
        <Button variant='contained' color='secondary' onClick={this.handleClick}>
          Super Secret Password
        </Button>
      */}
      </div>
    )
  }
}

export default withStyles(styles)(Index)
