<!DOCTYPE html>
<html class="scroll-smooth" lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kisan Dhristi</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        /* Reset and Base */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Keyframe Animations */
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        /* Body and Background */
        body {
            font-family: 'Poppins', 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #0f172a, #1e293b, #0f172a);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
            min-height: 100vh;
            padding: 0;
            position: relative;
            overflow-x: hidden;
        }

        body::before {
            content: '';
            position: fixed;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(34, 197, 94, 0.08) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: float 20s infinite linear;
            pointer-events: none;
            z-index: 0;
        }

        /* Hero Header */
        .hero-header {
            position: relative;
            min-height: 600px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: linear-gradient(135deg, #047857, #059669, #10b981, #22c55e);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
        }

        .hero-header::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 20% 50%, rgba(132, 204, 22, 0.2) 0%, transparent 50%),
                        radial-gradient(circle at 80% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 50%);
            animation: pulse 8s ease-in-out infinite;
        }

        .hero-header::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100px;
            background: linear-gradient(to top, #0f172a, transparent);
            z-index: 1;
        }

        .hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
            padding: 40px 20px;
            animation: fadeInUp 0.8s ease-out;
        }

        .hero-badge {
            display: inline-block;
            background: rgba(17, 24, 39, 0.6);
            backdrop-filter: blur(20px);
            padding: 12px 24px;
            border-radius: 50px;
            border: 1px solid rgba(132, 204, 22, 0.3);
            margin-bottom: 30px;
            animation: slideIn 0.8s ease-out;
        }

        .hero-badge span {
            color: #a3e635;
            font-weight: 600;
            font-size: 0.9em;
            letter-spacing: 1px;
        }

        .hero-title {
            font-size: 5em;
            font-weight: 700;
            background: linear-gradient(135deg, #a3e635, #84cc16, #22c55e);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 20px;
            animation: float 4s ease-in-out infinite;
            text-shadow: 0 0 40px rgba(132, 204, 22, 0.3);
        }

        .hero-subtitle {
            color: rgba(255, 255, 255, 0.95);
            font-size: 1.8em;
            font-weight: 300;
            margin-bottom: 40px;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }

        .hero-subtitle strong {
            color: #a3e635;
            font-weight: 600;
        }

        .hero-button {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: linear-gradient(135deg, #84cc16, #22c55e);
            color: #0f172a;
            font-weight: 700;
            padding: 18px 40px;
            border-radius: 50px;
            border: 2px solid #a3e635;
            font-size: 1.1em;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(132, 204, 22, 0.3);
        }

        .hero-button:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 15px 40px rgba(132, 204, 22, 0.5);
            background: linear-gradient(135deg, #a3e635, #84cc16);
        }

        /* Container */
        .main-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            position: relative;
            z-index: 1;
        }

        /* Section Card */
        .section-card {
            background: rgba(17, 24, 39, 0.85);
            backdrop-filter: blur(20px);
            padding: 40px 35px;
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(34, 197, 94, 0.2);
            margin-bottom: 40px;
            position: relative;
            overflow: hidden;
            animation: fadeInUp 0.8s ease-out;
        }

        .section-card::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, #22c55e, #84cc16, #10b981, #22c55e);
            border-radius: 20px;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.5s ease;
            background-size: 300% 300%;
            animation: gradientShift 6s ease infinite;
        }

        .section-card:hover::before {
            opacity: 0.3;
        }

        /* Section Header */
        .section-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 25px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(34, 197, 94, 0.2);
        }

        .section-icon {
            width: 6px;
            height: 50px;
            background: linear-gradient(to bottom, #a3e635, #22c55e);
            border-radius: 10px;
            flex-shrink: 0;
        }

        .section-header h2 {
            font-size: 2.2em;
            background: linear-gradient(135deg, #a3e635, #84cc16, #22c55e);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
        }

        /* Section Content */
        .section-text {
            color: #d1d5db;
            font-size: 1.1em;
            line-height: 1.8;
            padding-left: 21px;
            border-left: 2px solid rgba(132, 204, 22, 0.3);
            margin-bottom: 20px;
        }

        .section-text:last-child {
            margin-bottom: 0;
        }

        .section-text strong {
            color: #a3e635;
            font-weight: 600;
        }

        /* Features Grid */
        .features-section {
            padding: 60px 0;
        }

        .features-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .features-header h2 {
            font-size: 2.5em;
            background: linear-gradient(135deg, #a3e635, #84cc16, #22c55e);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
            margin-bottom: 15px;
        }

        .features-divider {
            width: 120px;
            height: 3px;
            background: linear-gradient(90deg, transparent, #84cc16, transparent);
            margin: 0 auto;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .feature-card {
            background: rgba(17, 24, 39, 0.85);
            backdrop-filter: blur(20px);
            padding: 35px 25px;
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(34, 197, 94, 0.2);
            text-align: center;
            transition: all 0.4s ease;
            opacity: 0;
            animation: fadeInUp 1s ease-out forwards;
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, #22c55e, #84cc16, #10b981, #22c55e);
            border-radius: 20px;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.5s ease;
            background-size: 300% 300%;
            animation: gradientShift 6s ease infinite;
        }

        .feature-card:hover {
            transform: translateY(-8px);
            border-color: rgba(132, 204, 22, 0.4);
        }

        .feature-card:hover::before {
            opacity: 0.2;
        }

        .feature-card:nth-child(1) { animation-delay: 0.1s; }
        .feature-card:nth-child(2) { animation-delay: 0.2s; }
        .feature-card:nth-child(3) { animation-delay: 0.3s; }
        .feature-card:nth-child(4) { animation-delay: 0.4s; }
        .feature-card:nth-child(5) { animation-delay: 0.5s; }

        .feature-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #84cc16, #22c55e);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
            transition: all 0.4s ease;
            box-shadow: 0 10px 30px rgba(132, 204, 22, 0.3);
        }

        .feature-card:hover .feature-icon {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 0 15px 40px rgba(132, 204, 22, 0.5);
            animation: pulse 2s infinite;
        }

        .feature-icon svg {
            width: 40px;
            height: 40px;
            color: #0f172a;
            stroke-width: 2.5;
        }

        .feature-title {
            color: #a3e635;
            font-size: 1.3em;
            font-weight: 700;
            margin-bottom: 12px;
        }

        .feature-description {
            color: #9ca3af;
            font-size: 0.95em;
            line-height: 1.6;
        }

        /* Applications List */
        .applications-list {
            display: flex;
            flex-direction: column;
            gap: 18px;
            padding-left: 21px;
        }

        .application-item {
            display: flex;
            align-items: flex-start;
            gap: 18px;
            padding: 18px;
            background: rgba(31, 41, 55, 0.5);
            border-radius: 12px;
            border: 1px solid rgba(34, 197, 94, 0.2);
            transition: all 0.3s ease;
            animation: slideIn 0.5s ease-out;
        }

        .application-item:hover {
            transform: translateX(10px);
            border-color: #22c55e;
            background: rgba(31, 41, 55, 0.7);
            box-shadow: 0 10px 30px rgba(34, 197, 94, 0.2);
        }

        .application-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #84cc16, #22c55e);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(132, 204, 22, 0.3);
        }

        .application-item:hover .application-icon {
            transform: scale(1.15);
            box-shadow: 0 8px 20px rgba(132, 204, 22, 0.5);
        }

        .application-icon svg {
            width: 24px;
            height: 24px;
            color: #0f172a;
            stroke-width: 3;
        }

        .application-text {
            color: #d1d5db;
            font-size: 1.1em;
            flex: 1;
            padding-top: 5px;
            transition: color 0.3s ease;
        }

        .application-item:hover .application-text {
            color: #a3e635;
        }

        /* Footer */
        .footer {
            background: linear-gradient(135deg, #064e3b, #1e293b, #0f172a);
            padding: 50px 20px;
            text-align: center;
            position: relative;
            overflow: hidden;
            border-top: 3px solid #84cc16;
            margin-top: 60px;
        }

        .footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, #84cc16, transparent);
        }

        .footer-content {
            position: relative;
            z-index: 1;
            max-width: 800px;
            margin: 0 auto;
        }

        .footer-title {
            font-size: 2em;
            background: linear-gradient(135deg, #a3e635, #84cc16, #22c55e);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
            margin-bottom: 15px;
        }

        .footer-text {
            color: #d1d5db;
            font-size: 1.1em;
            margin-bottom: 10px;
        }

        .footer-copyright {
            color: #6b7280;
            font-size: 0.9em;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .hero-title {
                font-size: 3em;
            }

            .hero-subtitle {
                font-size: 1.3em;
            }

            .section-card {
                padding: 30px 20px;
            }

            .section-header h2 {
                font-size: 1.8em;
            }

            .features-grid {
                grid-template-columns: 1fr;
            }

            .application-item {
                flex-direction: row;
            }
        }

        @media (max-width: 480px) {
            .hero-title {
                font-size: 2.5em;
            }

            .hero-subtitle {
                font-size: 1.1em;
            }

            .hero-button {
                padding: 15px 30px;
                font-size: 1em;
            }

            .section-card {
                padding: 25px 15px;
            }

            .section-header h2 {
                font-size: 1.5em;
            }

            .section-text {
                font-size: 1em;
            }

            .feature-icon {
                width: 70px;
                height: 70px;
            }

            .footer-title {
                font-size: 1.6em;
            }
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 12px;
        }

        ::-webkit-scrollbar-track {
            background: #0f172a;
        }

        ::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #84cc16, #22c55e);
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #a3e635, #84cc16);
        }
    </style>
</head>

<body>

    <header class="hero-header">
        <div class="hero-content">
            <div class="hero-badge">
                <span>🌾 AI-POWERED AGRICULTURE</span>
            </div>
            
            <h1 class="hero-title">Kisan Dhristi</h1>
            
            <p class="hero-subtitle">
                Transforming Crop Health with <strong>AI & Technology</strong>
            </p>
    
            <a href="#solution" class="hero-button">
                <span>Learn More</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 20px; height: 20px;">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
            </a>
        </div>
    </header>

    <div class="main-container">
        <section id="problem" style="padding: 60px 0;">
            <div class="section-card">
                <div class="section-header">
                    <div class="section-icon"></div>
                    <h2>Problem Statement</h2>
                </div>
                
                <p class="section-text">
                    Millions of farmers lose crops every year to diseases. Small patches can spread quickly, and identifying the problem is often <strong>slow, inaccurate, and requires unavailable experts</strong>. This leads to major losses, especially for small farmers, and reduces yield and income.
                </p>
            </div>
        </section>

        <section id="solution" style="padding: 20px 0 60px;">
            <div class="section-card">
                <div class="section-header">
                    <div class="section-icon"></div>
                    <h2>Solution</h2>
                </div>
                
                <p class="section-text">
                    Kisan Dhristi lets farmers <strong>identify crop diseases instantly</strong>. By taking a photo of an affected leaf and uploading it to our website, farmers can see what's wrong and get simple steps to treat it.
                </p>
                
                <p class="section-text">
                    Machine learning detects the disease, and the platform provides instructions in the farmer's own language. For more details, an AI chat offers in-depth guidance, while a dedicated section ensures verified information is always available.
                </p>
            </div>
        </section>

        <section id="features" class="features-section">
            <div class="features-header">
                <h2>Key Features</h2>
                <div class="features-divider"></div>
            </div>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </div>
                    <h3 class="feature-title">Instant Disease Detection</h3>
                    <p class="feature-description">Upload a photo and get immediate AI-powered diagnosis</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                    </div>
                    <h3 class="feature-title">Step-by-Step Treatment</h3>
                    <p class="feature-description">Clear, actionable instructions to treat identified diseases</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                        </svg>
                    </div>
                    <h3 class="feature-title">Multilingual Support</h3>
                    <p class="feature-description">AI guidance available in your local language</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                    </div>
                    <h3 class="feature-title">Verified Information</h3>
                    <p class="feature-description">Trusted agricultural knowledge from experts</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h3 class="feature-title">Early Detection</h3>
                    <p class="feature-description">Prevent crop loss with timely identification</p>
                </div>
            </div>
        </section>

        <section id="applications" style="padding: 20px 0 60px;">
            <div class="section-card">
                <div class="section-header">
                    <div class="section-icon"></div>
                    <h2>Applications</h2>
                </div>
                
                <div class="applications-list">
                    <div class="application-item">
                        <div class="application-icon">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <span class="application-text">Quick crop disease identification</span>
                    </div>
                    
                    <div class="application-item">
                        <div class="application-icon">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <span class="application-text">Reduced losses due to delayed diagnosis</span>
                    </div>
                    
                    <div class="application-item">
                        <div class="application-icon">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <span class="application-text">Access to agricultural knowledge in local languages</span>
                    </div>
                    
                    <div class="application-item">
                        <div class="application-icon">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <span class="application-text">Support for proactive disease management</span>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <footer class="footer">
        <div class="footer-content">
            <h3 class="footer-title">Kisan Dhristi</h3>
            <p class="footer-text">Empowering farmers with technology.</p>
            <p class="footer-copyright">© 2025 Kisan Dhristi. All rights reserved.</p>
        </div>
    </footer>

</body>
</html>