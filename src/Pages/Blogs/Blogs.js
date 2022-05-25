import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Blogs = () => {
    const [foundProduct, setFoundProduct] = useState({})
    const products = [
        { name: 'pen', price: 5, description: 'Lorem ipsum dolor sit amet.' },
        { name: 'paper', price: 10, description: 'Lorem ipsum dolor sit amet.' },
        { name: 'book', price: 150, description: 'Lorem ipsum dolor sit amet.' },
        { name: 'mouse', price: 300, description: 'Lorem ipsum dolor sit amet.' },
        { name: 'keyboard', price: 750, description: 'Lorem ipsum dolor sit amet.' },
        { name: 'earphone', price: 350, description: 'Lorem ipsum dolor sit amet.' },
    ];
    const handleSearch = (e) => {
        e.preventDefault()
        const SearchText = e.target.product.value;
        console.log(SearchText)
        products.find(product => {

            if (product.name === SearchText) {
                setFoundProduct(product)
            }

        }
        )
    }
    return (
        <div className='mx-12'>
            <h2 className='text-center text-primary text-4xl underline'>Question And Answer</h2>
            <div className='mt-4'>
                <h1 className='text-indigo-500 text-2xl'>Question 1 : How will you improve the performance of a React Application?</h1>
                <p className='mt-4'>1. Keeping component state local where necessary and don't use unnessary state. Cause, It will be re-render which make a react application slower. <br />
                    2. Memoizing React components to prevent unnecessary re-renders by using React.memo(), useCallback Hook,Using the useMemo Hook, etc. <br />
                    3. Use custom hook to avoid code repeating. <br />
                    4. Use lazy loading images in React. <br />
                    5. Dependency optimization on UseEffect. <br />
                    6. Avoid using Index number as Key for map & use an unique id or number for Key. <br />
                    7. Spreading props on DOM elements could be optimize react application. <br />
                    8. USe CSS Animations Instead of JS Animations. Like AOS, Animate.css etc library. <br />
                    9. Consider Server-side Rendering.</p>
            </div>
            <div className='mt-6'>
                <h1 className='text-indigo-500 text-2xl'> Question 2: How does prototypical inheritance work?</h1>
                <p className='mt-4'>Under the classical inheritance phenomenon, we create a new class that actually expands or reuses properties or functions, method
                    of another class that are used by different programming languages ​​(such as C, C ++, Java, etc.).
                    But JavaScript does not use classical inheritance but rather it uses a phenomenon called prototype inheritance.
                    In prototype inheritance, an object uses the properties or methods of another object through prototype linkage.
                    JavaScript objects inherit properties and methods from prototypes (e.g. date objects inherit properties from Date.prototype).</p>
            </div>
            <div className='mt-6'>
                <h1 className="text-indigo-500 text-2xl">Question 3: What is a unit test? Why should write unit tests?</h1>
                <p className='mt-4'>Unit testing involves testing individual components of a software program or application.
                    The main purpose behind this is to test whether all the individual parts are working as intended.
                    A unit is known as the smallest possible component of software that can be tested.
                    Typically, it has several inputs and a single output.</p>
                <p>Advantages:
                    When you add more features to a piece of software, you may have to change the old design and code, and this can be costly and risky.OWhen you add more features to a piece of software, you may have to change the old design and code, and this can be costly and risky. If you use the unit testing method, it can save a lot of time and make the whole process much faster and easier.
                    If you use the unit testing method, it can save a lot of time and make the whole process much faster and easier.

                    1. Unit testing significantly improves code quality. This helps developers to identify the smallest flaws that may appear in the units before they go for integration testing.

                    2. Unit testing helps to identify all kinds of bugs with the software at a very early stage.
                    Software developers can work on those issues first before making further progress.
                    The main advantage of this is that when problems are solved at an early stage, no other part of the software is affected.
                    This results in increased efficiency, reduced downtime, and reduced costs that would otherwise result in stagnation of the entire design process.

                    3. Code refactoring or updating the system library becomes much easier when you examine each component of the software individually.
                    If there are any bugs, they are detected early and thus make it much easier to change the system.
                    The accuracy of each unit is verified before proceeding to the next stage.
                    This means that the unit has been proven to work properly before being integrated with other modules.
                    s
                    4. Any problems or bugs in the system are identified at an early stage by unit testing and this significantly reduces the cost of bug fixes. If these bugs are discovered later, it will be much more expensive to fix them.

                    5. If bugs are detected at a later stage, they are usually the result of many changes already made to the system.
                    If the software is already built, finding the right code will be a big problem because of these bugs.</p>
            </div>
            <div className='mt-6'>
                <h2 className='text-indigo-500 text-2xl'>Question 4:  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <div className='mt-4'>
                    <h2>Products are below here (Demo)</h2>
                    <ul>
                        <li>name: 'pen', price: 5, description: 'Lorem ipsum dolor sit amet.'</li>
                        <li>name: 'paper', price: 10, description: 'Lorem ipsum dolor sit amet.'</li>
                        <li>name: 'book', price: 150, description: 'Lorem ipsum dolor sit amet.'</li>
                        <li>name: 'mouse', price: 300, description: 'Lorem ipsum dolor sit amet.'</li>
                        <li>name: 'keyboard', price: 750, description: 'Lorem ipsum dolor sit amet.'</li>
                        <li>name: 'earphone', price: 350, description: 'Lorem ipsum dolor sit amet.'</li>
                    </ul>
                    <h2 className='text-3xl text-warning'>Search These Products</h2>
                </div>
                <form onSubmit={handleSearch} className="mt-8">
                    <input className='input input-bordered input-info w-full max-w-xs' type="text" placeholder='Search Product' name='product' />
                    <input className='bg-primary text-white py-2 px-4 rounded ml-4' type="submit" value="Search" />
                </form>
                <h2 className='font-bold mt-4'><span className='text-green-500'>Search Product is : <br /></span> name: {foundProduct.name} <br /> Price: {foundProduct.price}  <br /> Description: {foundProduct.description} </h2>
            </div>
            <div className='mt-6'>
                <h2 className='text-indigo-500 text-2xl mt-4'>Question 5: What are the different ways to manage a state in a React application?</h2>
                <p className='mt-4'>
                    <span className='font-bold'>The different ways to manage a state in a React application:</span> <br />
                    1.The Problem. Redux, particularly, gives the developer a single place to put all their state that seems great at first. <br />
                    2.The Solution. <br />
                    3.Data State. <br />
                    4.Control State. <br />
                    5.Session State. <br />
                    6.Location State. <br />
                    7.Conclusion.
                </p>
            </div>
        </div>
    );
};

export default Blogs;