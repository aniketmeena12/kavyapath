function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

document.getElementById('toggle-button').addEventListener('click', toggleSidebar);