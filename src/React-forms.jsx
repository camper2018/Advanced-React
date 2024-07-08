// Controlled components vs. Uncontrolled components

// Uncontrolled Form  
// Input Fields remember exactly what you typed, being the DOM itself that maintains that internal state. 
// How can you then get their value? The answer is by using a React ref.
const Form = () => { 
    const inputRef = useRef(null); 
   
    const handleSubmit = () => { 
      const inputValue = inputRef.current.value; 
      // Do something with the value 
    } 
    return ( 
      <form onSubmit={handleSubmit}> 
        <input ref={inputRef} type="text" /> 
      </form> 
    ); 
}; 
// Controlled Form
const CForm = () => { 
    const [value, setValue] = useState(""); 
   
    const handleChange = (e) => { 
      setValue(e.target.value) 
    } 
   
    return ( 
      <form> 
        <input 
          value={value} 
          onChange={handleChange} 
          type="text" 
        /> 
      </form> 
    ); 
   }; 

// The file input type

// There are some specific form inputs that are always uncontrolled, like the file input tag. 
// In React, an <input type="file" /> is always an uncontrolled component because its value is read-only and can't be set programmatically. 

const FileForm = () => { 
    const fileInput = useRef(null); 
   
    const handleSubmit = (e) => { 
      e.preventDefault(); 
      const files = fileInput.current.files; 
      // Do something with the files here 
    } 
   
    return ( 
      <form onSubmit={handleSubmit}> 
        <input 
          ref={fileInput} 
          type="file" 
        /> 
      </form> 
    ); 
   }; 

// The below table summarizes the features that each one supports:

// Feature                                   Uncontrolled     Controlled
   
// One-time value retrieval (e.g. on submit)  Yes                Yes

// Validating on submit                       Yes                Yes
   
// Instant field validation                   No                 Yes
   
// Conditionally disabling a submit button    No                 Yes
   
// Enforcing a specific input format          No                 Yes
   
// Several inputs for one piece of data       No                 Yes
   
// Dynamic inputs                             No                 Yes