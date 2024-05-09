import React, { useContext } from 'react'
import { Formik } from 'formik';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import MainContext from '../../context/context';

const AddProduct = () => {
    const {setData}=useContext(MainContext)
  return (
    <div>
     <h1>Anywhere in your app!</h1>
     <Formik
       initialValues={{ image: '',name: '', price: '',description: '' }}
       validate={values => {
         
       }}
       onSubmit={(values, { setSubmitting }) => {
         axios.post("http://localhost:3000/products",{
            id:uuidv4(),
            name:values.name,
            price:values.price,
            description:values.description,
            image:values.image, 
         }).then(res=>{
            setData([...data,res.data])
         })
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
           placeholder='name...'
             type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
           />
           {errors.name && touched.name && errors.name}
           <input
             placeholder='image...'
             type="text"
             name="image"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
           />
           {errors.image && touched.image && errors.image}
           <input
           placeholder='price...'
             type="text"
             name="price"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
           />
           {errors.price && touched.price && errors.price}
           <input
           placeholder='description...'
             type="text"
             name="description"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.description}
           />
           {errors.description && touched.description && errors.description}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
  )
}

export default AddProduct