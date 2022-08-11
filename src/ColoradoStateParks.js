import React from "react";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife } from "./parks/RockyMountain";

export default function ColoradoStateParks() {
  console.log(trees);
  return (
    <div>
      <MesaVerde/>
    </div>
  )
}
