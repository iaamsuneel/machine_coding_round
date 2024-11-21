// Lifecycle of React Class Components
//Class components use lifecycle methods to manage the different phases of a component's life.
//Lifecycle Phases

// 1. Mounting (Component is created and added to the DOM):
/* constructor(): Initializes the component's state and binds methods.
static getDerivedStateFromProps(props, state): 
Updates the state based on props before rendering.
render(): Renders the component's JSX.
componentDidMount(): Executes after the component is mounted to the DOM.
 Ideal for API calls or DOM manipulation. */

// 2. Updating (Component is re-rendered due to state/props changes):
/* static getDerivedStateFromProps(props, state): Updates state before rendering.
shouldComponentUpdate(nextProps, nextState):
 Optimizes performance by deciding if the component should re-render.
// render(): Updates the UI.
// getSnapshotBeforeUpdate(prevProps, prevState):
 Captures information (e.g., scroll position) before the DOM updates.
componentDidUpdate(prevProps, prevState, snapshot): Executes after the update to handle side effects. */

// 3. Unmounting (Component is removed from the DOM):

// 4. componentWillUnmount(): Cleanup tasks (e.g., clearing timers, canceling network requests).
/* Error Handling:
componentDidCatch(error, info):
 Catches errors during rendering or in child components. */

 

 // Lifecycle of React Functional Components
/* Functional components on React Hooks to manage lifecycle phases.
 Unlike class components,
 they don’t have explicit lifecycle methods
  but achieve the same functionality with hooks. */

// Key Hooks for Lifecycle Management
/* 1. Mounting:
useEffect(() => {...}, []): Executes after the component mounts. 
Used for side effects like API calls or subscriptions. */

/* 2. Updating:
useEffect(() => {...}, [dependencies]): Executes when dependencies change. 
Used to respond to state or prop changes. */

/* 3. Unmounting:
useEffect(() => {... return () => {...} }, []): The return function runs during cleanup. */

/* 4. Error Handling:
Functional components don’t have direct error-handling lifecycles.
 You can wrap components with Error Boundaries (class components). */



 //Which lifecycle hooks in class component are replaced with useEffect in functional components ?
 // 1. componentDidMount(): equivalent to useEffect with empty array. 
/* useEffect(()=>{
console.log("Called on initial mount only once") },[])
//  2. componentDidUpdate(): equivalent to useEffect with array of
dependencies
useEffect(()=>{
console.log("Called on every dependency update") },[props.isFeature,props.content])
This will be called whenever dependency value changes (here Eg: isFeature or
content).
// 3. componentDidUnmount(): equivalent to useEffect with return statement.
useEffect(()=>{
return ()=>{
console.log("Any cleanup activities/unsubscribing etc
} }) */




                                    //Comparison Table

/* Feature	            Class Component	               Functional Component (Hooks)
Initialization      	constructor()	                    useState
Mounting	        componentDidMount()	                    useEffect(() => {...}, [])
Updating	       componentDidUpdate()	             useEffect(() => {...}, [dependencies])
Unmounting	      componentWillUnmount()	         useEffect(() => {... return () => {...}}, [])
Error Handling	   componentDidCatch()	                Error boundaries in parent class components
Performance Optimization  	shouldComponentUpdate()      	React.memo() for props comparison
Ease of Use	Complex, requires understanding lifecycle methods	  Simpler, with a single useEffect hook
State Management      	Managed in state object                     	Managed via useState */
