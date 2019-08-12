# JSConf 2019 - Re-Architecture Item Transaction Page and Sleep Well.

## Todo
- [] Images to explain webview architecture
- [] Big Text with animated background component (refer to Joshua's example).
- [] Create dynamic illustration for four dimentional logic.
- [] Create image of sample <--- ko if: condition > code
- [] Create No image with big red cross
- [] Put a Pie chart (Transactions cover shipping methods cover buyer & seller and both have progress states)
- [] Get a screenshot for transaction page (with shipping progress inside)
- [] Table for comparing display logic and business logic
- 
## Greeting
Hello everyone, my name is Paipo.

## Brief Introduction on myself

I'm right now working in Japan as a frontend engineer.
This is the company I'm working at, which is called Mercari.

## Brief Introduction on Mercari

Mercari is a C2C MarketPlace App which allows users to enjoy buying and selling.

Our core values is to create an easy-to-use online environment where everyone can create values by buying or selling. 

## Every marketplace app has a common problem

(Show Big Text with animated background)
"How to handle Transaction Page"

## Why this page is so critical?

- Essence of a marketplace App (Buy & Sell)
- Directly affect the convertion to GMV $$$
- A lot of business logic involved

## What makes heavy business logic?
(Illustrate with graph)
- Buyer & Seller
- Different types of transaction (clothes, smartphone, furniture, car)
- Different Delivery Methods
- Transaction Progress (Payment -> Delivery -> ? -> Review -> Finish)

(Depending on different transaction, delivery method, transaction progress, buyer or seller, we display different UI to the user)
(Show Matrix for possible state combination)
- Buyer X Clothes X Rakuraku Shipping X Wait For Payment State
- Seller X Car X Third-Party Shipping company X Wait For Shipping State

-> Four Dimentional Logic

With all above being said, even worse thing came after:

(Show Big Text with animated background)
"Let's do Re-Architecture"

## Mercari Webview Architecture
- (img: Put a images here)
- Explain how we do routing between new and old codebase here

## Re-Architecture - Target
- Turn spaghetti code into more maintainable, readable, and less WTF code.
  (Use emoji or GIF or whatever)
- Good Test coverage.
- Better UI/UX with design system in mind.

## Start from Scratch or Migrate Page by Page
(Mention about I've worked with two different ways in different company)
- Start from Scratch
  Pros:
    - Easy to re-design UI/UX
    - Less complexity in terms of interation.
  Cons:
    - Higher Risk
    - Take way longer time to verify the result
- Migrate Page by Page
  Pros:
    - Small Change at a time, faster iteration
    - Much less risks.
  Cons:
    - Have to struggle with legacy code.
    - No Big Change with design for consistency.
    - Have to maintain two versions at the same time.

## Considering it's Transaction Page
We go for Migrate Page by Page!

## Analyze problems for current codebase
(Cuz we don't want to make the same mistakes again)
- Background
  - Knockpout.js + jQuery + HTML/CSS
- A huge file with all business logic
  - (img: Show lines of code screen shot)
- Mix business logic and display logic in an imperative way
  - (img: show sample ko if: html code)
- Hard to maintain (trace) the code
  - Bad encapsulation (show many Hows in the code instead what or why)
  - Magic numbers, literal strings are scattered everywhere
  
(Show Big Text with animated background)
"Start Migrating!"
## Find the divisible unit
- In order to migrate page by page, we need to find the divisible atomic unit first, and it should make sense from business and technical perspectives.

(Show Previous Four dimensional business logic graph again)
- (Illustrate with graph)
  - Buyer & Seller ? -> No (Image with big red cross) 
    - The scope would be too huge
    - Hard to achieve open for extension and close for modification
    - (We can't avoid to modifying existing code)
    - Hard to cowork as team (easy to conflict with each other, modify the same piece of code)
    - Match with code splitting (More on this later)
  
  - Transaction Progress -> No (Image with big red cross)
    - It's just a certain state of the transaction journey, cannot be seen as a whole
    - It cannot exist without a transaction

- Step back and think about our target first
### Target
  - Can be released as independent business case
  - Easy to co-work as team
  - Easy to add/remove

## Divisible Unit
  - Transaction Type & Delivery Method Structure
    - Can be added/removed independently
    - Go through one complete user journey
    - Don't affect each other (Can be managed independently)


(Show Big Text with animated background)
"How to handle those logic🤔?"
After finding the divisible unit and deciding the main structure, how to handle the logic in a easy-to-maintain, without making another plate of spaghetti?

## Display Logic v.s Buiness Logic
(img: create a comparing tables)
### Display logic
  - Different Data will show something different
  - Decide **When** to show **What** (under current combination of state, what should we display to the user)
  - Timing: Show the current transaction page based on the transaction data.
  -  More Declarative.
### Business logic
  - Describe a step by step flow in order to accomplish a user scenario
  - Timing: When the user tries to interact with the app, either make a payment, publish qrcode, or ship a item, anything
  - More imperative.

> Separate display logic from business logic,
>   Separate declarative code from imperative code.


(Show Big Text with animated background)
"Different layers"

## Flow chart to go through display logic

## Flow chart to go through business logic

## Component Layer

## Error handling

## Testing Strategies
- Unit Test -> Storyshot, enzyme to test display logic
- Sagas Test -> to test business logic
- Cypress Test -> to test whole user flow (whole story) -> story as a cypress spec

## Challenges
- Adding new features and Doing Re-Architecture at the same time
- Supported Platforms, Accessibilities
  (As a leading second-handed marketplace app, we have to support wide range of platforms) -> we don't want to lose any market shares
- Performance Issues -> Especially transaction page -> better code splitting and setting performance budget
  
## Current Result
- 60% of item transaction page is migrated to new codebase.

## Roadmap
- Move to Web
  - How putting business logic in sagas can help, how different layers of logic can help.
- Apply Design System
  - How Different unit of view component can help

## Conclusions
  - Architecture is about different layers, make reasonable decisions to separate layers can make your codebase easier to maintain and test.
  - It's quite challenging to add new feature and do re-architecture at the same time, so better do one thing at a time.
  - Don't make your spaghetti code another spaghetti with newly-added flavors.
  