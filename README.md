# msa-devops-2020-07

React Web App for browsing Astronomy Picture of the Day 

## Getting started

### Dependencies 
- npm 
- node.js 
- react

### Executing Program 
- clone the repository the to run the program, go to my-app (cd my-app) then run (npm run start) should open up localhost:3000
- alternatively visit https://msa-2020-07.azurewebsites.net/ (note that the implementation is yet to be complete and therefore 
  the website is not able to fetch data using Nasa API due to hidden key 🔑. There is yet work to be done to resolve this issue)

### Description of Build and Release Pipeline
- To Build the Pipeline I have used a starter pipeline on Azure which contains a YAML file
- To ensure it also triggers when a commit is added to a branch called "develop" I've added develop under trigger stage
- Then a script is written to build and deloy the react app
- To do so it first goes into my-app then runs npm install then npm run build then return out of it
- then I have added build to archieve folder
- Then I published build folder to release and deploy the app 
- Then for the release pipeline I have taken the build artifacts from build pipeline and deloyed it

