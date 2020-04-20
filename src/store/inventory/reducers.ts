import { InventoryState, REMOVE_ITEM_FROM_INVENTORY, ADD_NEW_ITEM_TO_INVENTORY, InventoryActionTypes } from "./types";

/**
 * If you ever want to have "dummy data" then why not bring it into here in the reducer until
 * your backend API endpoint is complete? Well, that's exactly what we're doing here until we introduce you
 * to API endpoints and now to get them! 
 */
const initialState: InventoryState = {
    itemTypesAvaliable: [
        {
            id: 50,
            currentStock: 5
        },
        {
            id: 100,
            currentStock: 0
        },
        {
            id: 150,
            currentStock: 99
        }
    ],
    items: [
        {
            id: 1,
            itemTypeId: 50,
            name: "Crime and Punishment",
        },
        {
            id: 2,
            itemTypeId: 100,
            name: "Pride and Prejudice",
        },
        {
            id: 3,
            itemTypeId: 100,
            name: "War and Peace",
        },
        {
            id: 4,
            itemTypeId: 100,
            name: "Heart of Darkness",
        },
        {
            id: 5,
            itemTypeId: 100,
            name: "This side of Paradise",
        },
        {
            id: 6,
            itemTypeId: 150,
            name: "The Time Machine",
        },
        {
            id: 7,
            itemTypeId: 50,
            name: "Little Women",
        }, {
            id: 8,
            itemTypeId: 50,
            name: "Dracula",
        }, {
            id: 9,
            itemTypeId: 50,
            name: "Beyond Good and Evil",
        },
        {
            id: 10,
            itemTypeId: 150,
            name: "The Bible",
        },
        {
            id: 11,
            itemTypeId: 150,
            name: "The Communist Manifesto",
        },
        {
            id: 12,
            itemTypeId: 150,
            name: "The Prince",
        },
       
    ]
};

export function inventoryReducer(state = initialState, action: InventoryActionTypes): InventoryState {
    switch (action.type) {
        case ADD_NEW_ITEM_TO_INVENTORY:
            return {
                ...state,
                items: [...state.items, action.payload]
            }

        case REMOVE_ITEM_FROM_INVENTORY:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }

        default:
            return state;
    }
}