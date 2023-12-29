function openTab(tabName) {
    // Hide all tab content
    const tabs = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    // Show the selected tab
    document.getElementById(tabName + 'Tab').style.display = 'block';
}

function rescheduleAppointment() {
    alert('Rescheduling...');
}

function viewDetails() {
    alert('Viewing details...');
}

// By default, show the Upcoming tab
openTab('upcoming');
