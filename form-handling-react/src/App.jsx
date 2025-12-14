import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>React Form Handling</h1>
      
      {/* Step 2: Controlled Component */}
      <RegistrationForm />
      
      <br />
      
      {/* Step 3: Formik Component */}
      <FormikForm />
    </div>
  );
}

export default App;