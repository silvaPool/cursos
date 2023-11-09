import * as Yup from "yup";
import React from "react";
import { FieldArray, Form, Formik, getIn } from "formik";
import { Button, TextField } from "@mui/material";



const validationSchema = Yup.object().shape({
    people: Yup.array().of(
        Yup.object().shape({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required")
        })
    )
});

const debug = true;




const Turma = () => {

    return (
        <div>
            <Formik
                initialValues={{
                    people: [
                        {
                            id: Math.random(),
                            firstName: "",
                            lastName: ""
                        }
                    ]
                }}
                validationSchema={validationSchema}
                onSubmit={values => {
                    console.log("onSubmit", JSON.stringify(values, null, 2));
                }}
            >
                {({ values, touched, errors, handleChange, handleBlur, isValid }) => (
                    <Form noValidate autoComplete="off">
                        <FieldArray name="people">
                            {({ push, remove }) => (
                                <div>
                                    {values.people.map((p, index) => {
                                        const firstName = `people[${index}].firstName`;
                                        const touchedFirstName = getIn(touched, firstName);
                                        const errorFirstName = getIn(errors, firstName);

                                        const lastName = `people[${index}].lastName`;
                                        const touchedLastName = getIn(touched, lastName);
                                        const errorLastName = getIn(errors, lastName);

                                        return (
                                            <div key={p.id}>
                                                <TextField
                                                    margin="normal"
                                                    variant="outlined"
                                                    label="First name"
                                                    name={firstName}
                                                    value={p.firstName}
                                                    required
                                                    helperText={
                                                        touchedFirstName && errorFirstName
                                                            ? errorFirstName
                                                            : ""
                                                    }
                                                    error={Boolean(touchedFirstName && errorFirstName)}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <TextField
                                                    margin="normal"
                                                    variant="outlined"
                                                    label="Last name"
                                                    name={lastName}
                                                    value={p.lastName}
                                                    required
                                                    helperText={
                                                        touchedLastName && errorLastName
                                                            ? errorLastName
                                                            : ""
                                                    }
                                                    error={Boolean(touchedLastName && errorLastName)}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />

                                                <Button
                                                  
                                                    margin="normal"
                                                    type="button"
                                                    variant="outlined"
                                                    onClick={() => remove(index)}
                                                >
                                                    x
                                                </Button>
                                            </div>
                                        );
                                    })}
                                    <Button
                                      
                                        type="button"
                                        variant="outlined"
                                        onClick={() =>
                                            push({ id: Math.random(), firstName: "", lastName: "" })
                                        }
                                    >
                                        Add
                                    </Button>
                                </div>
                            )}
                        </FieldArray>
                    </Form>
                )}

            </Formik>
        </div>
    );
};

export default Turma;