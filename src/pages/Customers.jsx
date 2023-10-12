import React, { useEffect, useState } from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from "../data/dummy";
import { Header } from '../components'
import axios from '../apis/axios';
const Customers = () => {
 
  const [customer ,SetCustomer ] = useState([] );
  useEffect(() => {

    const getCustomer = async () => {
      const jwt = localStorage.getItem("jwt")
      const checkJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkFkbWluIiwidXNlcklkIjoiMCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzAyMjExMDMzLCJpc3MiOiJQYXNzIEVYRSAtIEVYRSBFWEUgRVhFIiwiYXVkIjoiUGFzcyBFWEUgLSBFWEUgRVhFIEVYRSJ9.FnyicGjFV913WP-aYg-IzAsRzsO9XjUGJZMQTruTuhM"
      console.log(jwt);
      //   const responseProduct = await axios.get("/product");
      const responseProduct = await axios.get('/user', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${checkJWT}`
      }
      });
      console.log(responseProduct?.data.results);
      SetCustomer(responseProduct?.data.results);
     }
     getCustomer();
  }, [])
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers">
      </Header>
      <GridComponent
        id='gridcomp'
        dataSource={customer}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        width="auto"
        editSettings={{ allowDeleting: true, allowEditing: true }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customers