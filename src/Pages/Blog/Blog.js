import React from 'react';

const Blog = () => {
  return (
    <div className='lg:w-5/6 mx-auto w-full my-10'>
      <div className='drop-shadow-2xl p-5 my-5'>
        <h1 className='text-2xl mb-3'>Difference between SQL and NoSQL </h1>
        <p> SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
      </div>
      <div className='drop-shadow-2xl p-5 my-5' >
        <h1 className='text-2xl mb-3'>What is JWT, and how does it work? </h1>
        <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

        </p>
        <p>1. User sign-in using username and password or google/facebook.</p>
        <p>2. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</p>
        <p>3. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</p>
        <p>4. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
      </div>
      <div className='drop-shadow-2xl p-5 my-5'>
        <h1 className='text-2xl mb-3'>What is the difference between javascript and NodeJS?</h1>
        <p>
          1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.
        </p>
        <p>2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</p>
      </div>
      <div className='drop-shadow-2xl p-5 my-5'>
        <h1 className='text-2xl mb-3'>How does Node.JS handle multiple requests at the same time?</h1>
        <p> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
      </div>
    </div>
  );
};

export default Blog;