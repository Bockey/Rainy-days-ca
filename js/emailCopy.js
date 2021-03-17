const emailLink = document.querySelector("#contact-link");
const text = emailLink.textContent;
const notice = document.querySelector("#emailNotice");

const copy = (evt) => {
  event.preventDefault();
  const range = document.createRange();
  range.selectNode(emailLink);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand("copy");
  notice.innerHTML += `<p style="font-size:14px; color:gray">Copied to clipboard</p>`;
};

// console.log(text);
// function copy() {
//   console.log("radi");
//   text.select();
//   document.execCommand("copy");
// }
emailLink.addEventListener("click", copy);
