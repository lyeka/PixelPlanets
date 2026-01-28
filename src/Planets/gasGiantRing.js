/**
 * [INPUT]: three(Group), Layers(denseGasLayer, ringLayer)
 * [OUTPUT]: createGasGiantRing()
 * [POS]: 带环气态巨行星配方（土星风格），denseGasPlanet + ringLayer
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { Group } from "three";
import { createDenseGasPlanet } from "../Layers/denseGasLayer.js";
import { createRingLayer } from "../Layers/ringLayer.js";

export const createGasGiantRing = () =>
{
    const gasGiantGroup = new Group()

    const ring = createRingLayer()
    const gasPlanet = createDenseGasPlanet()
    ring.position.z = 0.01
    ring.scale.set(2.0,2.0)
    gasGiantGroup.add(gasPlanet)
    gasGiantGroup.add(ring)

    return gasGiantGroup
}