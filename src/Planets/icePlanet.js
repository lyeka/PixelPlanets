/**
 * [INPUT]: three(Vector4, Group), Layers(basePlanet, cloudLayer, lakeLayer)
 * [OUTPUT]: createIcePlanet()
 * [POS]: 冰冻行星配方，蓝白色调，basePlanet + lakeLayer + cloudLayer
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { Vector4 } from "three"
import { Group } from "three"
import { createBasePlanet } from "../Layers/basePlanet.js"
import { createCloudLayer } from "../Layers/cloudLayer.js"
import { createLakeLayer } from "../Layers/lakeLayer.js"

export const createIcePlanet = () => {
    const icePlanet = new Group()
    const baseColorPalette = [
        new Vector4(250/255,255/255,255/255,1),
        new Vector4(199/255,212/255,255/255,1),
        new Vector4(146/255,143/255,184/255,1)
    ]
    const basePlanet = createBasePlanet(undefined,undefined,baseColorPalette)
    const lakeLayer = createLakeLayer()
    const cloudLayer = createCloudLayer()
    icePlanet.add(basePlanet)
    icePlanet.add(lakeLayer)
    icePlanet.add(cloudLayer)

    return icePlanet;
}