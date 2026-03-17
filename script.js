// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (systemPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// OS Detection
function detectOS() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    
    let os = 'unknown';
    let arch = 'x64';
    
    if (/Windows/.test(userAgent)) {
        os = 'windows';
        if (userAgent.includes('ARM64')) arch = 'arm64';
    } else if (/Mac/.test(platform)) {
        os = 'macos';
        if (navigator.userAgent.includes('ARM')) arch = 'arm64';
    } else if (/Linux/.test(platform)) {
        os = 'linux';
        if (userAgent.includes('aarch64')) arch = 'arm64';
    }
    
    return { os, arch };
}

function highlightRecommendedDownloads() {
    const { os, arch } = detectOS();
    const osMessage = document.getElementById('os-message');
    
    if (osMessage) {
        const lang = document.documentElement.lang || 'en';
        if (os === 'unknown') {
            osMessage.textContent = translations[lang]?.os?.unknown || 'OS could not be detected';
        } else {
            osMessage.textContent = `✓ ${os.charAt(0).toUpperCase() + os.slice(1)} detected - ${arch} architecture`;
        }
    }
    
    document.querySelectorAll('.download-card').forEach(card => {
        card.classList.remove('recommended');
    });
    
    if (os !== 'unknown') {
        document.querySelectorAll(`.download-card[data-os="${os}"]`).forEach(card => {
            if (card.dataset.arch === arch) {
                card.classList.add('recommended');
            }
        });
    }
}

// Translation data
const translations = {
    en: {
        'hero.title': '🤖 TinyAI',
        'hero.subtitle': 'A lightweight, rule-based AI written in C# for learning purposes',
        'hero.view_github': 'View on GitHub',
        'hero.join_discord': 'Join Discord',
        'hero.all_releases': 'All Releases',
        'download.title': '📥 Download TinyAI {version}',
        'download.subtitle': 'Self-contained executables - No .NET runtime required',
        'download.detecting_os': 'Detecting your operating system...',
        'download.button': 'Download',
        'download.other_versions': 'View other versions',
        'features.title': '✨ Features',
        'howitworks.title': '💡 How It Works',
        'quickstart.title': '🚀 Quick Start',
        'footer.copyright': '© 2026 TinyAI - Apache 2.0 License',
        'footer.made_with': '✨ Made with ❤️ for the TinyAI community',
        'os.unknown': 'OS could not be detected'
    },
    vi: {
        'hero.title': '🤖 TinyAI',
        'hero.subtitle': 'Một AI đơn giản dựa trên luật lệ, được viết bằng C# cho mục đích học tập',
        'hero.view_github': 'Xem trên GitHub',
        'hero.join_discord': 'Tham gia Discord',
        'hero.all_releases': 'Tất cả bản phát hành',
        'download.title': '📥 Tải TinyAI {version}',
        'download.subtitle': 'Tệp thực thi độc lập - Không cần cài đặt .NET',
        'download.detecting_os': 'Đang phát hiện hệ điều hành của bạn...',
        'download.button': 'Tải xuống',
        'download.other_versions': 'Xem các phiên bản khác',
        'features.title': '✨ Tính năng',
        'howitworks.title': '💡 Cách hoạt động',
        'quickstart.title': '🚀 Bắt đầu nhanh',
        'footer.copyright': '© 2026 TinyAI - Giấy phép Apache 2.0',
        'footer.made_with': '✨ Được tạo bằng ❤️ cho cộng đồng TinyAI',
        'os.unknown': 'Không thể phát hiện hệ điều hành'
    }
};

// Apply translations
function applyTranslations() {
    const lang = document.documentElement.lang || 'en';
    const version = document.querySelector('.download-section')?.dataset.version || 'v1.2.0';
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        let text = translations[lang]?.[key] || translations.en[key] || key;
        
        if (key === 'download.title') {
            text = text.replace('{version}', version);
        }
        
        element.textContent = text;
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
    
    highlightRecommendedDownloads();
    applyTranslations();
    
    const osDetection = document.getElementById('os-detection');
    if (osDetection) {
        osDetection.classList.add('loading');
        setTimeout(() => osDetection.classList.remove('loading'), 1000);
    }
    
    // Discord link tracking
    document.querySelectorAll('a[href*="discord.gg"]').forEach(link => {
        link.addEventListener('click', () => {
            console.log('Discord link clicked');
        });
    });
});
