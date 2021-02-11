---
id: tutorial
title: Tutorial
sidebar_label: Tutorial
slug: /tutorial
---

## Overview

In this tutorial, we will test a simple web application using SICOPE Model: http://react-compare-app.surge.sh/

![fruits-store](/img/docs/tutorial/fruits-store.png)

This application is very simple. It has these features:
* Add product
* Remove product
* Open cart
* Close cart

## Model

To test this application, we need to create models. There are 2 ways to create models:

* Models > Build
* Models > Import

We exported the model for you so you don't have to build it from scratch. All you need to do is download it
[here](/json/fruits-store.json) and import it.

For this web application, one model is enough:

* Label: `Fruits Store`
* Tags: `fruits`, `store`

## Places

This web application only have one page, so we can create one place called `Home`

### Home

To verify that we actually in home page, we can add a command to verify an element in it:

| Command | Target      | Value     |
| -------- | --------- | ---------- |
| Assert Element Present  | css=.ProductList | `null` |

![home-place](/img/docs/tutorial/home-place.png)

Everytime our model reach `Home` place, it run this command to verify that we are actually in `Home` web page.

## Transitions

We can define transitions as big or small as you like. In this case, we define transitions based on features this web
application have:

* Add
* Remove
* Close Cart
* Open Cart

We also need one starting transition to tell this tool to go to homepage once at the beginning of the testing process:

* Go To Home

Usually those transitions are enough. But since we also want to choose random quantity to add, choose random product to
add/remove to/from cart, we need at least 3 more transitions:

* Random Remove Product
* Random Add Product
* Random Quantity

### Go To Home

![go-to-home-transition](/img/docs/tutorial/go-to-home-transition.png)

The starting transition is quite big because it need to do several things:

* Go to home page
* Store values to some variables
    * added: 4
    * cart: closed
    * addProduct: `null`
    * removeProduct: `null`
    * quantity: `null`

To do that, we need these commands:

| Command        |      Target      |   Value |
| ------------- | :-----------: | -----: |
| Open      | https://renaudtertrais.github.io/fruits-store/ | `null` |
| Store      |   4    |   added |
| Store |   closed    |    cart |
| Store |   `null`    |    removeProduct |
| Store |   `null`    |    quantity |
| Store |   `null`    |    addProduct |

There is no restriction to apply this transition, so the guard has value `true`.

Each transition must come from at least 1 place to at least 1 place. There is one exception in this case: it is a
starting transition, so it does not come from any place. There is only and only one starting transition in a model.

Unlike starting transition, all transitions below come from transition `Home` to transition `Home`.

### Add

![add-transition](/img/docs/tutorial/add-transition.png)

This transition does several things:

* Type quantity into the `quantity` text box
* Click `Add to cart`
* Assert that the button `Add to cart` is not present
* Execute script to increase `added` number
* Clear the variable `addProduct` (set to `null`)

To do that, we need these commands:

| Command        |      Target      |   Value |
| ------------- | :-----------: | -----: |
| Type      | xpath=//div[@class='ProductListItem__name' and text()='${addProduct}']/..//input | ${quantity} |
| Click      |   xpath=//div[@class='ProductListItem__name' and text()='${addProduct}']/..//button    |   `null` |
| Assert Element Not Preset |   xpath=//div[@class='ProductListItem__name' and text()='${addProduct}']/..//button[contains(@class, 'ProductListItem__add-to-cart-button')]    |    `null` |
| Execute Script |   return ${added} + 1    |    added |
| Store |   `null`    |    addProduct |

The condition to apply this transition is `added < 8 && addProduct !== null && quantity !== null`, meaning:

* We have at least 1 product remaining to add
* We chose random product to add
* We chose random quantity

### Remove

![remove-transition](/img/docs/tutorial/remove-transition.png)

This transition does several things:

* Click `Remove product` button
* Assert that the button `Remove product` is not present
* Execute script to decrease `added` number
* Clear the variable `removeProduct` (set to `null`)

To do that, we need these commands:

