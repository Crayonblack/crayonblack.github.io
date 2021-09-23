# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Maintain the state of the score after refreshing the browser
- Play Rock, Paper, Scissors, Lizard, Spock against the computer

### Links

- Live Site URL: [Add live site URL here](https://crayonblack.github.io)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS BEM
- SASS
- Flexbox
- Javascript
- Anime.js

### What I learned

It was my first time bulding a game and also building an entire solution using vanilla js. It was also my first time using the Anime.js library for animations.
I learned a lot in terms of element selection, passing and modifying arrays and also using local storage.

By using the CSS BEM(Body__element--modifier) naming scheme with my SASS I was able to make the structure more readable and concise by not requiring repetition of the parent class name:

```css
.home
    .home__about
	.home__about--charlie
```

to

```css
.home
    &__about
	&--charlie
```

I also relied heavily on SASS @extend in order to not replicate the item that was selected, by extending it we inherit all the base styles of the element allowing us to keep the single instance where the style of the item is created.

To see how you can add code snippets, see below:

```html
<div class="arena__circle arena__circle--rock" data-title="rock">
    <div class="arena__circle__image">
        <img src="images/icon-rock.svg" alt="Choose to ROCK around the clock">
    </div>
</div>
```
```css
&__circle
    @extend .arena__circle
        top: 120px
        left: 150px
	....
	....
        &--rock
            @extend .arena__circle--rock
            @extend .arena__circle--rock:hover
        &--paper
            @extend .arena__circle--paper
            @extend .arena__circle--paper:hover	
```
```js
function showDown(){
    let _weapons = document.querySelectorAll(".arena__circle");
    let _choice = [];

    _weapons.forEach(function(_chosenWeapon) {
        let _player = _chosenWeapon.dataset.title
        _choice.push(_player)
        _chosenWeapon.addEventListener("click", function(){
            let _computer = _choice[Math.floor(Math.random()*_choice.length)];
            enterShowdown("player--" + _player + " " + "computer--" + _computer)
        });
    });
}
```

### Continued development

A person can never have enough understanding and experience in regards to your craft, I will continue to learn more about Javascript and CSS/SASS throughout my career.
But I feel now is the time for me to tackle learning Angular & Vue.

### Useful resources

- (https://animejs.com/) - This helped me with using Anime.js

## Author

- Author - Craig du Toit
- Instagram - [@craigdutoitza](https://www.instagram.com/craigdutoitza/)
