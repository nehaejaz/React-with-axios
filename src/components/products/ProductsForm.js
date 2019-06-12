import React, {Component} from "react";
import {
  Card,
  Col,
  Row,
  Button,
} from "react-materialize";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";

class ProductsForm extends Component {

  render(){
   return(
  <div className="ProductsForm">
    <Formik
      initialValues={{
        productId: "",
        quantity: "",
        
      }}
      validate={values => {
        let errors = {};
        if (!values.productId) {
          errors.productId = "Required";
        }
        if(!values.quantity){
            errors.quantity = "Required"
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("values are",values);
        Axios.post("http://localhost:3000/orders",{
          productId:values.productId,
          quantity: values.quantity
        })
        .then(res => {
          console.log(res);
          alert("form submitted")
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err)
        })
      }}
    >
      {({ isSubmitting, values }) =>
        console.log(values) || (
          <Form>
            <Row className="">
              <Col className="offset-m2" m={8} s={12}>
                <Card
                  className="red lighten-2 ProductsForm-card"
                  textClassName="white-text"
                  title="Add a Product"
                >
                  <div className="row">
                    <div className="input-field col s6">
                      {/* <i className="material-icons prefix">contact_mail</i> */}
                      <Field
                        type="number"
                        name="productId"
                        placeholder="Product ID"
                      />
                      <ErrorMessage name="productId" component="div" />
                    </div>
                    <div className="input-field col s6">
                      {/* <i className="material-icons prefix">contact_mail</i> */}
                      <Field
                        type="number"
                        name="quantity"
                        placeholder="quantity"
                      />
                      <ErrorMessage name="quantity" component="div" />
                    </div>
                  </div>
                  <Button type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                </Card>
              </Col>
            </Row>
          </Form>
        )
      }
    </Formik>
  </div>
   )}
};

export default ProductsForm;
