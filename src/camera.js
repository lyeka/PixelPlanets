/**
 * [INPUT]: three(PerspectiveCamera)
 * [OUTPUT]: createCamera(fov, aspect, near, far)
 * [POS]: 透视相机工厂，被 index.js 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { PerspectiveCamera } from "three";

export const createCamera = (fov,aspect,near,far) =>
{
    return new PerspectiveCamera(fov, aspect, near, far);
}