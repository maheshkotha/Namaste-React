

#  json viewer install to show json data in chrome


# config driven ui

# why we need keys
 - This key helps React identify which items have changed, are added, or are removed. 
 - using the item's index or using a unique identifier like an "id". Let's explore both approaches

 - index:  If the list is static and its items do not change order or get filtered, using the index may be sufficient.

 - Unique ID: Using a unique identifier (such as an id) ensures that React can accurately track each item, even if the list order changes or items are added/removed.
 - Performance: React can optimize updates more effectively when using stable, unique keys, leading to better performance, especially with dynamic lists.


# Episode - 5

 # Default Export Named Export
- export default moduleNae
- export const variable_name = '';

 # File structure
 - simple extention
 - component
    - Header.js
    - Body.js
    - ResturantCard.js
 - util
    - constants
    - mockData


# React Hooks
(Normal JS utility functions)
- useState() 
- useEffect()

- when every state variable changes component re-render


# Reconciliation Algorithm (Also known as React Fiber)
- DOM -> Normal tags
- Virtual DOM -> representation of actual DOM, it is bacically normal js object 

- Diff Algorithm -> finds out the difference between the old virtual DOM and new Virtual DOM

# Episode - 6

# Monolith Architeacture
All are in single Project
 - API
 - UI
 - Authantication
 - DB Connection
 - SMS Sending 

 # Micro Services
 All are individual projects

   - Back End
   - Ui
   - Authanitcation
   - DB
   - SMS 
   This is known as seperation of conserns, 
   Single responsibilitiy principile, 

# How to intract with each orther
   Each service run on specific port 


# How web apps fetch the data from backend
   1. app load -> API call -> wait for data  -> render UI
   2. Page Load -> Render UI -> Api Call -> wait for data -> Render UI     // Better UX


# useEffect
   - it take two parameters, when we use useEffect pass two arguments
   - first aregument is function
   - second argument is dependency array

   useEffect call after component reder


# shemmier UI


- Whenever state variable update, react trigger a reconciliation cycle(re-render the component)

# CORS Error
- use corsproxy.io  --> https://corsproxy.io?



# Episode - 7

- useEffect
   - if no dependency array => useEffect is called on every render
   - If dependency array is [] => useEffect is called on initial render (only once)
   - If dependency array is [stateVariable] => useEffect is called when stateVariable is updated.
   


- Link from React Router DOM
   * Link Component work like as <a href="/about">About Us</a>
   * useage <Link to='/about'>About us</Link>



- Routing
   * Client Side  ---> We are not making any network call, 
   * Server Side  --> you make a network call and the page comming from server






