(function(doc, win) {

    var docEle = doc.documentElement,
        dpr = Math.min(win.devicePixelRatio, 1),
        scale = 1 / dpr,

        resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';

    var metaEle = doc.createElement('meta');
    metaEle.name = 'viewport';
    metaEle.content = 'width=device-width,initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale + ',user-scalable=no';
    docEle.firstElementChild.appendChild(metaEle);

    var recalCulate = function() {
        var width = docEle.clientWidth;
        docEle.style.fontSize = 10 * (width / 375) + 'px';
    };

    recalCulate();

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvent, recalCulate, false);
})(document, window);