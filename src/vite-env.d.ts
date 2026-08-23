/// <reference types="vite/client" />

import type { AttributifyAttributes } from "@unocss/preset-attributify";

declare module "react" {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
  interface SVGAttributes<T> extends AttributifyAttributes {}
  interface DOMAttributes<T> extends AttributifyAttributes {}
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
