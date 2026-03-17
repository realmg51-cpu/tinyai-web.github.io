// Language translations
const translations = {
    en: {
        // Hero
        hero_title: "🤖 TinyAI",
        hero_subtitle: "A lightweight, rule-based AI written in C# for learning purposes",
        
        // Navigation
        view_github: "View on GitHub",
        join_discord: "Join Discord",
        all_releases: "All Releases",
        
        // Download section
        download_title: "📥 Download TinyAI v1.2.0",
        download_subtitle: "Self-contained executables - No .NET runtime required",
        detecting_os: "Detecting your operating system...",
        download: "Download",
        other_versions: "View other versions (v1.1.0, v1.0.1, v1.0.0)",
        
        // Features
        features_title: "✨ Features",
        feature1_title: "Rule-Based AI",
        feature1_desc: "Simple pattern matching with predefined rules for learning AI concepts",
        feature2_title: "Written in C#",
        feature2_desc: "Clean, educational code to help you understand AI fundamentals",
        feature3_title: "Docker Support",
        feature3_desc: "Easy deployment with Docker containers for any platform",
        feature4_title: "Extendable",
        feature4_desc: "Add your own rules and patterns to customize the AI behavior",
        
        // How it works
        howitworks_title: "💡 How It Works",
        step1_title: "Pattern Matching",
        step1_desc: "Input is processed and matched against predefined patterns",
        step2_title: "Rule Application",
        step2_desc: "Responses are triggered based on matching rules",
        step3_title: "Easy Extension",
        step3_desc: "The system can be extended by adding new rules",
        
        // Quick start
        quickstart_title: "🚀 Quick Start",
        
        // Footer
        license: "Apache 2.0 License",
        
        // OS Detection messages
        os_windows: "✓ Windows detected - Showing recommended downloads for your system",
        os_macos: "✓ macOS detected - Showing recommended downloads for your system",
        os_linux: "✓ Linux detected - Showing recommended downloads for your system",
        os_unknown: "ℹ️ OS could not be detected - Showing all downloads"
    },
    vi: {
        // Hero
        hero_title: "🤖 TinyAI",
        hero_subtitle: "Một AI đơn giản dựa trên luật lệ, được viết bằng C# cho mục đích học tập",
        
        // Navigation
        view_github: "Xem trên GitHub",
        join_discord: "Tham gia Discord",
        all_releases: "Tất cả bản phát hành",
        
        // Download section
        download_title: "📥 Tải TinyAI v1.2.0",
        download_subtitle: "Tệp thực thi độc lập - Không cần cài đặt .NET",
        detecting_os: "Đang phát hiện hệ điều hành của bạn...",
        download: "Tải xuống",
        other_versions: "Xem các phiên bản khác (v1.1.0, v1.0.1, v1.0.0)",
        
        // Features
        features_title: "✨ Tính năng",
        feature1_title: "AI dựa trên luật",
        feature1_desc: "So khớp mẫu đơn giản với các luật có sẵn để học khái niệm AI",
        feature2_title: "Viết bằng C#",
        feature2_desc: "Mã nguồn sạch, mang tính giáo dục giúp bạn hiểu nền tảng AI",
        feature3_title: "Hỗ trợ Docker",
        feature3_desc: "Triển khai dễ dàng với container Docker trên mọi nền tảng",
        feature4_title: "Có thể mở rộng",
        feature4_desc: "Thêm luật và mẫu của riêng bạn để tùy chỉnh hành vi AI",
        
        // How it works
        howitworks_title: "💡 Cách hoạt động",
        step1_title: "So khớp mẫu",
        step1_desc: "Đầu vào được xử lý và so khớp với các mẫu đã định nghĩa",
        step2_title: "Áp dụng luật",
        step2_desc: "Phản hồi được kích hoạt dựa trên các luật phù hợp",
        step3_title: "Mở rộng dễ dàng",
        step3_desc: "Hệ thống có thể được mở rộng bằng cách thêm luật mới",
        
        // Quick start
        quickstart_title: "🚀 Bắt đầu nhanh",
        
        // Footer
        license: "Giấy phép Apache 2.0",
        
        // OS Detection messages
        os_windows: "✓ Đã phát hiện Windows - Hiển thị bản tải phù hợp cho hệ thống của bạn",
        os_macos: "✓ Đã phát hiện macOS - Hiển thị bản tải phù hợp cho hệ thống của bạn",
        os_linux: "✓ Đã phát hiện Linux - Hiển thị bản tải phù hợp cho hệ thống của bạn",
        os_unknown: "ℹ️ Không thể phát hiện hệ điều hành - Hiển thị tất cả bản tải"
    }
};

// Current language
let currentLang = 'en';

// Theme management
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

// Language management
function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update hero title separately (it has an ID)
    document.getElementById('hero-title').textContent = translations[lang].hero_title;
    document.getElementById('hero-subtitle').textContent = translations[lang].hero_subtitle;
    
    // Save language preference
    localStorage.setItem('language', lang);
}

// OS Detection and download recommendations
function detectOS() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    
    let os = 'unknown';
    let arch = 'x64'; // Default to x64
    
    // Detect OS
    if (/Windows/.test(userAgent)) {
        os = 'windows';
    } else if (/Mac/.test(platform)) {
        os = 'macos';
        // Check for Apple Silicon
        if (/arm|Apple Silicon/.test(navigator.userAgentData?.getHighEntropyValues?.toString() || '')) {
            arch = 'arm64';
        }
    } else if (/Linux/.test(platform)) {
        os = 'linux';
        // Check for ARM
        if (/arm|aarch64/.test(userAgent)) {
            arch = 'arm64';
        }
    }
    
    return { os, arch };
}

function highlightRecommendedDownloads() {
    const { os, arch } = detectOS();
    const osMessage = document.getElementById('os-message');
    
    // Update OS detection message
    if (os === 'unknown') {
        osMessage.textContent = translations[currentLang].os_unknown;
    } else {
        osMessage.textContent = translations[currentLang][`os_${os}`];
    }
    
    // Remove any existing recommendations
    document.querySelectorAll('.download-card').forEach(card => {
        card.classList.remove('recommended');
    });
    
    // Highlight recommended downloads
    if (os !== 'unknown') {
        document.querySelectorAll(`.download-card[data-os="${os}"]`).forEach(card => {
            const cardArch = card.dataset.arch;
            // Add 'recommended' class to matching architecture, or all if unknown
            if (cardArch === arch || arch === 'unknown') {
                card.classList.add('recommended');
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Initialize language
    const savedLang = localStorage.getItem('language') || 'en';
    switchLanguage(savedLang);
    
    // Theme toggle button
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Language toggle buttons
    document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
    document.getElementById('lang-vi').addEventListener('click', () => switchLanguage('vi'));
    
    // OS Detection and download recommendations
    highlightRecommendedDownloads();
    
    // Add loading animation while detecting
    const osDetection = document.getElementById('os-detection');
    osDetection.classList.add('loading');
    setTimeout(() => {
        osDetection.classList.remove('loading');
    }, 1000);
    
    // Handle download button clicks (optional analytics)
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const version = btn.dataset.version;
            const fileName = btn.closest('.download-card')?.querySelector('.file-name')?.textContent;
            console.log(`Download started: ${fileName} (${version})`);
            // You could send this to analytics here
        });
    });
});
