import "./styles.css";
const test = document.querySelector(".test");

function humanFileSize(bytes, si = false, dp = 1) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }

  const units = si
    ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return bytes.toFixed(dp) + " " + units[u];
}

console.log(humanFileSize(1551859712)); // 1.4 GiB
console.log(humanFileSize(5000, true)); // 5.0 kB
console.log(humanFileSize(5000, false)); // 4.9 KiB
console.log(humanFileSize(-10000000000000000000000000000)); // -8271.8 YiB
console.log(humanFileSize(999949, true)); // 999.9 kB
console.log(humanFileSize(999950, true)); // 1.0 MB
console.log(humanFileSize(999950, true, 2)); // 999.95 kB
console.log(humanFileSize(999500, true, 0)); // 1 MB

test.textContent = humanFileSize(50000000);
