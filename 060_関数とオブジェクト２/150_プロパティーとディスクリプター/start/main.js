const obj = { prop: 0 };
const descriptor = Object.getOwnPropertyDescriptor(obj, "prop");

console.log(descriptor);
