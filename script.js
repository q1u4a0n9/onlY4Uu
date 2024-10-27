function changeImage() {
    const qualitySelect = document.getElementById('qualitySelect');
    const qualityImage = document.getElementById('qualityImage');
    const selectedQuality = qualitySelect.value;

    // Mapping between quality and image file name
    const qualityImageMap = {
        '144p': '144p.png',
        '240p': '240p2.png',
        '480p': '480p2.png',
        '720p': '720p2.png',
        '1080p': 'ptn.canva.png'
        
    };

    // Change image source based on selected quality
    qualityImage.src = qualityImageMap[selectedQuality];
}