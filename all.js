
// 漢堡選單動畫設定

const hamburgerBtn = document.querySelector('.course-hamburgerBtn')
const hamburgerBtnIcon = document.querySelector('.course-hamburgerBtn-icon')
const courseVideoList = document.querySelector('.course-videoList')
const courseContainer = document.querySelector('.course-container')

hamburgerBtn.addEventListener('click',function(){

    // 設定動畫啟動方式（active：變成 X，移除 active 變回三條線）
    hamburgerBtn.classList.toggle('active')
    // 中間線條淡入、淡出
    hamburgerBtn.classList.toggle('fadeOut')
    hamburgerBtn.classList.toggle('fadeIn')

    // 影音列表選單開啟、隱藏設定（acrive：影音列表選單開啟，移除 active 會隱藏選單）
    courseContainer.classList.toggle('active')

    // 設定選單位置
    if(hamburgerBtn.classList.contains('fadeIn')){
        hamburgerBtnIcon.style.left = '130%'
        hamburgerBtnIcon.style.opacity = 0
    }else{
        hamburgerBtnIcon.style.left = '50%'
        hamburgerBtnIcon.style.opacity = 1
    }

})

// 設定影音列表主單元按鈕
const courseUnitName = document.getElementsByClassName('course-unitName')
const courseUnitList = document.getElementsByClassName('course-unitList')

// for(let i=0 ; i<courseUnitName.length; i++){
//     courseUnitName[i].addEventListener('click',function(){
//         this.classList.toggle('active')
//     })
// }

for(let i=0 ; i<courseUnitList.length; i++){
    courseUnitList[i].addEventListener('click',function(){
        this.children[0].classList.toggle('active')
        this.children[1].classList.toggle('active')
    })
}

// 設定課程導覽列按鈕
// const courseNavbarBtn = document.getElementsByClassName('course-navbar-btn')
// const courseSubunitList = document.getElementsByClassName('course-subunitList')

// for(let i=0; i<courseNavbarBtn.length; i++){
//     courseNavbarBtn[i].addEventListener('click',function(){
//         this.classList.toggle('active')
//     })
// }

// 之後要設定不要讓他一改變視窗就觸發
window.addEventListener('resize',function(){
    checkWindowState()
})

window.addEventListener('load',function(){
    checkWindowState()
})

function checkWindowState(){
    if(window.innerWidth < 1200){
        hamburgerBtn.classList.remove('active')
        hamburgerBtn.classList.remove('fadeOut')
        hamburgerBtn.classList.add('fadeIn')

        courseContainer.classList.remove('active')

        if(hamburgerBtn.classList.contains('fadeIn')){
            hamburgerBtnIcon.style.left = '130%'
            hamburgerBtnIcon.style.opacity = 0
        }else{
            hamburgerBtnIcon.style.left = '50%'
            hamburgerBtnIcon.style.opacity = 1
        }
    }
}