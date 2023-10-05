### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

To create dynamic navigation on the client side within the React app. 

- What is a single page application?

An app that rewrites the current page when you interact with it rather than reloading the page. 

- What are some differences between client side and server side routing?

With client side, its improved UI/UX, its more modern architecture and SEO is potentially worse. 

With server side, the page reloads after every URL change, the architecture is more traditional and the SEO is potentially better. 

- What are two ways of handling redirects with React Router? When would you use each?

Using <Redirect> component when you want the page to automatically go to a page instead of the one that was searched

Calling .push method on history object. Used when the user is finished with a page and it redirects to a new page. 

- What are two different ways to handle page-not-found user experiences using React Router? 

Including a 404 using <Route><NotFound /></Route> 

Using <Redirect to= "/" /> to automatically return to home page. 

- How do you grab URL parameters from within a component using React Router?

Accessing match object provided by React Router. 

- What is context in React? When would you use it?

Context is universal data across your app and you would use it to prevent drilling and to use global themes and data. 

- Describe some differences between class-based components and function
  components in React.

Class based components use render() method to return components JSX and Function components take props as an argument and return JSX 

Class components use this.state and function components use useState. 


- What are some of the problems that hooks were designed to solve?

Hooks work by using closure to store. 

Hooks can make logic more readable and reusable. 

Hooks can also be easier to test. 

Hooks are also more readable and easier to maintain. 