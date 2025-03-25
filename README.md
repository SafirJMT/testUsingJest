1. Navigate to the folder where the index.html file is in a CLI of your choice (cmd/PowerShell/GitBash/...)
2. > npm install
   
   This should install a lot of files under "node_modules" folder.
3. > npm test
   
   Expected output:
        
        > persisted@1.0.0 test
        > jest
        
         PASS  ./numberService.test.js
          NumberService
            √ should return a number (2 ms)
        
        Test Suites: 1 passed, 1 total
        Tests:       1 passed, 1 total
        Snapshots:   0 total
        Time:        1.45 s
        Ran all test suites.

   4. To run the project you will need to run a local server to avoid CORS issues. I suggest using Visual Studio Code.
   5. Install the VSCode Extension "Live Server"
   6. open up the "index.html" and right click within the file to "Open with Live Server"
   7. This should open up something like http://127.0.0.1:5500/index.html
   8. Clicking "Generate Number" should show a number below the button
