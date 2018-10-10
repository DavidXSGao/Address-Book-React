import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import { translate } from 'react-i18next';
import Grid from 'material-ui/Grid';
import { Link, Redirect } from 'react-router-dom';

let demoIdCounter = 5;
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 350,
  },
  otherTextField: {
    marginTop: 137,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  }
});

const genders = [
  {
    value: 'male',
  },
  {
    value: 'female',
  },
  {
    value: 'other',
  }
];


class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: props.contact,
      fireRedirect: false
    }
  }

  handleSave = (event) => {
    event.preventDefault();
    this.setState({ fireRedirect: true });
    if (this.state.contact.hasOwnProperty('id')) {
      this.props.updateContact(this.state.contact);
    } else {
      this.state.contact.id = demoIdCounter;
      demoIdCounter++;
      this.props.addContact(this.state.contact);
    }
  };

  handleChange = name => event => {
    this.setState({
      contact: {
        ...this.state.contact,
        [name]: event.target.value,
      }
    });
  };

  render() {
    const { classes, t } = this.props;
    const { from } = this.props.location || '/';
    const { fireRedirect } = this.state;
    const genderRadioButtons = [];
    const countries = [
      {
        value: 'ca',
        label: t('country.canada'),
      },
      {
        value: 'tw',
        label: t('country.taiwan'),
      },
      {
        value: 'us',
        label: t('country.unitedStates'),
      }
    ];
    genders.forEach( (gender, index) => {
      genderRadioButtons.push(<FormControlLabel key={index} value={gender.value} control={<Radio />} label={t(`screens.contacts.form.gender.${gender.value}`)} />);
    });

    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSave}>
          <Grid container spacing={0}>
            <Grid item md={12}>
              <TextField
              label={t('screens.contacts.form.nameField')}
              className={classes.textField}
              value={this.state.contact.name}
              onChange={this.handleChange('name')}
              margin="normal"
              required
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                label={t('screens.contacts.form.emailField')}
                className={classes.textField}
                value={this.state.contact.email}
                onChange={this.handleChange('email')}
                margin="normal"
                required
              />
            </Grid>
            <Grid item md={1}>
              <FormControl component="fieldset" required className={classes.formControl}>
                <FormLabel component="legend">{t('screens.contacts.form.genderField')}</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  className={classes.group}
                  value={this.state.contact.gender}
                  onChange={this.handleChange('gender')}
                >
                  {genderRadioButtons}
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <TextField
                label={this.state.contact.gender === "other" ? "Please enter gender" : ""}
                className={classes.otherTextField}
                value={this.state.contact.other}
                onChange={this.handleChange('other')}
                margin="normal"
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                select
                label={t('screens.contacts.form.countryField')}
                className={classes.textField}
                value={this.state.contact.country}
                onChange={this.handleChange('country')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                helperText={t('screens.contacts.form.selectCountry')}
                margin="normal"
                required
              >
                {countries.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item md={12}>
              <TextField
                label={t('screens.contacts.form.postalCodeField')}
                className={classes.textField}
                value={this.state.contact.postalCode}
                onChange={this.handleChange('postalCode')}
                margin="normal"
              />
            </Grid>
            <Grid item md={12}>
              <Button variant="raised" color="primary" component={Link} to="/list">{t('screens.contacts.form.back')}</Button>
              <Button variant="raised" color="primary" type="submit">{t('screens.contacts.form.save')}</Button>
            </Grid>
          </Grid>
        </form>
        {fireRedirect && (
          <Redirect to={from || '/list'} />
        )}
      </div>
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default translate()(withStyles(styles)(ContactForm));