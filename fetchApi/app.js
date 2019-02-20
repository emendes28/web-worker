const mudaImg = () => {
    const myImage = document.querySelector('.my-image');
    fetch('https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg')
        .then(res => res.blob())
        .then(res => {
            const objectURL = URL.createObjectURL(res);
            myImage.src = objectURL;
    });
};