import kibanaViz from '../assets/images/kibana_viz.png';
import dockerStructure from '../assets/images/structure.png';
import originalImage from '../assets/images/original.png';
import seasonDecom from '../assets/images/season_decom.png';
import avgMonth from '../assets/images/avg_month.png';
import biExample from '../assets/images/bi_example.png';
import srImage from '../assets/images/sr_image_46.png';
import heatmap from '../assets/images/heatmap.png';
import waveFunction from '../assets/images/wave_function.png';
import doublePendulumGif from '../assets/images/double_pendulum_animation.gif';

export const projects = [
  {
    id: 1,
    title: "Kafka-Driven Data Streaming Pipeline with Dashboard",
    description: "Collaborated in a team to design and implement a comprehensive data streaming pipeline using Apache Kafka, processing anime data from multiple sources with real-time visualization through Kibana dashboards.",
    showcaseImage: kibanaViz,
    projectImages: [
      {
        src: kibanaViz,
        alt: "Kibana Dashboard Visualization",
        title: "Real-time Analytics Dashboard",
        description: "Interactive Kibana dashboard showing anime trends, genre distributions, and real-time data insights from the streaming pipeline."
      },
      {
        src: dockerStructure,
        alt: "Docker Architecture Structure",
        title: "Containerized System Architecture",
        description: "Docker ecosystem architecture showing the interconnected containers: Zookeeper, Kafka-Broker, Elasticsearch, Kibana, and Kafka-Connect with persistent volumes."
      }
    ],
    detailedDescription: [
      "Built a data streaming solution to process anime data from MyAnimeList (MAL) API and Kaggle datasets. Worked on handling both batch and streaming data while ensuring data quality and delivery semantics.",
      "Used Docker to deploy 5 containers: Zookeeper for coordination, Kafka-Broker for message streaming, Elasticsearch for data storage, Kibana for visualization, and Kafka-Connect for data integration with persistent volumes.",
      "Developed three pipeline versions, evolving from Producer-Consumer model to KStream processing. The final version processes anime data from Kaggle CSV files and enriches it with MAL API calls while filtering explicit content.",
      "Implemented KStream processing with state stores for caching API responses to reduce redundant calls. Configured transactional messaging and built data transformation logic to enrich anime records with metadata from external APIs.",
      "Created CSVDataProducer.java to read anime IDs and titles from Kaggle dataset, then CSVKStreamProcessor.java enriches this data by calling MyAnimeList API for ratings, genres, and descriptions while filtering explicit content.",
      "Set up real-time data processing with exactly-once delivery semantics, used state store caching to avoid redundant API calls, and processed anime records with response times suitable for dashboard updates.",
      "Built Kibana dashboards showing anime trends, genre distributions, and rating analytics. The system handles both historical batch data and live streaming updates for data exploration and monitoring.",
      "Worked through multiple iterations - from throughput testing to Producer-Consumer chains to the final KStream implementation, learning different streaming data processing approaches."
    ],
    technologies: ["Apache Kafka", "Kafka Streams", "Elasticsearch", "Kibana", "Docker", "Java", "Maven"],
    tags: ["Data Streaming", "Real-time Processing", "Microservices", "Data Pipeline", "Analytics"],
    status: "Completed",
    date: "2024",
    githubUrl: "https://github.com/maythaswang/streaming-data-pipeline",
    teamProject: true,
    duration: "1 month",
    featured: true
  },
  {
    id: 2,
    title: "Image Enhancement using SRCNN",
    description: "A deep learning project implementing Super Resolution Convolutional Neural Network (SRCNN) for image enhancement, trained on the DIV2K dataset with custom loss functions combining MSE, SSIM, and VGG19 perceptual loss.",
    showcaseImage: originalImage,
    projectImages: [
      {
        src: biExample,
        alt: "Bicubic Interpolation Example",
        title: "Bicubic Interpolation Result",
        description: "Image enhancement result using traditional bicubic interpolation method, showing limitations in detail preservation and artifact reduction."
      },
      {
        src: srImage,
        alt: "SRCNN Image Enhancement",
        title: "SRCNN Enhanced Image",
        description: "Image enhancement result using SRCNN, demonstrating superior detail preservation, reduced artifacts, and improved visual quality."
      }
    ],
    detailedDescription: [
      "Implemented SRCNN (Super Resolution Convolutional Neural Network) to enhance low-resolution images by learning mappings from low to high-resolution image patches. Worked on balancing multiple loss functions to achieve better visual quality than bicubic interpolation.",
      "Built a 3-layer convolutional neural network using TensorFlow and Keras. Layer 1: 9x9 kernel, 64 filters with ReLU for feature extraction. Layer 2: 3x3 kernel, 32 filters with ReLU for non-linear mapping. Layer 3: 5x5 kernel, 3 filters with linear activation for reconstruction.",
      "Used the DIV2K dataset with 560 training images, 120 validation images, and 120 test images. Images were cropped to 512x512 pixels, downsampled by 3x, then upscaled using bicubic interpolation to create low-resolution training pairs.",
      "Developed a loss function combining multiple metrics: 0.8 * sigmoid(MSE) + 0.1 * (1 - (1 + SSIM)/2) + 0.1 * sigmoid(VGG19_loss). This approach optimizes for pixel accuracy, structural similarity, and perceptual quality.",
      "Trained with Adam optimizer at 1e-4 learning rate and batch size of 2 for 100 epochs. Applied early stopping with 10-epoch patience to prevent overfitting and optimize model performance on validation data.",
      "Results: Average PSNR: 30.15, Average SSIM: 0.89, and Average MSE: 107.88. While bicubic interpolation scored higher on some metrics (PSNR: 34.29), SRCNN produced better visual quality with improved detail preservation and reduced artifacts.",
      "Showed that SRCNN produces better visual results compared to bicubic interpolation, particularly in preserving fine details, reducing blur artifacts, and maintaining structural integrity in enhanced images.",
      "Integrated multiple evaluation metrics (PSNR, SSIM, MSE) for model assessment, implemented data preprocessing pipelines, and created visualization tools for comparing enhancement methods."
    ],
    technologies: ["TensorFlow", "Keras", "NumPy", "Matplotlib", "Scikit-Image", "Python"],
    tags: ["Deep Learning", "Computer Vision", "SRCNN", "Image Processing", "Neural Networks"],
    status: "Completed",
    date: "2024-08-10",
    githubUrl: "https://github.com/AchiraLaovong/Image-Enhancement",
    teamProject: false,
    duration: "1 month",
    featured: true
  },
  {
    id: 3,
    title: "Steam Game Trends Analysis",
    description: "Collaborated in a team to analyze 40M+ rows of Steam game data using PySpark, uncovering trends in game releases, user behaviors, and recommendations. Personally led preprocessing pipelines, statistical testing, and visualization design using Apriori algorithm and seasonal decomposition to extract actionable insights.",
    showcaseImage: avgMonth,
    projectImages: [
      {
        src: seasonDecom,
        alt: "Seasonal Decomposition Analysis",
        title: "Time Series Seasonal Decomposition",
        description: "Temporal analysis showing trend patterns following average positive ratio by review year. The seasonality component exhibits clear cyclical patterns, while residuals demonstrate normal distribution (Shapiro p-value > 0.05), validating the decomposition model."
      },
      {
        src: avgMonth,
        alt: "Monthly Average Analysis",
        title: "Monthly Gaming Activity Patterns",
        description: "Analysis revealing 4 major peaks throughout the year corresponding to Steam sales periods: Winter (Late Dec - Early Jan), Spring (Mar), Summer (Late Jun - Early Jul), and Autumn (Late Nov - Early Dec). Statistical significance confirmed by Kruskal-Wallis test (p-value < 0.05)."
      }
    ],
    detailedDescription: [
      "Conducted exploratory data analysis (EDA) on Steam game dataset with 40M+ rows from Kaggle ('Game Recommendations on Steam') to understand game recommendations, industry release trends, tag associations, and user review behavior.",
      "Led preprocessing pipeline development using PySpark to handle the 40M+ row dataset. Processed games.csv, users.csv, and recommendations.csv files. Anonymized user IDs, created one-hot encoded game dataset, added numerical rating fields, and converted CSVs to Parquet format stored on Google Drive.",
      "Applied statistical testing including Spearman correlation analyses, hypothesis testing (Chi-squared, Mann-Whitney, T-test), and trend analysis (Mann-Kendall) to identify patterns over time and between variables. Used seasonal decomposition for time series analysis of releases and average positive ratios.",
      "Performed Apriori association rule mining on game tags with minimum support of 0.12 and minimum confidence of 0.50 to discover tag combinations and gaming genre patterns. Found associations like Atmospheric → Singleplayer (confidence ≈ 0.76) and Singleplayer → Indie (confidence ≈ 0.64).",
      "Analyzed user library effects through density plots and correlation analysis examining relationships between products owned, reviews written, and recommendations given across the dataset. Found correlation of 0.38 between products owned and total reviews, and 0.32 between products owned and recommendations.",
      "Designed and implemented visualization strategy using Seaborn and Matplotlib. Created temporal pattern visualizations showing declining average positive ratio trend from 2010-2018 with pandemic spike in 2020, followed by decline through 2022 (trend slope ≈ -0.32, Mann-Kendall p < 0.05). Found four monthly review peaks aligning with Steam sale periods.",
      "Found rising number of game releases (Mann-Kendall p < 0.05), platform support trends showing Windows/Steam Deck near-100% support while Mac/Linux support declined to <20%, and seasonal release patterns with peaks in March, May, and October.",
      "Established that numerical rating positively correlates with recommendations, found that singleplayer/story-rich games trend toward preference while niche genres trend toward lower recommendations, and identified median playtime differences between recommended (20-50 hours) and not-recommended games (10-30 hours)."
    ],
    technologies: ["PySpark", "Python", "Pandas", "NumPy", "Scipy", "Scikit-learn", "Matplotlib", "Seaborn", "Parquet", "Google Drive API"],
    tags: ["Data Mining", "Exploratory Data Analysis", "Statistical Analysis", "Association Rule Mining", "Time Series Analysis", "User Behavior Analysis", "Big Data"],
    status: "Completed",
    date: "2024",
    githubUrl: "https://colab.research.google.com/drive/19mBisJMLGedU20OYEhbD_YHKag_Vg2Y8?usp=sharing",
    teamProject: true,
    duration: "1 month",
    featured: true
  },
  {
    id: 4,
    title: "Double Pendulum Chaos Simulation with Lagrangian Mechanics",
    description: "Implemented a comprehensive double pendulum simulation using Lagrangian mechanics and numerical integration. Built mathematical framework deriving equations of motion from first principles, implemented both implicit Newton-Raphson and explicit solvers, and created interactive visualizations demonstrating chaotic dynamics with energy conservation analysis.",
    showcaseImage: doublePendulumGif,
    projectImages: [
      {
        src: doublePendulumGif,
        alt: "Double Pendulum Animation",
        title: "Chaotic Motion Animation",
        description: "Real-time animation showing the chaotic motion of a double pendulum system, demonstrating sensitive dependence on initial conditions and complex dynamical behavior with trajectory tracing."
      }
    ],
    detailedDescription: [
      "The system operates by modeling two coupled pendulums using Lagrangian mechanics, where each pendulum is characterized by its angular position relative to the vertical. The mathematical foundation begins with defining generalized coordinates (θ₁, θ₂) for the angular positions of the upper and lower pendulums respectively.",

      "MATH_BLOCK: T = ½(m₁ + m₂)l₁²θ̇₁² + ½m₂l₂²θ̇₂² + m₂l₁l₂θ̇₁θ̇₂cos(θ₁ - θ₂)",
      "The kinetic energy expression above captures the coupled nature of the system, where the cross term represents the interaction between the two pendulums.",

      "MATH_BLOCK: V = -(m₁ + m₂)gl₁cosθ₁ - m₂gl₂cosθ₂",
      "The potential energy depends on the vertical positions of both masses, measured from their respective pivot points.",

      "MATH_BLOCK: d/dt(∂L/∂θ̇ᵢ) - ∂L/∂θᵢ = 0",
      "The equations of motion are derived by applying the Euler-Lagrange equations shown above, where L = T - V is the Lagrangian.",

      "The computational engine employs two distinct solving approaches to handle the resulting coupled second-order differential equations. The implicit Newton-Raphson method operates by encoding the Euler-Lagrange residuals into custom functions lagrange_1 and lagrange_2, which must equal zero when the system satisfies the equations of motion. The algorithm computes the Jacobian matrix through partial derivatives (∂lagrange_i/∂θ̈_j) and iteratively refines estimates of the angular accelerations θ̈₁, θ̈₂ until convergence within a specified tolerance using the Newton update rule.",

      "MATH_BLOCK: θ̈₁ = [-g(2m₁ + m₂)sinθ₁ - m₂gsin(θ₁-2θ₂) - 2sin(Δ)m₂(θ̇₂²l₂ + θ̇₁²l₁cos(Δ))] / [l₁(2m₁ + m₂ - m₂cos(2Δ))]",
      "The explicit analytical approach operates through closed-form expressions for the angular accelerations, eliminating iterative overhead. The system computes accelerations directly using the formula above, where Δ = θ₁ - θ₂ represents the angular difference between the pendulums. A similar expression governs θ̈₂. This method provides faster computation for real-time animation while maintaining numerical accuracy comparable to the implicit approach.",

      "The integration process operates by converting the second-order ODE system into first-order form suitable for numerical solvers. The system defines a state vector y = [θ₁, θ̇₁, θ₂, θ̇₂] with its time derivative ẏ = [θ̇₁, θ̈₁, θ̇₂, θ̈₂]. SciPy's odeint function, implementing the LSODA algorithm, handles the integration with adaptive step-size control. The solver automatically switches between non-stiff and stiff methods as needed, robustly handling the system's varying time scales while maintaining solution accuracy across different dynamical regimes.",

      "MATH_BLOCK: E = T + V",
      "Energy conservation analysis operates as a continuous validation mechanism throughout the simulation. The system computes total energy at each time step using the expression above.",

      "MATH_BLOCK: (E(t) - E(0))/|E(0)|",
      "The system monitors the relative energy drift through this expression. This metric serves as a diagnostic tool for numerical integration accuracy and helps detect computational artifacts. The energy plotting functions visualize long-term conservation properties and identify parameter regimes where numerical methods successfully maintain the fundamental physical constraints of the Hamiltonian system.",

      "The visualization system operates through a multi-layered interactive interface that renders pendulum motion in real-time. The animation engine updates pendulum positions by converting angular coordinates to Cartesian coordinates and traces trajectories to reveal the complex patterns characteristic of chaotic motion. Widget-based controls allow dynamic adjustment of system parameters including masses (m₁, m₂), lengths (l₁, l₂), and initial conditions. The system can simultaneously visualize multiple pendulums with infinitesimal initial condition perturbations, dramatically demonstrating the sensitive dependence on initial conditions that defines chaotic behavior.",

      "MATH_BLOCK: |δ(t)| ≈ |δ₀|e^(λt)",
      "Chaos analysis tools operate by implementing trajectory separation measurement to quantify the system's chaotic properties. The algorithm simulates pairs of trajectories with initial perturbations on the order of δ₀ ≈ 10⁻⁶ radians and tracks their exponential divergence according to the formula above, where λ represents the Lyapunov exponent. Positive Lyapunov exponents confirm chaotic behavior in the appropriate parameter regimes. The system also implements Poincaré section analysis by sampling the system state at regular intervals and power spectral analysis to characterize the frequency content of the oscillations.",

      "Validation operates through multiple independent verification approaches to ensure implementation correctness. The system compares solutions from the implicit Newton-Raphson and explicit analytical methods, verifying agreement within numerical tolerance. Small-angle linearization analysis validates the implementation by comparing computed eigenfrequencies with theoretical predictions for the harmonic motion regime. Energy conservation verification operates across different initial conditions and system parameters, while documented numerical considerations address potential issues including denominator singularities near singular configurations, step-size sensitivity in regions of rapid motion, and the availability of symplectic integration alternatives for ultra-long-term simulations requiring precise energy conservation."
    ],
    technologies: ["Python", "NumPy", "SciPy", "Matplotlib", "Jupyter", "SymPy", "IPython Widgets"],
    tags: ["Physics Simulation", "Numerical Methods", "Chaos Theory", "Classical Mechanics", "Scientific Computing"],
    status: "Completed",
    date: "2023",
    githubUrl: "https://colab.research.google.com/drive/1yrKYq___AB53CHDqEkyHIXYYZQfbOskc",
    teamProject: false,
    duration: "1 month",
    featured: true
  },
  {
    id: 5,
    title: "Wave Function Collapse Procedural Content Generator",
    description: "Collaborated in a team to implement a procedural content generator using the Wave Function Collapse (WFC) algorithm in Scala. Built a constraint-based tile placement system that synthesizes coherent tile-based images from small tile sets while respecting adjacency rules and rotation constraints.",
    showcaseImage: waveFunction,
    projectImages: [
      {
        src: waveFunction,
        alt: "Wave Function Collapse Generated Board",
        title: "Procedurally Generated Tile Board",
        description: "Example output from the WFC algorithm showing a coherent 10x10 tile-based board generated from a small set of input tiles with proper edge constraints and rotation rules applied."
      }
    ],
    detailedDescription: [
      "Implemented a procedural content generator using Wave Function Collapse (WFC) paradigm to synthesize tile-based images from small tile sets. Built a system that takes tile images with edge descriptors and produces larger, coherent boards (e.g., 10×10) respecting local edge constraints while maintaining visually plausible global structure.",
      "Developed a comprehensive tile representation system storing image files, four edge descriptors (up/right/down/left), rotation values, and mutable neighbor maps. Created a loader that reads tile files from disk and encodes edge patterns as string descriptors, interpreting filename suffixes to determine allowed rotations and generating rotated tile permutations programmatically.",
      "Built adjacency computation system where for every rotated tile, the algorithm computes sets of compatible tiles for each direction. Implemented string-coded edge pattern matching with proper orientation handling (reversing edge strings when matching opposite edges). Parallelized the O(n²) compatibility computations using Scala Futures for performance optimization.",
      "Implemented core WFC algorithm with Board abstraction containing a grid of cells initially populated with full tile sets. Used entropy-based cell selection (picking cells with smallest non-1 candidate sets) followed by random tile selection and constraint propagation. Built recursive propagation system that updates neighbor candidate sets by intersecting with compatible neighbors until convergence.",
      "Integrated parallel processing using Scala concurrency primitives (Futures + ExecutionContext) and ConcurrentHashMap for thread-safe propagation tracking. Developed Java AWT/Swing-based visualization system (JFrame, JPanel, JLabel, ImageIcon) with real-time tile placement display and final PNG export functionality using BufferedImage composition.",
      "Implemented sophisticated rotation handling system respecting tile symmetry constraints through filename convention parsing. Created rotation-permutation logic that generates appropriate rotated variants based on two-character filename suffixes (_00, _02, etc.), ensuring asymmetrical tiles maintain intended orientation while symmetric tiles can rotate where allowed.",
      "Documented system limitations including potential logical dead-ends when constraints reduce cells to empty sets. Identified areas for improvement including backtracking implementation, contradiction resolution, tile frequency weights, and deterministic RNG seeding for reproducibility.",
      "Created comprehensive system architecture with clear workflow: (1) load tiles & generate rotations, (2) compute adjacency sets, (3) initialize board with full tile sets, (4) iterate pick→observe→propagate until completion, (5) render UI and export PNG. Established file naming conventions and runtime parameters for extensibility."
    ],
    technologies: ["Scala", "Scala Futures", "Java AWT/Swing", "BufferedImage", "ImageIO", "AffineTransform", "ConcurrentHashMap"],
    tags: ["Procedural Generation", "Constraint Satisfaction", "Parallel Computing", "Computer Graphics", "Algorithm Implementation"],
    status: "Completed",
    date: "2023",
    githubUrl: "https://github.com/cs-muic/funpar-t2-22-project-future-collapse",
    teamProject: true,
    duration: "2 months",
    featured: true
  },
  {
    id: 6,
    title: "My First Data Science EDA Project",
    description: "My first data science project conducting exploratory data analysis on games metadata dataset. Learned fundamental EDA techniques including data cleaning, feature engineering, statistical testing, and creating visualizations to analyze user engagement and pricing patterns.",
    showcaseImage: heatmap,
    projectImages: [],
    detailedDescription: [
      "Loaded and profiled games metadata dataset using pandas in Jupyter/Colab. Parsed dates, checked data types, and created a data dictionary showing column types, unique values, and missing data patterns.",
      "Cleaned the dataset by removing duplicates, standardizing categorical labels for genres/platforms/developers, converting price strings to numeric values, and extracting release year from date fields.",
      "Handled missing values using different strategies: constant imputation for boolean flags, median imputation grouped by genre/platform for numeric fields, and kept NA values where missing data was meaningful.",
      "Created new features: is_free flag, age_since_release, log_review_count using log1p transformation, has_inapp purchases, rating_per_review ratio, and calculated genre/platform summary statistics.",
      "Analyzed data distributions using histograms, KDE plots, and boxplots. Found heavy-tailed variables like review_count and playtime, applied log transforms, and identified outliers using IQR and z-score methods.",
      "Explored relationships between variables using correlation matrices, heatmaps, boxplots, and scatterplots. Analyzed how review_count relates to ratings and how pricing varies across genres and platforms.",
      "Examined temporal patterns by plotting release volume and ratings over time to identify trends and seasonality in the gaming industry.",
      "Applied statistical tests including Mann-Whitney U tests and chi-square tests to compare ratings between different groups. Reported test statistics and p-values.",
      "Used PCA to identify main variance components and KMeans clustering to group similar games together. Found patterns like high-engagement titles vs niche games.",
      "Found that free-to-play games tend to have more reviews but different engagement patterns, and that price doesn't strongly correlate with rating when controlling for genre and platform."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter", "Google Colab"],
    tags: ["Data Science", "Exploratory Data Analysis", "Data Cleaning", "Statistical Analysis", "Data Visualization"],
    status: "Completed",
    date: "2023",
    githubUrl: "https://colab.research.google.com/drive/1G7g5jSIGMvTwTF5zWcCVTF3skqnDiUTN?usp=sharing",
    teamProject: false,
    duration: "1 month",
    featured: true
  }
];

export const getStatusColor = (status) => {
  switch (status) {
    case 'Completed': return 'zzz-green';
    case 'In Progress': return 'zzz-orange';
    case 'Planning': return 'zzz-primary';
    default: return 'zzz-grey-6';
  }
};

export const getPrimaryTag = (project) => {
  if (project.tags.includes('Data Science')) return 'Data Science';
  if (project.tags.includes('Data Streaming')) return 'Data Streaming';
  if (project.tags.includes('Deep Learning')) return 'Deep Learning';
  if (project.tags.includes('Data Mining')) return 'Data Mining';
  if (project.tags.includes('Machine Learning')) return 'Machine Learning';
  return project.tags[0]; // fallback to first tag
};
