const list = document.getElementById("msg_content");
const typeElement = document.getElementById("type");

let typeBool = true;

const allMsg = [
  { id: "vex", content: "Teste" },
  { id: "vex", content: "Teste" },
  { id: "user", content: "Teste" },
  { id: "vex", content: "Teste" },
  { id: "user", content: "Teste" },
  { id: "vex", content: "Teste" },
  { id: "user", content: "Teste" },
  { id: "user", content: "Teste" },
];

const msg = (id, content) => {
  let base = document.createElement("li");
  base.setAttribute("class", `msg ${id}`);

  let msgText = createSpan("msg_text", content);
  let data = createSpan("data", getHours());

  base.appendChild(msgText);
  base.appendChild(data);

  list.append(base);
  $(document).scrollTop($("#msg_content").height());
};

const createSpan = (className, text) => {
  let span = document.createElement("span");
  span.setAttribute("class", className);
  span.innerText = text;
  return span;
};

(function genContent(i) {
  setTimeout(() => {
    let currentMsg = allMsg[i];
    msg(currentMsg.id, currentMsg.content);

    if (i--) genContent(i);
  }, 1500);
})(allMsg.length - 1);

const setTyping = (bool) => {
  if (bool) {
    typeElement.style.display = "";
    typeElement.classList.add("show");
    typeElement.classList.remove("hide");
  } else {
    typeElement.classList.add("hide");
    typeElement.classList.remove("show");
    typeElement.style.display = "none";
  }
};

const getHours = () => {
  let date = new Date();
  return `${date.getHours()}:${date.getMinutes()}`;
};
