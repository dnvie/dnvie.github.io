window.onload = setTimeout(showContent, 650);

function switchTheme() {
    if (document.documentElement.getAttribute('data-theme') == 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
        document.getElementById('el4').innerHTML = `<span class="material-symbols-rounded">light_mode</span>`
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
        document.getElementById('el4').innerHTML = `<span class="material-symbols-rounded">dark_mode</span>`

    }
}

function showContent() {
    for (let i = 0; i < 24; i++) {
        if(i != 5) {
        setTimeout(function(){$('#el' + i).removeClass('hidden');}, 100+i*15);
        }
      }
      setTimeout(function(){$('#el5').removeClass('frameHidden');}, 200);
}

function hideContent() {
    for (let i = 0; i < 24; i++) {
        if(i != 5) {
            setTimeout(function(){$('#el' + i).addClass('hidden');}, 100+i*15);
        }
      }
      setTimeout(function(){$('#el5').addClass('frameHidden');}, 200);
}

function switchThemeHelper() {
    setTimeout(hideContent, 1);
    setTimeout(closeDropdown, 1);
    setTimeout(switchTheme, 550);
    setTimeout(showContent, 750);
}

function openDropdown(event) {
    event.stopPropagation();
    document.getElementById("el3").onclick = closeDropdown;
    setTimeout(function(){$('#dropdown').removeClass('hidden');}, 1);
    setTimeout(function(){$('#link1').removeClass('hidden');}, 60);
    setTimeout(function(){$('#link2').removeClass('hidden');}, 100);
    setTimeout(function(){$('#link3').removeClass('hidden');}, 140);
    setTimeout(function(){$('#link4').removeClass('hidden');}, 180);
    setTimeout(function(){$('#dropdownIcon').addClass('rotated');}, 80);
}

function closeDropdown() {
    document.getElementById("el3").onclick = openDropdown;
    setTimeout(function(){$('#dropdownIcon').removeClass('rotated');}, 80);
    setTimeout(function(){$('#dropdown').addClass('hidden');}, 180);
    setTimeout(function(){$('#link1').addClass('hidden');}, 120);
    setTimeout(function(){$('#link2').addClass('hidden');}, 80);
    setTimeout(function(){$('#link3').addClass('hidden');}, 40);
    setTimeout(function(){$('#link4').addClass('hidden');}, 1);
}