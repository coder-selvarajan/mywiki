---
id: basics
title: App Development - Basics
sidebar_label: Basics
---

## Workflow Steps

- **Why** we need an app?
- What is our **app idea**?
- Design
- Developemnt
- Test
- Publish on App Store 
- Market
- Update

#### Image resolution

**1x** - One square in a pixel
**2x** - Four squares in a pixel
**3x** - Nine squares in a pixel

For example.. If you are creating an image create in these sizes.. 
- 300px by 300px
- 200px by 200px
- 100px by 100px

**http://appicon.co** can be used to create 1x, 2x, 3x images
- The downloaded zip contains `AppIcon.appiconset` folder with images.. we just need to copy this folder under `Assets.xcassets` folder in the project.

---

## Troubleshooting - App run

Here are few things to be concidered while running the app in physical device. 

#### Check Xcode and iOS versions

The Xcode version should match with appropriate iOS version. 

- Xcode 11.0 = iOS 13.0
- Xcode 11.1 = iOS 13.1

#### Add apple developer account

It can be a free apple account. To add you account just goto Xcode Preferences > Accounts tab > Add your apple id. 

#### Sign the app

Under Project Properties > Under TARGETS > Singing & Capabilities Tab > Signing section: 
- Enable 'Automatically manage signing'
- Select appropriate Team. If you dont find team then add your apple id in xcode-preferences-accounts section

#### Connect your physical device

Once you connected, a popup appears.. just click 'Trust' 

#### Run the app

Select your device as target and run the app.

Steps to run the in physical device via wifi connection:  
- First time you need to run the app in your iphone via the usb cable connection.
- With the cable connected goto Window > Devices and Simulators.. you should see your iphone with the status as connected 
- Tick the 'Connect via network' checkbox on the right side. Also make sure your phone and mac are connected to the same wifi connection.

> If your are running github open source project on your physical device then you have to go to Signing & Capabilities > change Team to your team and the bundle identifier as unique like `in.selvarajan.projectname`.

### Useful links

- [Open source ios apps](https://github.com/dkhamsing/open-source-ios-apps)
- [21 amzing open source ios apps](https://medium.mybridge.co/21-amazing-open-source-ios-apps-written-in-swift-5e835afee98e)

#### Image-view content mode

![Image view mode](assets/image-view-mode.png)

--- 

#### Tips

If there is an issue like outlet name missmatch and so.. then you can verify that with below approach 
- Right click on Storyboard > Open as > Source code  and check the errored outlet naem.. 

If you want to rename an outlet name, the better way is:  
- Control + Right click on the outlet name, choose Refactor > rename then wait for a while until the window appears with all the references.. then you make the change in the name and click the `Rename` button


**Image Literal:**  
While assigning an image to imageview you can simply type Image Literal after the '=' sign and enter.. now there will be an image in the place.. when you click on that you will get to see all the available images.. pretty amzing is it? 

**Naming Conventions:**  
- camelCase
- kebab-case
- snake_case

**Coding Challenge Site:**  
- http://repl.it 

**Random:**  
var rnd = Int.random(in: 1...10)

### Auto-Layouting

**Superview Vs Safe Area:**  
Safe area - is the area that is excluding top bar and the bottom notch.
Superview - is the primary view that contains status bar and safe area. 

#### Container

To make the ui elements look good in both landscape and portrait modes
- Divide the screen by few(for ex.. 3) sections
- Place ui-views in those sections
- Place elements under appropriate view-containers
    - Method 1: Place view component, drag & drop elements into those views
    - Method 2: Select the elements goto Editor > Embed in > View 
    - Method 3: There is an icon nearby constraints icon. click on that and select view

    
#### Stack view

- We can align elements horizontaly or vertically by using stack views
- and we can distribute equal width and height for the elements with stack view attributes
- then we set the contraints for the stack views not the elements.. 

