import { IMarkerLayerOption } from "@antv/l7-component";
import {  FeatureCollection } from "geojson";

export interface MarkerLayerProps extends Partial<IMarkerLayerOption>{
    url?:string,
    data?:FeatureCollection
}