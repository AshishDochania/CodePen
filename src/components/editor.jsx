import React from "react";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import {Controlled as ControlledEditor} from 'react-codemirror2';

export default function Editor({name,logo,language,value,onchange}){

    function handleChange(editor,data,value){
        onchange(value);
    }

    const [open,doop]=React.useState(false);

    return <div className={`codebox ${open?'':'collapsed'}`}>
        <div className="nav">
            <h2 style={{color:"white"}}>{name}</h2>
            <button onClick={()=>doop((open)=>!open)}></button>
        </div>
        <ControlledEditor 
            className="codebody" 
            onBeforeChange={handleChange}
            value={value}
            options={{
                lineWrapping:true,
                lint:true,
                lineNumbers:true,
                theme:'material',
                mode:language
            }}
        ></ControlledEditor>
        
    </div>
}