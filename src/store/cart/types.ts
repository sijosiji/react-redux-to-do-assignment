/**
 * Let's assume that the backend data store looks like.
 * Note that for the user cart that we are only putting items into the cart
 * by their specific inventory's "itemTypeId". 
 * 
 * Rather than passing around the entire full item, we reference other pieces of data
 * very often by their ID's. This is a very standard industry practice.
 * 
 * {
 *      inventory: {
 *          itemTypesAvaliable: [
 *              {
 *                  id: 13,
 *                  currentStock: 5
 *              },
 *              {
 *                  id: 17,
 *                  currentStock: 0
 *              },
 *              {
 *                  id: 87,
 *                  currentStock: 99
 *              }
 *          ],
 *          items: [
 *             {
 *              id: 1,
 *              itemTypeId: 13,
 *              name: "TV 1337",
 *             },
 *             {
 *              id: 2,
 *              itemTypeId: 17,
 *              name: "Awesome Cake",
 *             },
 *             {
 *              id: 3,
 *              itemTypeId: 87,
 *              name: "Bad Cake",
 *             }
 *            ]
 *          },
 *       userCart: {
 *          userId: 1,
 *          selectedItems: [
 *              13, 2, 3 //Note that these are specific item "id" values.
 *          ]
 *       }
 * }
 */

// Normally interfaces like this aren't commented out this heavily.
// This is mostly done for everyone's understanding.

export interface UserCartState {
    userId: number,     // Uniquely identifies a particular user. 
    selectedItems: number[] // Each user can have a list of items that they have selected
    // to put into their cart (and ideally purchase, but that's beyond the scope of this example app)
}

/**
 * This section defines the types used for ACTIONS in the system.
 * When you create an action, you are creating a definition of some
 * modification to be made to the application's data store.
 * 
 * Remember that this types.ts is specifically in the cart folder...
 * Meaning that it's all to do with CART actions. 
 * 
 * So what can you do with the cart in store? Well you can either add
 * or remove items from the cart! 
 */

//For scalability and consistency concerns, it's generally better to define
//your actions as const's at the top before you define the rest. 
//This makes it harder to make a typo at the very least.
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';

interface AddItemToCartAction {
    type: typeof ADD_ITEM_TO_CART
    payload: number     // Payload is just a number? Why? That's because we only need item ID to add.
    // Disclaimer is that there is of course nothing "wrong" with passing full item. But just passing
    // the id should be more than fine.
}

interface RemoveItemFromCartAction {
    type: typeof REMOVE_ITEM_FROM_CART
    payload: number     //Payload is just a number? Why? That's because we only need item ID to add.
}

//Review union types in TS if this syntax doesn't make sense. 
//Quick version: We defined a new type based on the two interfaces we made before.
export type CartActionTypes = AddItemToCartAction | RemoveItemFromCartAction;