const lazy = [
   { name: "lax", total:15 },
   {  name: "lak", total:24 },
  {  name: "lat", total:32 },
];

const regular = lazy.map(lax => {
    return lax.name;
});

console.group(regular);

//  REGEX

const paragraph = "My imagination is so hard to understand, I screwing up everyday. So question is how can I dont do that again";
const regex = /imagin/g;

const dec = paragraph.replace(regex, "HOUU");
console.log(dec);
