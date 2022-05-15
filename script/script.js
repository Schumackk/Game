//бургер
let innerSubMenu = document.getElementsByClassName("submenu1")[0]
let outerSubMenu = document.getElementsByClassName("submenu3")[0]
let gamesSubMenu = document.getElementsByClassName("submenu2")[0]
let innerButton = document.getElementsByClassName("inner")[0]
let outerButton = document.getElementsByClassName("outer")[0]
let gamesButton = document.getElementsByClassName("games")[0]
closeInnerSubMenu()
closeOuterSubMenu()
closeGamesSubMenu()
function openInnerSubMenu() {
    innerSubMenu.style.visibility = "visible"
    innerSubMenu.style.opacity = "1"
    innerSubMenu.style.height = "50px"
    closeOuterSubMenu()
    closeGamesSubMenu()
}
function openOuterSubMenu() {
    outerSubMenu.style.visibility = "visible"
    outerSubMenu.style.opacity = "1"
    outerSubMenu.style.height = "50px"
    closeInnerSubMenu()
    closeGamesSubMenu()
}
function openGamesSubMenu() {
    gamesSubMenu.style.visibility = "visible"
    gamesSubMenu.style.opacity = "1"
    gamesSubMenu.style.height = "50px"
    closeInnerSubMenu()
    closeOuterSubMenu()
}
function closeInnerSubMenu() {
    innerSubMenu.style.height = "0px"
    innerSubMenu.style.opacity = "0"
    innerSubMenu.style.visibility = "hidden"
}
function closeOuterSubMenu() {
    outerSubMenu.style.height = "0px"
    outerSubMenu.style.opacity = "0"
    outerSubMenu.style.visibility = "hidden"
}
function closeGamesSubMenu() {
    gamesSubMenu.style.height = "0px"
    gamesSubMenu.style.opacity = "0"
    gamesSubMenu.style.visibility = "hidden"
}


//менюшки
let mouse=document.getElementsByClassName("mouse_images")[0]
let keyboard=document.getElementsByClassName("keyboard_images")[0]
let monitor=document.getElementsByClassName("monitor_images")[0]
let system=document.getElementsByClassName("system-block_images")[0]

function mouse_zoom(){
    mouse.style.display="flex"
    keyboard.style.display="none"
    monitor.style.display="none"
    system.style.display="none"
}

function monitor_zoom(){
    mouse.style.display="none"
    monitor.style.display="flex"
    keyboard.style.display="none"
    system.style.display="none"
}

function keyboard_zoom(){
    monitor.style.display="none"
    mouse.style.display="none"
    keyboard.style.display="flex"
    system.style.display="none"
}
function system_zoom(){
    monitor.style.display="none"
    mouse.style.display="none"
     keyboard.style.display="none"
    system.style.display="flex"
}

function nozoom(){
    system.style.display="none"
    monitor.style.display="none"
    mouse.style.display="none"
    keyboard.style.display="none"
}


//выбор монитора

let monitor1=document.getElementsByClassName("mon_img1")[0]
let monitor2=document.getElementsByClassName("mon_img2")[0]
let monitor3=document.getElementsByClassName("mon_img3")[0]
let monitor4=document.getElementsByClassName("mon_img4")[0]
let keyboard1=document.getElementsByClassName("key_img1")[0]
let keyboard2=document.getElementsByClassName("key_img2")[0]
let keyboard3=document.getElementsByClassName("key_img3")[0]
let keyboard4=document.getElementsByClassName("key_img4")[0]
let system1=document.getElementsByClassName("sys_img1")[0]
let system2=document.getElementsByClassName("sys_img2")[0]
let system3=document.getElementsByClassName("sys_img3")[0]
let system4=document.getElementsByClassName("sys_img4")[0]
let mouse1=document.getElementsByClassName("mouse_img1")[0]
let mouse2=document.getElementsByClassName("mouse_img2")[0]
let mouse3=document.getElementsByClassName("mouse_img3")[0]
let mouse4=document.getElementsByClassName("mouse_img4")[0]


let show_monitor1=document.getElementsByClassName("mon_show_img1")[0]
let show_monitor2=document.getElementsByClassName("mon_show_img2")[0]
let show_monitor3=document.getElementsByClassName("mon_show_img3")[0]
let show_monitor4=document.getElementsByClassName("mon_show_img4")[0]
let show_keyboard1=document.getElementsByClassName("key_show_img1")[0]
let show_keyboard2=document.getElementsByClassName("key_show_img2")[0]
let show_keyboard3=document.getElementsByClassName("key_show_img3")[0]
let show_keyboard4=document.getElementsByClassName("key_show_img4")[0]
let show_system1=document.getElementsByClassName("sys_show_img1")[0]
let show_system2=document.getElementsByClassName("sys_show_img2")[0]
let show_system3=document.getElementsByClassName("sys_show_img3")[0]
let show_system4=document.getElementsByClassName("sys_show_img4")[0]
let show_mouse1=document.getElementsByClassName("mouse_show_img1")[0]
let show_mouse2=document.getElementsByClassName("mouse_show_img2")[0]
let show_mouse3=document.getElementsByClassName("mouse_show_img3")[0]
let show_mouse4=document.getElementsByClassName("mouse_show_img4")[0]


