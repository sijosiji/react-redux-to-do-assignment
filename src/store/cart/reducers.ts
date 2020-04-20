import { UserCartState, CartActionTypes, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "./types";
/**
 * Again this file will bring in types from the types.ts that we defined before. 
 * This is another reason why it is so critically important to go in with a game plan
 * of what your data structure for your application should look like.
 * 
 * Plan. Plan. Plan. It pays off massively as the application grows in size and pays off 
 * massively in scalability.
 */

/**
 * As before with the component state, we had to specify a default baseline state.
 * That same idea, that we need a default, exists in redux as well. We need to specify that
 * at the onset of our application that we have something as a baseline. It doesn't need to be fancy,
 * it doesn't need to be exorbantly detailed, but it needs to have a default.
 * 
 * This is actually an ideal location to place "dummy data", or "fake data" for your application.
 * Suppose you don't have an API connect to, but you know what sort of JSON you would get from said API--
 * there is nothing stopping you from padding this default data out with "dummy fake data" and use it to
 * provide your application with data to play with as you develop along. 
 * 
 * In fact, it's something I've had to do a fair bit in the past when I didn't have an API to connect to myself.
 */
const initialState: UserCartState = {
    userId: 1,
    selectedItems: [7, 13, 33]
}

/**
 * Now we're finally at the part where we modify state, the REDUCER. Reducers serve one very specific purpose.
 * They take in an action that defines what action they can take, which will tell them how to modify the data. 
 * This is where you actually modify the state. No where else. Do not modify state outside of reducers (pretty sure that will result in error messages?).
 * 
 * What you have here is this function takes in the state, which has a default parameter (review TypeScript?) of the initial state we defined 
 * immediately above. This will set the default initial state. Secondly we pass in an action, this action defines exactly what this reducer should
 * be doing to the state. 
 * 
 * To that end, we usually have a SWITCH statement in a reducer, where each case of the switch statement is one of the potential actions
 * that can be taken by the reducer. In our example here, we can either ADD an item to the cart, or we can REMOVE an item from the cart.
 * 
 * As per the names "ADD_ITEM_TO_CART" and "REMOVE_ITEM_FROM_CART".
 * 
 * (And yes, this is one of the major reasons why making your code human-readable pays off massively. Make it CLEAR what the action is doing.)
 * 
 * So as a switch statement will normally behave, the switch statement will check for the case that it matches. Which because we pass in
 * an ACTION where the action has a particular TYPE to it, this should always only match one case here. (On the flip side, if it doesn't match
 * any cases???? Something went wrong in the structure of your redux part of your application. Define only used actions. Delete any unused actions.
 * Keep this code SPARKLING CLEAN-- yes I speak from personal experience on the pains of that one sadly.)
 * 
 * But now the switch statement has identified the particular CASE based on the TYPE provided in the ACTION passed into this REDUCER the REDUCER
 * can now make a modification to the state. 
 * 
 * And now this might seem oddly "easy" to some. But that's the beauty of it. We literally return a brand new JSON with the NEW state in it.
 * 
 * We do not modify the "old" state and return it directly. We must create a brand new JSON to return that matches the "UserCartState" in this
 * instance. This will be enforced strictly by TypeScript as "UserCartState" we have already defined clearly in our types.ts file in this folder.
 * Meaning that we know EXACTLY what we want in "UserCartState" at any point in time. 
 * 
 * Anything that deviates from what we expect will get an error. I encourage exploration and attempts to break this, of course. Good learning for sure!
 * 
 * But, and it's a big one, you should ALWAYS be considering the past state. You're going to see a fair bit of the spread operator used here.
 * (Review TypeScript notes?) And this operator is very convenient to use because it literally will take each individual element from the object
 * and put it out into whatever "container" it is in. Lik ebelow you can see I put the elements into an array with one spread operator, elements
 * into a brand new JSON object in another.
 * 
 * This is how you can "maintain state" even though you're quite literally making a brand new object. And for the record redux EXPECTS a BRAND NEW object
 * to be created.
 * 
 * And from this point the reducer handles the rest. The state is considered updated.
 * 
 * @param state The state of the cart. Note that this has a default parameter of initial state. That's very important for initialization.
 * @param action The action that the reducer will take. We already defined the actions before. Now we want to be able to provide them to the reducer.
 */
export function cartReducer(state = initialState, action: CartActionTypes): UserCartState {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                selectedItems: [...state.selectedItems, action.payload]
            }

        case REMOVE_ITEM_FROM_CART:
            //Look carefully at the object returned from this reducer. 
            //This reducer here creates a brand new object based off of the original state we had here.
            //This state is then modified as necessary to fulfill what the action wanted.
            return {
                userId: state.userId,
                selectedItems: state.selectedItems.filter(item => item === action.payload)
                //This syntax above is just one way to remove the item's id from the list.
            }

        default:
            return state;
    }
}