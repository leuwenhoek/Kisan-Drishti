<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Plant Diseases in India</title>
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
      50% { transform: translateY(-10px); }
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

    /* Container */
    .main-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 20px;
      position: relative;
      z-index: 1;
    }

    /* Page Header */
    .page-header {
      text-align: center;
      margin-bottom: 60px;
      animation: fadeInUp 0.8s ease-out;
    }

    .page-title {
      font-size: 3em;
      font-weight: 700;
      background: linear-gradient(135deg, #a3e635, #84cc16, #22c55e);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 15px;
    }

    .page-subtitle {
      color: #9ca3af;
      font-size: 1.1em;
      font-weight: 300;
    }

    .title-divider {
      width: 150px;
      height: 3px;
      background: linear-gradient(90deg, transparent, #84cc16, transparent);
      margin: 20px auto 0;
    }

    /* Disease Cards */
    .diseases-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 30px;
      animation: fadeInUp 1s ease-out;
    }

    .disease-card {
      background: rgba(17, 24, 39, 0.85);
      backdrop-filter: blur(20px);
      border-radius: 20px;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(34, 197, 94, 0.2);
      overflow: hidden;
      transition: all 0.4s ease;
      position: relative;
      animation: slideIn 0.6s ease-out;
    }

    .disease-card::before {
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

    .disease-card:hover {
      transform: translateY(-8px);
      border-color: rgba(132, 204, 22, 0.4);
    }

    .disease-card:hover::before {
      opacity: 0.3;
    }

    /* Card Image */
    .disease-image-wrapper {
      width: 100%;
      height: 280px;
      overflow: hidden;
      position: relative;
      background: rgba(31, 41, 55, 0.5);
    }

    .disease-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .disease-card:hover .disease-image {
      transform: scale(1.08);
    }

    .image-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .disease-card:hover .image-overlay {
      opacity: 1;
    }

    /* Card Content */
    .disease-content {
      padding: 30px;
    }

    .disease-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 1px solid rgba(34, 197, 94, 0.2);
    }

    .disease-icon {
      width: 6px;
      height: 40px;
      background: linear-gradient(to bottom, #a3e635, #22c55e);
      border-radius: 10px;
      flex-shrink: 0;
    }

    .disease-title {
      font-size: 1.5em;
      font-weight: 700;
      color: #a3e635;
    }

    /* Disease Info List */
    .disease-info {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .info-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 12px;
      background: rgba(31, 41, 55, 0.5);
      border-radius: 10px;
      border: 1px solid rgba(34, 197, 94, 0.15);
      transition: all 0.3s ease;
    }

    .info-item:hover {
      background: rgba(31, 41, 55, 0.7);
      border-color: rgba(132, 204, 22, 0.3);
      transform: translateX(5px);
    }

    .info-icon {
      width: 20px;
      height: 20px;
      background: linear-gradient(135deg, #84cc16, #22c55e);
      border-radius: 50%;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2px;
    }

    .info-icon::after {
      content: '•';
      color: #0f172a;
      font-size: 1.2em;
      font-weight: bold;
    }

    .info-text {
      color: #d1d5db;
      font-size: 0.95em;
      line-height: 1.6;
      flex: 1;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .diseases-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      .main-container {
        padding: 40px 15px;
      }

      .page-title {
        font-size: 2.2em;
      }

      .disease-image-wrapper {
        height: 240px;
      }

      .disease-content {
        padding: 25px 20px;
      }

      .disease-title {
        font-size: 1.3em;
      }
    }

    @media (max-width: 480px) {
      .page-title {
        font-size: 1.8em;
      }

      .page-subtitle {
        font-size: 1em;
      }

      .disease-image-wrapper {
        height: 200px;
      }

      .disease-content {
        padding: 20px 15px;
      }

      .disease-title {
        font-size: 1.2em;
      }

      .info-text {
        font-size: 0.9em;
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
  <div class="main-container">
    <div class="page-header">
      <h1 class="page-title">Major Plant Diseases in India</h1>
      <p class="page-subtitle">Comprehensive guide to common crop diseases and management</p>
      <div class="title-divider"></div>
    </div>

    <div class="diseases-grid">

      <!-- Cassava -->
      <div class="disease-card">
        <div class="disease-image-wrapper">
          <img class="disease-image" src="/Photos/cassava_diesease.jpg" alt="Cassava Leaf Disease">
          <div class="image-overlay"></div>
        </div>
        <div class="disease-content">
          <div class="disease-header">
            <div class="disease-icon"></div>
            <h2 class="disease-title">Cassava Leaf Disease</h2>
          </div>
          <div class="disease-info">
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Affects cassava crops mainly in southern India, particularly Kerala and Tamil Nadu.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Common diseases include Cassava Mosaic Virus and Bacterial Blight.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Causes leaf yellowing, curling, and reduced tuber yield.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Managed by using disease-free cuttings and resistant varieties.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Rice -->
      <div class="disease-card">
        <div class="disease-image-wrapper">
          <img class="disease-image" src="/Photos/Rice_Leaf_Diesease.jpg" alt="Rice Leaf Disease">
          <div class="image-overlay"></div>
        </div>
        <div class="disease-content">
          <div class="disease-header">
            <div class="disease-icon"></div>
            <h2 class="disease-title">Rice Leaf Diseases</h2>
          </div>
          <div class="disease-info">
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Majorly affects rice crops across eastern and southern India.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Common diseases: Rice Blast, Bacterial Leaf Blight, and Sheath Blight.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Leads to drying of leaves, brown spots, and poor grain filling.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Control methods include crop rotation and maintaining field hygiene.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Potato -->
      <div class="disease-card">
        <div class="disease-image-wrapper">
          <img class="disease-image" src="/Photos/Potato_leaf_diesease.jpg" alt="Potato Leaf Disease">
          <div class="image-overlay"></div>
        </div>
        <div class="disease-content">
          <div class="disease-header">
            <div class="disease-icon"></div>
            <h2 class="disease-title">Potato Leaf Diseases</h2>
          </div>
          <div class="disease-info">
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Prevalent in northern and eastern India, especially in Punjab and West Bengal.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Major diseases include Late Blight and Early Blight.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Symptoms include dark lesions and leaf wilting.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Managed through fungicide sprays and removing infected plants.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Apple -->
      <div class="disease-card">
        <div class="disease-image-wrapper">
          <img class="disease-image" src="/Photos/Apple_Leaf_Disease.jpg" alt="Apple Leaf Disease">
          <div class="image-overlay"></div>
        </div>
        <div class="disease-content">
          <div class="disease-header">
            <div class="disease-icon"></div>
            <h2 class="disease-title">Apple Leaf Diseases</h2>
          </div>
          <div class="disease-info">
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Affects apple orchards in Himachal Pradesh, Jammu & Kashmir, and Uttarakhand.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Common issues: Apple Scab, Rust, and Powdery Mildew.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Causes leaf spots, curling, and premature fruit drop.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Controlled by pruning and using resistant apple varieties.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Grape -->
      <div class="disease-card">
        <div class="disease-image-wrapper">
          <img class="disease-image" src="/Photos/Grape_Leaf_Disease.jpg" alt="Grape Leaf Disease">
          <div class="image-overlay"></div>
        </div>
        <div class="disease-content">
          <div class="disease-header">
            <div class="disease-icon"></div>
            <h2 class="disease-title">Grape Leaf Diseases</h2>
          </div>
          <div class="disease-info">
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Common in vineyards of Maharashtra, Karnataka, and Tamil Nadu.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Diseases include Downy Mildew, Powdery Mildew, and Black Rot.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Results in leaf discoloration, drying, and fruit rot.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Managed by maintaining air circulation and applying fungicides.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Sugarcane -->
      <div class="disease-card">
        <div class="disease-image-wrapper">
          <img class="disease-image" src="/Photos/sugarcane_diesease.jpg" alt="Sugarcane Leaf Disease">
          <div class="image-overlay"></div>
        </div>
        <div class="disease-content">
          <div class="disease-header">
            <div class="disease-icon"></div>
            <h2 class="disease-title">Sugarcane Leaf Diseases</h2>
          </div>
          <div class="disease-info">
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Found widely in Uttar Pradesh, Maharashtra, and Tamil Nadu.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Red Rot, Smut, and Rust are common problems.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Leads to reduced sugar content and stalk drying.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Controlled by crop sanitation and resistant sugarcane varieties.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Cassava Mosaic -->
      <div class="disease-card">
        <div class="disease-image-wrapper">
          <img class="disease-image" src="/Photos/cassava_mosiac_diesease.jpg" alt="Cassava Mosaic Disease">
          <div class="image-overlay"></div>
        </div>
        <div class="disease-content">
          <div class="disease-header">
            <div class="disease-icon"></div>
            <h2 class="disease-title">Cassava Mosaic Disease</h2>
          </div>
          <div class="disease-info">
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Caused by a virus transmitted by whiteflies.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Widespread in tropical southern regions of India.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Symptoms include yellow mosaic patterns and stunted growth.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Managed by removing infected plants and using clean planting material.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Grapevine Esca -->
      <div class="disease-card">
        <div class="disease-image-wrapper">
          <img class="disease-image" src="/Photos/GrapeWine_Esca.jpg" alt="Grapevine Esca Disease">
          <div class="image-overlay"></div>
        </div>
        <div class="disease-content">
          <div class="disease-header">
            <div class="disease-icon"></div>
            <h2 class="disease-title">Grapevine Esca Disease</h2>
          </div>
          <div class="disease-info">
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Affects older grapevines mainly in Maharashtra and Karnataka.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Causes internal wood decay and leaf discoloration.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Reduces vine lifespan and yield significantly.</span>
            </div>
            <div class="info-item">
              <div class="info-icon"></div>
              <span class="info-text">Controlled by pruning and avoiding vine injuries.</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</body>
</html>