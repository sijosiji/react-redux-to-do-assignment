
// Normally interfaces like this aren't commented out this heavily.
// This is mostly done for everyone's understanding.
// If you need more comments/explaining please refer to the files in the cart folder.

//Define the models of the state.
export interface Item {
    id: number,         // Uniquely identifies a particular item, unique to EACH item.
    itemTypeId: number, // Uniquely identifies the item TYPE, unique to EACH type of item.
    //Note that this is the "id" value from ItemTypesAvaliable defined below.
    //Eg: TV would have a unique ID, Lightbulb would have a unique ID, a video game would have a unique ID.
    name: string // Name of this particular item.
}

export interface ItemTypesAvaliable {
    id: number,     //Uniquely identifies the item types avaliable from the store.
    currentStock: number, // Identifies how much of that item remains in stock.
}

export interface InventoryState {
    items: Item[],       // An array of items, where items is defined in the interface above
    // makes up the entire inventory that the user can interact with.
    itemTypesAvaliable: ItemTypesAvaliable[]
}


//Define the types for the actions.
export const REMOVE_ITEM_FROM_INVENTORY = 'REMOVE_ITEM_FROM_INVENTORY';
export const ADD_NEW_ITEM_TO_INVENTORY = 'ADD_NEW_ITEM_TO_INVENTORY';

interface RemoveItemFromInventory {
    type: typeof REMOVE_ITEM_FROM_INVENTORY
    payload: number     // Payload is just a number? Why? That's because we only need item ID to add.
    // Disclaimer is that there is of course nothing "wrong" with passing full item. But just passing
    // the id should be more than fine.
}

interface AddNewItemToInventory {
    type: typeof ADD_NEW_ITEM_TO_INVENTORY
    payload: Item     //Payload is just a number? Why? That's because we only need item ID to add.
}

export type InventoryActionTypes = RemoveItemFromInventory | AddNewItemToInventory;