/**
 * [INPUT]: three(Group), Layers(star, starBlobLayer, starFlareLayer)
 * [OUTPUT]: createStarPlanet()
 * [POS]: 恒星配方，star + starBlobLayer + starFlareLayer，带缩放和层级调整
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { Group } from "three"
import { createStar } from "../Layers/star.js"
import { createStarBlobLayer } from "../Layers/starBlobLayer.js"
import { createStarFlareLayer } from "../Layers/starFlareLayer.js"

export const createStarPlanet = () => {
    const StarPlanet = new Group()

    const basePlanet = createStar()
    const starFlareLayer = createStarFlareLayer()
    const blobLayer = createStarBlobLayer()

    starFlareLayer.position.z = 0.01
    starFlareLayer.scale.set(1.2,1.2)
    blobLayer.position.z = -0.01
    blobLayer.scale.set(1.9,1.9)

    StarPlanet.add(basePlanet)
    StarPlanet.add(starFlareLayer)
    StarPlanet.add(blobLayer)

    return StarPlanet
}