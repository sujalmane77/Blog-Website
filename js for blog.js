function changetheme() {
    const bodyElement = document.getElementById("change");
    const headerElement = document.getElementById("header");
    const footerElement = document.getElementById("footer");
    const contentElement = document.getElementById("content");
    const aboutElement = document.getElementById("about");
    const postsElement = document.getElementById("posts");
    const themebtn = document.getElementById("btn1");
    const isLightTheme = bodyElement.style.backgroundColor === 'rgb(234, 250, 241)' || bodyElement.style.backgroundColor === ''; // Soft Mint Green

    if (isLightTheme) {
        // Dark theme settings
        bodyElement.style.backgroundColor = '#333';
        bodyElement.style.color = '#fff'; // Text color for dark mode
        headerElement.style.backgroundColor = '#006d77'; // Dark header background
        headerElement.style.color = '#fff'; // Light header text
        footerElement.style.backgroundColor = '#006d77'; // Dark footer background
        footerElement.style.color = '#fff'; // Light footer text

        // Dark mode for sections
        contentElement.style.backgroundColor = '#444'; 
        contentElement.style.color = '#fff';
        aboutElement.style.backgroundColor = '#555'; 
        aboutElement.style.color = '#fff';
        postsElement.style.backgroundColor = '#555';
        postsElement.style.color = '#fff';

        themebtn.innerHTML="☀️"
    } else {
        // Light theme settings
        bodyElement.style.backgroundColor = '#eafaf1';
        bodyElement.style.color = '#333'; // Text color for light mode
        headerElement.style.backgroundColor = '#006d77'; // Light header background
        headerElement.style.color = '#fff'; // Dark header text
        footerElement.style.backgroundColor = '#006d77'; // Light footer background
        footerElement.style.color = '#fff'; // Dark footer text

        // Light mode for sections
        contentElement.style.backgroundColor = '#f0f0f0';
        contentElement.style.color = '#333';
        aboutElement.style.backgroundColor = '#fff';
        aboutElement.style.color = '#333';
        postsElement.style.backgroundColor = '#fff';
        postsElement.style.color = '#333';

        themebtn.innerHTML = "🌙";
    }
}

