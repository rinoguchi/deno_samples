import {
  DOMParser,
  HTMLDocument,
} from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const search = async (query: string) => {
  console.log(`========= query: ${query} =========`);
  const response: Response = await fetch(
    `https://www.google.com/search?q=${query}`,
  );
  const parser: DOMParser = new DOMParser();
  const document: HTMLDocument | null = parser.parseFromString(
    await response.text(),
    "text/html",
  );
  if (document !== null) {
    Array.from(document.querySelectorAll("body h3")).slice(0, 5).forEach((e) =>
      console.log(e.textContent)
    );
  }
};

await search(Deno.args[0]);
