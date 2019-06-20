---
title: Understanding Hooks ↩
description: My process of learning of React Hooks and how to 'type' them using Typescript
path: /understanding-hooks
template: article
tags: 'reactjs, hooks, typescript, javascript'
---
After spending a few weeks working with and learning React Hooks, I wanted to collate it all into a quick cheatsheet for myself, I hope you can find some value in it.

## Insights

* Can refactor all class components to function components
  * Ended up with lower filesizes of >15%
* Simpler lifecycle methods
* Everything is so much nicer now

## Hooks

### useState 

* replaces all state functions
* type should easily be inferred based on initial value but still worth setting

```js
const [age, setAge] = useState<number>(28)

return (
<Fragment>
	<p>I am {age} Years of Age</p>
	<button onClick={() => setAge(age + 1)}>Get older! </button>
</Fragment>
);
```

### useEffect

* combines `componentDidMount` and `componentWillUnmount` and`componetnDidUpdate`
* no types needed

```js
useEffect(() => {
	// do something on mount
	return () => {
		// do something on unmount (cleanup)
  	};
}, []); //listen for change to x in [array] then trigger (update), empty for only mount / unmount
```

### useRef

* usually used for referencing dom nodes
  * `null` can be used as the initial value and a generic html can be used for the ref type
* Replaces `createRef`
* Can also be used as a replacement for instance properties on classes
  * Type should be inferred

```js
const MyInput = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	return <input ref={inputRef} />
}
```


### useMemo / useCallback

* shorthand for memoising functions
	* types inferred
	* make sure to specify the types of the parameters of the callback for useCallback, otherwise they will be set to `any`

```js
const value = 10;
// inferred as number
const result = useMemo(() => value * 2, [value]);

const multiplier = 2;
// inferred as (value: number) => number
const multiply = useCallback((value: number) => value * multiplier, [multiplier]);
```

### useReducer

* Exactly like a redux router
  * Typed in the same way 

```js
interface State {
	value: number;
}

type Action =
	| { type: 'increment' }
	| { type: 'decrement' }
	| { type: 'incrementAmount'; amount: number };

const counterReducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'increment':
			return { value: state.value + 1 };
		case 'decrement':
			return { value: state.value - 1 };
		case 'incrementAmount':
			return { value: state.value + action.amount };
		default:
			throw new Error();
	}
};

const [state, dispatch] = useReducer(counterReducer, { value: 0 });

dispatch({ type: 'increment' });
dispatch({ type: 'decrement' });
dispatch({ type: 'incrementAmount', amount: 10 });

// TypeScript compilation error
dispatch({ type: 'invalidActionType' });
```

### useContext

* infer its types based on the context object that is passed in

```js
const ThemeContext = React.createContext('light');

const Display = () => {
	const theme = useContext(ThemeContext);
	return <div
		style={{
		background: theme === 'dark' ? 'black' : 'papayawhip',
		color: theme === 'dark' ? 'white' : 'palevioletred',
		width: '100%',
		minHeight: '200px'
		}}
	>
		{'The theme here is ' + theme}
	</div>
}
```

### useDebugValue

* used for displaying values in React Developer Tools
* type is inferred

```js
const date = new Date();
useDebugValue(date, date => date.toISOString());
```

## Resources

* [A great cheatsheet with live editable examples](https://react-hooks-cheatsheet.surge.sh/)
* [Straightforward egghead course by Elijah Manor](https://egghead.io/courses/reusable-state-and-effects-with-react-hooks)
* [How to 'type' React Hooks](https://medium.com/@jrwebdev/react-hooks-in-typescript-88fce7001d0d)
