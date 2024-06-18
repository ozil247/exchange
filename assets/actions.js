const initApp = async () => {

  const liTags = document.querySelectorAll('.transactions-card .front li.liTag');
  liTags.forEach((liTag) => {
    liTag.addEventListener('click', changeLiCard)
  });

  const actionBtns = document.querySelectorAll('.small-card .transactionBtn');
  actionBtns.forEach((actionBtn) => {
    actionBtn.addEventListener('click', transactionCard)
  });

  const userDashboardCards = document.querySelectorAll('.user-dashboard .col-md-6 .card');
  userDashboardCards.forEach((userDashboardCard) => {
    actionBtn.addEventListener('click', userDashboardCardFunction)
  });

}


document.addEventListener('DOMContentLoaded', initApp);


const transactionCard = (event) => {
  const thisParent = event.target.parentNode;
  const grandParent = thisParent.parentNode;
  const allChildren = Array.from(grandParent.children);
  allChildren.forEach(thisChild => {
    thisChild.classList.toggle('active');
  });
}

const changeLiCard = (e) => {
  // const ary = Array.from(e.target.children);
  const thisLiClass = e.target.classList.toggle('liTag');
  const thisLi = e.target;
  const allChildren = thisLi.getElementsByTagName('*');
  const liCard = allChildren[0].classList.toggle('active');

  console.log(allChildren);
  console.log(liCard);
}

const userDashboardCardFunction = (event) => {
  const thisParent = event.target.parentNode;
  const grandParent = thisParent.parentNode;
  const allChildren = Array.from(grandParent.children);
  allChildren.forEach(thisChild => {
    thisChild.classList.toggle('active');
  });
}

