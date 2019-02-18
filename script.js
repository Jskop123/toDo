const btn = document.querySelector("button");
      const area = document.querySelector("ul");

      btn.addEventListener("click", () => {
        const inp = document.querySelector("input");
        let text = inp.value;
        if (text) {
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
      area.addEventListener("click", e => {
          if(e.target.className.includes('check')){
            const element = e.target;
            element.className = "far fa-square";
            element.parentElement.lastChild.className = ''
          } 
          else if(e.target.className.includes('square')){
            const element = e.target;
            element.className = "far fa-check-square"
            element.parentElement.lastChild.className = 'done'
          }
      });
