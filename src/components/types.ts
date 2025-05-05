export interface ParticlesConfig {
   autoPlay: boolean;
   background: {
     color: string;
     image: string;
     position: string;
     repeat: string;
     size: string;
     opacity: number;
   };
   backgroundMask: {
     composite: string;
     cover: {
       color: {
         value: string;
       };
       opacity: number;
     };
     enable: boolean;
   };
   fullScreen: {
     enable: boolean;
     zIndex: number;
   };
   particles: {
     color: {
       value: string;
     };
     move: {
       direction: string;
       enable: boolean;
       outModes: {
         default: string;
       };
       random: boolean;
       speed: number;
       straight: boolean;
     };
     number: {
       density: {
         enable: boolean;
         area: number;
       };
       value: number;
     };
     opacity: {
       value: number;
     };
     shape: {
       type: string;
     };
     size: {
       value: number | {
         min: number;
         max: number;
       };
     };
   };
 }
 
 export interface Particle {
   x: number;
   y: number;
   size: number;
   speedX: number;
   speedY: number;
   opacity: number;
   color: string;
 }