const l = l => console.log(l)

const list = document.getElementById("msg_content")

const typeElement = document.getElementById("type")

let typeBool = true

const allMsg =

[

  {

  id: "vex",

  content: "Teste"

},

{

  id: "vex",

  content: "Teste"

},

{

  id: "user",

  content: "Teste"

},

{

  id: "vex",

  content: "Teste"

},

{

  id: "user",

  content: "Teste"

},

{

  id: "vex",

  content: "Teste"

},

{

  id: "user",

  content: "Teste"

},

{

  id: "user",

  content: "Teste"

}

]

const msg = (id, content) => {

  let base = document.createElement("li")

  base.setAttribute("class","msg "+id)

  

  let msg_text = create_span()

  msg_text.setAttribute("class","msg_text")

  msg_text.innerText= content

  

  let data = create_span()

  data.setAttribute("class","data")

  data.innerText = getHours()

  

  base.appendChild(msg_text)

  base.appendChild(data)

  list.append(base)

  $(document).scrollTop($("#msg_content").height())

}

const create_span = ()=>{

  return document.createElement("span")

}

(function genContent(i) {

  setTimeout(()=>{

    let gg = allMsg[i]

    msg(gg.id, gg.content)

    

    if(i--) genContent(i)

  }, 1500)

})(allMsg.length-1)

const setTyping = bool =>{

  if(bool){

    typeElement.style.display==""

    typeElement.classList.add("show")

    typeElement.classList.remove("hide")

  } else {

      

  typeElement.classList.add("hide")

  typeElement.classList.remove("show")

  typeElement.style.display=="none"

  }

  

}

const getHours = ()=> {

  let date = new Date()

  return `${date.getHours()}:${date.getMinutes()}`

}

