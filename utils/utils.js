export function handleIconData(data, icon, turnImg = true) {
    icon.style.display = 'block';
    icon.alt = data.name;

    turnImg ? icon.src = data.img : icon.src = data.imgSide;
}