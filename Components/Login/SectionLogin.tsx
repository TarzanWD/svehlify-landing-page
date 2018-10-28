import { WithStyles } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import withStyles from '@material-ui/core/styles/withStyles'
import Email from '@material-ui/icons/Email'
import People from '@material-ui/icons/People'
import React from 'react'
import Card from '../core/Card/Card'
import CardBody from '../core/Card/CardBody'
import CardFooter from '../core/Card/CardFooter'
import CardHeader from '../core/Card/CardHeader'
import Button from '../core/CustomButtons/Button'
import CustomInput from '../core/CustomInput/CustomInput'
import GridContainer from '../core/Grid/GridContainer'
import GridItem from '../core/Grid/GridItem'
import loginStyle from './loginStyle'
import Typography from '@material-ui/core/Typography'

interface IProps extends WithStyles<typeof loginStyle> {}

class SectionLogin extends React.Component<IProps> {

  public preventDefaultClick = (e) => {
    e.preventDefault()
  }

  public render() {
    const { classes } = this.props
    return (
      <div className={classes.section} id='registrace'>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form}>
                  <CardHeader color='primary' className={classes.cardHeader}>
                    <h4>Máte zájem o kurz?</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href='#pablo'
                        target='_blank'
                        color='transparent'
                        onClick={this.preventDefaultClick}
                      >
                        <img style={{ height: '20px' }} src='/static/icons/twitter.svg' />
                      </Button>
                      <Button
                        justIcon
                        href='#pablo'
                        target='_blank'
                        color='transparent'
                        onClick={this.preventDefaultClick}
                      >
                        <img style={{  height: '18px' }} src='/static/icons/github.svg' />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>Neváhejte se nám ozvat na email:</p>
                  
                  <a className={classes.divider} href='mailto:svehl.jakub@gmail.com' target='_top'>
                    <Typography variant='h6' style={{ marginBottom: '20px' }}>
                      svehl.jakub@gmail.com
                    </Typography>
                  </a>
                  {/*
                  <CardBody>
                    <CustomInput
                      labelText='First Name...'
                      id='first'
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position='end'>
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText='Email...'
                      id='email'
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: 'email',
                        endAdornment: (
                          <InputAdornment position='end'>
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color='primary' size='large'>
                      Get started
                    </Button>
                  </CardFooter>
                  */}
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(loginStyle)(SectionLogin)
