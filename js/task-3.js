function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2; // Горизонтальний падінг для обох сторін
    const borderWidth = parseFloat(border) * 2; // Бордер для обох сторін

    return contentWidth + paddingWidth + borderWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
