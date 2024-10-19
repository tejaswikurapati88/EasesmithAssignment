# Building the UI for an E-commerce Listing Page

In this project I am building the E-commerce website by following [Figma design]([https://github.com/facebook/create-react-app](https://www.figma.com/design/AvK9THieFnvEKfIIupCr2p/Untitled?node-id=1-2014&node-type=instance&t=5hOdB3S18g6jTOhl-0)).

I build this website with skills by creating an app that will display all products in a desktop layout by following cleancode guidlines and creating appropriate components, displaying  data, using **routing** concepts, **Navigation**, and **Adding functionalities** and adding responsiveness to the website.

### Prerequisites

#### Design Files

<details>
<summary>Click to view</summary>

- You can check the **Design Files** for different devices <a href="https://www.figma.com/file/5DK9nvTWZ4W0ytHtDrDe56/Tasty_Kitchens" target="_blank">here</a>.

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Dependencies Needed

<details>
<summary>Click to view</summary>

- react-router-dom
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>

The app must have the following functionalities


- Users should be able to navigate to Home, Cart routes using links in Navbar.
- Header Section:
   - A search bar for searching products.
   - Icons for profile and cart.
   - Users should be able to navigate to Home route when clicking on **Chaperone** logo.
- Product List Section:
  - Display a grid/list of products based on the Figma design.
  - Each product card should include:
    - Product Image
    - Product Name
    - Price
    - "View Product" and "Add to Cart" buttons.
    - Clicking "View Product" should redirect the user to a custom
"Thank You" page. There will be no product details page, so you
are required to design a Thank You page from scratch.
- Home Route
  - Users should be able to see the sort by icon as shown in the Figma.
  - Filters :
    - Type of Plants
    - Price
    - Nursery
    - Ideal Plants Location
    - Indoor/ Outdoor
    - Maintenence
    - Plant Size
    - Water Schedule
    - Color
    - SeasonalLight Efficient
  - Users should be able to see the footer as shown in Figma.
  - Users should be able to see Home with highlighted text in Navbar.
- Cart Route
  - Clicking “Add to Cart” on any product should open a modal that
displays the product’s details and an option to confirm adding the
product to the cart.
  - The modal design is included in the Figma file and should be
closely followed.
- Pagination:
  - Implement pagination to navigate through multiple product
listings (functional but mock data is acceptable).
- Thank You Page:
  - Create a simple "Thank You" page to which users are redirected
after clicking "View Product". This page should acknowledge their
action with a simple message (e.g., "Thank you for your interest in
[Product Name]!").
- When the users enter invalid route in the URL then the Page not found Route should be displayed.

</details>

