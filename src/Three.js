/**
 * [INPUT]: three(Clock, Group, Scene, WebGLRenderer)
 * [OUTPUT]: createScene, createClock, createWebGlRenderer, createGroup
 * [POS]: Three.js 工厂函数封装，简化对象创建，被 index.js 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import {Clock, Group, Scene, WebGLRenderer} from "three";

export function createScene() {
    return new Scene();
}

export function createClock() {
    return new Clock();
}

export function createWebGlRenderer() {
    return new WebGLRenderer();
}

export function createGroup() {
    return new Group();
}