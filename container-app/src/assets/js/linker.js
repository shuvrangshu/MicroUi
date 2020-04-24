async function linkAppAssets(appName, cb) {
    const rootURL = 'http://localhost:8080/'
    const response = await fetch(rootURL + 'manifest.json', { mode: 'cors' });
 
     if (response.ok) {
         const parsedJson = await response.json();
 
         if (!checkAlreadyRegistered(parsedJson.directive)) {
             Object.keys(parsedJson).filter(x => x !== 'directive').forEach(x => {
                 const cssRex = /.css$/g;
                 if (cssRex.test(x)) {
                     //Append stylesheet
                     const styles = document.createElement('link');
                     styles.setAttribute('rel', 'stylesheet');
                     styles.setAttribute('href', rootURL + parsedJson[x]);
                     document.head.appendChild(styles);
                 } else {
                     //Append scripts
                     const scripts = document.createElement('script');
                     scripts.setAttribute('type', 'text/javascript');
                     scripts.setAttribute('src', rootURL + parsedJson[x]);
                     scripts.setAttribute('defer', true);
                     document.body.appendChild(scripts);
                 }
             });
             cb(parsedJson.directive);
         }
     }
 }

 async function linkReactAppAssets(appName, cb) {
    const rootURL = 'http://localhost:8080/'
    const response = await fetch(rootURL + 'asset-manifest.json', { mode: 'cors' });
 
     if (response.ok) {
         const parsedJson = await response.json();
 
         if (!checkAlreadyRegistered(parsedJson.entrypoints)) {
             Object.keys(parsedJson.entrypoints).filter(x => x !== 'directive').forEach(x => {
                 const cssRex = /.css$/g;
                 if (cssRex.test(parsedJson.entrypoints[x])) {
                     //Append stylesheet
                     const styles = document.createElement('link');
                     styles.setAttribute('rel', 'stylesheet');
                     styles.setAttribute('href', rootURL + parsedJson.entrypoints[x]);
                     document.head.appendChild(styles);
                 } else {
                     //Append scripts
                     const scripts = document.createElement('script');
                     scripts.setAttribute('type', 'text/javascript');
                     scripts.setAttribute('src', rootURL + parsedJson.entrypoints[x]);
                     scripts.setAttribute('defer', true);
                     document.body.appendChild(scripts);
                 }
             });
             cb(parsedJson.directive);
         }
     }
 }
 
 
 function checkAlreadyRegistered(elementName) {
     return !!window.customElements && !!window.customElements.get(elementName);
 }
 
 