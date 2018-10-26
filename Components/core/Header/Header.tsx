import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import withStyles from '@material-ui/core/styles/withStyles'
import Toolbar from '@material-ui/core/Toolbar'
// @material-ui/icons
import Menu from '@material-ui/icons/Menu'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
import React from 'react'
// core components
import headerStyle from './headerStyle'

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
    if (typeof window !== typeof undefined) {
      if (this.props.changeColorOnScroll) {
        this.headerColorChange()
        window.addEventListener('scroll', this.headerColorChange)
      }
    }
  }

  public headerColorChange = () => {
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

  public componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener('scroll', this.headerColorChange)
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
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'transparent',
    'white',
    'rose',
    'dark'
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'transparent',
      'white',
      'rose',
      'dark'
    ]).isRequired
  })
}

export default withStyles(headerStyle)(Header)
