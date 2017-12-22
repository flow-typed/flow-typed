import filesize from "filesize";

filesize(500);
filesize(500, { bits: true });
filesize(265318, { base: 10 });
filesize(265318);
filesize(265318, { round: 0 });
filesize(265318, { output: "array" });
filesize(265318, { output: "object" });
filesize(1, { symbols: { B: "Б" } });
filesize(1024);
filesize(1024, { exponent: 0 });
filesize(1024, { output: "exponent" });
filesize(265318, { standard: "iec" });
filesize(265318, { standard: "iec", fullform: true });
filesize(12, { fullform: true, fullforms: ["байтов"] });

// $ExpectError
filesize(true);

// $ExpectError
filesize({ suffixes: {} });
