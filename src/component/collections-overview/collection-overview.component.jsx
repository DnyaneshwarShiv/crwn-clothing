import React from 'react';
import './collection-overview.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverView= ({collections})=>(
  <div className='collection-overview'>
           {
             collections.map(({id,...otherCollectionProps}) =>(
                    <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
                ))
           }
    </div>
);
const mapStateToProps= createStructuredSelector({
    collections: selectCollectionsForPreview
})
export default connect(mapStateToProps) (CollectionsOverView);