function uniqueArray<T>(array: T[]): T[] { return Array.from(new Set(array)); }
function intersection<T>(arr1: T[], arr2: T[]): T[] { return arr1.filter(value => arr2.includes(value)); }
function union<T>(arr1: T[], arr2: T[]): T[] { return uniqueArray([...arr1, ...arr2]); }
function difference<T>(arr1: T[], arr2: T[]): T[] { return arr1.filter(value => !arr2.includes(value)); }
function flattenArray<T>(array: T[]): T[] { return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []); }
function chunkArray<T>(array: T[], size: number): T[][] { return Array.from({ length: Math.ceil(array.length / size) }, (_, i) => array.slice(i * size, i * size + size)); }
function mapObject<T, U>(obj: Record<string, T>, fn: (value: T, key: string) => U): Record<string, U> { return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value, key)])); }
function filterObject<T>(obj: Record<string, T>, predicate: (value: T, key: string) => boolean): Record<string, T> { return Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value, key))); }
function debounce<T extends Function>(func: T, delay: number): T { let timer: NodeJS.Timeout; return function (...args: any[]) { clearTimeout(timer); timer = setTimeout(() => func(...args), delay); } as T; }
function throttle<T extends Function>(func: T, limit: number): T { let lastFunc: NodeJS.Timeout; let lastRan: number; return function (...args: any[]) { const context = this; if (!lastRan) { func.apply(context, args); lastRan = Date.now(); } else { clearTimeout(lastFunc); lastFunc = setTimeout(() => { if (Date.now() - lastRan >= limit) { func.apply(context, args); lastRan = Date.now(); } }, limit - (Date.now() - lastRan)); } } as T; }
function randomInRange(min: number, max: number): number { return Math.floor(Math.random() * (max - min + 1)) + min; }
function shuffleArray<T>(array: T[]): T[] { for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; } return array; }
function isEmptyObject(obj: Record<string, any>): boolean { return Object.keys(obj).length === 0; }
function deepClone<T>(obj: T): T { return JSON.parse(JSON.stringify(obj)); }
function mergeDeep<T>(target: T, source: Partial<T>): T { const output = { ...target }; for (const key in source) { if (source[key] && typeof source[key] === 'object') { output[key] = mergeDeep(target[key] as T, source[key] as Partial<T>); } else { output[key] = source[key]; } } return output; }
