function getFirstSelector(selector)
{
  var selection = document.querySelector(selector);
  return selection;
}

function nestedTarget()
{
  var target = document.querySelector("#nested .target");
  return target;
}

function increaseRankBy(n)
{ 
  const rankUp = document.querySelectorAll("ul.ranked-list");
  for (let i = 0; i < rankUp.length; i++)
  {
   rankUp[i].innerHTML = parseInt(rankUp[i].innerHTML) + n;
  }
  return rankUp;
}

function deepestChild()
{
  var parent= document.getElementById("grand-node").querySelectorAll("div");
  var child = " ";
for( let i = 0; i < parent.length; i++)
{
  child = parent[i].querySelector("div");
}
  return parent;
}