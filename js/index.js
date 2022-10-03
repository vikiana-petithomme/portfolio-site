const seeMorePortfolioButton = document.querySelector('a.hide')

seeMorePortfolioButton.addEventListener('click', addMorePortfolio)

function addMorePortfolio(){
   const additionalPortfolio = document.querySelectorAll('section.mobile-hide')
   additionalPortfolio.classList.toggle('mobileHide')
   seeMorePortfolioButton.classList.add('mobileHide')
}