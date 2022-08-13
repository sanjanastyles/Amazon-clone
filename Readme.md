# July 2022

<!-- # [Live Demo](https://clone-d14cb.web.app/)-->

## `Front-End Installation`

### React

Open your VSCode and press `ctrl + J` and type `npx create-react-app amazon-clone` , amazon-clone is the name of my project, on the terminal and hit enter.
You should see the following </br>
![img](https://cdn.discordapp.com/attachments/947060629066354689/999316178239496352/unknown.png)

and after you into the directory type `npm start` and hit enter. Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

### Firebase

I am using [firebase.com](https://console.firebase.google.com/u/0/) to host my clone site. `Create console` and `create project` after the project is created we click the following button. Also run `npm i firebase` in your terminal.</br>
![img](https://cdn.discordapp.com/attachments/947060629066354689/999319460601139210/unknown.png)
</br>This is all we have to bother about, that said copy the code and paste in your new terminal.</br>

![step 3](https://cdn.discordapp.com/attachments/947060629066354689/999319127887970395/unknown.png)
</br>and now lets `continue to console` </br>

![img](https://cdn.discordapp.com/attachments/947060629066354689/999320341497262120/unknown.png) </br> ![img](https://cdn.discordapp.com/attachments/947060629066354689/999320549467635722/unknown.png)

</br>Create a new file in the `src` folder of `amazon-clone`, I am going to name it `firebase.js` and paste the copied code.

`npm i react-router-dom` in your terminal, to use paths and routes.
`npm install react-currency-format --save --force`

### Styling Icons

[react-icons.github.io/react-icons/search?q=shop](https://react-icons.github.io/react-icons/search?q=shop) copy the code `npm install react-icons ` and paste it into your terminal to install react-icons in your workplace. Search for `icon` and copy and paste the npm code into your terminal `import { icon_name } from "react-icons/fa";`

### Deploy App

Before you dig into this, I highly suggest you to at least build your front-end
As mentioned above, we are going to use firebase to ease things out for us. Login in to your firebase account from your terminal using the command `firebase login`. After you've logged in, continue in your terminal with `firebase init`
</br> -> Hosting </br>
-> Use an existing project </br>
-> clone </br>
-> use as your public directory? : build </br></br>
run `npm run build` on your terminal, creates a build directory with a production build of your app.
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

And your app should be ready to be deployed. To deploy your app, run `firebase deploy`, click on the deployed link and just like that click on all the "okays" BOOM! thats your `Hosting URL` share it with your friends and enjoy.

### For Payments via Card

Run the following commands `npm i @stripe/stripe-js` as well as `npm i @stripe/react-stripe-js` in your terminal.
Upgrade your firebase account to Blaze Plan (PS: Its free). Or you can always use Express for it.

Go to [Stripe.com](https://stripe.com/en-in) and create account. And then follow the image as below: </br>
![img](https://cdn.discordapp.com/attachments/947060629066354689/1001161684557238325/unknown.png)</br>

### For axios

Run `npm i axios` in your terminal.</br>

###

`npm i moment`

## `Back-End Installation`

### Set-up Cloud

In terminal `firebase init` and follow the image: </br>
![img](https://cdn.discordapp.com/attachments/947060629066354689/1001179123621838848/unknown.png)</br>
![img](https://cdn.discordapp.com/attachments/947060629066354689/1001179198418845716/unknown.png)</br>
![img](https://cdn.discordapp.com/attachments/947060629066354689/1001179303440027690/unknown.png)</br>

### _**Keep Your Directory to `functions` while installing the next packages mentioned.**_

### Express

`npm i express` in your terminal, function directory along with that we are going to install `npm i cors` and `npm i stripe`. Get your Secret Key token from stripe website,

Check the functioning of the backend we will run `firebase emulators:start`

## My Errors (Help me)

1. My project on firebase.com should be on the Blaze plan (Even though I know it is "pay as you go" as an Indian teen, I don't want to risk my parent's money)
2. I can't seem to get a successful transaction, while first error still remains, "processing" never ends. </br>
   ![img](https://cdn.discordapp.com/attachments/947060629066354689/1002911048233406496/unknown.png)
