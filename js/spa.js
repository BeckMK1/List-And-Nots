class Spa {
    constructor(defaultPage) {
        this.defaultPage = "home";
    }

    init(){
        this.pages = document.querySelectorAll(".page");
        this.navItems = document.querySelectorAll(".tabbar a");
        this.pageChange();
    }
    // hide all pages
    hideAllPages() {
        for (let page of this.pages) {
            page.style.display = "none";
        }
    }

    // show page or tab
    showPage(pageId) {
        this.hideAllPages();
        document.querySelector(`#${pageId}`).style.display = "block";
        this.setActiveTab(pageId);
    }

    // sets active tabbar/ menu item
    setActiveTab(pageId) {
        for (let navItem of this.navItems) {
            if (`#${pageId}` === naveItem.getAttribute("href")) {
                navItem.classList.add("active");
            } else {
                naveItem.classList.remove("active");
            }
        }
    }
    // navigate to a new view/page by changing href
    navigateTo(pageId) {
        window.location.href = `#${pageId}`;
    }

    pageChange() {
        let page = this.defaultPage;
        if(window.location.hash) {
            page = window.location.hash.slice(1)
        }
        this.showPage(page);
    }
}
const spa = new Spa();
export default spa;