const lazy = [
   { name: "lax", total:15 },
   {  name: "lak", total:24 },
  {  name: "lat", total:32 },
];

const regular = lazy.map(lax => {
    return lax.name;
});

console.group(regular);