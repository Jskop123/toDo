const btn = document.querySelector("#add");
const deleteAll = document.querySelector('#delete')
const area = document.querySelector("ul");

btn.addEventListener("click", () => {
  const inp = document.querySelector("input");
  let text = inp.value;
  if (text && text !== ' ') {
    const el = document.createElement("li");
    const p = document.createElement("p");
    const cnt = document.createTextNode(text);
    const delCnt = document.createElement("i");
    const done = document.createElement("i");

    done.className = "far fa-square";
    delCnt.className = "far fa-trash-alt";

    p.appendChild(cnt);
    el.prepend(done);
    el.appendChild(delCnt);
    el.appendChild(p);

    area.prepend(el);
    inp.value = "";
  }
});

area.addEventListener("click", e => {
  if (e.target.className === "far fa-trash-alt") {
    const element = e.target.parentElement;
    element.parentElement.removeChild(element);
  }
});

const toggleClasses = (e, elmClass, childClass) => {
  const element = e.target;
  element.className = elmClass;
  element.parentElement.lastChild.className = childClass;
}

area.addEventListener("click", e => {
  if (e.target.className.includes("check")) {
    toggleClasses(e, "far fa-square", "")
  } 
  else if (e.target.className.includes("square")) {
    toggleClasses(e, "far fa-check-square", "done")
  }
  deleteAll.addEventListener('click', () => {
    area.childNodes.forEach((el) => {
      if(el.childNodes[0].className.includes("check")){
        el.parentElement.removeChild(el)
      }
    })
  })
});






