import * as THREE from 'three';
// 1. 新增：引入刚才上传的音乐文件
// (Vite 会自动处理路径，不用担心网址前缀问题)
import bgmFile from './bgm.mp3'; 

export const COLORS = {
  emerald: new THREE.Color('#004225'),
  deepGreen: new THREE.Color('#012b1d'),
  gold: new THREE.Color('#C5A059'),
  brightGold: new THREE.Color('#FFD700'),
  silver: new THREE.Color('#E0E0E0'),
  white: new THREE.Color('#FFFFFF'),
  bg: '#000905',
};

// Geometry Settings
export const TREE_HEIGHT = 12;
export const TREE_RADIUS_BASE = 5;
export const SCATTER_RADIUS = 15;

// Increased density for "Full" look
// 之前为了手机优化改成了 2500，这里保持一致即可
export const PARTICLE_COUNT = 2500; 
export const ORNAMENT_COUNT = 300; 
export const GIFT_COUNT = 100; 
export const ROUND_GIFT_COUNT = 60; 
export const POLAROID_COUNT = 24; 

// Animation Settings
export const TRANSITION_DURATION = 2.5; 

// Audio Settings
// 2. 修改：将引入的文件赋值给变量
export const BG_MUSIC_URL = bgmFile;
