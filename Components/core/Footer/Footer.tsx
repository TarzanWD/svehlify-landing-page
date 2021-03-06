/*eslint-disable*/
import { List, ListItem, WithStyles } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite'
// nodejs library to set properties for components
import classNames from 'classnames'
import React from 'react'

import footerStyle from './footerStyle'

interface IProps extends WithStyles<typeof footerStyle> {
  whiteFont?: boolean
}

const Footer = (props: IProps) =>  {
  const { classes, whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href='https://twitter.com/KubaSvehla'
                className={classes.block}
                target='_blank'
              >
                Twitter{' '}
                <img style={{ height: '20px' }} src='/static/icons/twitter.svg' />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href='https://github.com/Svehla'
                className={classes.block}
                target='_blank'
              >
                Github{' '}
                <img style={{  height: '18px' }} src='/static/icons/github.svg' />
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {new Date().getFullYear()} , made with{' '}
          positive energy by{' '}
          <a
            href='https://twitter.com/KubaSvehla'
            className={aClasses}
            target='_blank'
          >
            Kuba Švehla <Favorite className={classes.icon} />
          </a>{' '}
        </div>
      </div>
    </footer>
  )
}

export default withStyles(footerStyle)(Footer)
