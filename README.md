# Flexpoint

A React library for making grid layouts with flexbox in 9kb (min+gzip). Choose **when to change your layout depending on your content** instead of the _device_ you want to show as recommended by [Google's RWD](https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/how-to-choose-breakpoints), by [Smashing Magazine's Logical Breakpoints](https://www.smashingmagazine.com/2013/03/logical-breakpoints-responsive-design/) and me ☺

## Getting started

Include it to use in any of your projects:

```
https://cdn.jsdelivr.net/flexpoint/2/flexpoint.css
```

To use with React, you can import the main component Flex and then put the class names as props:

```js
// npm i flexpoint
import Flex from "flexpoint";

// Three columns by default, and from +1200px screens render six columns
export default () => (
  <Flex three six-600>
    <div>Hello</div>
    <Flex hide flex-600>Large screen</Flex>
    <Flex hide-600>Small screens</Flex>
    <div>World</div>

    <Flex full half-600>
      I span all the screen on mobile but only half on desktop
    </Flex>
  </Flex>
);
```

## Documentation

No documentation right now, I'm testing it out and then we'll see 😃

## License

MIT License (see LICENSE)

## Author

[Francisco Presencia](http://francisco.io/). You can also [hire me](http://francisco.io/resume.pdf) to make awesome projects with you :)
