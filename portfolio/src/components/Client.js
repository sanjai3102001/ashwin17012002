import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import DataTable from 'react-data-table-component';
import InputGroup from 'react-bootstrap/InputGroup';
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { useState, useEffect } from 'react';
import { FiEdit } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import Swal from 'sweetalert2';
import axios from 'axios';
import { FaSquarePhone } from "react-icons/fa6";
import { MdSettingsPhone,MdMarkEmailUnread } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { RiNumbersFill, RiDeleteBinFill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { IoPersonAddSharp } from "react-icons/io5";
import { Navbar,Nav } from 'react-bootstrap'
import { IoIosLogOut } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa";
import './client.css'



import 'bootstrap/dist/css/bootstrap.min.css';
import './client.css'; 

const style1 = {
  headRow: {
    style: { color: "#FFFFFF", background: "black" }
  },
  headCells: {
    style: { color: "violet" }
  },
  cells: {
    style: { color:"#333", background: "#FFFFFF" } 
  },
  rows: {
    style: { color: "violet", background: "#333" } 
  },
};
function Client() {
  const columns = [
    {
      name: "ClientId",
      selector: (row) => row.clientId,
      sortable: true,
    },
    {
      name: "ClientName",
      selector: (row) => row.clientName,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "Gst",
      selector: (row) => row.gst,
    },
    {
      name: "Website",
      selector: (row) => row.website,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "PhoneNumber",
      selector: (row) => row.phoneNumber,
    },
    {
      name: "CreatedBy",
      selector: (row) => row.createdBy,
    },

    {
      name: "ContactPerson",
      selector: (row) => row.contactPerson,
    },
    {
      name: "Action",
      selector: (row) => (
        <div>
          <Button variant="warning" onClick={() => handleEdit(row.clientId)}>
            <FiEdit />
          </Button>
          &nbsp;
         <Button variant="danger" onClick={() => handleCancelEdit(row.clientId)}>  
         <RiDeleteBinFill /></Button>
        </div>
      ),
    }
  ];
  const schema = yup.object().shape({
    phone: yup.number().positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10).required('Phone is required'),
    clientName: yup.string().required("ClientName is required"),
    phoneNumber: yup.number().positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10).required('phoneNumber is required'),
    address: yup.string().required('address is  required'),
    gst: yup.string().required('gst is  required'),
    email: yup.string().email().required("Email is required"),
    website: yup.string().required("Website is required"),
    contactPerson: yup.string().required("ContactPerson is required"),
  });
  const [texting, setTexting] = useState("Save");
  const [editbtn, setEditbtn] = useState(false);
  const [input, setInput] = useState({
    clientName: '',
    phone: '',
    address: "",
    gst: "",
    website: "",
    email: "",
    contactPerson: "",
    phoneNumber: "",
  });
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  };

  const [api, setApi] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios.get('http://catodotest.elevadosoftwares.com/Client/GetAllClientDetails')
        .then((res) => {
          setApi(res.data.clientList);
        })
    };

    fetchData();
  }, []);
  const handleSubmit = () => {
    console.log("save")
    if (editbtn) {
      handleUpdate();
    }
    else {
      handleSave();
    }
  };
  const handleSave = async () => {
    console.log("savefunction")
    const newItem = {
      clientName: input.clientName,
      phone: input.phone,
      address:input.address,
      gst: input.gst,
      website: input.website,
      email: input.email,
      contactPerson: input.contactPerson,
      phoneNumber:input.phoneNumber,
    };
    console.log(newItem)
    setApi((prevData) => [...prevData, newItem]);
    const response = await axios.post("http://catodotest.elevadosoftwares.com/Client/InsertClient", newItem)
    console.log("Data saved:", response.api);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });

  }
  const handleBack = () => {
    setInput({
      clientName: '',
      phone: '',
      address: '',
      gst: '',
      website: '',
      email: '',
      contactPerson: '',
      phoneNumber: '',
    });
  }
  const handleEdit = (id) => {
    console.log(id)
    let result = api.filter(val => val.clientId == id)
    console.log(id)
    console.log(result)
    result.map(res => {
      setInput({
        ...input,
        clientId:id,
        clientName: res.clientName,
        phone: res.phone,
        address: res.address,
        gst: res.gst,
        website: res.website,
        email: res.email,
        contactPerson: res.contactPerson,
        phoneNumber: res.phoneNumber,
        createdBy: 1,
      })
    })
    setEditbtn(true)
    setTexting("Update")
  };
  const handleUpdate = async () => {
    const data = {
      clientId: input.clientId,
      clientName: input.clientName,
      phone: input.phone,
      address: input.address,
      gst: input.gst,
      website: input.website,
      email:input.email,
      contactPerson:input.contactPerson,
      phoneNumber: input.phoneNumber,
      createdBy: 1,
    };
    console.log(data);
    const response = await axios.post("http://catodotest.elevadosoftwares.com/Client/InsertClient", data)
    .then((response) => {
      console.log("Data saved:", response.data);
    })
    .catch((error) => {
      console.error('Error saving data:', error);
    });
    Swal.fire({
      title: "Do you want to update the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "update",
      denyButtonText: "Don't update",
    });
  };
  const handleCancelEdit = async (id) => {
    const del = {
      clientId: id,
      removeRemarks: "test",
      createdBy: 1,
    };
    console.log(del);
    const response = await axios.post("http://catodotest.elevadosoftwares.com/Client/RemoveClient", del)
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Your work is deleted",
      showConfirmButton: false,
      timer: 1500
    });
  };
  return (
    <div>
     <Navbar className='navbar1' >
       <Nav>
         <Navbar.Brand ><span className='nav_bran'>Client</span><span className='nav_brand3'>Page</span></Navbar.Brand>
    <Nav.Link href="/" className='nav_link'><Button ><InputGroup.Text id="basic-addon1"><FaPowerOff /></InputGroup.Text></Button>  </Nav.Link>
         
       </Nav>
      </Navbar>
   
      <Formik
        initialValues={input}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange }) => (
          <Form noValidate onSubmit={handleSubmit} >
            <div className='nex'>
              <Row className='yellow'>
                <Col md={3}><Form.Label>ClientName:</Form.Label>

                  <InputGroup.Text id="basic-addon1"><FaCircleUser />
                    &nbsp;&nbsp;&nbsp;    <Form.Control
                      type='text'
                      id="clientName"
                      name="clientName"
                      placeholder='ClientName'
                      value={input.clientName}
                      onChange={(e) => {
                        handleInput(e);
                        handleChange(e);
                      }}
                    />
                  </InputGroup.Text>
                  <ErrorMessage name="clientName" />
                </Col>



                <Col md={3}><Form.Label>Phone:</Form.Label>

                  <InputGroup.Text id="basic-addon1"><FaSquarePhone />

                    &nbsp;&nbsp;&nbsp;    <Form.Control
                      type='text'
                      id="phone"
                      name="phone"
                      placeholder='Phone'
                      value={input.phone}
                      onChange={(e) => {
                        handleInput(e);
                        handleChange(e);
                      }}
                    />
                  </InputGroup.Text>
                  <ErrorMessage name="phone" />
                </Col>


                <Col md={3}><Form.Label>Address:</Form.Label>

                  <InputGroup.Text id="basic-addon1"><FaAddressCard />

                    &nbsp;&nbsp;&nbsp;    <Form.Control
                      type='text'
                      id="address"
                      name="address"
                      placeholder='Address'
                      value={input.address}
                      onChange={(e) => {
                        handleInput(e);
                        handleChange(e);
                      }}
                    />
                  </InputGroup.Text>
                  <ErrorMessage name="address" />
                </Col>


                <Col md={3}><Form.Label>Gst:</Form.Label>

                  <InputGroup.Text id="basic-addon1"><RiNumbersFill />

                    &nbsp;&nbsp;&nbsp;    <Form.Control
                      type='text'
                      id="gst"
                      name="gst"
                      placeholder='Gst'
                      value={input.gst}
                      onChange={(e) => {
                        handleInput(e);
                        handleChange(e);
                      }}
                    />
                  </InputGroup.Text>
                  <ErrorMessage name="gst" />
                </Col>
              </Row>
            </div>


            <div className='nex'>
              <Row>
                <Col md={3}><Form.Label>Website:</Form.Label>

                  <InputGroup.Text id="basic-addon1"><CgWebsite />

                    &nbsp;&nbsp;&nbsp;    <Form.Control
                      type='text'
                      id="website"
                      name="website"
                      placeholder='Website'
                      value={input.website}
                      onChange={(e) => {
                        handleInput(e);
                        handleChange(e);
                      }}
                    />
                  </InputGroup.Text>
                  <ErrorMessage name="website" />
                </Col>



                <Col md={3}><Form.Label>Email:</Form.Label>

                  <InputGroup.Text id="basic-addon1"><MdMarkEmailUnread />

                    &nbsp;&nbsp;&nbsp;    <Form.Control
                      type='text'
                      id="email"
                      name="email"
                      placeholder='Email'
                      value={input.email}
                      onChange={(e) => {
                        handleInput(e);
                        handleChange(e);
                      }}
                    />
                  </InputGroup.Text>
                  <ErrorMessage name="email" />
                </Col>


                <Col md={3}><Form.Label>ContactPerson:</Form.Label>

                  <InputGroup.Text id="basic-addon1"><IoPersonAddSharp />

                    &nbsp;&nbsp;&nbsp;    <Form.Control
                      type='text'
                      id="contactPerson"
                      name="contactPerson"
                      placeholder='ContactPerson'
                      value={input.contactPerson}
                      onChange={(e) => {
                        handleInput(e);
                        handleChange(e);
                      }}
                    />
                  </InputGroup.Text>
                  <ErrorMessage name="contactPerson" />
                </Col>


                <Col md={3}><Form.Label>PhoneNumber:</Form.Label>

                  <InputGroup.Text id="basic-addon1"><MdSettingsPhone />

                    &nbsp;&nbsp;&nbsp;    <Form.Control
                      type='text'
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder='PhoneNumber'
                      value={input.phoneNumber}
                      onChange={(e) => {
                        handleInput(e);
                        handleChange(e);
                      }}
                    />
                  </InputGroup.Text>
                  <ErrorMessage name="phoneNumber" />
                </Col>
              </Row>
            </div>
            <Row>
              <Col className='nu' md={5}></Col>
              <Col className='nu'md={4}></Col>
              <Col className='nu' md={3}>
                <Button className='category_button' type="submit">
                  {texting}
                </Button>&nbsp;&nbsp;
                <Button variant='danger' type='cancel' className='cancel_button' onClick={handleBack}>cancel</Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
      <DataTable
        columns={columns}
        data={api}
        customStyles={style1}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 20, 30]}
        selectableRowsHighlight
        highlightOnHover
      />
    </div>
   
  )
}

export default Client