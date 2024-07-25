## How to Setup Tailwind Css

Use Online in Cdn Links

```
<script src="https://cdn.tailwindcss.com"></script>
```

Use Offline & Install Tailwind Css 

Step 1: Run the Following Command.
```
npm install -D tailwindcss
npx tailwindcss init
```

Step 2: Update tailwind.config.js file.
```
content: ["*.html"]
```

Step 3: Create src Folder and create input.css file and add this code.
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Run the Folllowing Command in Terminal
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

Step 5: Attached output.css file into Html file



