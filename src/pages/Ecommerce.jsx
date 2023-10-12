import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { BsKanban, BsBarChart, BsBoxSeam,  BsShield, BsChatLeft, BsFillCartCheckFill } from 'react-icons/bs';
import React, { useEffect, useState } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoDot } from 'react-icons/go';
import { Stacke, Pie, Button, SparkLine, Stacked } from "../components";
import { earningData, SparklineAreaData, ecomPieChartData } from "../data/dummy";
import { UseStateContext } from '../contexts/ContextProvider'
import axios from '../apis/axios';
const Ecommerce = () => {
  const [customer, setCustomer] = useState([]);
  const [order, setOrder] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getCustomer = async () => {
      const jwt = localStorage.getItem("jwt")
      //   const responseProduct = await axios.get("/product");
      const responseProduct = await axios.get('/product', {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(responseProduct?.data);
      setCustomer(responseProduct?.data.items)
      console.log(customer)

    }
    // const getOrder = async () => {
    //   const jwt = localStorage.getItem("jwt")
    //   //   const responseProduct = await axios.get("/product");
    //   const responseOrder = await axios.get('/order', {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${jwt}`
    //     }
    //   });
    //   console.log(responseOrder?.data);
    //   setCustomer(responseProduct?.data.items)
    //   console.log(customer)
    // }

    const getProduct = async () => {
      //  const responseCustomer = await axios.get('/user')
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
    getCustomer();
    getProduct();
    // getOrder();
  }, [])



  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white  dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='text-gray-400 font-bold'>Earnings </p>
              <p className=' text-2xl'>$63,448.78</p>
            </div>
          </div>
          {/* <div className='mt-6'>
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
              size="md" />
          </div> */}
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
            <button type='button' style={{ color: '#03C9D7', backgroundColor: '#E5FAFB' }}
              className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
              <MdOutlineSupervisorAccount />
            </button>
            <p className='mt-3'>
              <span className='text-lg font-semibold'>
                {customer.length}
              </span>
              <span className={`text-sm text-#03C9D7 ml-2`}>
                18%
              </span>
            </p>
            <p className='text-sm text-gray-400 mt-1 '>
              Customers
            </p>
          </div>

          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
            <button type='button' style={{ color: 'rgb(255, 244, 229)', backgroundColor: 'rgb(254, 201, 15)' }}
              className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
              <BsBoxSeam />
            </button>
            <p className='mt-3'>
              <span className='text-lg font-semibold'>
                {product.length}
              </span>
              <span className={`text-sm text-green-600 ml-2`}>
                18%
              </span>
            </p>
            <p className='text-sm text-gray-400 mt-1 '>
              Products
            </p>
          </div>

          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
            <button type='button' style={{ color: '#33FF33', backgroundColor: '#CCFFFF' }}
              className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
              <BsFillCartCheckFill />
            </button>
            <p className='mt-3'>
              <span className='text-lg font-semibold'>
                {product.length}
              </span>
              <span className={`text-sm text-green-600 ml-2`}>
                18%
              </span>
            </p>
            <p className='text-sm text-gray-400 mt-1 '>
              Orders
            </p>
          </div>


          {/* {earningData.map((item) => (
            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
              <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1 '>
                {item.title}
              </p>
            </div>
          ))} */}
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p>Revenue Update</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600'>
                <span><GoDot /></span>
                <span>Total</span>
              </p>
              <p className='flex items-center gap-2 text-green-400'>
                <span><GoDot /></span>
                <span>Income</span>
              </p>
            </div>
          </div>
          <div className='mt-10  flex gap-10 flex-wrap justify-center '>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,438</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
                </p>
                <p className='text-gray-500 mt-1'>Total</p>
              </div>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$48,438</span>
                </p>
                <p className='text-gray-500 mt-1'>Income</p>
              </div>
              <div className='mt-5'>
                <SparkLine currentColor="blue"
                  id='line-sparkline'
                  type='Line'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                  color='blue' />
              </div>
              <div className='mt-10'>
                <Button
                  color="white"
                  bgColor="blue"
                  text="Download Report"
                  borderRadius="10px" />
              </div>
            </div>
            <div>
              <Stacked width="320px"
                height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce