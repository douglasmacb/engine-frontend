import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string("Username field is required").required("Username field is required")
});

export default validationSchema;