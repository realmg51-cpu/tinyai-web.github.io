// ============================================
// TINYAI - Main JavaScript File
// Version: 1.2.0
// Last Updated: 2026-03-17
// ============================================

// ============================================
// LANGUAGE TRANSLATIONS
// ============================================
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.github': 'GitHub',
        'nav.releases': 'Releases',
        'nav.discord': 'Discord',
        
        // Hero
        'hero.title': '🤖 TinyAI',
        'hero.subtitle': 'A lightweight, rule-based AI written in C# for learning purposes',
        'hero.view_github': 'View on GitHub',
        'hero.join_discord': 'Join Discord',
        'hero.all_releases': 'All Releases',
        
        // Download section
        'download.title': '📥 Download TinyAI {version}',
        'download.subtitle': 'Self-contained executables - No .NET runtime required',
        'download.detecting_os': 'Detecting your operating system...',
        'download.button': 'Download',
        'download.recommended': '✨ Recommended for your system',
        'download.other_versions': 'View other versions (v1.1.0, v1.0.1, v1.0.0)',
        'download.checksums': 'Checksums',
        'download.instructions': 'How to use',
        'download.windows_instruction': 'Double-click the .exe file to run',
        'download.linux_instruction': 'chmod +x {filename} && ./{filename}',
        'download.macos_instruction': 'chmod +x {filename} && ./{filename}',
        
        // Features
        'features.title': '✨ Features',
        'feature.rule_based.title': 'Rule-Based AI',
        'feature.rule_based.desc': 'Simple pattern matching with predefined rules for learning AI concepts',
        'feature.csharp.title': 'Written in C#',
        'feature.csharp.desc': 'Clean, educational code to help you understand AI fundamentals',
        'feature.docker.title': 'Docker Support',
        'feature.docker.desc': 'Easy deployment with Docker containers for any platform',
        'feature.extendable.title': 'Extendable',
        'feature.extendable.desc': 'Add your own rules and patterns to customize the AI behavior',
        
        // How it works
        'howitworks.title': '💡 How It Works',
        'howitworks.step1.title': 'Pattern Matching',
        'howitworks.step1.desc': 'Input is processed and matched against predefined patterns',
        'howitworks.step2.title': 'Rule Application',
        'howitworks.step2.desc': 'Responses are triggered based on matching rules',
        'howitworks.step3.title': 'Easy Extension',
        'howitworks.step3.desc': 'The system can be extended by adding new rules',
        
        // Quick start
        'quickstart.title': '🚀 Quick Start',
        'quickstart.code': '# Clone the repository\ngit clone https://github.com/realmg51-cpu/TinyAI.git\n\n# Navigate to directory\ncd TinyAI\n\n# Build and run with .NET\ndotnet run\n\n# Or run the downloaded executable\n# Windows: .\\TinyAI-win-x64-v1.2.0.exe\n# Linux/macOS: chmod +x TinyAI-linux-x64-v1.2.0 && ./TinyAI-linux-x64-v1.2.0\n\n# Or use Docker\ndocker build -t tinyai .\ndocker run --rm tinyai',
        
        // Footer
        'footer.license': 'Apache 2.0 License',
        'footer.copyright': '© 2026 TinyAI - {license}',
        
        // OS Detection messages
        'os.windows': '✓ Windows detected - Showing recommended downloads for your system',
        'os.macos': '✓ macOS detected - Showing recommended downloads for your system',
        'os.linux': '✓ Linux detected - Showing recommended downloads for your system',
        'os.unknown': 'ℹ️ OS could not be detected - Showing all downloads',
        
        // Architecture detection
        'arch.x64': '64-bit',
        'arch.arm64': 'ARM64',
        'arch.unknown': 'Architecture unknown',
        
        // Download status
        'download.starting': 'Starting download...',
        'downloading': 'Downloading...',
        'download.complete': 'Download complete!',
        'download.error': 'Download failed. Please try again.',
        'download.retry': 'Retry',
        
        // Buttons
        'button.copy': 'Copy',
        'button.copied': 'Copied!',
        'button.close': 'Close',
        
        // Errors
        'error.network': 'Network error. Please check your connection.',
        'error.not_found': 'File not found.',
        'error.server': 'Server error. Please try again later.',
        
        // Loading
        'loading': 'Loading...',
        'loading.releases': 'Loading releases...',
    },
    
    vi: {
        // Navigation
        'nav.home': 'Trang chủ',
        'nav.github': 'GitHub',
        'nav.releases': 'Tải xuống',
        'nav.discord': 'Discord',
        
        // Hero
        'hero.title': '🤖 TinyAI',
        'hero.subtitle': 'Một AI đơn giản dựa trên luật lệ, được viết bằng C# cho mục đích học tập',
        'hero.view_github': 'Xem trên GitHub',
        'hero.join_discord': 'Tham gia Discord',
        'hero.all_releases': 'Tất cả bản phát hành',
        
        // Download section
        'download.title': '📥 Tải TinyAI {version}',
        'download.subtitle': 'Tệp thực thi độc lập - Không cần cài đặt .NET',
        'download.detecting_os': 'Đang phát hiện hệ điều hành của bạn...',
        'download.button': 'Tải xuống',
        'download.recommended': '✨ Đề xuất cho hệ thống của bạn',
        'download.other_versions': 'Xem các phiên bản khác (v1.1.0, v1.0.1, v1.0.0)',
        'download.checksums': 'Mã kiểm tra',
        'download.instructions': 'Hướng dẫn sử dụng',
        'download.windows_instruction': 'Nhấp đúp vào file .exe để chạy',
        'download.linux_instruction': 'chmod +x {filename} && ./{filename}',
        'download.macos_instruction': 'chmod +x {filename} && ./{filename}',
        
        // Features
        'features.title': '✨ Tính năng',
        'feature.rule_based.title': 'AI dựa trên luật',
        'feature.rule_based.desc': 'So khớp mẫu đơn giản với các luật có sẵn để học khái niệm AI',
        'feature.csharp.title': 'Viết bằng C#',
        'feature.csharp.desc': 'Mã nguồn sạch, mang tính giáo dục giúp bạn hiểu nền tảng AI',
        'feature.docker.title': 'Hỗ trợ Docker',
        'feature.docker.desc': 'Triển khai dễ dàng với container Docker trên mọi nền tảng',
        'feature.extendable.title': 'Có thể mở rộng',
        'feature.extendable.desc': 'Thêm luật và mẫu của riêng bạn để tùy chỉnh hành vi AI',
        
        // How it works
        'howitworks.title': '💡 Cách hoạt động',
        'howitworks.step1.title': 'So khớp mẫu',
        'howitworks.step1.desc': 'Đầu vào được xử lý và so khớp với các mẫu đã định nghĩa',
        'howitworks.step2.title': 'Áp dụng luật',
        'howitworks.step2.desc': 'Phản hồi được kích hoạt dựa trên các luật phù hợp',
        'howitworks.step3.title': 'Mở rộng dễ dàng',
        'howitworks.step3.desc': 'Hệ thống có thể được mở rộng bằng cách thêm luật mới',
        
        // Quick start
        'quickstart.title': '🚀 Bắt đầu nhanh',
        'quickstart.code': '# Clone repository\ngit clone https://github.com/realmg51-cpu/TinyAI.git\n\n# Vào thư mục\ncd TinyAI\n\n# Build và chạy với .NET\ndotnet run\n\n# Hoặc chạy file đã tải\n# Windows: .\\TinyAI-win-x64-v1.2.0.exe\n# Linux/macOS: chmod +x TinyAI-linux-x64-v1.2.0 && ./TinyAI-linux-x64-v1.2.0\n\n# Hoặc dùng Docker\ndocker build -t tinyai .\ndocker run --rm tinyai',
        
        // Footer
        'footer.license': 'Giấy phép Apache 2.0',
        'footer.copyright': '© 2026 TinyAI - {license}',
        
        // OS Detection messages
        'os.windows': '✓ Đã phát hiện Windows - Hiển thị bản tải phù hợp',
        'os.macos': '✓ Đã phát hiện macOS - Hiển thị bản tải phù hợp',
        'os.linux': '✓ Đã phát hiện Linux - Hiển thị bản tải phù hợp',
        'os.unknown': 'ℹ️ Không thể phát hiện hệ điều hành - Hiển thị tất cả',
        
        // Architecture detection
        'arch.x64': '64-bit',
        'arch.arm64': 'ARM64',
        'arch.unknown': 'Không xác định kiến trúc',
        
        // Download status
        'download.starting': 'Đang bắt đầu tải...',
        'downloading': 'Đang tải...',
        'download.complete': 'Tải hoàn tất!',
        'download.error': 'Tải thất bại. Vui lòng thử lại.',
        'download.retry': 'Thử lại',
        
        // Buttons
        'button.copy': 'Sao chép',
        'button.copied': 'Đã sao chép!',
        'button.close': 'Đóng',
        
        // Errors
        'error.network': 'Lỗi mạng. Vui lòng kiểm tra kết nối.',
        'error.not_found': 'Không tìm thấy file.',
        'error.server': 'Lỗi máy chủ. Vui lòng thử lại sau.',
        
        // Loading
        'loading': 'Đang tải...',
        'loading.releases': 'Đang tải bản phát hành...',
    }
};

