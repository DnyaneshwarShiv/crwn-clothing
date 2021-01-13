import React from 'react'
import CollectionsOverView from '../../component/collections-overview/collection-overview.component';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component'
const ShopPage=({match})=>(
  <div>
      <Route exact path={`${match.path}`} component={CollectionsOverView}/>
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
  </div>
      
)

export default (ShopPage);