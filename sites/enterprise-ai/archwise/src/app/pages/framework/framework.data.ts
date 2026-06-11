// Facade: re-export the Spanish framework data. This file remains the public import
// target so other modules can continue importing `FRAMEWORK_PAGE_DATA` from
// './framework.data'. The real Spanish data lives in `framework.data.es.ts`.

export { FRAMEWORK_PAGE_DATA } from './framework.data.es';
