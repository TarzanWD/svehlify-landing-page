import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
// @material-ui/icons
import Menu from '@material-ui/icons/Menu'
// core components
import headerStyle from '../../assets/jss/material-kit-react/components/headerStyle'

interface IProps {
  classes: any
  color: any
  changeColorOnScroll: any
  rightLinks: any
  leftLinks: any
  brand: any
  fixed: any
  absolute: any
}

interface IState {
  mobileOpen: boolean
}

class Header extends React.Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {
      mobileOpen: false,
    }
  }

  public handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  public componentDidMount() {
    if (typeof window === typeof undefined) {
      if (this.props.changeColorOnScroll) {
        window.addEventListener('scroll', this.headerColorChange)
      }
    }
  }

  public headerColorChange = () => {
    if (typeof window === typeof undefined) {
      const { classes, color, changeColorOnScroll } = this.props
      const windowsScrollTop = window.pageYOffset
      if (windowsScrollTop > changeColorOnScroll.height) {
        document.body
          .getElementsByTagName('header')[0]
          .classList.remove(classes[color])
        document.body
          .getElementsByTagName('header')[0]
          .classList.add(classes[changeColorOnScroll.color])
      } else {
        document.body
          .getElementsByTagName('header')[0]
          .classList.add(classes[color])
        document.body
          .getElementsByTagName('header')[0]
          .classList.remove(classes[changeColorOnScroll.color])
      }
    }
  }

  public componentWillUnmount() {
    if (typeof window === typeof undefined) {
      if (this.props.changeColorOnScroll) {
        window.removeEventListener('scroll', this.headerColorChange)
      }
    }
  }

  public render() {
    const {
      classes,
      color,
      rightLinks,
      leftLinks,
      brand,
      fixed,
      absolute,
    } = this.props
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed,
    })
    const brandComponent = <Button className={classes.title}>{brand}</Button>
    return (
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          {leftLinks !== undefined ? brandComponent : null}
          <div className={classes.flex}>
            {leftLinks !== undefined ? (
              <Hidden smDown implementation='css'>
                {leftLinks}
              </Hidden>
            ) : (
              brandComponent
            )}
          </div>
          <Hidden smDown implementation='css'>
            {rightLinks}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden mdUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={'right'}
            open={this.state.mobileOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
            onClose={this.handleDrawerToggle}
          >
            <div className={classes.appResponsive}>
              {leftLinks}
              {rightLinks}
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
    )
  }
}

Header.defaultProp = {
  color: 'white',
}

Header.propTypes = {
  
}

export default withStyles(headerStyle)(Header)
