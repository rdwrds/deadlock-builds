//node modules are externalized in vite
//so two ..separate.. libraries are needed to tokenize the builds.
import sign from "jwt-encode";
import LZString from "lz-string";
import { jwtDecode } from "jwt-decode";
import { items } from "../sorted_deadlock_items_condis";

const JWT_SECRET = "iamdasecretkey";

export const exportBuild = (item_cats, buildInfo) => {
  //remove all data besides name tier and type
  console.log(buildInfo);

  let compressed_cats = [];

  //get all the items and compress em
  item_cats.map((cat) => {
    const compressed_items = [];
    cat.items.map((item) => {
      compressed_items.push([item.name, item.Tier, item.Slot]);
    });

    //push compressed items into category
    compressed_cats.push({ id: cat.id, items: compressed_items });
  });

  console.log(compressed_cats);

  const to_compress = { cats: compressed_cats, buildInfo: buildInfo };

  try {
    //encode compressed categories
    const actually_compressed_string = LZString.compress(
      JSON.stringify(to_compress)
    );

    console.log(
      "test: " +
        sign(JSON.stringify(to_compress), JWT_SECRET, { noTimestamp: true })
    );

    console.log(actually_compressed_string);

    const token = sign(actually_compressed_string, JWT_SECRET, {
      noTimestamp: true,
    });
    navigator.clipboard.writeText(token);
    //return token;
  } catch (error) {
    console.log(`error exporting build: ${error}`);
  }
};

export const importBuild = (token) => {
  try {
    const uncompressed_decoded = jwtDecode(token, JWT_SECRET);

    const decoded = JSON.parse(LZString.decompress(uncompressed_decoded));
    const { cats, buildInfo } = decoded;
    let decompressed_cats = [];
    console.log(cats);
    console.log(buildInfo);

    //decompress items
    cats.map((cat) => {
      let decompressed_items = [];
      console.log(cat.items);
      cat.items.map((decoded_item) => {
        const [name, Tier, Slot] = decoded_item;
        const slot_items = items[Slot][Tier];
        const items_names = Object.keys(slot_items);

        const found = items_names.find((item) => item === name);

        if (found) decompressed_items.push({ ...slot_items[name], name });

        console.log("found: " + found);
      });
      decompressed_cats.push({ id: cat.id, items: decompressed_items });
    });

    //set title desc state

    //return decompressed_cats;
  } catch (error) {
    console.log(`error importing build token: ${token}, ${error}`);
  }
};
