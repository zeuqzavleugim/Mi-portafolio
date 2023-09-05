function botones(pagina){
    switch(pagina){
        case 'nombre':
            window.location.reload();
            break;
        case 'uridec':
            var win = window.open("https://github.com/zeuqzavleugim/sistemaUridec", "_blank");
            win.focus;
            break;
        case 'pagUridec':
            var win = window.open("https://github.com/zeuqzavleugim/pagina_uridec", "_blank");
            win.focus;
            break;
        case 'pagina_pagUridec':
            var win = window.open("https://zeuqzavleugim.github.io/pagina_uridec/", "_blank");
            win.focus;
            break;
        case 'paint':
            var win = window.open("https://github.com/zeuqzavleugim/paint", "_blank");
            win.focus;
            break;
        case 'pag_paint':
            var win = window.open("https://zeuqzavleugim.github.io/paint/", "_blank");
            win.focus;
            break;
        case 'documentos':
            var win = window.open("https://drive.google.com/drive/folders/1ekr6QDu3qypBBTG08FqkOTcmKsfdgXhR?usp=drive_link", "_blank");
            win.focus;
            break;
        case 'github':
            var win = window.open("https://github.com/zeuqzavleugim", "_blank");
            win.focus;
            break;
        case 'cv':
            var win = window.open("https://drive.google.com/file/d/1h0iyDFvY2C4K6mwDy6YSAbjxpwfcMXQl/view?usp=sharing", "_blank");
            win.focus;
            break;
        case 'intellij':
            var win = window.open("https://www.jetbrains.com/idea/", "_blank");
            win.focus;
            break;
        case 'visual':
            var win = window.open("https://code.visualstudio.com/", "_blank");
            win.focus;
            break;
        case 'eclipse':
            var win = window.open("https://eclipseide.org/", "_blank");
            win.focus;
            break;
    }
}
