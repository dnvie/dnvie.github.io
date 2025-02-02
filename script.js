function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
        document.getElementById('el4').innerHTML = `<span class="material-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960">
                      <path fill="currentColor" d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM70-445.93q-14.42 0-24.24-9.88-9.83-9.87-9.83-24.37 0-14.49 9.83-24.19 9.82-9.7 24.24-9.7h100q14.42 0 24.24 9.88 9.83 9.87 9.83 24.37 0 14.49-9.83 24.19-9.82 9.7-24.24 9.7H70Zm720 0q-14.42 0-24.24-9.88-9.83-9.87-9.83-24.37 0-14.49 9.83-24.19 9.82-9.7 24.24-9.7h100q14.42 0 24.24 9.88 9.83 9.87 9.83 24.37 0 14.49-9.83 24.19-9.82 9.7-24.24 9.7H790Zm-310.18-310q-14.49 0-24.19-9.83-9.7-9.82-9.7-24.24v-100q0-14.42 9.88-24.24 9.87-9.83 24.37-9.83 14.49 0 24.19 9.83 9.7 9.82 9.7 24.24v100q0 14.42-9.88 24.24-9.87 9.83-24.37 9.83Zm0 720q-14.49 0-24.19-9.83-9.7-9.82-9.7-24.24v-100q0-14.42 9.88-24.24 9.87-9.83 24.37-9.83 14.49 0 24.19 9.83 9.7 9.82 9.7 24.24v100q0 14.42-9.88 24.24-9.87 9.83-24.37 9.83ZM237.13-674.89l-57-56q-10.2-10.2-9.82-24.47.37-14.28 9.72-24.61 10.09-10.1 24.25-10.1 14.15 0 24.59 10.2l56.24 57q9.19 10.2 9.19 23.87 0 13.67-9.19 23.37-9.44 9.7-23.61 9.93-14.17.24-24.37-9.19Zm494 494.76-56.24-57q-9.19-10.2-9.19-24.13 0-13.92 9.69-23.61 9.7-10.2 23.49-10.2t23.99 10.2l57 55.76q10.2 10.2 9.82 24.47-.37 14.28-9.72 24.61-10.09 10.1-24.25 10.1-14.15 0-24.59-10.2Zm-56-494.76q-10.2-10.2-10.2-23.99t10.2-23.99l55.76-57q10.2-10.2 24.47-9.82 14.28.37 24.61 9.72 10.1 10.09 10.1 24.25 0 14.15-10.2 24.59l-57 56.24q-9.2 9.19-23.23 9.19-14.04 0-24.51-9.19Zm-495.1 494.86q-10.1-10.09-10.1-24.25 0-14.15 10.2-24.59l57-56.24q10-10.19 23.65-10.19 13.65 0 23.7 10.19 10.59 10.2 10.59 23.99t-10.2 23.99l-55.76 57q-10.2 10.2-24.47 9.82-14.28-.37-24.61-9.72Z"/>
                    </svg>`;
        document.getElementById('logo').innerHTML = `<img src="/Assets/logoDark.svg" alt="">`;
    } else {
        document.getElementById('el4').innerHTML = `<span class="material-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960">
                      <path fill="currentColor" d="M480.24-117.37q-152.15 0-257.51-105.24Q117.37-327.85 117.37-480q0-132.13 75.55-226.01 75.56-93.88 203.36-124.47 22.15-5.95 37.71-2.43 15.55 3.52 24.75 14.52 9.19 10.24 9.89 25.96.7 15.71-6.59 37.39-6.61 22.28-10.77 44.49-4.16 22.2-4.16 44.81 0 91.2 63.96 155.15 63.95 63.96 155.39 63.96 22.84 0 44.67-3.3 21.83-3.31 42.87-9.4 23.43-7.04 40.03-5.2 16.6 1.83 26.6 11.03 9.76 9.2 12.28 25.39 2.52 16.2-3.43 39.11-30.59 118.13-123.63 194.88-93.05 76.75-225.61 76.75Z"/>
                    </svg>`;
        document.getElementById('logo').innerHTML = `<img src="/Assets/logoLight.svg" alt="">`;
    }
}

function switchTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('data-theme', newTheme);
}

window.onload = function() {
    const savedTheme = localStorage.getItem('data-theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(systemPrefersDark ? 'dark' : 'light');
    }
    setTimeout(showContent, 650);
};

function showContent() {
    for (let i = 0; i < 28; i++) {
        if(i != 5) {
        setTimeout(function(){$('#el' + i).removeClass('hidden');}, 100+i*10);
        }
      }
      setTimeout(function(){$('#el5').removeClass('frameHidden');}, 200);
}

function hideContent() {
    for (let i = 0; i < 28; i++) {
        if(i != 5) {
            setTimeout(function(){$('#el' + i).addClass('hidden');}, 100+i*10);
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
    setTimeout(function(){$('#dropdownIcon').addClass('rotated');}, 1);
}

function closeDropdown() {
    document.getElementById("el3").onclick = openDropdown;
    setTimeout(function(){$('#dropdownIcon').removeClass('rotated');}, 1);
    setTimeout(function(){$('#dropdown').addClass('hidden');}, 80);
    setTimeout(function(){$('#link1').addClass('hidden');}, 40);
    setTimeout(function(){$('#link2').addClass('hidden');}, 1);
}