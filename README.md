# catchAsync express.js error handler middleware 
Async handler middleware in order to catch uncaught promises, unexpected exceptions on the server. I myself hate to use try catch statement in each and every function in order for the code not to break. Wouldn't it be quite better if we could just define a global error handler who would catch unexpected exceptions or unhandled promise rejections and send a response to the client by itself? I'd love that. That's when i came across this approach and i simply loved it.

# Project Overview
Nothing too fancy, we just created a simple express server with a get route and we are going to look at approaches without async handler, with async handler to catch the error and then handling that caught error to send a response to the client

# Without catchAsync

We simply created a get route which throws an error, note that we are not handling it at all. We may use try, catch but the whole point of this is to avoid try, catch or promise chaining etc


![exceptionCode](https://user-images.githubusercontent.com/22536839/219333993-3f8d7d9e-058d-413b-bc63-4703f2dd0292.PNG)


It simply breaks out code 


![exception](https://user-images.githubusercontent.com/22536839/219334348-a0f055e1-7ade-4611-aace-b1d31718bb38.PNG)


While the code is broken, api is continously hit until the timeout


![exceptionResponse](https://user-images.githubusercontent.com/22536839/219334375-0565e726-d916-42df-9241-43bdf0b150d9.PNG)



# With catchAsync - caught the error

Now, we simply create a middleware and export it. Basically what this middleware does is it takes the function as a whole and attached the catch block to the function in which it passed the caught err object using next(err) back to the express



![catchAsync](https://user-images.githubusercontent.com/22536839/219334890-0ce9bfec-749e-4c96-be85-aa923407332a.PNG)


Wrapping our function like this



![catchAsyncExceptionCode](https://user-images.githubusercontent.com/22536839/219335281-87ceb56d-de30-4758-aeef-d79c4a654786.PNG)



But hold on, it's still breaking the code but why? It's because we did catch the err but we never handled it



![catchAsyncException](https://user-images.githubusercontent.com/22536839/219335354-ac8af446-03ce-462f-b8b0-42067b5d1a8a.PNG)



# Handling the error using express middleware function

Now, we need to create this middleware in the root file i.e index/app/server (whatever that is for you) but make sure the middleware is called at the end of the code so only when error reaches it then it handles it.



![handledException](https://user-images.githubusercontent.com/22536839/219335700-1f4f65a8-080c-4584-9f17-67d14314cac7.PNG)



Well, there we go. We have successfully handled our error without annoying try catch or promise chaining. You simply need to wrap each function of yours with catchAsync and any uncaught errors or unhandled promise rejections will be handled but these middlewares. No try catch and no unhandled promise rejection warnings


![handledExceptionResponse](https://user-images.githubusercontent.com/22536839/219336018-54f13135-f5d3-427e-b3ac-cc4c6bf7ac99.PNG)



