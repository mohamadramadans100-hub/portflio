/**
 * =========================================================================
 * ملف بيانات الموقع (Portfolio Data)
 * يحتوي على المشاريع الحقيقية الـ 7 بكامل تفاصيلها ومعارض صورها وروابطها
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  // المعلومات الشخصية والتعريفية
  profile: {
    name: "محمد رمضان",
    title: "مصمم جرافيك ومخرج مطبوعات وتطبيقات",
    experience: "4 سنوات",
    intro: "مصمم جرافيك متخصص في الإخراج الصحفي، تصميم وتنسيق الكتب والروايات، المناهج التعليمية، المجلات، والتقارير الدولية، بالإضافة للبروشورات وتطبيقات الويب والموبايل وتصاميم السوشيال ميديا.",
    email: "mohamad.ramadans100@gmail.com",
    location: "مصر",
    heroImage: "assets/images/hero.jpg",
    aboutImage: "assets/images/about.jpg",
    bio: [
      "مصمم جرافيك بخبرة 4 سنوات متخصصة في الإخراج الفني وتنسيق المطبوعات والنشر المكتبي وتصميم واجهات وتطبيقات الهاتف (UI/UX). عملت على إخراج العديد من الكتب والروايات الأدبية بالتعاون مع دور نشر ومؤلفين بارزين.",
      "لدي خبرة واسعة في تصميم المجلات الدورية، المناهج التعليمية، والتقارير الدولية الرسمية، بالإضافة لتصميم واجهات التطبيقات المنشورة على متجر Google Play، مع التركيز على التوزيع البصري والتايبوغرافي الدقيق المريح للعين."
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
    { label: "معرض الأعمال", href: "#work" },
    { label: "الخدمات", href: "#services" },
    { label: "نبذة عني", href: "#about" },
    { label: "المهارات", href: "#skills" },
    { label: "تواصل معي", href: "#contact" }
  ],

  // تصنيفات المشاريع الفعلية في المعرض
  categories: [
    "الكل",
    "كتب وروايات",
    "المجلة السعودية",
    "التقارير الدولية",
    "كتب تعليمية",
    "بروشور",
    "سوشيال ميديا",
    "تطبيقات الويب والموبايل"
  ],

  // الخدمات التخصصية
  services: [
    {
      title: "تصميم وتنسيق الكتب والروايات",
      description: "تنسيق داخلي احترافي لصفحات الكتب والروايات مع توزيع النصوص وضبط الهوامش والخطوط المريحة للقراءة.",
      icon: "frame"
    },
    {
      title: "تصميم واجهات وتطبيقات الموبايل (UI/UX)",
      description: "تصميم تجربة مستخدم وواجهات تطبيقات ويب وموبايل حديثة وجذابة معتمدة على متاجر التطبيقات مثل Google Play.",
      icon: "smartphone"
    },
    {
      title: "إخراج المناهج والكتب التعليمية",
      description: "تصميم وتنسيق الكتب الدراسية والأزهرية بأسلوب تفاعلي منظم وجداول توضيحية مبسطة للطلاب.",
      icon: "frame"
    },
    {
      title: "إخراج وتصميم المجلات الدورية",
      description: "إخراج صحفي متكامل وتصميم أغلفة وصفحات المجلات الثقافية والاجتماعية بمظهر جذاب وعصري.",
      icon: "printer"
    },
    {
      title: "تصميم التقارير الدولية والسنوية",
      description: "إخراج التقارير والوثائق الرسمية للمنظمات والشركات وتحويل الإحصائيات المعقدة إلى مخططات إنفوجرافيك واضحة.",
      icon: "megaphone"
    },
    {
      title: "تصميم البروشورات والمطويات",
      description: "تصاميم مطبوعات ترويجية وتوعوية (Tri-fold / Bi-fold) معدة للطباعة الفاخرة بأعلى معايير الدقة.",
      icon: "printer"
    }
  ],

  // المهارات والبرامج
  skills: [
    "Adobe InDesign",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Figma & UI/UX"
  ],

  // قائمة المشاريع الحقيقية (صورة الغلاف هي الأولى دائماً في كل مشروع)
  projects: [
    {
      id: "books-and-novels",
      title: "كتب وروايات",
      client: "دور نشر ومؤلفون",
      category: "كتب وروايات",
      year: "2024",
      image: "assets/book/book-page-01.jpg",
      summary: "إخراج فني وتنسيق داخلي متكامل للكتب والروايات بـ 22 صفحة ونموذجاً متميزاً وجودة طباعية عالية.",
      overview: "مشروع احترافي متكامل لإخراج وتنسيق الكتب والروايات الأدبية. يشمل التصميم الداخلي للصفحات، التنسيق التايبوغرافي المريح للعين، وضبط الهوامش والترقيم والترويسات وعناوين الفصول، مع باقة متكاملة من 22 نموذجاً وتصميماً بصيغ متعددة ملائمة لأعلى معايير دور النشر والمطابع.",
      role: "التصميم الداخلي، الإخراج الفني، والتنسيق الطباعي",
      tools: ["Adobe InDesign", "Adobe Photoshop"],
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
        "assets/book/book-page-11.jpg",
        "assets/book/book-page-01.png",
        "assets/book/book-page-02.png",
        "assets/book/book-page-03.png",
        "assets/book/book-page-04.png",
        "assets/book/book-page-05.png",
        "assets/book/book-page-06.png",
        "assets/book/book-page-07.png",
        "assets/book/book-page-08.png",
        "assets/book/book-page-09.png",
        "assets/book/book-page-10.png",
        "assets/book/book-page-11.png"
      ]
    },
    {
      id: "saudi-magazine",
      title: "المجلة السعودية",
      client: "المجلة السعودية / دار الإجادة للنشر والتوزيع",
      category: "المجلة السعودية",
      year: "2024",
      image: "assets/suide/suide-cover.png",
      summary: "تصميم وإخراج تحريري وصحفي شامل لمجلة ثقافية واجتماعية رائدة وفق أرقى المعايير الإخراجية الحديثة.",
      overview: "مشروع الإخراج الصحفي والتصميم التحريري لـ 'المجلة السعودية'. يتضمن تصميم الغلاف الرئيسي بأسلوب بصري فريد يعكس الطابع الثقافي والأدبي الأصيل، بالإضافة لتنسيق الأبواب الداخلية والمقالات والحوارات، وتوزيع الصور والمساحات البيضاء بتوازن هندسي دقيق يمنح القارئ تجربة مطالعة ثرية وانسيابية.",
      role: "تصميم الغلاف، الإخراج الصحفي، والتنسيق الداخلي",
      tools: ["Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator"],
      gallery: [
        "assets/suide/suide-cover.png",
        "assets/suide/suide-page-02.png",
        "assets/suide/suide-page-03.png",
        "assets/suide/suide-page-04.png",
        "assets/suide/suide-page-05.jpg",
        "assets/suide/suide-page-06.jpg",
        "assets/suide/suide-page-07.jpg",
        "assets/suide/suide-page-08.jpg"
      ]
    },
    {
      id: "international-reports",
      title: "التقارير الدولية",
      client: "منظمات وهيئات دولية (تقرير كينيا الدولي)",
      category: "التقارير الدولية",
      year: "2024",
      image: "assets/report/report-cover.jpg",
      summary: "تصميم وإخراج التقارير الدولية والسنوية الرسمية مع رسوم بيانية وتنسيق معلوماتي متقدم واحترافي.",
      overview: "إخراج وتنسيق التقارير والوثائق الرسمية الدولية. يركز المشروع على تصميم غلاف رسمي يعكس رصانة ومصداقية التقرير، مع إخراج وتنسيق الصفحات الداخلية متعددة اللغات، وتحويل البيانات والإحصاءات المعقدة إلى مخططات إنفوجرافيك وجداول مرئية واضحة ومتقنة تلائم العرض الرقمي والطباعة الفاخرة.",
      role: "تصميم الغلاف، تنسيق التقارير، وتصميم الإنفوجرافيك",
      tools: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"],
      gallery: [
        "assets/report/report-cover.jpg",
        "assets/report/report-page-02.jpg",
        "assets/report/report-page-03.jpg",
        "assets/report/report-page-04.jpg",
        "assets/report/report-page-05.png",
        "assets/report/report-page-06.png",
        "assets/report/report-page-07.png"
      ]
    },
    {
      id: "educational-books",
      title: "كتب تعليمية",
      client: "الأزهر الشريف والمؤسسات التعليمية",
      category: "كتب تعليمية",
      year: "2024",
      image: "assets/azhar/educational-cover.png",
      summary: "تصميم وإخراج المناهج والكتب التعليمية والأزهرية بتنسيق تفاعلي وتوزيع دقيق للجداول والتمارين والأسئلة (12 نموذجاً).",
      overview: "مشروع متخصص في تصميم وتنسيق وإخراج الكتب الدراسية والمناهج التعليمية (نماذج الأزهر الشريف والمرحلة الثانوية). يركز على تيسير المعلومة بصرياً من خلال تقسيم الدروس، إبراز القواعد النحوية والشروحات في صناديق مميزة، وتنسيق الأنشطة والتدريبات بطريقة تعليمية جذابة ومريحة للمذاكرة.",
      role: "تصميم الغلاف، الإخراج التعليمي، والتنسيق الداخلي",
      tools: ["Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator"],
      gallery: [
        "assets/azhar/educational-cover.png",
        "assets/azhar/educational-page-02.png",
        "assets/azhar/educational-page-03.png",
        "assets/azhar/educational-page-04.png",
        "assets/azhar/educational-page-05.png",
        "assets/azhar/educational-page-06.png",
        "assets/azhar/educational-page-07.png",
        "assets/azhar/educational-page-08.png",
        "assets/azhar/educational-page-09.png",
        "assets/azhar/educational-page-10.png",
        "assets/azhar/educational-page-11.png",
        "assets/azhar/educational-page-12.png"
      ]
    },
    {
      id: "brochure",
      title: "بروشور",
      client: "الرعاية الصحية والشركات (التغذية الصحية لمرضى السكري)",
      category: "بروشور",
      year: "2024",
      image: "assets/prochore/brochure-cover.jpg",
      summary: "تصميم بروشورات ومطويات ترويجية وتثقيفية فاخرة تشمل مطوية التغذية الصحية وموك آب عرض احترافي (5 نماذج).",
      overview: "تصميم مطويات وبروشورات تعريفية وتثقيفية متميزة تشمل حملات التوعية الصحية والطبية (كتيب التغذية الصحية لمرضى السكري)، بتنسيق متوازن بين الرسوم التوضيحية الإرشادية والنصوص الطبية المبسطة، مع الالتزام التام بأبعاد ومقاسات خطوط الطي والقص الطباعي الفاخر.",
      role: "التصميم الإعلاني، إعداد ملفات الطباعة، وعرض الموك آب",
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"],
      gallery: [
        "assets/prochore/brochure-cover.jpg",
        "assets/prochore/brochure-page-02.jpg",
        "assets/prochore/brochure-page-03.jpg",
        "assets/prochore/brochure-page-04.jpg",
        "assets/prochore/brochure-page-05.jpg"
      ]
    },
    {
      id: "web-mobile-app",
      title: "تطبيقات الويب والموبايل (Web & App)",
      client: "Google Play Store / mr1graphics",
      category: "تطبيقات الويب والموبايل",
      year: "2024",
      image: "assets/app/app-cover.jpg",
      appUrl: "https://play.google.com/store/apps/details?id=com.mr1graphics.menhajalmuslim",
      summary: "تصميم واجهات وتجربة المستخدم لتطبيقات الهاتف والويب (UI/UX) تشمل تطبيق السياحة والرحلات وتطبيق منهاج المسلم على متجر Google Play (32 شاشة ونموذجاً).",
      overview: "مشروع احترافي متكامل في تصميم واجهات وتجربة المستخدم (UI/UX Design) لتطبيقات الموبايل والويب. يضم تصاميم عصرية لتطبيق السياحة وحجز الرحلات، وتطبيق 'منهاج المسلم' المنشور رسمياً على متجر Google Play، مع الاهتمام بأدق التفاصيل التفاعلية، تناغم الألوان، وضوح التايبوغرافي، وتسهيل تجربة المستخدم للوصول لكافة الخصائص بسلاسة تامة.",
      role: "تصميم واجهات المستخدم (UI/UX Design)، تصميم الأيقونات والهوية البصرية",
      tools: ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator"],
      gallery: [
        "assets/app/app-cover.jpg",
        "assets/app/app-screen-02.jpg",
        "assets/app/app-screen-03.jpg",
        "assets/app/app-screen-04.jpg",
        "assets/app/app-screen-05.jpg",
        "assets/app/app-screen-06.jpg",
        "assets/app/app-screen-07.jpg",
        "assets/app/app-screen-08.jpg",
        "assets/app/app-screen-09.jpg",
        "assets/app/app-screen-10.jpg",
        "assets/app/app-screen-11.jpg",
        "assets/app/app-screen-12.jpg",
        "assets/app/app-screen-13.jpg",
        "assets/app/app-screen-14.jpg",
        "assets/app/app-screen-15.jpg",
        "assets/app/app-screen-16.jpg",
        "assets/app/app-screen-17.jpg",
        "assets/app/app-screen-18.jpg",
        "assets/app/app-screen-19.jpg",
        "assets/app/app-screen-20.jpg",
        "assets/app/app-screen-21.jpg",
        "assets/app/app-screen-22.jpg",
        "assets/app/app-screen-23.jpg",
        "assets/app/app-screen-24.jpg",
        "assets/app/app-screen-25.jpg",
        "assets/app/app-screen-26.jpg",
        "assets/app/app-screen-27.jpg",
        "assets/app/app-screen-28.jpg",
        "assets/app/app-screen-29.jpg",
        "assets/app/app-screen-30.jpg",
        "assets/app/app-screen-31.jpg",
        "assets/app/app-screen-32.jpg"
      ]
    },
    {
      id: "social-media",
      title: "سوشيال ميديا",
      client: "منصات وحملات رقمية (AI-Powered Workspace)",
      category: "سوشيال ميديا",
      year: "2024",
      image: "assets/images/ai-powered-creative-workspace.png",
      summary: "تصاميم سوشيال ميديا وحملات رقمية إبداعية متعددة الأنماط تشمل AI-Powered Workspace ونماذج تسويقية منوعة (10 تصاميم).",
      overview: "باقة تصاميم مبتكرة لمنصات التواصل الاجتماعي تجمع بين الإبداع الرقمي وحلول الذكاء الاصطناعي (AI-Powered Creative Workspace) ونماذج بصرية منوعة للعلامات التجارية، مع مراعاة المقاييس المعتمدة لمنصات انستغرام، لينكد إن، وفيسبوك، بتناسق لوني وتأثيرات بصرية لافتة.",
      role: "الفكرة، التصميم الرقمي، والمعالجة البصرية",
      tools: ["Adobe Photoshop", "Adobe Illustrator"],
      gallery: [
        "assets/images/ai-powered-creative-workspace.png",
        "assets/social/social-img-01.jpg",
        "assets/social/social-img-02.jpg",
        "assets/social/social-img-03.png",
        "assets/social/social-img-04.png",
        "assets/social/social-img-05.jpg",
        "assets/social/social-img-06.jpg",
        "assets/social/social-img-07.jpg",
        "assets/social/social-img-08.jpg",
        "assets/social/social-img-09.jpg"
      ]
    }
  ]
};
