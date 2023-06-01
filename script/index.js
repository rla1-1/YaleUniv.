

// header info for... & go 

const optionMenu = document.querySelector(".select_menu");
const selectBtn = optionMenu.querySelector(".select_btn");
const infoOptions = optionMenu.querySelectorAll(".option");
const sBtn_text = optionMenu.querySelector(".sBtn_text");
let selectedOption = '';

// 버튼 토글
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

selectBtn.addEventListener("click", () => selectBtn.classList.remove("selectedopt"));

// 옵션 선택 
infoOptions.forEach(option => {
    option.addEventListener("click", () => {
        selectedOption = option.querySelector(".option_text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
        selectBtn.classList.add("selectedopt")
    })
})

//페이지로 이동
function goToSelectedPage() {
    switch (selectedOption) {
        case 'Students':
            window.location.href = 'https://secretary.yale.edu/student-life';
            break;
        case 'Faculty':
            window.location.href = 'https://alumni.yale.edu/faculty';
            break;
        case 'Staff':
            window.location.href = 'https://your.yale.edu/';
            break;
        case 'Alumni':
            window.location.href = 'https://alumni.yale.edu/';
            break;
        default:
            // 기본적으로 할 작업이 없을 경우의 처리
            break;
    }
}

//section2 all news & go

const newsMenu = document.querySelector(".news_menu");
const newsBtn = document.querySelector(".news_btn");
const newsOption = document.querySelectorAll(".news_option")
const newsBtnText = document.querySelector(".newsBtn_text");
let selectedNewsOption = '';

// 버튼 토글
newsBtn.addEventListener("click", () => newsMenu.classList.toggle("active"));

// 옵션 선택
newsOption.forEach(news_option => {
    news_option.addEventListener("click", () => {
        selectedNewsOption = news_option.querySelector(".news_option_text").innerText;
        newsBtnText.innerText = selectedNewsOption;
        newsMenu.classList.remove("active");
    })
})

//페이지로 이동
function goToSelectedNewsPage() {
    switch (selectedNewsOption) {
        case 'Alumni':
            window.location.href = 'https://news.yale.edu/topics/alumni';
            break;
        case 'Business':
            window.location.href = 'https://news.yale.edu/topics/business';
            break;
        case 'Environment':
            window.location.href = 'https://news.yale.edu/topics/environment';
            break;
        case 'International':
            window.location.href = 'https://news.yale.edu/topics/international';
            break;
        case 'Law':
            window.location.href = 'https://news.yale.edu/topics/law';
            break;
        default:
            // 기본적으로 할 작업이 없을 경우의 처리
            break;
    }
}


//section3 Explore by topic

const topicMenu = document.querySelector(".topic_menu");
const topicBtn = document.querySelector(".topic_btn");
const topicOption = document.querySelectorAll(".topic_option")
const topicBtnText = document.querySelector(".topicBtn_text");
let selectedTopicOption = '';

// 버튼 토글
topicBtn.addEventListener("click", () => topicMenu.classList.toggle("active"));

// 옵션 선택
topicOption.forEach(topic_option => {
    topic_option.addEventListener("click", () => {
        selectedTopicOption = topic_option.querySelector(".topic_option_text").innerText;
        topicBtnText.innerText = selectedTopicOption;
        topicMenu.classList.remove("active");
    })
})

//search bar
const section1 = document.querySelector(".section1");
const searchBtn = document.querySelector(".search_btn");

searchBtn.addEventListener("click", () => {
    const inputFocus = document.getElementById("input_focus");
    section1.classList.toggle("active");
    inputFocus.focus();
})

function learnMore() {
    window.location.href = 'https://alumni.yale.edu/';
}


//navigation bar
const navButton = document.querySelector(".main_nav_button");
const navButtonText = document.querySelector(".nav_button_text");

function mainNavButton() {
    navButton.classList.toggle("active");
    document.querySelector(".main_nav").classList.toggle("active");
    document.querySelector(".header").classList.toggle("active");
    if (navButton.classList.contains("active")) {
        navButtonText.textContent = "CLOSE"

    } else {
        navButtonText.textContent = "NAVIGATION"
    }

}