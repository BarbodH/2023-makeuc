const buttonApplyFilters = document.getElementById("choose_passages_button_apply_filters");
const buttonSelectAll = document.getElementById("choose_passages_button_select_all");
const buttonDeselectAll = document.getElementById("choose_passages_button_deselect_all");
const passageList = document.getElementById("passage-list");

buttonApplyFilters.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox'][name='topics']")
    const topicCheckboxes = {}

    checkboxes.forEach((checkbox) => {
        topicCheckboxes[checkbox.value] = checkbox.checked;
    });

    const passageItems = passageList.querySelectorAll("li");

    for (let i = 0; i < passageItems.length; i++) {
        const passageItem = passageItems[i];
        const topic = passageItem.getAttribute("topic");

        if (topicCheckboxes[topic]) passageItem.classList.remove("hide");
        else passageItem.classList.add("hide");
    }
});

buttonSelectAll.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox'][name='topics']")
    checkboxes.forEach((checkbox) => {
        checkbox.checked = true;
    });
});

buttonDeselectAll.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox'][name='topics']")
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
});