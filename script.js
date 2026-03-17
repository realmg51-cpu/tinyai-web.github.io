// Translation data - ĐẶT LÊN ĐẦU FILE
const translations = {
    en: {
        'hero.view_github': 'View on GitHub',
        'hero.join_discord': 'Join Discord',
        'hero.all_releases': 'All Releases',
        'download.title': '📥 Download TinyAI v1.2.0',
        'download.subtitle': 'Self-contained executables - No .NET runtime required',
        'download.detecting_os': 'Detecting your operating system...',
        'download.button': 'Download',
        'download.other_versions': 'View other versions (v1.1.0, v1.0.1, v1.0.0)',
        'features.title': '✨ Features',
        'howitworks.title': '💡 How It Works',
        'quickstart.title': '🚀 Quick Start',
        'footer.copyright': '© 2026 TinyAI - Apache 2.0 License',
        'footer.made_with': '✨ Made with ❤️ for the TinyAI community',
        'os.windows': '✓ Windows detected - Showing recommended downloads for your system',
        'os.macos': '✓ macOS detected - Showing recommended downloads for your system',
        'os.linux': '✓ Linux detected - Showing recommended downloads for your system',
        'os.unknown': 'ℹ️ OS could not be detected - Showing all downloads'
    },
    vi: {
        'hero.view_github': 'Xem trên GitHub',
        'hero.join_discord': 'Tham gia Discord',
        'hero.all_releases': 'Tất cả bản phát hành',
        'download.title': '📥 Tải TinyAI v1.2.0',
        'download.subtitle': 'Tệp thực thi độc lập - Không cần cài đặt .NET',
        'download.detecting_os': 'Đang phát hiện hệ điều hành của bạn...',
        'download.button': 'Tải xuống',
        'download.other_versions': 'Xem các phiên bản khác (v1.1.0, v1.0.1, v1.0.0)',
        'features.title': '✨ Tính năng',
        'howitworks.title': '💡 Cách hoạt động',
        'quickstart.title': '🚀 Bắt đầu nhanh',
        'footer.copyright': '© 2026 TinyAI - Giấy phép Apache 2.0',
        'footer.made_with': '✨ Được tạo bằng ❤️ cho cộng đồng TinyAI',
        'os.windows': '✓ Đã phát hiện Windows - Hiển thị bản tải phù hợp',
        'os.macos': '✓ Đã phát hiện macOS - Hiển thị bản tải phù hợp',
        'os.linux': '✓ Đã phát hiện Linux - Hiển thị bản tải phù hợp',
        'os.unknown': 'ℹ️ Không thể phát hiện hệ điều hành - Hiển thị tất cả'
    }
};

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

// Language Management
function switchLanguage(lang) {
    // Update active buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Set language attribute
    document.documentElement.lang = lang;
    
    // Save to localStorage
    localStorage.setItem('preferred-language', lang);
    
    // Apply translations immediately
    applyTranslations();
    
    // Update OS detection message
    updateOSDetectionMessage();
}

// Apply translations to all elements
function applyTranslations() {
    const lang = document.documentElement.lang || 'en';
    console.log('Applying translations for:', lang); // Debug
    
    // Get current translations object
    const currentTranslations = translations[lang] || translations.en;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (currentTranslations[key]) {
            element.textContent = currentTranslations[key];
            console.log(`Translated ${key} -> ${currentTranslations[key]}`); // Debug
        } else {
            console.warn(`No translation found for key: ${key}`);
        }
    });
    
    // Update elements with data-i18n-html attribute (for HTML content)
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        if (currentTranslations[key]) {
            element.innerHTML = currentTranslations[key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (currentTranslations[key]) {
            element.placeholder = currentTranslations[key];
        }
    });
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

function updateOSDetectionMessage() {
    const osMessage = document.getElementById('os-message');
    if (!osMessage) return;
    
    const { os, arch } = detectOS();
    const lang = document.documentElement.lang || 'en';
    const currentTranslations = translations[lang] || translations.en;
    
    if (os === 'unknown') {
        osMessage.textContent = currentTranslations['os.unknown'] || 'OS could not be detected';
    } else {
        osMessage.textContent = currentTranslations[`os.${os}`] || `${os} detected`;
        // Add architecture info
        const archText = arch === 'arm64' ? 'ARM64' : '64-bit';
        osMessage.textContent += ` (${archText})`;
    }
}

function highlightRecommendedDownloads() {
    const { os, arch } = detectOS();
    
    // Remove existing recommendations
    document.querySelectorAll('.download-card').forEach(card => {
        card.classList.remove('recommended');
    });
    
    // Highlight matching cards
    if (os !== 'unknown') {
        document.querySelectorAll(`.download-card[data-os="${os}"]`).forEach(card => {
            if (card.dataset.arch === arch) {
                card.classList.add('recommended');
            }
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing...'); // Debug
    
    // Get saved language or detect browser language
    const savedLang = localStorage.getItem('preferred-language');
    const browserLang = navigator.language.startsWith('vi') ? 'vi' : 'en';
    const defaultLang = savedLang || browserLang;
    
    // Set initial language
    document.documentElement.lang = defaultLang;
    
    // Initialize theme
    initTheme();
    
    // Set active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === defaultLang) {
            btn.classList.add('active');
        }
    });
    
    // Apply translations
    applyTranslations();
    
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.currentTarget.dataset.lang;
            switchLanguage(lang);
        });
    });
    
    // OS Detection
    updateOSDetectionMessage();
    highlightRecommendedDownloads();
    
    // OS detection loading animation
    const osDetection = document.getElementById('os-detection');
    if (osDetection) {
        osDetection.classList.add('loading');
        setTimeout(() => osDetection.classList.remove('loading'), 1000);
    }
    
    console.log('Initialization complete'); // Debug
});
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
