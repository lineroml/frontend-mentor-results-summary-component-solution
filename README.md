# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Links

- Solution URL: [Solution FM](https://www.frontendmentor.io/solutions/frontend-mentor---results-summary-component-solution-h7ACZnKVsx)
- Live Site URL: [Solution GH Pages](https://lineroml.github.io/frontend-mentor-results-summary-component-solution/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-friendly responsive layout (media query breakpoint at 670px)
- Relative color syntax (`hsl(from ... / 5%)`) for tinted backgrounds
- Vanilla JavaScript (`fetch`) to load the scores from `data.json`
- [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) via Google Fonts

### What I learned

- Using CSS custom properties to keep the color palette and font settings in one place.
- Deriving tinted background colors from a single base color with CSS relative color syntax, so each category only needs one color variable:

```css
.results__summary-item[data-category='reaction'] {
  background-color: hsl(from var(--color-primary-light-red) h s l / 5%);
  color: var(--color-primary-light-red);
}
```

- Using `data-category` attributes to style each summary row without extra classes.
- Switching from a two-column card to a stacked layout on small screens with a single media query.
- Loading local JSON with `fetch` and filling in the page: each category score is matched to its row through `data-category`, and the total is the rounded average of all scores.
- Debugging with the browser console: a `const` that was reassigned (`TypeError: Assignment to constant variable`) stopped the script halfway, and switching to `let` fixed it. Adding `defer` to the script tag makes it run after the HTML is parsed.
- `fetch` doesn't work from a double-clicked `file://` page, so the project needs a local server (e.g. VS Code Live Server).

### Continued development

- Update the result label ("Great") and the "higher than X% of people" text from the data too, since they are still hardcoded.
- Practice more with accessible, keyboard-friendly interactive states.

## Author

- GitHub - [@lineroml](https://github.com/lineroml)
- Frontend Mentor - [@lineroml](https://www.frontendmentor.io/profile/lineroml)
