import { Component } from '@angular/core';
import { DiffEditorModel } from 'ngx-monaco-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editorOptions = {
    theme: 'vs', 
    language: 'javascript', 
    readOnly: false, 
    contextmenu: true, 
    minimap: {
      enabled: true
    }
  };
  code: string= 'function x() {\nconsole.log("Hello world!");\n}';

  diffOptions = {
    theme: 'vs-dark', 
    language: 'javascript', 
    readOnly: true, 
    contextmenu: true, 
    minimap: {
      enabled: true
    }
  };

  originalModel: DiffEditorModel = {
    code: 'heLLo world!',
    language: 'text/plain'
  };

  modifiedModel: DiffEditorModel = {
    code: 'hello orlando!',
    language: 'text/plain'
  };
}
