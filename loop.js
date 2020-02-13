const a = [],
  b = [],
  c = [];

while (shouldWork()) {}

function shouldWork() {
  return a.length || b.length || c.length;
}
