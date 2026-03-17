---
layout: default
title: TinyAI - Rule-Based AI
description: A lightweight, rule-based AI written in C# for learning purposes
permalink: /
---

<!-- Hero Section -->
<section class="hero">
    <div class="container">
        <div class="hero-content">
            <h1 data-i18n="hero.title">🤖 TinyAI</h1>
            <p class="subtitle" data-i18n="hero.subtitle">
                A lightweight, rule-based AI written in C# for learning purposes
            </p>
            
            <div class="quick-actions">
                <a href="https://github.com/realmg51-cpu/TinyAI" target="_blank" class="btn btn-primary">
                    <i class="fab fa-github"></i> <span data-i18n="hero.view_github">View on GitHub</span>
                </a>
                <a href="{{ site.discord_invite }}" target="_blank" class="btn btn-discord">
                    <i class="fab fa-discord"></i> <span data-i18n="hero.join_discord">Join Discord</span>
                </a>
                <a href="https://github.com/realmg51-cpu/TinyAI/releases" target="_blank" class="btn btn-outline">
                    <i class="fas fa-download"></i> <span data-i18n="hero.all_releases">All Releases</span>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Download Section -->
<section id="download" class="download-section">
    {% include download-grid.html %}
</section>

<!-- Features Section -->
<section id="features" class="features">
    <div class="container">
        <h2 class="section-title" data-i18n="features.title">✨ Features</h2>
        {% include features-grid.html %}
    </div>
</section>

<!-- How It Works Section -->
<section id="how-it-works" class="how-it-works">
    <div class="container">
        <h2 class="section-title" data-i18n="howitworks.title">💡 How It Works</h2>
        {% include steps.html %}  <!-- Đảm bảo tên file là steps.html -->
    </div>
</section>

<!-- Quick Start Section -->
<section class="quick-start">
    <div class="container">
        <h2 class="section-title" data-i18n="quickstart.title">🚀 Quick Start</h2>
        <div class="code-block">
            <pre><code id="quickstart-code" data-i18n="quickstart.code"># Clone the repository
git clone https://github.com/realmg51-cpu/TinyAI.git

# Navigate to directory
cd TinyAI

# Build and run with .NET
dotnet run</code></pre>
        </div>
    </div>
</section>
