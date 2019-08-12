# JSConf 2019 - Re-Architecture Item Transaction Page and Sleep Well.

## Todo
- [] Big Text with animated background component (refer to Joshua's example).
- [] Create dynamic illustration for four dimentional logic.
- [] Create image of sample <--- ko if: condition > code
- [] Create No image with big red cross
- [] Get a screenshot for transaction page (with shipping progress inside)

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

### Target
- Can be released as independent business case
- Easy to co-work as team
- Easy to add/remove

(Show Previous Four dimensional business logic graph again)
- (Illustrate with graph)
  - Buyer & Seller ? -> No (Image with big red cross) 
    - The scope would be too huge
    - Hard to achieve open for extension and close for modification
    - (We can't avoid to modifying existing code)
    - Hard to cowork as team (easy to conflict with each other, modify the same piece of code)
  - Transaction Progress -> No (Image with big red cross)
    - It's just a certain state of the transaction journey, cannot be seen as a whole
    - It cannot exist without a transaction
  - Transaction Type & Delivery Method Structure
    - Can be added/removed independently
    - Go through one complete user journey
    - Don't affect each other (Can be managed independently)

