import React from 'react';

const Blog = () => {
  return (
    <div className="mt-20 container mx-auto px-4 md:px-10 py-10">
      <h1 className="text-3xl md:text-5xl font-bold text-purple-700 text-center mb-5">
        Important Question
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div class="card bg-base-100 text-primary-content">
          <div class="card-body">
            <h2 class="card-title">
              How will you improve the performance of a React Application?
            </h2>
            <p className="">
              1. Avoid using index as key value for mapping an array <br />
              2. Avoid using unnecessary props <br />
              3. Using immutable data structure <br />
              4. Dependency optimization for using useEffect hook <br />
              5. Use functional and react pure components <br />
            </p>
          </div>
        </div>
        <div class="card bg-base-100 text-primary-content">
          <div class="card-body">
            <h2 class="card-title">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p className="">
              <span className="text-xl">
                There are four ways to manage a state in react application-
                <br />
              </span>
              1. Local State: It is managed by components
              <br />
              2. Global State: It is data we manage across multiple components.
              <br />
              3. Server State: Data that comes from an external server that must
              be integrated with our UI state
              <br />
              4. URL State: Data that exists on our URLs, including the pathname
              and query parameters.
              <br />
            </p>
          </div>
        </div>

        <div class="card bg-base-100 text-primary-content">
          <div class="card-body">
            <h2 class="card-title">How does prototypical inheritance work?</h2>
            <p className="">
              Other programming languages have classes to implement inheritance.
              JavasScript has only Objects. To implement inheritance JavaScript
              makes use of Prototype. The Inheritance is known as Prototype
              Inheritance. A Prototype is just another JavaScript Object. The
              JavaScript assigns it to the [[Prototype]] property of the object
              when it creates it. The [[Prototype]] is the internal property and
              is hidden from us.
            </p>
          </div>
        </div>
        <div class="card bg-base-100 text-primary-content">
          <div class="card-body">
            <h2 class="card-title">
              Why you do not set the state directly in React
            </h2>
            <p className="">
              <span className="text-xl">
                We should not update the state directly because:
                <br />
              </span>
              Updating a state directly without calling setState() is not a good
              practice. It will not update the state immediately. It will be
              updated only when the component is re-rendered. This is because
              the state is updated in the component’s render() method. This is
              not the case with setState() method. It will update the state
              immediately.
            </p>
          </div>
        </div>

        <div class="card bg-base-100 text-primary-content">
          <div class="card-body">
            <h2 class="card-title">
              What is a unit test? Why should write unit tests?
            </h2>
            <p className="">
              A unit test is a way of testing a unit - the smallest piece of
              code that can be logically isolated in a system. It is used to
              test a component or small part of code is working as expected or
              not. It is also developed by the software developers to check the
              functionality of the application. We use unit test to check the
              application in a effective and efficient way.
            </p>
          </div>
        </div>
        <div class="card bg-base-100 text-primary-content">
          <div class="card-body">
            <h2 class="card-title">
              You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h2>
            <p className="">
              <span className="text-xl">
                Finding desired product via filter() method:
                <br />
              </span>
              const name = 'test name'; <br /> const desiredProducts =
              products.filter((product) => product.name === name); <br />
              console.log(desiredProducts);
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
