import React, { useEffect, useState } from 'react'
import { GridComponent, ColumnDirective,  Page,Search,  Inject, ColumnsDirective, Toolbar } from '@syncfusion/ej2-react-grids'
import { employeesGrid, contextMenuItems, employeesData } from '../data/dummy'
import { Header } from '../components'
import axios from '../apis/axios';
const Products = () => {
  const [product, setProduct ] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const jwt = localStorage.getItem("jwt")
      const responseProduct = await axios.get('/product', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`
        }
      });
      console.log(responseProduct?.data)
      setProduct(responseProduct?.data.items)
    }

    getProduct();
  })
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category="Page" title="Products">
    </Header>
      <GridComponent
       id='gridcomp'
       dataSource={product}
       allowPaging
       allowSorting
       toolbar={['Search']}
       width="auto">
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Page, Search, Toolbar ]}/>
      </GridComponent>
  </div>
  )
}

export default Products