function monitor_choise1(){
    monitor1.style.display="flex"
    monitor2.style.display="none"
    monitor3.style.display="none"
    monitor4.style.display="none"

    show_monitor1.style.display="block"
    show_monitor2.style.display="none"
    show_monitor3.style.display="none"
    show_monitor4.style.display="none"

}
function monitor_choise2(){
    monitor1.style.display="none"
    monitor2.style.display="flex"
    monitor3.style.display="none"
    monitor4.style.display="none"

    show_monitor1.style.display="none"
    show_monitor2.style.display="block"
    show_monitor3.style.display="none"
    show_monitor4.style.display="none"
}
function monitor_choise3(){
    monitor1.style.display="none"
    monitor2.style.display="none"
    monitor3.style.display="flex"
    monitor4.style.display="none"

    show_monitor1.style.display="none"
    show_monitor2.style.display="none"
    show_monitor3.style.display="flex"
    show_monitor4.style.display="none"
}
function monitor_choise4(){
    monitor1.style.display="none"
    monitor2.style.display="none"
    monitor3.style.display="none"
    monitor4.style.display="flex"

    show_monitor1.style.display="none"
    show_monitor2.style.display="none"
    show_monitor3.style.display="none"
    show_monitor4.style.display="block"
}

function keyboard_choise1(){
    keyboard1.style.display="flex"
    keyboard2.style.display="none"
    keyboard3.style.display="none"
    keyboard4.style.display="none"

    show_keyboard1.style.display="block"
    show_keyboard2.style.display="none"
    show_keyboard3.style.display="none"
    show_keyboard4.style.display="none"
}
function keyboard_choise2(){
    keyboard1.style.display="none"
    keyboard2.style.display="flex"
    keyboard3.style.display="none"
    keyboard4.style.display="none"

    show_keyboard1.style.display="none"
    show_keyboard2.style.display="block"
    show_keyboard3.style.display="none"
    show_keyboard4.style.display="none"
}
function keyboard_choise3(){
    keyboard1.style.display="none"
    keyboard2.style.display="none"
    keyboard3.style.display="flex"
    keyboard4.style.display="none"

    show_keyboard1.style.display="none"
    show_keyboard2.style.display="none"
    show_keyboard3.style.display="block"
    show_keyboard4.style.display="none"
}
function keyboard_choise4(){
    keyboard1.style.display="none"
    keyboard2.style.display="none"
    keyboard3.style.display="none"
    keyboard4.style.display="flex"

    show_keyboard1.style.display="none"
    show_keyboard2.style.display="none"
    show_keyboard3.style.display="none"
    show_keyboard4.style.display="block"
}

function system_choise1(){
    system1.style.display="flex"
    system2.style.display="none"
    system3.style.display="none"
    system4.style.display="none"

    show_system1.style.display="block"
    show_system2.style.display="none"
    show_system3.style.display="none"
    show_system4.style.display="none"
}
function system_choise2(){
    system1.style.display="none"
    system2.style.display="flex"
    system3.style.display="none"
    system4.style.display="none"

    show_system1.style.display="none"
    show_system2.style.display="flex"
    show_system3.style.display="none"
    show_system4.style.display="none"
}
function system_choise3(){
    system1.style.display="none"
    system2.style.display="none"
    system3.style.display="flex"
    system4.style.display="none"

    show_system1.style.display="none"
    show_system2.style.display="none"
    show_system3.style.display="flex"
    show_system4.style.display="none"
}
function system_choise4(){
    system1.style.display="none"
    system2.style.display="none"
    system3.style.display="none"
    system4.style.display="flex"

    show_system1.style.display="none"
    show_system2.style.display="none"
    show_system3.style.display="none"
    show_system4.style.display="block"
}

function mouse_choise1(){
    mouse1.style.display="flex"
    mouse2.style.display="none"
    mouse3.style.display="none"
    mouse4.style.display="none"

    show_mouse1.style.display="block"
    show_mouse2.style.display="none"
    show_mouse3.style.display="none"
    show_mouse4.style.display="none"
}
function mouse_choise2(){
    mouse1.style.display="none"
    mouse2.style.display="flex"
    mouse3.style.display="none"
    mouse4.style.display="none"

    show_mouse1.style.display="none"
    show_mouse2.style.display="block"
    show_mouse3.style.display="none"
    show_mouse4.style.display="none"
}
function mouse_choise3(){
    mouse1.style.display="none"
    mouse2.style.display="none"
    mouse3.style.display="flex"
    mouse4.style.display="none"

    show_mouse1.style.display="none"
    show_mouse2.style.display="none"
    show_mouse3.style.display="block"
    show_mouse4.style.display="none"
}
function mouse_choise4(){
    mouse1.style.display="none"
    mouse2.style.display="none"
    mouse3.style.display="none"
    mouse4.style.display="flex"

    show_mouse1.style.display="none"
    show_mouse2.style.display="none"
    show_mouse3.style.display="none"
    show_mouse4.style.display="block"
}

let show_result_block=document.getElementsByClassName("show_result")[0]
function show_result(){
    show_result_block.style.display="flex"
    
}
function hide_result(){
    show_result_block.style.display="none"
}
