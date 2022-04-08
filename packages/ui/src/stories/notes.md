### Component Checklist

**The component has;**

- [x] been built
- [x] no inline styles\*
- [x] suitable class names on child elements
- [x] aria attributes where suitable
- [x] tailwind utility where ever possible\*\*
- [x] stories demonstrating use cases, complete with knobs
- [x] has unit tests, testing all slots, props, emitted events, methods and computed values
- [ ] is passing accessibility tests using storybook

  > Failing. raised in https://xedigital.atlassian.net/browse/RWA-486

> \* Some exceptions, like dynamic width and background image

> \*\* Some exceptions, if the desired outcome is really not achievable with tailwind

### Design Notes

- [ ] The "Press" states on each of the buttons isn't really achievable since, when the mouse up occurs,
      the state reverts to the focus / hover state
- [ ] The focus state on primary is barely noticeable
