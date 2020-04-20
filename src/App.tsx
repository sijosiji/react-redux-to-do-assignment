import * as React from 'react';
import { connect } from 'react-redux';
import { addItemToCart, removeItemFromCart } from './store/cart/actions';
import 'semantic-ui-css/semantic.min.css';
import { Grid} from 'semantic-ui-react';
import { RootState } from './store';
import EcommerceMainSection from './components/EcommerceMainSection';

// This is our props, but there are things in here right? So why can index.tsx use this App without providing them!?
// That's purely because redux is what is actually providing these items.
export interface IAppProps {
  addItemToCart: typeof addItemToCart,            // One of our defined actions.
  removeItemFromCart: typeof removeItemFromCart,  //Another one of our defined actions.
  userId: number,           //userId is a value we obtain from the store.
  selectedItems: number[]   //selectedItems is another value we obtain from the store.
}

export class App extends React.Component<IAppProps> {
  onClickAdd() {
    this.props.addItemToCart(5);
  }

  public render() {
    return (
      <Grid centered>
        <Grid.Row>
          <h1>TO DO ASSIGNMENT</h1>
        </Grid.Row>
        <Grid.Row>
          <EcommerceMainSection />
        </Grid.Row>
        <Grid.Row>
          <h3>
          User Cart has {this.props.selectedItems.length} items selected.</h3>
          </Grid.Row>
          <Grid.Row>
          <h3>Selected Books List by Book Id:</h3>
          </Grid.Row>
          <Grid.Row>
          {this.props.selectedItems.map(individualSelectedItem => (
            <div>{` Book Id: ${individualSelectedItem}  \n`}</div>
          ))}
          
        </Grid.Row>
      </Grid>
    );
  }
}

/**
 * Outside of the object are special methods that MUST be stated at the bottom of the components in order to hook up this component
 * to redux. These MUST be done for each and every single component in order to obtain the state from Redux.
 * 
 * The first one is "mapStateToProps". This is a method that takes your ENTIRE APPLICATION STATE and makes it accessible to this component.
 * This method will let you put very specific results from your global application store directly into the PROPS of this component.
 * 
 * (accessible using this.props.{whatever you want to access from props}.).
 * 
 * Quite literally you are mapping your STATE of your entire front end application TO your PROPS.
 * 
 * This function can take in TWO arguments. The first is MANDATORY. This first argument is "state". This method, this "mapStateToProps" will 
 * be given the ENTIRE application state in this argument. This is mandatory and will not function otherwise. This "state" argument can 
 * then have the desired properties tied into the props and returned as a part of a returned JSON object. 
 * 
 * This returned JSON object is "added to the props of the component". 
 * 
 * The SECOND argument is OPTIONAL, you can provide the PROPS from this component into this function. These props will then be 
 * taken and be used however you see fit in the function. This isn't always necessary but sometimes you can have a use case where the user
 * enters interesting information like an id of an object you want to pass along from the "props" of this into here.
 * 
 * (Left for google-fu as an exercize for those who want the experience.)
 * 
 * @param state mapStateToProps must take the STATE (the "global" ENTIRE applications state) as it's first argument. This is MANDATORY.
 */
const mapStateToProps = (state: RootState) => {
  console.log(state);
  return {
    userId: state.cart.userId,
    selectedItems: state.cart.selectedItems
  };
}

/**
 * The second method here is ALSO NECESSARY to connect redux to your component. It has a VERY particular structure and is, in fact, a closure.
 * But we are not WRITING this closure, we are instead providing it values.
 * 
 * So breaking this function up we can see we have a:
 * 
 * (App)
 * 
 * that is passed into the outer function from the closure. This "app" is quite LITERALLY this component in this file.
 * This is our way of saying to redux "hey there, we want THIS component, this "app" to be connected up to our redux store!""
 * 
 * Now from there our inner set of brackets takes in TWO very critical arguments.
 * 1: mapStateToProps function that we defined above. This connect method MUST. BE. AWARE. of what you're trying to pipe into
 * your component. You are explicitly telling redux what you want to be mapped from the state to props (and how) in the method above (mapStateToProps).
 * 
 * 2: Secondly a set of curly braces containing ACTION TYPES that were defined in the actions.ts file. This is just a "list" if you want to think
 * of it that way of all of the ACTION TYPES that you want to make accessible to this component. 
 * 
 * For our use cases, we don't care about a lot of potential actions, for the most part. Often larger systems will have -many- action types.
 * That being said, generally speaking, all we really truly want is to have the SPECIFIC action types that we want to use brought in here.
 * NO MORE THAN THAT(!!!). Especially in bigger systems this can become massively unwieldy very quickly!
 * 
 * 
 */
export default connect(
  mapStateToProps, //bring in the mapStateToProps function to inform redux of what you want to bring in and how to bring it in (to props)
  { addItemToCart, removeItemFromCart } //bring in specific actions into this component
)(App); //specify that this "App" component, the component in this file, is expected to be connected to redux. 


//(And yes this is one of the many reasons I strongly recommend one component per one file.) :)