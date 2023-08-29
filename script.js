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
    setTimeout(switchTheme, 550);
    setTimeout(showContent, 750);
}