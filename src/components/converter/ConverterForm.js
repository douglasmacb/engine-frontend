import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import {
    Grid,
    CardActions,
    CardContent,
    TextField,
    Button,
    Typography,
    MenuItem
  } from '@material-ui/core';

// Styles
import ConverterStyle from '../../pages/converter/ConverterStyle';

const useStyles = makeStyles(ConverterStyle);

//Actions
export const ConverterForm = props => {

    const classes = useStyles();

	const {
        values: { name, password, website, category, categories, fetchCategories },
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid        
    } = props;

    const handleWebsiteChange = (event, url) => {
        event.preventDefault();
        fetchCategories(url);
    }

	return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <CardContent>
                <Grid>
                    <Typography paragraph>
                        Access details:
                    </Typography>
                    <div className={classes.div}>
                        <TextField label="Website" 
                            fullWidth type="text" 
                            id="website" 
                            value={website} 
                            onChange={handleChange} 
                            helperText={touched.website ? errors.website : ""}
                            onBlur={(event) => handleWebsiteChange(event, website)}
                            error={Boolean(errors.website)}
                            variant="outlined" />
                    </div>
                    <div className={classes.div}>
                        <TextField label="Username" 
                            fullWidth 
                            type="text" 
                            id="name" 
                            value={name} 
                            onChange={handleChange} 
                            helperText={touched.name ? errors.name : ""}
                            error={Boolean(errors.name)}
                            variant="outlined" />
                    </div>
                    <div className={classes.div}>
                        <TextField label="Password" 
                            fullWidth type="password" 
                            id="password" 
                            value={password} 
                            onChange={handleChange} 
                            helperText={touched.password ? errors.password : ""}
                            error={Boolean(errors.password)}
                            variant="outlined" />
                    </div>
                    <div className={classes.div}>
                        <TextField
                            id="category"
                            variant="outlined"
                            margin="normal"
                            name="category"
                            label="Categories:"
                            fullWidth
                            helperText={touched.category ? errors.category : ""}
                            error={Boolean(errors.category)}
                            select
                            value={category}
                            onChange={handleChange}
                        >
                        {categories.map(option => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.value}
                            </MenuItem>
                        ))}
                        </TextField>
                    </div>
                </Grid>
            </CardContent>
            <CardActions>
                <Grid container spacing={2} justify="center" style={{marginBottom: 10}}>
                    <Button 
                        type="submit"
                        variant="outlined"
                        color="primary"
                        size="small"
                        className={classes.button}
                        disabled={!isValid}>Start Conversion
                    </Button>
                </Grid>
            </CardActions>
      </form>
    );
}