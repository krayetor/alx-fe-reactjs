import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define Validation Schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const FormikForm = () => {
  // Initial Values
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  // Submit Handler
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Submitting Formik Form:', values);
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    resetForm();
  };

  return (
    <div style={{ border: '1px solid #007bff', padding: '20px' }}>
      <h2>Formik Form</h2>
      
      {/* The Formik Wrapper */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="username">Username: </label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" style={{ color: 'red', fontSize: '12px' }} />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="email">Email: </label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '12px' }} />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="password">Password: </label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '12px' }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Register with Formik
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;