// ============================================
// GLOBAL VARIABLES
// ============================================
let currentLang = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';
let osInfo = { os: 'unknown', arch: 'x64' };
let downloadQueue = [];
let isOnline = navigator.onLine;
let releaseData = null;

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function to limit function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Format bytes to human readable format
 */
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Show toast notification
 */
function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

/**
 * Copy text to clipboard
 */
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('Failed to copy:', err);
        return false;
    }
}

// ============================================
// THEME MANAGEMENT
// ============================================

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        currentTheme = savedTheme;
    } else if (systemPrefersDark) {
        currentTheme = 'dark';
    }
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
    
    // Trigger custom event for other components
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: currentTheme } }));
}

function updateThemeIcon() {
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        const sunIcon = themeBtn.querySelector('.fa-sun');
        const moonIcon = themeBtn.querySelector('.fa-moon');
        
        if (currentTheme === 'dark') {
            sunIcon.style.display = 'inline-block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline-block';
        }
    }
}

// ============================================
// LANGUAGE MANAGEMENT
// ============================================

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
    
    // Update elements with placeholders
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update download title with version
    const downloadTitle = document.querySelector('[data-i18n="download.title"]');
    if (downloadTitle) {
        const version = document.querySelector('.download-section').dataset.version || 'v1.2.0';
        downloadTitle.textContent = translations[lang]['download.title'].replace('{version}', version);
    }
    
    // Update OS detection message
    updateOSDetectionMessage();
    
    // Save language preference
    localStorage.setItem('language', lang);
    
    // Trigger custom event
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

