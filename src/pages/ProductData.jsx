import React from 'react'
import watch1 from "../Assests/watch1.webp";
import watch2 from "../Assests/watch2.webp";
import watch3 from "../Assests/watch3.webp";
import watch4 from "../Assests/watch6.webp";
// phone images
import iphone11 from "../Assests/iphone11.webp";
import iphone12 from "../Assests/iphone12.webp";
import iphone13 from "../Assests/iphone13.webp";
import iphone14 from "../Assests/iphone14.webp";
// chair images
import armChair1 from "../Assests/arm-chair-01.jpg";
import armChair2 from "../Assests/arm-chair-02.jpg";
import armChair3 from "../Assests/arm-chair-03.jpg";
import armChair4 from "../Assests/counter-timer-img.png";
// laptop images
import lap1 from "../Assests/minotebookpro120g.jpg"
import lap2 from "../Assests/minotebookpro.jpg"
import lap3 from "../Assests/minotebook14horizon.jpg"
// ipad
import tab1 from "../Assests/redmipad.webp"
import tab2 from "../Assests/pad5.jpg"
import tab3 from "../Assests/ipadpro.webp"

const ProductData = [
    // Watches
    {
        id:"1",
        name: "Samsung Galaxy Watch 5",
        category: "Watch",
        price: "₹ 27,999.00",
        rating: "***",
        image: watch1
    },
    {
        id:"2",
        name: "Samsung Galaxy Watch 5 PRO",
        category: "Watch",
        price: "₹ 44,999.00",
        rating: "*****",
        image: watch2
    },
    {
        id:"3",
        name: "Samsung Galaxy Watch 4 LTE",
        category: "Watch",
        price: "₹ 20,999.00",
        rating: "***",
        image: watch3
    },
    {
        id:"4",
        name: "Samsung Galaxy Watch 4",
        category: "Watch",
        price: "₹ 23,999.00",
        rating: "****",
        image: watch4
    },
    // Phones
    {
        id:"5",
        name: "Iphone 11",
        category: "Phone",
        price: "₹ 39,999.00",
        rating: "****" ,
        image: iphone11
    },
    {
        id:"6",
        name: "Iphone 12",
        category: "Phone",
        price: "₹ 69,990.00",
        rating: "****" ,
        image: iphone12
    },
    {
        id:"7",
        name: "Iphone 13",
        category: "Phone",
        price: "₹ 83,990.00",
        rating: "****" ,
        image: iphone13
    },
    {
        id:"8",
        name: "Iphone 14",
        category: "Phone",
        price: "₹ 59,999.00",
        rating: "****" ,
        image: iphone14
    },
    {
        id:"9",
        name: "Fullfy Sheep Sofa",
        category: "Sofa",
        price: "₹ 11,999.00",
        rating: "****" ,
        image: armChair1
    },
    {
        id:"10",
        name: "Fullfy Velvet Sofa",
        category: "Sofa",
        price: "₹ 11,999.00",
        rating: "****" ,
        image: armChair2
    },
    {
        id:"11",
        name: "Faux Velvet Sofa",
        category: "Sofa",
        price: "₹ 11,999.00",
        rating: "****" ,
        image: armChair3
    },
    {
        id:"12",
        name: "Modern Arm Sofa",
        category: "Sofa",
        price: "₹ 13,999.00",
        rating: "****" ,
        image: armChair4
    },
    //laptops
    {
        id:"13",
        name: "Mi Notebook Pro 120G",
        category: "Laptop",
        price: "₹ 85,990.00 ",
        rating: "****",
        image: lap1
    },
    {
        id:"14",
        name: "Mi Notebook Pro 120G",
        category: "Laptop",
        price: "₹ 65,990.00 ",
        rating: "****",
        image: lap2
    },
    {
        id:"15",
        name: "Mi Notebook Pro 120G",
        category: "Laptop",
        price: "₹ 75,990.00 ",
        rating: "****",
        image: lap3
    },
    {
        id:"16",
        name: "Redmi Pad",
        category: "tablet",
        price: "₹ 14,990.00 ",
        rating: "****",
        image: tab1
    },
    {
        id:"17",
        name: "Redmi Pad 5",
        category: "tablet",
        price: "₹ 24,990.00 ",
        rating: "****",
        image: tab2
    },
    {
        id:"18",
        name: "Ipad Air 4 ",
        category: "tablet",
        price: "₹ 84,990.00 ",
        rating: "****",
        image: tab3
    },
]

export default ProductData
