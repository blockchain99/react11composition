### Materialize CSS
1) materializecss.com/cards.html
2) https://materializecss.com/getting-started.html

* instead of CDN (cut & paste code ), I use npm way asf. 
* client$ npm install --save materialize-css@next
3) webpack : 
4) Add belows in client/public/index.html
```
 <!--Import Google Icon Font-->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<!-- Compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css">

<body>
      <!--JavaScript at end of body for optimized loading-->
      <script type="text/javascript" src="js/materialize.min.js"></script>
</body>
```
### git push source code:
    1) github push :
    • server$git status   $git add --all (incl subdir) 
    • $ git add . (file in only current current ro792,3701ot dir)
    • $ git commit -m “dkakdk”
    •  server$ git remote add origin 
      https://github.com/blockchain99/FullstackWebNodeJSReactExpressMongo.git
    • $git push -u origin master  → error →$ git push  -f origin master 
    1) changes an existing remote repository URL.
       1) $ git reomte -v
       2) $ git remote set-url --push <old_url> <new_url>****
       3) $ git remote set-url --delete <current_url>
       4) $ git remote set-url --add <new_url>

* react-select install : $ yarn add react-select
  Then use it in your app:
```
import React from 'react';
import Select from 'react-select';
```

## vs code : user Interfac :
* https://code.visualstudio.com/docs/getstarted/userinterface
* Activity Bar, Side Bar, Stasut Bar, Panel, Editor Groups
  
### lifting state up :
* Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.

### eslint + prettier : not good for html
* Make .eslintrc.js with the following contents:
```
module.exports = {
  "extends": "plugin:prettier/recommended"
};
```
* Good:
  * You press save and code is formatted
  * No need to discuss style in code review
  * Saves you time and energy
* Bad:
  *  Prettier doesn't do all languages. Notably HTML. It's great at JSX
* How to: 
  * ctrl + shift + x : extention show up.
  * type prettier : reaload -> success formatting !
### beautify 
*  beautify will merge in the setting from your .editorconfig files
*   is there any option to turn off beautifier on js file because i prefer prettier for js? -> Add "beautify.language": { "js": [] } to your VS Code settings.
### prettier vs beautify 
https://css-tricks.com/prettier-beautify/ 
* Vs code plugin beautify -> installed but it stop working prettier, so settings.json
```
{
 ...

  "beautify.language": {
    "html": ["html", "php", "erb"],
    "css": [],
    "js": []
  }
}
```
### JS solution with Bautfify : js-beautify for VS Code(Not instlled yet)
* https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify
* js-beautify for VS Code:  Beautify javascript, JSON, CSS, Sass, and HTML in Visual Studio Code.

* VS Code uses js-beautify internally, but it lacks the ability to modify the style you wish to use. This extension enables running js-beautify in VS Code, AND honouring any .jsbeautifyrc file in the open file's path tree to load your code styling. Run with F1 Beautify (to beautify a selection) or F1 Beautify file.********