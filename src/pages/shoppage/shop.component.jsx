import React, { Component } from 'react'
import CollectionPreview from '../collection-preview/collection-preview.component';

import SHOP_DATA from './shopData';

class ShopPage extends Component {
constructor() {
    super()

    this.state = {
        collections:SHOP_DATA      
    }

}
    render() {
     const {collections}=this.state;
        return (
            <div className='Shop-page'>
             { collections.map( ({id, ...otherClollectionProps}) =>
                <CollectionPreview key={id}  { ...otherClollectionProps}/>
               
             )
            }
            </div>

        )
    }
}

export default ShopPage;