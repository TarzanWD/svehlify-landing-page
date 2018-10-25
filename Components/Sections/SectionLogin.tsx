import { WithStyles } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import InputAdornment from '@material-ui/core/InputAdornment'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Email from '@material-ui/icons/Email'
// @material-ui/icons
import People from '@material-ui/icons/People'
import React from 'react'
import loginStyle from '../assets/jss/material-kit-react/views/componentsSections/loginStyle'
import Card from '../component/Card/Card'
import CardBody from '../component/Card/CardBody'
import CardFooter from '../component/Card/CardFooter'
import CardHeader from '../component/Card/CardHeader'
import Button from '../component/CustomButtons/Button'
import CustomInput from '../component/CustomInput/CustomInput'
// core components
import GridContainer from '../component/Grid/GridContainer'
import GridItem from '../component/Grid/GridItem'

interface IProps extends WithStyles<typeof loginStyle> {}

class SectionLogin extends React.Component<IProps> {

  public preventDefaultClick = (e) => {
    e.preventDefault()
  }

  public render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form}>
                  <CardHeader color='primary' className={classes.cardHeader}>
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href='#pablo'
                        target='_blank'
                        color='transparent'
                        onClick={this.preventDefaultClick}
                      >
                        <i
                          className={classes.socialIcons + ' fab fa-twitter'}
                        />
                      </Button>
                      <Button
                        justIcon
                        href='#pablo'
                        target='_blank'
                        color='transparent'
                        onClick={this.preventDefaultClick}
                      >
                        <i
                          className={classes.socialIcons + ' fab fa-facebook'}
                        />
                      </Button>
                      <Button
                        justIcon
                        href='#pablo'
                        target='_blank'
                        color='transparent'
                        onClick={this.preventDefaultClick}
                      >
                        <i
                          className={
                            classes.socialIcons + ' fab fa-google-plus-g'
                          }
                        />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>Or Be Classical</p>
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
                    <CustomInput
                      labelText='Password'
                      id='pass'
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: 'password',
                        endAdornment: (
                          <InputAdornment position='end'>
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color='primary' size='lg'>
                      Get started
                    </Button>
                  </CardFooter>
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
