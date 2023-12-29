function openTab(tabName) {
    // hides all tab content
    const tabs = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    // show the selected tab
    document.getElementById(tabName + 'Tab').style.display = 'block';
}


// shows the upcimg tab by default
openTab('upcoming');




function openTab(tabName) {
    var i, tabContent;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }

    var tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    document.getElementById(tabName + "Tab").classList.add("active");
    event.currentTarget.classList.add("active");
}
