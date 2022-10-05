const modal = document.querySelector(".js-modal");
const modalBody = document.querySelector(".modal__body");
const btnRegister = document.querySelector(".js-register-btn");
const btnLogin = document.querySelector(".js-login-btn");
const modalOverlay = document.querySelector(".modal__overlay");
const btnBacks = document.querySelectorAll(".auth-form__back-btn");

const switchRegisterBtn = document.querySelector(
  ".header-form__switch-register-btn"
);

const switchLoginBtn = document.querySelector(".header-form__switch-login-btn");

const registerForm = document.querySelector(".register-form");

const loginForm = document.querySelector(".login-form");

const searchHistory = document.querySelector(".search__history");

const listItems = document.querySelectorAll(".history__list .list__item");
const clearSearchHistoryBtn = document.querySelector(
  ".history__header-content .header-content__btn-clear"
);

const categoryItems = document.querySelectorAll(".category-item");

const primaryBtns = document.querySelectorAll(".products-filter__btn");

const disableBtn = document.querySelector(
  ".products-filter__page-btn--disabled"
);

const categories = document.querySelectorAll(".category-item");

const likeImgs = document.querySelectorAll(".action__like .like__img");

const navMobileItems = document.querySelectorAll(".nav-mobile__item");

const sortBarItems = document.querySelectorAll(".sort-bar__item");

const displayRegisterForm = () => {
  registerForm.style.display = "block";
  loginForm.style.display = "none";
};

const displayLoginForm = () => {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
};
// open / close form when clicked register button / login button
btnRegister.onclick = (e) => {
  modal.classList.add("open");
  displayRegisterForm();
};

btnLogin.onclick = (e) => {
  modal.classList.add("open");
  displayLoginForm();
};

//click buttons btnBacks
for (let btnBack of btnBacks) {
  btnBack.onclick = () => {
    modal.classList.remove("open");
  };
}

//click modal overplay
modalOverlay.onclick = () => {
  modal.classList.remove("open");
};

//switch form register / login
switchLoginBtn.onclick = (e) => {
  // console.log(e.target)
  displayLoginForm();
};

switchRegisterBtn.onclick = (e) => {
  // console.log(e.target)
  displayRegisterForm();
};

for (let item of listItems) {
  item.onclick = () => {
    console.log(item.innerText);
  };
}

clearSearchHistoryBtn.onclick = (e) => {
  console.log(clearSearchHistoryBtn.innerText);
};

//like product item action
likeImgs.forEach((likeImg) => {
  likeImg.onclick = () => {
    if (likeImg.className.indexOf("outline-heart") !== -1) {
      likeImg.classList.remove("outline-heart");
      likeImg.src = "./assets/img/icons/fill-heart.png";
    } else {
      likeImg.classList.add("outline-heart");
      likeImg.src = "./assets/img/icons/outline-heart.png";
    }
  };
});

const resetElementEffect = (liElement, classActiveElement) => {
  liElement.forEach((item) => item.classList.remove(classActiveElement));
};

const activeElementEffect = (liElement, classActiveElement, imageSrc) => {
  liElement.forEach((item) => {
    item.onclick = () => {
      resetElementEffect(liElement, classActiveElement);
      item.classList.add(classActiveElement);
    };
  });
};

activeElementEffect(sortBarItems, "sort-bar__item--active");
activeElementEffect(navMobileItems, "nav-mobile__item--active");
activeElementEffect(categories, "category__item--active");
activeElementEffect(primaryBtns, "btn--primary");

disableBtn.onclick = (e) => {
  e.preventDefault();
};