import { WithStyles } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'
import React from 'react'

import parallaxStyle from './parallaxStyle'

interface IProps extends WithStyles<typeof parallaxStyle>  {
  filter?: boolean
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
  image?: string
  small?: boolean
}

interface IState {
  transform: string
}
class Parallax extends React.Component<IProps, IState> {

  private static getScrollTransform = () => {
    const pageOffset = window.pageYOffset / 3
    return `translate3d(0, ${pageOffset}px, 0)`
  }

  constructor(props) {
    super(props)

    if (typeof window !== typeof undefined) {
      this.state = {
        transform: Parallax.getScrollTransform()
      }
    }
  }

  public componentDidMount() {
    this.setState({ transform: Parallax.getScrollTransform() })
    window.addEventListener('scroll', this.resetTransform)
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.resetTransform)
  }

  public resetTransform = () => {
    this.setState({ transform: Parallax.getScrollTransform() })
  }

  public render() {
    const {
      classes,
      filter,
      className,
      children,
      style,
      image,
      small
    } = this.props
    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.small]: small,
      [className]: className !== undefined
    })
    return (
      <div
        className={parallaxClasses}
        style={{
          ...style,
          backgroundImage: 'url(' + image + ')',
          ...this.state
        }}
        ref='parallax'
      >
        {children}
      </div>
    )
  }
}


export default withStyles(parallaxStyle)(Parallax)
