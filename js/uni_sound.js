var sound = new Pizzicato.Sound({
    source: 'file',
    options: { path: './audio/back.mp3' }
}, function() {
    console.log('sound file loaded!');
});
