/**
 * =========================================================================
 * ملف بيانات الموقع (Portfolio Data)
 * يمكنك تعديل أي نص، رقم هاتف، إيميل، أو إضافة مشاريع جديدة بكل سهولة من هنا!
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  // المعلومات الشخصية والتعريفية
  profile: {
    name: "محمد رمضان",
    title: "مصمم جرافيك",
    experience: "4 سنوات",
    intro: "أضف هنا نبذة مختصرة عنك وعن مجالات تخصصك في تصميم الجرافيك.",
    email: "mohamad.ramadans100@gmail.com",
    location: "مصر",
    heroImage: "assets/images/hero.jpg",
    aboutImage: "assets/images/about.jpg",
    bio: [
      "أضف هنا نبذتك المهنية: خبرتك في تصميم الجرافيك، وأبرز المجالات التي عملت فيها، وأسلوبك في التعامل مع الفكرة والتنفيذ."
    ],
    phones: ["01061149648", "01142654106"],
    socials: [
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/mahamad2110",
        icon: "linkedin"
      },
      {
        label: "WhatsApp",
        href: "https://wa.me/201061149648",
        icon: "whatsapp"
      }
    ]
  },

  // روابط القائمة الرئيسية
  navLinks: [
    { label: "المعرض", href: "#work" },
    { label: "أعمال مميزة", href: "#featured" },
    { label: "الخدمات", href: "#services" },
    { label: "نبذة عني", href: "#about" },
    { label: "المهارات", href: "#skills" },
    { label: "تواصل معي", href: "#contact" }
  ],

  // تصنيفات المشاريع لتصفية المعرض
  categories: [
    "الكل",
    "كتب وروايات",
    "الهوية البصرية",
    "تصميم البوستر",
    "تصميم السوشيال ميديا",
    "تصميم المطبوعات",
    "التغليف",
    "الإعلانات"
  ],

  // الخدمات التي تقدمها
  services: [
    {
      title: "تصميم وتنسيق الكتب والروايات",
      description: "تنسيق داخلي احترافي لصفحات الكتب والروايات، مع توزيع متناسق للنصوص وإخراج طباعي مريح.",
      icon: "frame"
    },
    {
      title: "تصميم السوشيال ميديا",
      description: "تصاميم جذابة للمنشورات والستوريز والكاروسيل، مع هوية متسقة على كل المنصات.",
      icon: "smartphone"
    },
    {
      title: "الهوية البصرية",
      description: "شعارات وألوان وخطوط تمنح العلامة التجارية شخصية واضحة ومميزة.",
      icon: "fingerprint"
    },
    {
      title: "تصميم الإعلانات",
      description: "تصاميم إعلانية رقمية وخارجية تركز على رسالة واضحة وتأثير سريع.",
      icon: "megaphone"
    },
    {
      title: "تصميم البوستر",
      description: "بوسترات قوية ومعبرة للفعاليات والمعارض والحملات الثقافية.",
      icon: "frame"
    },
    {
      title: "تصميم المطبوعات",
      description: "بروشورات ومجلات وتصاميم تغليف مُعدّة للطباعة بجودة عالية.",
      icon: "printer"
    }
  ],

  // المهارات والبرامج
  skills: [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign"
  ],

  // قائمة المشاريع في المعرض (المشروع الأول في بداية المعرض)
  projects: [
    {
      id: "books-and-novels",
      title: "كتب وروايات",
      client: "دار نشر / أعمال أدبية",
      category: "كتب وروايات",
      year: "2024",
      image: "assets/book/book-page-01.jpg",
      summary: "تصميم وتنسيق داخلي احترافي لصفحات ونماذج كتب وروايات بجودة طباعية عالية تشمل 11 نموذجاً وتصميماً داخلياً.",
      overview: "مشروع متكامل لتصميم وتنسيق وإخراج الكتب والروايات الأدبية. يشمل التصميم الداخلي، التوزيع المتناسق للنصوص والفقرات، اختيار الخطوط الطباعية الملائمة والمريحة للعين، وتنسيق الفصول والصفحات بنماذج إخراجية متعددة ومتقنة مع مراعاة كافة المعايير الطباعية.",
      role: "تصميم وتنسيق داخلي وإخراج فني",
      tools: ["Adobe InDesign", "Adobe Photoshop"],
      featured: true,
      isPlaceholder: false,
      // قائمة كافة صور صفحات ونماذج المشروع (11 صفحة كاملة)
      gallery: [
        "assets/book/book-page-01.jpg",
        "assets/book/book-page-02.jpg",
        "assets/book/book-page-03.jpg",
        "assets/book/book-page-04.jpg",
        "assets/book/book-page-05.jpg",
        "assets/book/book-page-06.jpg",
        "assets/book/book-page-07.jpg",
        "assets/book/book-page-08.jpg",
        "assets/book/book-page-09.jpg",
        "assets/book/book-page-10.jpg",
        "assets/book/book-page-11.jpg"
      ]
    },
    {
      id: "brand-identity",
      title: "عنوان المشروع 01",
      client: "اسم العميل",
      category: "الهوية البصرية",
      year: "2024",
      image: "assets/images/project-brand-identity.jpg",
      summary: "وصف مختصر للمشروع يظهر عند التمرير فوق البطاقة.",
      overview: "أضف هنا وصفًا تفصيليًا للمشروع: الفكرة، والهدف، وطريقة التنفيذ، والنتيجة.",
      role: "أضف دورك في المشروع",
      tools: ["Photoshop", "Illustrator"],
      featured: true,
      isPlaceholder: true,
      gallery: ["assets/images/project-brand-identity.jpg"]
    },
    {
      id: "poster",
      title: "عنوان المشروع 02",
      client: "اسم العميل",
      category: "تصميم البوستر",
      year: "2024",
      image: "assets/images/project-poster.jpg",
      summary: "وصف مختصر للمشروع يظهر عند التمرير فوق البطاقة.",
      overview: "أضف هنا وصفًا تفصيليًا للمشروع: الفكرة، والهدف، وطريقة التنفيذ، والنتيجة.",
      role: "أضف دورك في المشروع",
      tools: ["Photoshop"],
      featured: true,
      isPlaceholder: true,
      gallery: ["assets/images/project-poster.jpg"]
    },
    {
      id: "social-media",
      title: "عنوان المشروع 03",
      client: "اسم العميل",
      category: "تصميم السوشيال ميديا",
      year: "2024",
      image: "assets/images/project-social-media.jpg",
      summary: "وصف مختصر للمشروع يظهر عند التمرير فوق البطاقة.",
      overview: "أضف هنا وصفًا تفصيليًا للمشروع: الفكرة، والهدف، وطريقة التنفيذ، والنتيجة.",
      role: "أضف دورك في المشروع",
      tools: ["Photoshop", "Illustrator"],
      featured: true,
      isPlaceholder: true,
      gallery: ["assets/images/project-social-media.jpg"]
    },
    {
      id: "print",
      title: "عنوان المشروع 04",
      client: "اسم العميل",
      category: "تصميم المطبوعات",
      year: "2023",
      image: "assets/images/project-print.jpg",
      summary: "وصف مختصر للمشروع يظهر عند التمرير فوق البطاقة.",
      overview: "أضف هنا وصفًا تفصيليًا للمشروع: الفكرة، والهدف، وطريقة التنفيذ، والنتيجة.",
      role: "أضف دورك في المشروع",
      tools: ["InDesign", "Illustrator"],
      featured: false,
      isPlaceholder: true,
      gallery: ["assets/images/project-print.jpg"]
    },
    {
      id: "packaging",
      title: "عنوان المشروع 05",
      client: "اسم العميل",
      category: "التغليف",
      year: "2023",
      image: "assets/images/project-packaging.jpg",
      summary: "وصف مختصر للمشروع يظهر عند التمرير فوق البطاقة.",
      overview: "أضف هنا وصفًا تفصيليًا للمشروع: الفكرة، والهدف، وطريقة التنفيذ، والنتيجة.",
      role: "أضف دورك في المشروع",
      tools: ["Illustrator", "Photoshop"],
      featured: false,
      isPlaceholder: true,
      gallery: ["assets/images/project-packaging.jpg"]
    },
    {
      id: "advertising",
      title: "عنوان المشروع 06",
      client: "اسم العميل",
      category: "الإعلانات",
      year: "2023",
      image: "assets/images/project-advertising.jpg",
      summary: "وصف مختصر للمشروع يظهر عند التمرير فوق البطاقة.",
      overview: "أضف هنا وصفًا تفصيليًا للمشروع: الفكرة، والهدف، وطريقة التنفيذ، والنتيجة.",
      role: "أضف دورك في المشروع",
      tools: ["Photoshop"],
      featured: false,
      isPlaceholder: true,
      gallery: ["assets/images/project-advertising.jpg"]
    }
  ]
};
