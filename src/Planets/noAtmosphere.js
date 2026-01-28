/**
 * [INPUT]: three(Group), Layers(basePlanet, craterLayer)
 * [OUTPUT]: createNoAtmospherePlanet()
 * [POS]: 无大气层行星配方（月球风格），basePlanet + craterLayer
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { Group } from "three"
import { createBasePlanet } from "../Layers/basePlanet.js"
import { createCraterLayer } from "../Layers/craterLayer.js"

export const createNoAtmospherePlanet = () => {
    const noAtmospherePlanet = new Group()

    const basePlanet = createBasePlanet()
    const craterLayer = createCraterLayer()

    noAtmospherePlanet.add(basePlanet)
    noAtmospherePlanet.add(craterLayer)

    return noAtmospherePlanet
}