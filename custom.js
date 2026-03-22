(function() {
    // Sayfa yüklendikten sonra çalıştır
    document.addEventListener('DOMContentLoaded', function() {

        // ==============================
        // 1. DRAG-TO-SCROLL (Sürükle-Kaydır)
        // ==============================
        function enableDragScroll(selector) {
            document.querySelectorAll(selector).forEach(function(el) {
                var isDown = false;
                var startX;
                var scrollLeft;

                el.style.cursor = 'grab';

                el.addEventListener('mousedown', function(e) {
                    isDown = true;
                    el.style.cursor = 'grabbing';
                    startX = e.pageX - el.offsetLeft;
                    scrollLeft = el.scrollLeft;
                    e.preventDefault();
                });

                el.addEventListener('mouseleave', function() {
                    isDown = false;
                    el.style.cursor = 'grab';
                });

                el.addEventListener('mouseup', function() {
                    isDown = false;
                    el.style.cursor = 'grab';
                });

                el.addEventListener('mousemove', function(e) {
                    if (!isDown) return;
                    e.preventDefault();
                    var x = e.pageX - el.offsetLeft;
                    var walk = (x - startX) * 2;
                    el.scrollLeft = scrollLeft - walk;
                });
            });
        }

        // Tüm yatay kaydırılabilir alanlara uygula
        enableDragScroll('.product-banner-container-bc');

        // ==============================
        // 2. GOOGLE FONT YÜKLE (Ysabeau + Jost)
        // ==============================
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&family=Ysabeau:ital,wght@0,1..1000;1,1..1000&display=swap';
        document.head.appendChild(link);

        // ==============================
        // 3. SIDEBAR MENÜYÜ AÇIK HALE GETİR
        // ==============================
        // Collapsed panelleri aç
        document.querySelectorAll('[id^="react-collapsed-panel"]').forEach(function(panel) {
            panel.style.display = 'block';
            panel.style.height = 'auto';
            panel.style.overflow = 'visible';
            panel.setAttribute('aria-hidden', 'false');
        });

        // Gizli alt menüleri göster
        document.querySelectorAll('.hiddenAsideSubMenu').forEach(function(el) {
            el.classList.remove('hiddenAsideSubMenu');
        });

        // Sidebar genişliğini ayarla
        var sidebar = document.querySelector('.asideMenuContent');
        if (sidebar) sidebar.style.width = '220px';

        var compact = document.querySelector('.asideMenuCompact');
        if (compact) compact.style.width = '220px';

        // Menü başlıklarını göster
        document.querySelectorAll('.asideMenuOpenNavTitle').forEach(function(el) {
            el.style.display = 'inline';
        });

    });
})();
