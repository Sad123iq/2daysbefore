import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Addpage.scss";

const Add = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      email: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      image: Yup.string().required("Required"),
      desc: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios.post("http://localhost:8080/api/products", {
        title: values.title,
        image: values.image,
        desc: values.desc,
        price: values.price,
        count: 1,
        totalPrice: values.price,
      });
    },
  });

  const { data, setdata } = useContext(MainContext);

  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <div className="addpage">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
          ) : null}

          <label htmlFor="image">Image</label>
          <input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
          />
          {formik.touched.image && formik.errors.image ? (
            <div>{formik.errors.lastName}</div>
          ) : null}

          <label htmlFor="desc">Description</label>
          <input
            id="desc"
            name="desc"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.desc}
          />
          {formik.touched.desc && formik.errors.desc ? (
            <div>{formik.errors.desc}</div>
          ) : null}

          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <div>{formik.errors.price}</div>
          ) : null}

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Add;
