function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    
    const toggle = document.querySelector('.menu-toggle')
    toggle.style.display = 'none'
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'

    const toggle = document.querySelector('.menu-toggle')
    toggle.style.display = 'flex'
}