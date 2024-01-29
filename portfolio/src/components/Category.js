import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import "./Category.css"

import { Form, Button } from 'react-bootstrap'
import * as yup from 'yup'
import { ErrorMessage, Formik } from "formik"
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'


const customStyles = {
    headRow: {
        style: { background: "#000" }
    },
    headCells: {
        style: { color: "white", fontSize: "20px" }
    },
    cells: {
        style: {
            color: "black",
            background: "#F3F0CA",
        }
    }

}


function Category() {
    const [records, setRecords] = useState([])
    const schema = yup.object().shape(
        {
            category: yup.string().required("it is must"),
            description: yup.string().required("it is mandatory")
        }
    )
    const column = [


        {
            name: "Category",
            selector: row => row.category,
            sortable: true
        },

        {
            name: "Description",
            selector: row => row.description,
            sortable: true
        },

        {
            name: "categoryId",
            selector: row => row.categoryId,
            sortable: true
        },

        {
            name: "createdBy",
            selector: row => row.createdBy,
            sortable: true
        },
        // {
        //     name: "Action",
        //     selector: (row) => (
        //         <div>
        //             <Button variant="warning"  type='submit' onClick={() => handleDelete(row.categoryId)}>Delete</Button>
        //             <Button>button</Button>
        //           <Button variant="info" type='submit' onClick={() => handleEdit(row.categoryId)}>Edit</Button>
        //         </div>
        //     )

        // },
        {
            name: "Action",
            cell: (row) => (
                <div>
                    <Button variant="info" onClick={() => handleEdit(row.categoryId)}>Edit</Button>
                    <Button variant="warning" onClick={() => handleDelete(row.categoryId)}>Delete</Button>
                </div>
            )
        },
        


    ]

    const [enter, setEnter] = useState({
        createdBy: 1,
        categoryId: 0
    })

    const [saveBtn, setsaveBtn] = useState('Save')
    const [updateBtn, setupdateBtn] = useState(false)
    const [user, setUser] = useState({
        category: "",
        description: "",
        categoryId: "",
        createdBy: "",


    })

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        if (updateBtn) {

            handleUpdate();
        }
        else {
            handleSave();
        }




    }
    const handleSave = async () => {
        const data = {
            category: user.category,
            description: user.description,
            categoryId: 0,
            createdBy: 1,
        }
        console.log(data)
        const result = await axios.post("http://catodotest.elevadosoftwares.com/Category/InsertCategory", data)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your data has been saved",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const clearInput = () => {
        setUser('');
    }


    useEffect(() => {
        const fetchdata = () => {
            axios.get("http://catodotest.elevadosoftwares.com/Category/GetAllCategories").then(res => {
                setRecords(res.data.categoryList)
            })
        }
        fetchdata()

    }, [])

    const handleEdit = (id) => {

        const edit = records.filter(val => val.categoryId == id)
        console.log(edit)
        edit.map(res => {
            setUser({
                ...records,
                category: res.category,
                description: res.description
            })
            setEnter({
                ...enter,
                categoryId: res.categoryId,
            })
        })
        setupdateBtn(true)
        setsaveBtn("Update")
    }

    const handleUpdate = (id) => {
        const update = {
            category: user.category,
            description: user.description,
            categoryId: enter.categoryId,
            createdBy: 1,
        }

        const updateResult = axios.post("http://catodotest.elevadosoftwares.com/Category/InsertCategory", update)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your data has been updated",
            showConfirmButton: false,
            timer: 1500
        });

        console.log(updateResult);
    }



    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const deletedata = {
                    categoryId: id,
                    removedRemarks: "test",
                    createdBy: 1
                }
                const deleteResult = axios.post("http://catodotest.elevadosoftwares.com/Category/RemoveCategory", deletedata)

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }

    return (
        <div className='body1'>
            <Formik
                initialValues={user}
                validationSchema={schema}
                enableReinitialize
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, handleChange }) => (
                    <Form >
                        <div className='container2'>
                            <Form.Group className="mb-2" controlId="category">
                                <Form.Label className='label2'>Category : </Form.Label>
                                <Form.Control className='int2' type="text" placeholder=" Enter category" name="category" value={user.category} onChange={(e) => { handleChange(e); handleInput(e) }} />
                                <span className='text-danger'>*</span>
                                <ErrorMessage
                                    name="category"
                                    className='text-danger' />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="description">
                                <Form.Label className='label2'>Description : </Form.Label>
                                <Form.Control className='int2' type="textarea" row={3} placeholder=" Enter description" name="description" value={user.description} onChange={(e) => { handleChange(e); handleInput(e) }} />
                                <span className='text-danger'>*</span>
                                <ErrorMessage
                                    name="description"
                                    className='text-danger' />
                            </Form.Group>

                            <div className='Btns'>

                                <Button variant="success" className="save" type='submit' onClick={handleSubmit}>{saveBtn}</Button>&nbsp;

                                <Button variant="danger" className="clear" type='submit' onClick={clearInput}>Clear</Button>

                            </div>

                        </div>
                    </Form>
                )}

            </Formik>
            <div className='container3'>
                <DataTable
                    columns={column}
                    data={records}
                    customStyles={customStyles}
                    pagination
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 10, 15, 20]}
                    fixedHeader
                    selectableRows
                    selectableRowsHighlight
                    highlightOnHover

                />
            </div>

        </div>
    )
}


export default Category