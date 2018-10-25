import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'
import * as React from 'react'
import { WithStyles } from '@material-ui/core'
import parallaxStyles from '../../assets/jss/material-kit-react/components/parallaxStyle'


interface IProps extends WithStyles<typeof parallaxStyles>  {
  filter?: boolean
  className?: string
  children?: React.ReactNode
  style?: string
  image?: string
  small?: any
}

interface IState {
  transform: string
}
class Parallax extends React.Component<IProps, IState> {
  constructor(props) {
    super(props)
    if (typeof window !== typeof undefined) {
      const windowScrollTop = window.pageYOffset / 3
      this.state = {
        transform: `translate3d(0,${windowScrollTop}px,0)`,
      }
      this.resetTransform = this.resetTransform.bind(this)
    }
  }

  public componentDidMount() {
    if (typeof window !== typeof undefined) {
      const windowScrollTop = window.pageYOffset / 3
      this.setState({
        transform: `translate3d(0, ${windowScrollTop}'px,0)`,
      })
      window.addEventListener('scroll', this.resetTransform)
    }
  }

  public componentWillUnmount() {
    if (typeof window !== typeof undefined) {
      window.removeEventListener('scroll', this.resetTransform)
    }
  }

  public resetTransform() {
    if (typeof window !== typeof undefined) {
      const windowScrollTop = window.pageYOffset / 3
      this.setState({
        transform: `translate3d(0, ${windowScrollTop}'px,0)`,
      })
    }
  }

  public render() {
    const {
      classes,
      filter,
      className,
      children,
      style,
      image,
      small,
    } = this.props
    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.small]: small,
      [className]: className !== undefined,
    })
    return (
      <div
        className={parallaxClasses}
        style={{
          ...style,
          backgroundImage: 'url(' + image + ')',
          ...this.state,
        }}
        ref='parallax'
      >
        {children}
      </div>
    )
  }
}

export default withStyles(parallaxStyles)(Parallax)
