/**
 * [INPUT]: three(Group), Layers(baseGasPlanet, gasLayer)
 * [OUTPUT]: createGasGiant()
 * [POS]: 气态巨行星配方，baseGasPlanet + gasLayer
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { Group } from "three";
import { createBaseGasPlanet } from "../Layers/baseGasPlanet.js";
import { createGasPLayer } from "../Layers/gasLayer.js";

export const createGasGiant = () =>
{
    const gasGiantGroup = new Group()

    const basePlanet = createBaseGasPlanet()
    const gasLayer = createGasPLayer()
    gasGiantGroup.add(basePlanet)
    gasGiantGroup.add(gasLayer)

    return gasGiantGroup
}