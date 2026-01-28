/**
 * [INPUT]: utils(flip)
 * [OUTPUT]: settings 对象（seedValue, planetTypes, planetOptions, seed 方法）
 * [POS]: 全局配置中心，被 index.js 消费，控制行星类型和随机种子
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { flip } from "./src/utils"

export const settings = {
    seedValue: 1.0,
    planetTypes:"No atmosphere",
    planetOptions: [
        "No atmosphere",
        "Ice Planet",
        "Gas giant 1",
        "Gas giant 2",
        "Asteroid",
        "Star",
        "Lava Planet",
        "Dry Planet",
        "Earth Planet"
    ],
    seed: () => {
        settings.seedValue = flip() ? Math.random() * 10 : Math.random() * 100 
    }
}