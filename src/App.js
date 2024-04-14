import './App.css';
import React from "react";
import Editor from './components/editor';

function App() {
  const [html,changehtml]=React.useState("");
  const [css,changecss]=React.useState("");
  const [js,changejs]=React.useState("");
  const [secDoc,setsecDoc]=React.useState('');

  React.useEffect(()=>{
    const timeout = setTimeout(()=>{
      setsecDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    },400);

    return ()=>clearTimeout(timeout);
  },[html,css,js])
  
  
  return (
      <div className='fullbody'>
        <div className='navbar'>
          <h1>CodeRed</h1>
        </div>
        <div className='codePlace up'>
          <Editor name="HTML" logo="" language="xml" value={html} onchange={changehtml}/>
          <Editor name="CSS" logo="" language="css" value={css} onchange={changecss}/>
          <Editor name="JS" logo="" language="javascript" value={js} onchange={changejs}/>
        </div>
        <div className='codePlace'>
          <iframe
          allowtransparency="true"
          style={{backgroundColor:"white",color:"aqua"}}
          srcDoc={secDoc}
          title='output'
          sandbox='allow-scripts'
          frameBorder='0'
          width='90%'
          height='90%'
          />
        </div>
      </div>
  );
}

export default App;
