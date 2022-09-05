export function handleIconData(data, icon) {
    icon.style.display = 'block';
    icon.src = data.img;
    icon.alt = data.name;
}