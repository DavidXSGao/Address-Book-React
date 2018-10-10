import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import ContactsIcon from 'material-ui-icons/Contacts';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';


const styles = theme => ({
  root: {
    width: '100%',
    textAlign: 'left',
    backgroundColor: theme.palette.background.paper,
  },
});

export function SimpleList(props) {
  const { classes, contacts, t } = props;
  const contactList = [];

  let addEditContactString = "";
  contacts.forEach( (contact) => {
    addEditContactString = "/addeditcontact/" + contact.id;
    contactList.push(
      <ListItem key={contact.id} button>
        <ListItemIcon>
          <ContactsIcon />
        </ListItemIcon>
        <ListItemText primary={contact.name} secondary={contact.email} />
        <Button variant="raised" color="primary" component={Link} to={addEditContactString}>{t('global.edit')}</Button>
      </ListItem>
    );
  });
  return (
    <div className={classes.root}>
      <List>
        {contactList}
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default translate()(withStyles(styles)(SimpleList));