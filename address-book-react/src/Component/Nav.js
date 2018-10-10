import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItemIcon } from 'material-ui/List';
import { MenuList, MenuItem } from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import ContactsIcon from 'material-ui-icons/Contacts';
import LanguageIcon from 'material-ui-icons/Language';
import HelpIcon from 'material-ui-icons/Help';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import i18n from '../i18n';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleListMenu extends React.Component {
  state = {
    selectedIndex: 0,
    selectedLanguage: 0
  }

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
  };

  handleLanguageClick = (event, language, index) => {
    i18n.changeLanguage(language.key);
    this.setState({selectedLanguage: index});
  };

  render() {
    const { classes, t } = this.props;
    const options = [
      {
        link: '/list',
        ListItemIcon: <ContactsIcon />,
        text: t('nav.contacts'),
        key: 'contacts'
      },
      {
        link: '/help',
        ListItemIcon: <HelpIcon />,
        text: t('nav.help'),
        key: 'help'
      }
    ];
    const languages = [
      {
        ListItemIcon: <LanguageIcon />,
        text: t('language.english'),
        key: 'en'
      },
      {
        ListItemIcon: <LanguageIcon />,
        text: t('language.german'),
        key: 'de'
      }
    ];

    return (
      <div className={classes.root}>
        <MenuList>
          {
            options.map((option, index) => (
              <Link
                key={option.key}
                to={option.link}
              >
                <MenuItem
                  button
                  selected={index === this.state.selectedIndex}
                  onClick={event => this.handleMenuItemClick(event, index)}
                >
                  <ListItemIcon>
                    {option.ListItemIcon}
                  </ListItemIcon>
                  {option.text}
                </MenuItem>
              </Link>
            ))
          }
          <Divider />
          <MenuList>
          {
            languages.map((language, index) => (
              <MenuItem
                key={language.key}
                button
                selected={index === this.state.selectedLanguage}
                onClick={event => this.handleLanguageClick(event, language, index)}
              >
                <ListItemIcon>
                  {language.ListItemIcon}
                </ListItemIcon>
                {language.text}
              </MenuItem>
            ))
          }
          </MenuList>
        </MenuList>
      </div>
    );
  }
}

SimpleListMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default translate('translations')(withStyles(styles)(SimpleListMenu));