function t(key, params = {}) {
    let text = translations[currentLang][key] || translations['en'][key] || key;
    
    // Replace parameters
    Object.keys(params).forEach(param => {
        text = text.replace(`{${param}}`, params[param]);
    });
    
    return text;
}

// ============================================
// OS DETECTION
// ============================================

function detectOS() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    
    let os = 'unknown';
    let arch = 'x64';
    
    // Detect OS
    if (/Windows/.test(userAgent)) {
        os = 'windows';
        
        // Detect Windows architecture
        if (userAgent.includes('ARM64') || userAgent.includes('arm64')) {
            arch = 'arm64';
        }
    } else if (/Mac/.test(platform)) {
        os = 'macos';
        
        // Check for Apple Silicon
        if (navigator.userAgentData?.getHighEntropyValues) {
            navigator.userAgentData.getHighEntropyValues(['architecture'])
                .then(values => {
                    if (values.architecture === 'arm') {
                        arch = 'arm64';
                        highlightRecommendedDownloads(os, arch);
                    }
                })
                .catch(() => {});
        } else if (/arm|Apple Silicon/.test(userAgent)) {
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

function updateOSDetectionMessage() {
    const osMessage = document.getElementById('os-message');
    if (!osMessage) return;
    
    if (osInfo.os === 'unknown') {
        osMessage.textContent = t('os.unknown');
    } else {
        osMessage.textContent = t(`os.${osInfo.os}`);
        
        // Add architecture info
        const archText = t(`arch.${osInfo.arch}`);
        osMessage.textContent += ` (${archText})`;
    }
}

function highlightRecommendedDownloads(os, arch) {
    // Remove existing recommendations
    document.querySelectorAll('.download-card').forEach(card => {
        card.classList.remove('recommended');
        
        // Remove existing badge
        const existingBadge = card.querySelector('.recommended-badge');
        if (existingBadge) existingBadge.remove();
    });
    
    if (os === 'unknown') return;
    
    // Find and highlight matching cards
    const matchingCards = document.querySelectorAll(`.download-card[data-os="${os}"]`);
    
    matchingCards.forEach(card => {
        const cardArch = card.dataset.arch;
        
        if (cardArch === arch || arch === 'unknown') {
            card.classList.add('recommended');
            
            // Add recommended badge
            const badge = document.createElement('div');
            badge.className = 'recommended-badge';
            badge.innerHTML = `<i class="fas fa-star"></i> ${t('download.recommended')}`;
            card.appendChild(badge);
        }
    });
}

// ============================================
// DOWNLOAD MANAGEMENT
// ============================================

async function fetchReleaseData() {
    try {
        const response = await fetch('https://api.github.com/repos/realmg51-cpu/TinyAI/releases/latest');
        if (!response.ok) throw new Error('Failed to fetch releases');
        
        const data = await response.json();
        releaseData = data;
        
        // Update download links with latest version
        updateDownloadLinks(data);
        
    } catch (error) {
        console.error('Error fetching release data:', error);
        showToast(t('error.network'), 'error');
    }
}

function updateDownloadLinks(releaseData) {
    // Update download buttons with correct URLs
    document.querySelectorAll('.download-btn').forEach(btn => {
        const os = btn.closest('.download-card')?.dataset.os;
        const arch = btn.closest('.download-card')?.dataset.arch;
        
        if (os && arch) {
            // Find matching asset in release data
            const asset = releaseData.assets.find(a => 
                a.name.includes(os) && a.name.includes(arch)
            );
            
            if (asset) {
                btn.href = asset.browser_download_url;
                btn.dataset.size = asset.size;
                
                // Update file size display
                const sizeElement = btn.closest('.download-card')?.querySelector('.file-size');
                if (sizeElement) {
                    sizeElement.textContent = formatBytes(asset.size);
                }
            }
        }
    });
}

function handleDownload(event) {
    const btn = event.currentTarget;
    const url = btn.href;
    const fileName = btn.closest('.download-card')?.querySelector('.file-name')?.textContent || 'TinyAI';
    
    event.preventDefault();
    
    // Show download starting notification
    showToast(t('download.starting'), 'info');
    
    // Add downloading state
    btn.classList.add('downloading');
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${t('downloading')}`;
    
    // Simulate download start (actual download happens via browser)
    setTimeout(() => {
        btn.classList.remove('downloading');
        btn.innerHTML = `<i class="fas fa-download"></i> ${t('download.button')}`;
        
        // Trigger actual download
        window.location.href = url;
        
        // Log download event
        logDownload(fileName, url);
    }, 1000);
}

function logDownload(fileName, url) {
    const downloadEvent = {
        fileName,
        url,
        timestamp: new Date().toISOString(),
        os: osInfo.os,
        arch: osInfo.arch,
        language: currentLang
    };
    
    console.log('Download event:', downloadEvent);
    
    // Store in localStorage for analytics
    const downloadHistory = JSON.parse(localStorage.getItem('downloadHistory') || '[]');
    downloadHistory.push(downloadEvent);
    localStorage.setItem('downloadHistory', JSON.stringify(downloadHistory.slice(-10))); // Keep last 10
}

// ============================================
// ANIMATIONS AND EFFECTS
// ============================================

function initAnimations() {
    // Add ripple effect to buttons
    document.querySelectorAll('.btn, .download-btn, .lang-btn, .theme-btn').forEach(btn => {
        btn.addEventListener('click', createRipple);
    });
    
    // Add hover effects
    document.querySelectorAll('.feature-card, .download-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
    
    // Add parallax effect on scroll
    window.addEventListener('scroll', debounce(handleParallax, 10));
    
    // Add typing effect to code block
    initTypingEffect();
    
    // Add scroll reveal animations
    initScrollReveal();
    
    // Add counter animations
    initCounters();
}

function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = 'ripple';
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function handleParallax() {
    const scrolled = window.pageYOffset;
    
    // Parallax for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
    
    // Parallax for floating elements
    document.querySelectorAll('.float-element').forEach((el, index) => {
        const speed = 0.05 + (index * 0.01);
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

function initTypingEffect() {
    const codeBlock = document.getElementById('quickstart-code');
    if (!codeBlock) return;
    
    const originalText = codeBlock.textContent;
    const lines = originalText.split('\n');
    
    // Clear code block
    codeBlock.textContent = '';
    
    let lineIndex = 0;
    let charIndex = 0;
    
    function typeLine() {
        if (lineIndex < lines.length) {
            const currentLine = lines[lineIndex];
            
            if (charIndex < currentLine.length) {
                codeBlock.textContent += currentLine.charAt(charIndex);
                charIndex++;
                setTimeout(typeLine, 5);
            } else {
                codeBlock.textContent += '\n';
                lineIndex++;
                charIndex = 0;
                setTimeout(typeLine, 20);
            }
        }
    }
    
    // Start typing when section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(typeLine, 500);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(document.querySelector('.quick-start'));
}

function initScrollReveal() {
    const elements = document.querySelectorAll('.feature-card, .download-card, .step, .section-title');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2, rootMargin: '50px' });
    
    elements.forEach(el => observer.observe(el));
}

function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = parseInt(counter.dataset.duration) || 2000;
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        
        let current = start;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Start counter when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(updateCounter);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// ============================================
// CODE BLOCK COPY FUNCTIONALITY
// ============================================

function initCodeCopy() {
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-btn';
        copyButton.innerHTML = `<i class="fas fa-copy"></i> ${t('button.copy')}`;
        
        block.style.position = 'relative';
        block.appendChild(copyButton);
        
        copyButton.addEventListener('click', async () => {
            const code = block.querySelector('code')?.textContent || block.textContent;
            
            if (await copyToClipboard(code)) {
                copyButton.innerHTML = `<i class="fas fa-check"></i> ${t('button.copied')}`;
                setTimeout(() => {
                    copyButton.innerHTML = `<i class="fas fa-copy"></i> ${t('button.copy')}`;
                }, 2000);
            } else {
                showToast(t('error.network'), 'error');
            }
        });
    });
}

// ============================================
// NETWORK STATUS
// ============================================

function initNetworkDetection() {
    window.addEventListener('online', () => {
        isOnline = true;
        showToast('You are back online!', 'success');
        fetchReleaseData(); // Refresh data
    });
    
    window.addEventListener('offline', () => {
        isOnline = false;
        showToast('You are offline. Some features may be limited.', 'warning');
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// LAZY LOADING
// ============================================

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// PERFORMANCE MONITORING
// ============================================

function initPerformanceMonitoring() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load time:', perfData.loadEventEnd - perfData.navigationStart, 'ms');
            }, 0);
        });
    }
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K - Focus search (if search exists)
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('input[type="search"]');
            if (searchInput) searchInput.focus();
        }
        
        // Ctrl/Cmd + D - Toggle dark mode
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            toggleTheme();
        }
        
        // Escape - Close modals
        if (e.key === 'Escape') {
            closeModals();
        }
    });
}

function closeModals() {
    document.querySelectorAll('.modal.show').forEach(modal => {
        modal.classList.remove('show');
    });
}

// ============================================
// MOUSE TRACKING EFFECTS
// ============================================

function initMouseEffects() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        hero.style.transform = `perspective(1000px) rotateY(${x * 2}deg) rotateX(${-y * 2}deg)`;
    });
    
    hero.addEventListener('mouseleave', () => {
        hero.style.transform = '';
    });
}

// ============================================
// CONFETTI EFFECT (EASTER EGG)
// ============================================

function initConfetti() {
    const brand = document.querySelector('.nav-brand');
    if (!brand) return;
    
    let confettiCount = 0;
    
    brand.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (confettiCount > 5) return; // Limit confetti
        
        for (let i = 0; i < 30; i++) {
            createConfetti();
        }
        
        confettiCount++;
        setTimeout(() => {
            confettiCount--;
        }, 5000);
    });
}

function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#43e97b'];
    const confetti = document.createElement('div');
    
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    confetti.style.width = Math.random() * 10 + 5 + 'px';
    confetti.style.height = confetti.style.width;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', async () => {
    console.log('🚀 TinyAI Website Initializing...');
    
    // Initialize core features
    initTheme();
    initAnimations();
    initCodeCopy();
    initNetworkDetection();
    initSmoothScroll();
    initLazyLoading();
    initPerformanceMonitoring();
    initKeyboardShortcuts();
    initMouseEffects();
    initConfetti();
    
    // OS Detection
    osInfo = detectOS();
    updateOSDetectionMessage();
    
    // Language
    switchLanguage(currentLang);
    
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Language toggle
    document.getElementById('lang-en')?.addEventListener('click', () => switchLanguage('en'));
    document.getElementById('lang-vi')?.addEventListener('click', () => switchLanguage('vi'));
    
    // Download buttons
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', handleDownload);
    });
    
    // Fetch latest release data
    if (isOnline) {
        await fetchReleaseData();
    }
    
    // Highlight recommended downloads after a short delay
    setTimeout(() => {
        highlightRecommendedDownloads(osInfo.os, osInfo.arch);
    }, 1000);
    
    // Add loading class to OS detection
    const osDetection = document.getElementById('os-detection');
    if (osDetection) {
        osDetection.classList.add('loading');
        setTimeout(() => {
            osDetection.classList.remove('loading');
        }, 1000);
    }
    
    console.log('✅ TinyAI Website Initialized');
});

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    showToast('An error occurred. Please refresh the page.', 'error');
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    showToast('An error occurred. Please try again.', 'error');
});

// ============================================
// CSS FOR DYNAMIC ELEMENTS
// ============================================

// Add necessary CSS for dynamic elements
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
        z-index: 100;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .toast {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 24px;
        background: var(--bg-card);
        color: var(--text-primary);
        border-radius: 12px;
        box-shadow: var(--card-shadow);
        display: flex;
        align-items: center;
        gap: 12px;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        z-index: 9999;
        border: 1px solid var(--border-color);
        backdrop-filter: blur(10px);
    }
    
    .toast.show {
        transform: translateX(0);
    }
    
    .toast-success {
        border-left: 4px solid #43e97b;
    }
    
    .toast-error {
        border-left: 4px solid #f5576c;
    }
    
    .toast-warning {
        border-left: 4px solid #fa709a;
    }
    
    .toast-info {
        border-left: 4px solid #4facfe;
    }
    
    .copy-code-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 5px 10px;
        background: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: 6px;
        color: var(--text-primary);
        cursor: pointer;
        font-size: 12px;
        display: flex;
        align-items: center;
        gap: 5px;
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .code-block:hover .copy-code-btn {
        opacity: 1;
    }
    
    .recommended-badge {
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
        color: white;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
        z-index: 10;
        box-shadow: 0 4px 10px rgba(67, 233, 123, 0.3);
        animation: pulse 2s infinite;
    }
    
    .recommended-badge i {
        margin-right: 5px;
    }
    
    .confetti {
        position: fixed;
        top: -10px;
        z-index: 10000;
        animation: confetti-fall linear forwards;
        pointer-events: none;
    }
    
    @keyframes confetti-fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
    
    .revealed {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    .downloading {
        pointer-events: none;
        opacity: 0.7;
    }
`;

document.head.appendChild(style);
