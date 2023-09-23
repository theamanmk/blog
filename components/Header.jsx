import React,{useContext , useState , useEffect} from 'react'

import Link from 'next/link'
import { getCategories } from '../services'



const Header = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
         getCategories().then((newCategories)=> setCategories(newCategories))
            },[]);

  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-4xl text-white'>
                       GraphAMK 
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category)=>(
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
        <p className='text-white'>Hello There fellow sapien , This blog is just a mere reflection of my interests . Please do comment your opinions.</p> 
        <p className='text-white'>For queries : <span className='font-bold'>metalsierrabravo6@gmail.com </span>
        Source code & other projects : <span className='font-bold'>https://github.com/theamanmk</span> </p>
    </div>
    
  )
}

export default Header