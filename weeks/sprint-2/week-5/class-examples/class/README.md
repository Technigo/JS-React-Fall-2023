npm create vite@latest

# What is useState ?

useState is a hook in React that allows you to add state management to functional components. When you call the useState function, it returns a pair: the current state value and a function to update that value. This is why we often use array destructuring to get both values. In essence, useState provides a mechanism to store and update local component state in functional components, ensuring that the component always reflects the most recent state in its render output.

### Analogy

Alright! Imagine you have a toy box. Sometimes you want to take a toy out, play with it, and sometimes you want to put a new toy in. But you always want to know which toy is currently in the box.

In React, the useState hook is like that toy box. It lets you keep a piece of information (like which toy is in the box) and change it when you want to. So, whenever you want to know or change what's inside, you use useState!

# Why

Local State Management: Not every piece of state needs to be global or managed by complex state management libraries. useState provides a simple way to manage local state within a component.

Reactivity: When the state managed by useState changes, the component will re-render, ensuring the UI is always up-to-date with the latest state.

# How do we use useState?

const [count, setCount] = useState(0);

Here's a breakdown:

- count: This is the current state value. In our example, it represents the current count. Initially, it's set to 0 because that's the value we passed to useState.

- setCount: This is a function that allows you to update the count value. When you call this function, React will re-render the component with the new state.

How It Works:

1.  Initialization:
    The first time our component renders, useState(0) is called.
    React sets up memory for our state and initializes it with the value we passed, which is 0 in this case.
    The count variable will now hold the value 0.

2.  Updating State
    When you want to update the state, you use the setCount function.
    For instance, in our increment function.Here, setCount is called with the new value(count + 1).
    React then schedules a re - render of our component.On this subsequent render, the count variable will have the updated value.

3.  Re - rendering
    Every time the state changes (i.e., every time you call setCount), React will re-render the component to reflect the new state.
    However, it's important to note that React batches these updates to optimize performance. So, if you have multiple state updates, React might batch them together and update the UI in a single render pass.

4.  Persistence Across Renders
    One of the key features of useState (and state in general) is that it persists across renders.
    Even though our functional component runs from top to bottom on every render, the state value (count in our case) remains consistent across renders until we decide to change it with setCount.
