function debounce(func: Function, delay: number) {
 let timeout: NodeJS.Timeout | null;
 return function(...args: any[]) {
  const context = this;
  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(() => func.apply(context, args), delay);
 };
}
function throttle(func: Function, limit: number) {
 let lastFunc: NodeJS.Timeout | null;
 let lastRan: number;
 return function(...args: any[]) {
  const context = this;
  if (!lastRan) {
   func.apply(context, args);
   lastRan = Date.now();
  }
  if (lastFunc) clearTimeout(lastFunc);
  lastFunc = setTimeout(() => {
   if ((Date.now() - lastRan) >= limit) {
    func.apply(context, args);
    lastRan = Date.now();
   }
  }, limit - (Date.now() - lastRan));
 };
}
function generateRandomString(length: number) {
 const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
 let result = '';
 for (let i = 0; i < length; i++) {
  result += characters.charAt(Math.floor(Math.random() * characters.length));
 }
 return result;
}
function deepClone<T>(obj: T): T {
 return JSON.parse(JSON.stringify(obj));
}
function flattenArray(arr: any[]): any[] {
 return arr.reduce((flat, toFlatten) => {
  return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
 }, []);
}
function uniqueArray<T>(arr: T[]): T[] {
 return Array.from(new Set(arr));
}
function isPalindrome(str: string): boolean {
 return str === str.split('').reverse().join('');
}
function factorial(n: number): number {
 return n <= 1 ? 1 : n * factorial(n - 1);
}
