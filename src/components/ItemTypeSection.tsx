import * as React from 'react';
import { ItemTypesAvaliable, Item } from '../store/inventory/types';
import { RootState } from '../store';
import { connect } from 'react-redux';
import { removeItemFromInventory, addItemToInventory } from '../store/inventory/actions';
import StoreItem from './StoreItem';

export interface IItemTypeSectionProps {
  items: Item[];
  itemTypesAvaliable: ItemTypesAvaliable[];
  addItemToInventory: typeof addItemToInventory;
  removeItemFromInventory: typeof removeItemFromInventory;
  itemTypeId: number;
}

export class ItemTypeSection extends React.Component<IItemTypeSectionProps> {
  public render() {
    let { items, itemTypeId } = this.props;
    let filteredListBasedOnItemTypeId = items.filter(item => item.itemTypeId === itemTypeId);

    return (
      <div>
        {
          filteredListBasedOnItemTypeId.map(individualItem => (
            <StoreItem itemId={individualItem.id} />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    items: state.inventory.items,
    itemTypesAvaliable: state.inventory.itemTypesAvaliable
  };
}

export default connect(
  mapStateToProps, //bring in the mapStateToProps function to inform redux of what you want to bring in and how to bring it in (to props)
  { addItemToInventory, removeItemFromInventory } //bring in specific actions into this component
)(ItemTypeSection);