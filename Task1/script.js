const tabHeaders = document.querySelectorAll(".tabs .container > div");
const tabItems = document.querySelectorAll(".tab-content .container > div");
const changeTabActive = (tabElement) => {
    if (tabElement.classList.contains("tabs--active")) {
        return;
    } else {
        for (const tHeader of tabHeaders) {
            if (tHeader.classList.contains("tabs--active")) {
                tHeader.classList.remove("tabs--active");
            }
        }
        tabElement.classList.add("tabs--active");
    }
}

const changeActiveContent = (contentElement) => {
    if (!contentElement.classList.contains("no-show")) {
        return;
    } else {
        for (const tContent of tabItems) {
            if (!tContent.classList.contains("no-show")) {
                tContent.classList.add("no-show");
            }
        }
        contentElement.classList.remove("no-show");
    }
}
const changeTabContent = (elementHeader) => {
    changeTabActive(elementHeader);
    let element, index;

    for (let i = 0; i < tabHeaders.length; i++) {
        element = tabHeaders.item(i);
        if (element === elementHeader) {
            index = i;
            break;
        }
    }

    element = tabItems[index];

    changeActiveContent(element);
}
for (const tHeader of tabHeaders) {
    tHeader.addEventListener("click", (e) => {
        changeTabContent(tHeader);
    });
}