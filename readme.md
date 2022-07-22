# 2022

## Installation

### React

Open your VSCode and press `ctrl + J` and type `npx create-react-app amazon-clone` , amazon-clone is the name of my project, on the terminal and hit enter.
You should see the following </br>
![img](https://cdn.discordapp.com/attachments/947060629066354689/999316178239496352/unknown.png)

and after you into the directory type `npm start` and hit enter.

I am using firebase.com to host my clone site. `Create console` and `create project` after the project is created we click the following button. Also run `npm i firebase` in your terminal.</br>
![img](https://cdn.discordapp.com/attachments/947060629066354689/999319460601139210/unknown.png)
</br>This is all we have to bother about, that said copy the code and paste in your new terminal.</br>

![step 3](https://cdn.discordapp.com/attachments/947060629066354689/999319127887970395/unknown.png)
</br>and now lets `continue to console` </br>

![img](https://cdn.discordapp.com/attachments/947060629066354689/999320341497262120/unknown.png) ![img](https://cdn.discordapp.com/attachments/947060629066354689/999320549467635722/unknown.png)

</br>Create a new file in the `src` folder of `amazon-clone`, I am going to name it `firebase.js` and paste the copied code.

`npm i react-router-dom` in your terminal, to use paths and routes.
`npm install react-currency-format --save --force`

### Styling Icons

`react-icons.github.io/react-icons/search?q=shop` copy the code `npm install react-icons ` and paste it into your terminal to install react-icons in your workplace. Search for `icon` and copy and paste the npm code into your terminal `import { icon_name } from "react-icons/fa";`

### Deploy App

Before you dig into this, I highly suggest you to at least build your front-end
As mentioned above, we are going to use firebase to ease things out for us. Login in to your firebase account from your terminal using the command `firebase login`. After you've logged in, continue in your terminal with `firebase init`
</br> -> Hosting </br>
-> Use an existing project </br>
-> clone </br>
-> use as your public directory? : build </br>
run `npm run build` on your terminal, creates a build directory with a production build of your app, and your app should be ready to be deployed. To deploy your app, run `firebase deploy`, click on the deployed link and just like that click on all the "okays" BOOM! thats your `Hosting URL` share it with your friends and enjoy.
