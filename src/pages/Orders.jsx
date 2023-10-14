import React, { useEffect, useState } from 'react'
import { GridComponent, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, ColumnsDirective } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'
import axios from '../apis/axios';
const Orders = () => {
  
  const [Order, setOrder ] = useState([]);
  useEffect(() => {
    const getOrder = async () => {
      const jwt = localStorage.getItem("jwt")
      const responseOrder = await axios.get('/order', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`
        }
      });
      console.log(responseOrder?.data.orderResponses)
      setOrder(responseOrder?.data.orderResponses)
    }

    getOrder();
  },[])
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders">
      </Header>
      <GridComponent
        id='gridcomp'
        dataSource={Order}
        allowPaging
        allowSorting>
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Page, Sort, ContextMenu, Filter, ExcelExport, Edit, PdfExport]} />
      </GridComponent>

    </div>
  )
}

export default Orders