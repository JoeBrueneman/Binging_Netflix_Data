const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border');
    //grab content items from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    //add show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

//Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem))



//Recommendation Table
const buttonItems = document.querySelectorAll('.btn-list')
const buttonListTables = document.querySelectorAll('.table-list');
//select table content
function selectTable(e) {
    removeTable();
    //grab table from DOM
    const buttonListTable = document.querySelector(`#table-${this.id}`);
    //add table class
    buttonListTable.classList.add('show-table');
}
function removeTable() {
    buttonListTables.forEach(item => item.classList.remove('show-table'))
}
//listen for button click
buttonItems.forEach(item => item.addEventListener('click', selectTable))



//Top-10 Table
const buttonTopItems = document.querySelectorAll('.btn-top')
const buttonTopTables = document.querySelectorAll('.table-top');
//select table content
function selectTopTable(e) {
    removeTopTable();
    //grab table from DOM
    const buttonTopTable = document.querySelector(`#${this.id}-table`);
    //add table class
    buttonTopTable.classList.add('show-table');
}
function removeTopTable() {
    buttonTopTables.forEach(item => item.classList.remove('show-table'))
}
//listen for button click
buttonTopItems.forEach(item => item.addEventListener('click', selectTopTable))
