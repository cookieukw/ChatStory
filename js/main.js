const list = document.getElementById("msg_content");
const input = document.getElementById("text");
const typeElement = document.getElementById("type");
const form = document.querySelector(".chat-input");

const allMsg = [
  { id: "vex", content: "Oi, tudo bem?" },
  { id: "user", content: "Tudo sim! E você?" },
  { id: "vex", content: "Estou ótima. Pronta para conversar!" },
];

const msg = (id, content) => {
  const li = document.createElement("li");
  li.className = `msg ${id}`;
  
  const text = document.createElement("span");
  text.className = "msg_text";
  text.textContent = content;
  
  const time = document.createElement("span");
  time.className = "data";
  time.textContent = getHours();
  
  li.appendChild(text);
  li.appendChild(time);
  list.appendChild(li);
  
  list.scrollTop = list.scrollHeight;
};

const getHours = () => {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const setTyping = (bool) => {
  typeElement.classList.toggle("show", bool);
  typeElement.classList.toggle("hide", !bool);
};

const simulateTyping = (content) => {
  setTyping(true);
  setTimeout(() => {
    msg("vex", content);
    setTyping(false);
  }, 1000 + Math.random() * 1000);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  
  msg("user", text);
  input.value = "";
  
  const responses = [
    "Sério?",
    "Interessante...",
    "Me conta mais!",
    "Haha, gostei dessa!",
    "Tá brincando?",
    "Uau, isso é demais!"
  ];
  const response = responses[Math.floor(Math.random() * responses.length)];
  simulateTyping(response);
});

// Inicialização das mensagens
(function init(i) {
  if (i < allMsg.length) {
    setTimeout(() => {
      msg(allMsg[i].id, allMsg[i].content);
      init(i + 1);
    }, 1000);
  }
})(0);
