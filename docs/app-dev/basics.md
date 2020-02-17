---
id: basics
title: App Development - Basics
sidebar_label: Basics - Angela
---

Content is created based on Angela Yu's Udemy course.

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

- Right click on Storyboard > Open as > Source code and check the errored outlet naem..

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

### Google, Stackoverflow

Five step process in fixing any functionality/Issues

- Google
- StackOverflow
- Implementation
- Apple Docs
- Customization

> Hold on 'Option' key and mouse over & click the classes/objects in the code, Xcode will show the object information in a nice snippet

#### How to link one function to many ui-elements?

First create IBAction from single ui element.. now the function has a grey circle in the front.. drag that to othe ui elements one by one.. now you got the function linked to all your ui elements..

**Array, Dictionary sample:**

```swift
// Array
let myArray = ["Frondend", "Backend", "Full stack"]

// Dictionary
let eggTimes = ["soft": 5, "medium": 7, "hard": 12]
var dict : [String : Int] = ["Josh": 10, "Sara": 15]

```

#### Timer Sample Code:

```swift
//Egg Timer sample
var timer = Timer()
@IBAction func something(_ sender: UIButton) {
    timer.invalidate()
    timer = Timer.scheduledTimer(timeInterval: 1.0, target:self, selector: #selector(updateTimer), userInfo:nil, repeats: true)
}

@objc func updateTimer() {
    if secondsPassed < totalTime {
        secondsPassed += 1
        progressBar.progress = Float(secondsPassed) / Float(totalTime)
        print(Float(secondsPassed) / Float(totalTime))
    } else {
        timer.invalidate()
        titleLabel.text = "DONE!"

        let url = Bundle.main.url(forResource: "alarm_sound", withExtension: "mp3")
        player = try! AVAudioPlayer(contentsOf: url!)
        player.play()
    }
}
```

#### Design inspiration

- Dribbble.com
- Behance.net
- Niice.co
- color.adob.com

### Array

Sample code for declaring two dimentioanl array..

```swift
    let questions = [
        ["5 + 4 is equel to 9", "True"],
        ["Earth is not round", "False"],
        ["India has 120+ crore population", "True"]
    ]
```

### Structure

Our own data type.. its a blueprint for our real objects..

```Swift

struct Town {
    let name = "Kulfiland",
    var citizens = ["Chinnu", "Kani"],
    var resources = ["Grains": 100, "Ore": 70, "Wool": 45]

    func fortify(){
        //increase defences!
    }
}

var myTown: Town()

print(myTown.name) //this prints 'Kulfiland'
myTown.fortify();

```

#### Initializers:

```swift
    init(name: string) {
        self.name = name
    }
```

> Here self.name represents the property declared in the struct

### Design Pattern

- MVC (Model View Controller)

With respect to the sample Q&A app the MVC might be

- Model
  - Question.swft
  - QuizBrain.swift
- View
  - MainStoryboard
- Controller
  - ViewController

#### Internal vs External Params:

```swift
// Internal param
func checkAnswer(userAnswer: string){
    print(userAnswer)
}
checkAnswer(userAnswer: userAns)


// External param
func checkAnswer(answer userAnswer: string){
    print(userAnswer)
}
checkAnswer(answer: userAns)


// No External param
func checkAnswer(_ userAnswer: string){
    print(userAnswer)
}
checkAnswer(userAns)
```

#### Struct Mutation

If a struct has a function that modifies one of struct's property then that method has to be named with `mutating`..

```swift
struct Town {
    let name: String
    var citizens: [String]
    var resources: [String, Int]

    init(name: string) {
        self.name = name
    }

    //this func changes the property so it has to be added with mutating keyword
    mutating func harvestRice() {
        resources["Rice"] = 100
    }
}
```

### Classes

**Struct:**

- struct MyStruct { }
- Immutable
- Passed by value
-

**Classes:**

- class MyClass: SuperClass { }
- Passed by reference
- Inheritance

> `Project Catalyst` is used to convert iOS project/app to MacOS app.

## Swift UI

When Swift UI is opened we can see two structs..

1. ContentView
2. ContentView_Preview - This creates the preview of content-view where we can modify preview device size etc..

> Hold on `option` key and click on properties, classes to see their info in a snippet

Recommended iphone simulators - iPhone SE, iPhone XR

Xcode - the `+` icon opens the library window where we can find the modifiers as well..
