'use strict';
const model=document.querySelector('.modal');
const ovelay=document.querySelector('.ovelay');
const btnCloseModel=document.querySelector('.close-modal');
const btnOpenModel=document.querySelectorAll('.show-modal');

for(let i=0;i<btnOpenModel.length;i++)
{
  btnOpenModel[i].addEventListener('click',function(){

  console.log('boutne clicked');
  model.classList.remove("hidden");

  });
}
document.querySelector('.modal').addEventListener('click' ,function()
{
  document.querySelector(".modal").classList.add("hidden");
})
document.addEventListener('keydown', function(e){
if(e.key=='Escape')
{
  model.classList.add("hidden");
}
})