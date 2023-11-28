export default function generateClassName(styles, propClassMap) {
  return Object.keys(propClassMap)
    .filter(prop => propClassMap[prop])
    .map(prop => styles[prop])
    .join(' ');
}


/* generateClassName function takes the styles object and a mapping of prop names to their corresponding conditions.
It filters out the props with true values and then maps them to their corresponding class names from the styles object. 
Finally, it joins them into a single string.

Adjust the propClassMap object according to your component's props and conditions. 
This way, you can easily handle multiple props for generating the class name dynamically. */