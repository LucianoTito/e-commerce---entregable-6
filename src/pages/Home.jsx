import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import '.././styles/home.css'
import { getProductsByName, getAllProductsThunk } from '../store/slices/products.slice'
import { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown , DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const Home = () => {

const dispatch = useDispatch()

const {products}=  useSelector(state=>state)

const handleSubmit = e =>{
  e.preventDefault()
  const input = e.target.inputSearch.value.trim().toLowerCase()
  dispatch(getProductsByName(input, false))
}

const [categories, setCategories] = useState()
const [fromTo, setFromTo] = useState({
  from:0,
  to: Infinity
})

const [dropdown, setDropdown] = useState(false);

const openCloseDropdown = () => {
  setDropdown(!dropdown);
} 


useEffect(() => {
const url ='https://e-commerce-api-v2.academlo.tech/api/v1/categories'
axios.get(url)
.then( res=> setCategories(res.data))
.catch(err=> console.log(err.response))
}, [])

const handleClickCategory = id =>{
  dispatch(getProductsByName(id, true))
}

const handleSubmitPrice = e => {
e.preventDefault()
const from = Number(e.target.from.value.trim())
const to = Number(e.target.to.value.trim())

if (from && to){
setFromTo({from, to})
} else if (from && !to) {
  setFromTo({from, to: Infinity})
} else if (!from && to){
  setFromTo({from:0, to})
} else {
  setFromTo({from:0, to: Infinity})
}
}

const filterProduct = product=> Number(product.price)>= fromTo.from && Number(product.price) <= fromTo.to 

  return (
    
    <div>
      <div className='search__global-container'>
      <section className='search__container'>
        <form className='search__form' onSubmit={handleSubmit} >
          <input placeholder='What are looking for?' className='input__search' id='inputSearch' type="text" />
          <button className='search__btn'><i className='bx bx-search-alt'></i></button>
        </form>
      </section>
      </div>

      <div  className='home__container'>
       <div className='home__top-container'>
       <section className='price__container'>
        <header className='price__header'>
          <h3 className='price__title'>Price</h3>
        </header>
        <div className='from-to__container'>
        <form className='price__form-container' onSubmit={handleSubmitPrice} >
          <div className='price__from-div'>
            <label className='price__from-label' htmlFor="from">From</label>
            <input className='price__input' type="number" id='from' />
          </div>
          <div className='price__to-div'>
            <label className='price__to-label' htmlFor="to">To </label>
            <input className='price__input' type="number" id='to' />
          </div>
          <button className='filter__price-btn'>Filter Price</button>
        </form>
      </div>
      </section>

      


      <section className='category__container'>
        <header className='category__header'>
          <Dropdown id='dropdown__container-id' isOpen={dropdown} toggle={openCloseDropdown}>
            <DropdownToggle id='dropdown__id'>
              <h3 className='category__title'>Category <i className='bx bx-chevron-down'></i></h3>
            </DropdownToggle>
            <DropdownMenu id='dropdown__Menu-id'>
              <DropdownItem onClick={() => dispatch(getAllProductsThunk())} className='home__category-item'>All Products</DropdownItem>
              {
                categories?.map(category => (
                  <DropdownItem key={category.id} onClick={() => handleClickCategory(category.id)}>{category.name}</DropdownItem>
                ))
              }
            </DropdownMenu>
          </Dropdown>
        </header>
      </section>

      </div>

      <div className='home__div-2'>
        {
          products?.length === 0 ?
            <h1 className='home__err-msg'>❌this product does not exist❌</h1>
            :
            products?.filter(filterProduct).map(product => (
              <CardProduct
                key={product.id}
                product={product}
              />
            ))
        }
      </div>
      </div> 
    </div>
  )
}

export default Home