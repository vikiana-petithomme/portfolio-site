const portfolioItem1 = document.querySelector('#item1')
const portfolioItem2 = document.querySelector('#item2')
const portfolioItem3 = document.querySelector('#item3')
const portfolioItem4 = document.querySelector('#item4')
const portfolioItem5 = document.querySelector('#item5')
//const portfolioItem6 = document.querySelector('#item6')

const portfolioItems =  [portfolioItem1,portfolioItem2,portfolioItem3,portfolioItem4,portfolioItem5]

const portfolioItemLabel = document.querySelectorAll('.portfolioItemLabel')

portfolioItems.forEach(item => {
   item.addEventListener('mouseover', showItemLabel)

   console.log('this is portfolio item: ' + item)

   function showItemLabel(){
      portfolioItemLabel[portfolioItems.indexOf(item)].classList.toggle('hide')
   }
   item.addEventListener('mouseout', removeItemLabel)

   function removeItemLabel(){
      portfolioItemLabel[portfolioItems.indexOf(item)].classList.add('hide')
   }
})


const seeMorePortfolioButton = document.querySelector('.seeMore')

seeMorePortfolioButton.addEventListener('click', addMorePortfolio)

const seeLessPortfolioButton = document.querySelector('.seeLess')

function addMorePortfolio(){
   const additionalPortfolio = document.querySelectorAll('.mobileHide')
   console.log(additionalPortfolio)
   additionalPortfolio.forEach(item => {
      item.classList.toggle('mobileHide')
   })
   seeMorePortfolioButton.classList.add('mobileHide')
   console.log(seeMorePortfolioButton)

   seeLessPortfolioButton.classList.toggle('hide')

}

seeLessPortfolioButton.addEventListener('click', showLessPortfolio)

function showLessPortfolio(){
   const hiddenPortfolio = document.querySelectorAll('.extraItems')
   console.log(hiddenPortfolio)
   hiddenPortfolio.forEach(item => {
      item.classList.add('mobileHide')
   })
   seeLessPortfolioButton.classList.add('hide')
   console.log(seeLessPortfolioButton)

   seeMorePortfolioButton.classList.toggle('mobileHide')
}

let hamburger = document.querySelector('.hamburger')

console.log('this is the hamburg ' + hamburger)

hamburger.addEventListener('click', mobileNav)

function mobileNav(){
   console.log('mobile nav event listener is working')
   let mobileNav = document.getElementById('mobile')
   console.log('this is the mobile Nav' + mobileNav)
   mobileNav.classList.toggle('hide')

   let navItems = document.getElementsByClassName('mNavItems')
   console.log('these are the navItems '+ navItems)
   Array.from(navItems).forEach(item=>{
      console.log(item)
      item.addEventListener('mouseover', turnTextWhite)
      function turnTextWhite(){
         console.log('you just hovered over ' + item)
         let navText = item.children[0]
         console.log('trying to go to '+ navText)
         navText.style.color = 'white'
         console.log(item.style.color)
      }
      item.addEventListener('mouseout', turnBackText)
      function turnBackText(){
         console.log('you just hovered over ' + item)
         let navText = item.children[0]
         console.log('trying to go to '+ navText)
         navText.style.color = '#00491f'
         console.log(item.style.color)
      }
      item.addEventListener('click', clickText)

      function clickText(){
         let navText = item.children[0]
         navText.click()
      }
   })
   

}

