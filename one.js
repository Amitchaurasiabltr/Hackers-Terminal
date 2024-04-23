const addItem = async (item) => {
  await randomDelay();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.append(div);
};

const randomDelay = () => {
  return new Promise((resove, reject) => {
    timeout = 1 + 6 * Math.random();
    setTimeout(() => {
      resove();
    }, timeout * 1000);
  });
};

async function main() {
  let t = setInterval(() => {
    let last = document.body.getElementsByTagName("div");
    last = last[last.length - 1];
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 700);

  let text = [
    "Initialized Hacking now reading your data",
    "Reading your Files",
    "Password files Detected",
    "Sending all password and personal file to sserver",
    "Cleaning up",
  ];

  for (const item of text) {
    await addItem(item);
  }

  await randomDelay();
  clearInterval(t);
}
main();