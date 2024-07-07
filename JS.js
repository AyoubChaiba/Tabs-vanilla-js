// let btn = document.querySelectorAll("#btn button");
// let text = document.querySelectorAll(".text div");
//       for (i=0;i<btn.length;i++){
//         btn[i].addEventListener("click",btnClick);
//     if(i==0){text[i].style.display="block";btn[0].classList.add("active");}}
//     function btnClick(n){
//       for (i=0;i<btn.length;i++){text[i].style.display = "none";
//         btn[i].classList.remove("active");
//       if (n.target.className === text[i].className){
//         text[i].style.display = "block";
//         btn[i].classList.add("active");}}}

// let btn = document.querySelectorAll("#btn button");
// let text = document.querySelectorAll(".text div");
// text[0].style.display = "block";
// btn.forEach((e) => {
//   e.addEventListener("click", () => {
//     btn.forEach((r) => r.classList.remove("active"));
//     text.forEach((t) => {
//       t.style.display = "none";
//       e.className === t.className ? (t.style.display = "block") : [];
//     });
//     e.classList.add("active");
//   });
// });

// ***************************************

let tabs = document.querySelectorAll(".tabs .tab");
let p = document.querySelectorAll(".tab p");
let content = document.querySelectorAll(".content-tabs div");

  tabs.forEach((e,i,a)=> {
    e.addEventListener("click", () => {
      tabs.forEach((e,i) => {
        content[i].style.display = "none" ;
        e.classList.remove("active-tab");
        p[i].classList.remove("up");
      })
      p[i].classList.add("up");
      e.classList.add("active-tab");
      content[i].style.display = "block" ;
    })
  })