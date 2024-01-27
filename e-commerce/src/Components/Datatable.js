import React from 'react'
import {Button} from "react-bootstrap"

function Datatableuser() {
    const column = [
        {
          name: "Category",
          selector: (row) => row.category,
          sortable: true,
        },
        {
          name: "Description",
          selector: (row) => row.description,
          sortable: true,
        },
        {
          name: "categoryId",
          selector: (row) => row.categoryId,
          sortable: true,
        },
        {
          name: "createdBy",
          selector: (row) => row.createdBy,
          sortable: true,
        },
        {
          name: "Action",
          cell: (row) => (
            <div>
              {/* <Button variant="info" onClick={() => handleEdit(row.categoryId)}>
                Edit
              </Button>
              <Button variant="warning" onClick={() => handleDelete(row.categoryId)}>
                Delete
              </Button> */}
            </div>
          ),
        },
      ];
  return (
    <>
      
    </>
  )
}

export default Datatableuser
