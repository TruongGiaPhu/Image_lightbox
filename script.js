const gallery = document.querySelectorAll('.gallery .image'),
    previewBox = document.querySelector('.preview-box'),
    previewImg = previewBox.querySelector('img'),
    currentImage = previewBox.querySelector('.current-img'),
    totalImg = previewBox.querySelector('.total-img'),
    closeIcon = document.querySelector('.icon');

window.onload = () => {
    for (let i = 0; i < gallery.length; i++) {
        let newindex = i;
        totalImg.textContent = gallery.length;
        gallery[i].onclick = () => {
            function preview() {
                let selectedImgUrl = gallery[newindex].querySelector('img').src;
                previewImg.src = selectedImgUrl;
                currentImage.textContent = newindex + 1;
            }
            preview();
            previewBox.classList.add('show');
            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');

            prevBtn.onclick = () => {
                newindex--;
                if (newindex <= 0) {
                    newindex = gallery.length - 1;
                    preview();
                } else {
                    preview();
                }
            };

            nextBtn.onclick = () => {
                if (newindex == gallery.length - 1) {
                    newindex = 0;
                    preview();
                } else {
                    newindex++;
                    preview();
                }
            };
        };

        closeIcon.onclick = () => {
            previewBox.classList.remove('show');
        };
    }

    // for (let i = 0; i < gallery.length; i++) {
    //     let newindex = i;
    //     let clickImgIndex;
    //     gallery[i].onclick = () => {
    //         clickImgIndex = newindex;
    //         totalImg.textContent = gallery.length;

    //         function preview() {
    //             let selectedImgUrl = gallery[newindex].querySelector('img').src;
    //             previewImg.src = selectedImgUrl;
    //             currentImage.textContent = newindex + 1;
    //         }
    //         preview();
    //         const prevBtn = document.querySelector('.prev');
    //         const nextBtn = document.querySelector('.next');
    //         if (newindex == 0) {
    //             prevBtn.style.display = 'none';
    //         }
    //         if (newindex >= gallery.length - 1) {
    //             nextBtn.style.display = 'none';
    //         }

    //         prevBtn.onclick = () => {
    //             newindex--;
    //             if (newindex == 0) {
    //                 preview();
    //                 prevBtn.style.display = 'none';
    //             } else {
    //                 preview();
    //                 nextBtn.style.display = 'block';
    //             }
    //         };

    //         nextBtn.onclick = () => {
    //             newindex++;
    //             if (newindex >= gallery.length - 1) {
    //                 preview();
    //                 nextBtn.style.display = 'none';
    //             } else {
    //                 preview();
    //                 prevBtn.style.display = 'block';
    //             }
    //         };

    //         previewBox.classList.add('show');

    //         closeIcon.onclick = () => {
    //             newindex = clickImgIndex;
    //             prevBtn.style.display = 'block';
    //             nextBtn.style.display = 'block';
    //             previewBox.classList.remove('show');
    //         };
    //     };
    // }
};
