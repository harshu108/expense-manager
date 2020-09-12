import React from "react";
import { SwatchesPicker } from "react-color";

export const Component = (props: any) => (
  <div>
    <SwatchesPicker
      onChange={(color) => {
        props.setColor(color.hex, props.item);
      }}
    />
  </div>
);

export default Component;
