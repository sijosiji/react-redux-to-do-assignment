import { CartActionTypes, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "./types";
//We bring in a lot of the predefined types that we stated in the types file into even these actions.

/**
 * Recall that these are ACTION CREATORS, these are functions that simply create an action that is
 * then provided to a reducer. The reducer is what takes action on the store of the application,
 * where the store of the application is the actual centerpiece of all of the state of the application.
 * 
 * All an ACTION CREATOR, these functions here in this file, does is that it will create an action. A JSON.
 * This JSON will simply state the TYPE of action that it is, and then the payload of what it will provide
 * to the reducer as context of the change.
 * 
 * For these examples, all I provide is the id of the item to add or remove from the cart. This id, which
 * is an industry standard for uniquely identifying objects to manipulate in data, is the key piece of 
 * information that we need to know what we need to add or remove from the system. 
 */

/**
 * This ACTION CREATOR will create an action of a type "ADD_ITEM_TO_CART" that will 
 * signal to the reducer that the reducer is meant to take action on the state to add an item to the cart.
 * But if you look closely, none of that actual data manipulation is here at all. All we're doing is creating
 * the most basic JSON. The action. 
 * 
 * One way you could think about it as, is as we're creating a "formal request" to modify data. 
 * This could, of course, involve more processing if you wish, but is outside of the scope necessary right now.
 * 
 * Key idea is we just create a very basic JSON object describing the change we want.
 * 
 * @param id We provide this action creator the id of the item to add to the cart.
 */
export function addItemToCart(id: number): CartActionTypes {
    return {
        type: ADD_ITEM_TO_CART,
        payload: id
    }
}

/**
 * Similar description to the function "addItemToCart" above. Only this one will formally request
 * that the item with the id provided is REMOVED from the cart. This is identified by the "type"
 * of the action JSON created being "REMOTE_ITEM_FROM_CART".
 * 
 * @param id We provide this action creator the id of the item to remove from the cart.
 */
export function removeItemFromCart(id: number): CartActionTypes {
    return {
        type: REMOVE_ITEM_FROM_CART,
        payload: id
    }
}