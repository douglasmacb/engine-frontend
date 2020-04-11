import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';

//Styles
import useStyles from './ConverterStyle';

// Material UI
import { 
  withStyles 
} from '@material-ui/core/styles';

import { Formik } from 'formik';
import { ConverterForm } from '../../components/converter/ConverterForm';
import validationSchema from '../../validations/ConverterValidations';

import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  Typography,
  CardContent
} from '@material-ui/core';

import fetchCategories from './FetchCategories';

class ConverterPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      category: '',
      website: '',
      categories: []
    }
  }

  submit = (data) => {
    let values = {
      name: data.name,
      category: data.category,
      website: data.website,
      password: data.password
    }
    console.log(values);
  };

  render() {
    const {
      classes
    } = this.props;

    return (
        <div id="App">
          <Grid container spacing={2} justify="center">
              <Card className={classes.root}>
                  <CardHeader
                      avatar={<Avatar aria-label="recipe" className={classes.avatar}>C</Avatar>}
                      title="Wordpress Converter"
                  />
                  <CardContent>
                    <Formik
                      enableReinitialize
                      initialValues={this.props}
                      validationSchema={validationSchema}
                      onSubmit={this.submit}>
                      {props => <ConverterForm {...props} />}
                    </Formik>
                  </CardContent>
              </Card>
          </Grid>
          <Grid container spacing={2} justify="center" className={classes.gridcopyright}>
              <Typography paragraph>
                  Copyright douglasmacb developer &copy; 2020
              </Typography>
          </Grid>
      </div>  
    );
  }
}

const mapStateToProps = store => ({
  name: store.categoryState.name,
  password: store.categoryState.password,
  website: store.categoryState.website,
  category: store.categoryState.category,
  categories: store.categoryState.categories
});

const mapDispatchToProps = dispatch => bindActionCreators({ fetchCategories }, dispatch);

export default compose(
  withStyles(useStyles, {
      name: 'ConverterPage',
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(ConverterPage);