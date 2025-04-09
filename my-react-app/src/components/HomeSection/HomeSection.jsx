import React from 'react';
import { Avatar } from '@mui/material';
import { useFormik } from 'formik';  // Importing useFormik
import * as Yup from 'yup';         // Importing Yup for validation schema

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is required"),  // Validation for content
});

const HomeSection = () => {
  const handleSubmit = (values) => {
    console.log("values ", values);  // Handle form submission
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,  // Handle form submission
    validationSchema,  // Apply validation schema
  });

  return (
    <div className='space-x-5'>
      <section>
        <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
      </section>

      <section className={'pb-10'}>
        <div className='flex space-x-5'>
          <Avatar alt="username" src="/images/profile.jpg" />
          <div className='w-full'>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name='content'
                  placeholder='What is happening?'
                  className={'border-none outline-none text-xl bg-transparent'}
                  {...formik.getFieldProps('content')}
                />
                {formik.errors.content && formik.touched.content && (
                    <span className="text-red-500">{formik.errors.content}</span>
                )}
              </div>
              <div>


                
              </div>
              {/* Optional: Show error message if validation fails */}
              {formik.errors.content && formik.touched.content && (
                <div className="error">{formik.errors.content}</div>
              )}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
