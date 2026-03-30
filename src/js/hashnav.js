'use strict';

/*=========================
  Hash Navigation
  ===========================*/
s.hashnav = {
    init: function () {
        if (!s.params.hashnav) return;
        s.hashnav.initialized = true;
        let hash = document.location.hash.replace('#', '');
        if (!hash) return;
        const speed = 0;
        for (let i = 0, length = s.slides.length; i < length; i++) {
            const slide = s.slides.eq(i);
            const slideHash = slide.attr('data-hash');
            if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
                const index = slide.index();
                s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
            }
        }
    },
    setHash: function () {
        if (!s.hashnav.initialized || !s.params.hashnav) return;
        document.location.hash = s.slides.eq(s.activeIndex).attr('data-hash') || '';
    }
};