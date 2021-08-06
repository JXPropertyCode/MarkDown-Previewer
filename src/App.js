import './App.css';
import React, { useState } from 'react';
// source for useState is https://reactjs.org/docs/hooks-state.html
// What does calling useState do? It declares a “state variable”. Our variable is called count but we could call it anything else, like banana. This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.
import FormGroup from 'react-bootstrap/FormGroup' // the form group class for grouping things together
import FormLabel from 'react-bootstrap/FormLabel' // label for the text area
// import FormControl from 'react-bootstrap/FormControl' // the actual text area
// a lot of information is in the documentations of React, but sometimes it is hard to look for certain things and might be hidden in some documentations
// I also added below into index.html
  // <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
  // import the css since it is not included in here. from the boostrap


const  marked = require("marked") // this brings in the marked library that we are using
// marked.setOptions({
//   renderer: new marked.Renderer(),
//   gfm: true,
//   tables: true,
//   breaks: false,
//   pedantic: false,
//   sanitize: true,
//   smartLists: true,
//   smartypants: false
// });

// marked.setOptions({
//   renderer: new marked.Renderer(),
//   highlight: function(code, language) {
//     const hljs = require('highlight.js');
//     const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
//     return hljs.highlight(validLanguage, code).value;
//   },
//   pedantic: false,
//   gfm: true,
//   breaks: false,
//   sanitize: false,
//   smartLists: true,
//   smartypants: false,
//   xhtml: false
// });

function App() {

  const [markdown, setMarkdown] = useState("");
  console.log(markdown)



  return (
    <div className="App">
      <div>
        <FormGroup controlId="formControlIsTextarea">
          {/* controlId is Sets id on <FormControl> and htmlFor on <FormGroup.Label>.
Basically it's the input's id and the label's for attribute. 
          reference: https://stackoverflow.com/questions/46776626/what-is-a-controlid-in-react-bootstrap
          */}
          <FormLabel>Markdown Input</FormLabel>
          {/* <FormControl componentClass="textarea" placeholder="Enter Markdown" value={markdown} onChange={(event) => setMarkdown(event.target.value)}></FormControl> */}
          {/* onChange basically lets it update the state markdown on line 14 whenever someone makes a change, above the return statement
            the value of the FormControl is linked to markdown which is the original state
          */}
          {/* Since I need textarea as specified in the FreeCodeCamps instructions I need to use textarea instead of FormControl instead */}
          <textarea id="editor" placeholder="Enter Markdown" value={markdown} onChange={(event) => setMarkdown(event.target.value)}></textarea>
          {/* documentations of textarea https://reactjs.org/docs/forms.html */}
        </FormGroup>  
        {/* <textarea placeholder="Enter Markdown" value={markdown} onChange={(event) => setMarkdown(event.target.value)}></textarea> */}

      </div>
      {/* Above is for putting contents in */}
      {/* Below is for outputting the contents */}
      <div>
        <h1>Markdown Output</h1>
        {/* converting markdown into text */}
        {/* {marked(markdown)} <= if you activate this it would show up as html texts/string but it is not complied as HTML so that means yo ucan see the <p>(Inputs from the FormControl)</p> */}
        
        {/* How to make the original texts into HTML format */}
        {/* Not in the markdown documentation but in the react documentation */}
        <div id="preview" dangerouslySetInnerHTML = {{__html: marked(markdown)}}>
          {/* note: marked is from the beggining initialization on line 10 */}
          {/* it passes a object which is __html and we pass in "marked" */}
          {/* Then it converts our markdown into HTML from the string*/}

        </div>
      </div>

    </div>
  );
}

export default App;
