import * as React from 'react';
import { RootState } from '../store';
import { connect } from 'react-redux';
import { addItemToInventory, removeItemFromInventory } from '../store/inventory/actions';
import { Item, ItemTypesAvaliable } from '../store/inventory/types';
import ItemTypeSection from './ItemTypeSection';
import { Grid } from 'semantic-ui-react';

export interface IEcommerceMainSectionProps {
    removeItemFromInventory: typeof removeItemFromInventory,
    addItemToInventory: typeof addItemToInventory,
    items: Item[],
    itemTypesAvaliable: ItemTypesAvaliable[]
}

export class EcommerceMainSection extends React.Component<IEcommerceMainSectionProps> {

    public render() {
        let { itemTypesAvaliable } = this.props;

        return (
            <Grid>
                {itemTypesAvaliable != null ? itemTypesAvaliable.map(individualItemType => {
                    return <ItemTypeSection itemTypeId={individualItemType.id} />
                }) : <h1>no item types in inventory</h1>}
            </Grid>
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
)(EcommerceMainSection);