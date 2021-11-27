import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CollectionPreview } from "../collection-preview/collection-preview.component";

import { selectCollections } from "../../redux/shop/shop.selectors";

import "./collections-overview.styles.scss";

const mapStateToProps = () =>
  createStructuredSelector({
    collections: selectCollections,
  });

export const CollectionsOverview = connect(mapStateToProps)(
  ({ collections }) => (
    <div className="collections-overview">
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  )
);