| Command        |      Target      |   Value |
| ------------- | :-----------: | -----: |
| Click      |   xpath=//div[@class='CartItem__name' and text()='${removeProduct}']/..//button    |   `null` |
| Assert Element Not Preset |   xpath=//div[@class='CartItem__name' and text()='${removeProduct}']/..//button[contains(@class, 'CartItem__remove-button')]    |    `null` |
| Execute Script |   return ${added} - 1    |    added |
| Store |   `null`    |    removeProduct |

The condition to apply this transition is `added > 0 && cart === 'open' && removeProduct !== null`, meaning:

* We added at least 1 product to the cart
* We chose random product to remove
* Cart is open

### Open Cart

![open-cart-transition](/img/docs/tutorial/open-cart-transition.png)

This transition does several things:

* Click on `cart` button
* Set value `open` to variable `cart`

To do that, we need these commands:

| Command        |      Target      |   Value |
| ------------- | :-----------: | -----: |
| Click      |   css=.App__cart-button    |   `null` |
| Store |   open    |    cart |

The condition to apply this transition is `cart === 'closed'`, meaning:

* Cart must be closed to be open

### Close Cart

![close-cart-transition](/img/docs/tutorial/close-cart-transition.png)

This transition does several things:

* Click on `cart` button, but only if the button have `active` class, meaning the cart is open
* Set value `closed` to variable `cart`

To do that, we need these commands:

| Command        |      Target      |   Value |
| ------------- | :-----------: | -----: |
| Click      |   css=.App__cart-button.active    |   `null` |
| Store |   closed    |    cart |

The condition to apply this transition is `cart === 'open'`, meaning:

* Cart must be open to be closed

### Random Remove Product

![random-remove-product-transition](/img/docs/tutorial/random-remove-product-transition.png)

This transition choose a random added product, then set its name to variable `removeProduct`.

To do that, we need these commands:

| Command        |      Target      |   Value |
| ------------- | :-----------: | -----: |
| Execute Script |   var elements = document.querySelectorAll('.CartItem__remove-button'); var element = elements[Math.floor(Math.random() * elements.length)]; return element.parentElement.querySelector('.CartItem__name').textContent;    |    removeProduct |

The condition is `added > 0 && cart === 'open'`, meaning:

* The cart is open
* At least 1 product is added to cart

### Random Add Product

![random-add-product-transition](/img/docs/tutorial/random-add-product-transition.png)

This transition choose a random product not added to cart, then set its name to variable `addProduct`.

To do that, we need these commands:

| Command        |      Target      |   Value |
| ------------- | :-----------: | -----: |
| Execute Script |   var elements = document.querySelectorAll('.ProductListItem__add-to-cart'); var element = elements[Math.floor(Math.random() * elements.length)]; return element.parentElement.querySelector('.ProductListItem__name').textContent;    |    addProduct |

The condition is `added < 8`, meaning:

* At least 1 product is not added to cart

### Random Quantity

![random-quantity-transition](/img/docs/tutorial/random-quantity-transition.png)

This transition choose a random number from 0 to 10.

To do that, we need these commands:

| Command        |      Target      |   Value |
| ------------- | :-----------: | -----: |
| Execute Script |   return Math.floor(Math.random() * 10);    |    quantity |

## Task

Now, in order to test, we need to create a task and run it. Go to Tasks > Add New:

![task](/img/docs/tutorial/task.png)

After creating a task, you will be redirected to tasks list page. Simply click on `Run` action to run it.

![tasks](/img/docs/tutorial/tasks.png)

## Bug

You can encounter a bug when you run the task for several times.

At first, the bug's steps can be very long like this:

![bug](/img/docs/tutorial/bug.png)

But you can run `Reduce` action to make it shorter after several tries.

![reduced](/img/docs/tutorial/reduced.png)

Now it's time to take a look at the bug. The message is:

> Unexpected element "xpath=//div[@class='ProductListItem__name' and text()='Ananas']/..//button[contains(@class, 'ProductListItem__add-to-cart-button')]" was found in page

It means when we set quantity to `0`, the `Add to cart` button does not work as expected.

You can choose to send this bug via these channels when creating the task:

* Email
* Slack

## Summarize

That's it, we tested the `Fruits Store` web application and found a bug using SICOPE Model tool.
