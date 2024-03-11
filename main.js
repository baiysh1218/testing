function serialize(arr) {
  return arr.join(",");
}

function deserialize(str) {
  return str.split(",").map(Number);
}

const tests = [
  [1, 2, 3, 4, 5],
  Array.from({ length: 50 }, () => Math.floor(Math.random() * 300) + 1),
  Array.from({ length: 100 }, () => Math.floor(Math.random() * 300) + 1),
  Array.from({ length: 500 }, () => Math.floor(Math.random() * 300) + 1),
  Array.from({ length: 1000 }, () => Math.floor(Math.random() * 300) + 1),
  Array.from({ length: 900 }, (_, index) => (index % 300) + 1),
  Array.from({ length: 1000 }, () => 1),
  Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100) + 100),
  Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10) + 100),
];

tests.forEach((test, index) => {
  const originalString = test.join(",");
  const serializedString = serialize(test);
  const deserializedArray = deserialize(serializedString);
  const compressionRatio = (
    serializedString.length / originalString.length
  ).toFixed(2);

  console.log(`Test ${index + 1}:`);
  console.log(`Original: ${originalString}`);
  console.log(`Serialized: ${serializedString}`);
  console.log(`Deserialized: ${JSON.stringify(deserializedArray)}`);
  console.log(`Compression ratio: ${compressionRatio}`);
  console.log("----------------------------------");
});
