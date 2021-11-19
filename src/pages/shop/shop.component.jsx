import React, { Component } from "react";

import { CollectionPreview } from "../../components/collection-preview/collection-preview.component";

import SHOPDATA from "./shop.data";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOPDATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...rest }) => (
          <CollectionPreview key={id} {...rest} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
