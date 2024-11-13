**Mytheresa QA Engineer - Technical Challenge**

This project contains an end-to-end testing setup using Cypress for various environments (QA, Staging, Production) and browser-specific test runs.

  **Project Setup**
  
  **Prerequisites**
  
    Node.js (v14 or later)
    
    npm or yarn
  
    Chrome and Firefox browsers (for browser-specific tests)
  
  **Installation**
  
  Clone the repository
    
    git clone https://github.com/JuanDiSosa/challenge.git
    
    cd challenge
    
  Install Cypress and dotenv, using npm:
    
    npm install cypress --save-dev
    
    npm install --save-dev dotenv cypress-dotenv 
    
  **Environment Variables Setup**
  
  This project uses environment variables to manage credentials and configurations per environment. To set up environment variables:
    
    Create a .env file in the project root.
    
  Define necessary variables like MY_USER and MY_PASSWORD in the .env file, for example:
    
    MY_USER=your_username
    
    MY_PASSWORD=your_password
    
  Note: Each environment (qa, staging, prod) have a separate .env file. The variables in these files will be used by Cypress during the test runs.
  
  **Usage**
      
  The project provides multiple npm scripts to run tests across different environments and browsers.
    
  Open Cypress Test Runner for QA
  
      npm run cy:open:qa
            
  Runs Cypress tests headlessly in the QA environment.
      
      npm run cy:run:qa
            
  Runs Cypress tests headlessly in the Staging environment.
      
      npm run cy:run:staging
            
  Runs Cypress tests headlessly in the Production environment.
      
      npm run cy:run:prod
      
  Browser-Specific Test Runs
      
  Run tests in specific browsers, like Chrome or Firefox, for the QA environment.
      
  Run Cypress Tests in QA on Chrome
      
      npm run cy:run:qa:chrome
      
  Run Cypress Tests in QA on Firefox
      
      npm run cy:run:qa:firefox
  
  **Dependencies**
  
    Cypress: End-to-end testing framework.
    
    dotenv: Loads environment variables from .env files.
    
    cypress-dotenv: Integrates dotenv with Cypress for environment-specific configurations.

**Author

Created by Juan D. Sosa.**
