import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
     
        <div className="max-w-screen-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-16 row-gap-8">
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                What is the purpose of react Router?
                </p>
                <p className="text-gray-700">
                React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. 
                React Router uses component structure to call components, which display the appropriate information.
                <br />
                By preventing a page refresh, and using Router or Link, which is explained in more depth below, 
                the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more 
                seamless user experience. React router also allows the user to utilize browser functionality
                 like the back button and the refresh page while maintaining the correct view of the application.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  How does Context Api works?
                </p>
                <p className="text-gray-700">
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. 
                This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, 
                lighter approach to state management using Redux.
                  <br />
                  <br />
                  React.createContext() is all you need. It returns a consumer and a provider. 
                  Provider is a component that as it's names suggests provides the state to its children. 
                  It will hold the "store" and be the parent of all the components that might need that store. 
                  Consumer as it so happens is a component that consumes and uses the state.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                React JS useRef Hook
                </p>
                <p className="text-gray-700">
                The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the 
                ref in react.
                The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. 
                <br />

                  <span className='text-blue-500'>Syntax: const refContainer = useRef(initialValue);</span>
                  <br />
                The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
};

export default Blog;