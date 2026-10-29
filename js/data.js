/**
 * =========================================================================
 * ملف بيانات الموقع (Portfolio Data)
 * يحتوي على المشاريع الحقيقية فقط بدون أي نماذج وهمية
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  // المعلومات الشخصية والتعريفية
  profile: {
    name: "محمد رمضان",
    title: "مصمم جرافيك ومخرج مطبوعات",
    experience: "4 سنوات",
    intro: "مصمم جرافيك متخصص في الإخراج الصحفي، تصميم وتنسيق الكتب والروايات، والمجلات، والتقارير الدولية والسنوية، بالإضافة للهويات البصرية.",
    email: "mohamad.ramadans100@gmail.com",
    location: "مصر",
    heroImage: "assets/images/hero.jpg",
    aboutImage: "assets/images/about.jpg",
    bio: [
      "مصمم جرافيك بخبرة 4 سنوات متخصصة في الإخراج الفني وتنسيق المطبوعات والنشر المكتبي. عملت على إخراج العديد من الكتب والروايات الأدبية بالتعاون مع دور نشر ومؤلفين بارزين.",
      "لدي خبرة واسعة في تصميم المجلات الدورية والتقارير الدولية الرسمية، مع التركيز على التوزيع التايبوغرافي الدقيق المريح للعين، واختيار الخطوط والألوان التي تخدم رسالة المحتوى وتمنحه هوية بصرية رصينة وجذابة."
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

  // روابط القائمة الرئيسية (تم حذف أعمال مميزة منعاً للتكرار)
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
    "التقارير الدولية"
  ],

  // الخدمات التخصصية
  services: [
    {
      title: "تصميم وتنسيق الكتب والروايات",
      description: "تنسيق داخلي احترافي لصفحات الكتب والروايات مع توزيع النصوص وضبط الهوامش والخطوط المريحة للقراءة.",
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
      title: "تصميم الهوية البصرية",
      description: "شعارات وألوان وخطوط تمنح المؤسسات والشركات شخصية بصرية واضحة ومميزة.",
      icon: "fingerprint"
    },
    {
      title: "تصميم السوشيال ميديا",
      description: "تصاميم جذابة للحملات والمنشورات التسويقية بهوية متسقة على مختلف المنصات.",
      icon: "smartphone"
    }
  ],

  // المهارات والبرامج
  skills: [
    "Adobe InDesign",
    "Adobe Photoshop",
    "Adobe Illustrator"
  ],

  // المشاريع الحقيقية فقط (صورة الغلاف دائماً أول صورة)
  projects: [
    {
      id: "books-and-novels",
      title: "كتب وروايات",
      client: "دور نشر ومؤلفون",
      category: "كتب وروايات",
      year: "2024",
      // صورة الغلاف هي الأولى دائماً
      image: "assets/book/book-page-01.jpg",
      summary: "إخراج فني وتنسيق داخلي متكامل للكتب والروايات بـ 22 صفحة ونموذجاً متميزاً وجودة طباعية عالية.",
      overview: "مشروع احترافي متكامل لإخراج وتنسيق الكتب والروايات الأدبية. يشمل التصميم الداخلي للصفحات، التنسيق التايبوغرافي المريح للعين، وضبط الهوامش والترقيم والترويسات وعناوين الفصول، مع باقة متكاملة من 22 نموذجاً وتصميماً بصيغ متعددة ملائمة لأعلى معايير دور النشر والمطابع.",
      role: "التصميم الداخلي، الإخراج الفني، والتنسيق الطباعي",
      tools: ["Adobe InDesign", "Adobe Photoshop"],
      // جميع الصور الـ 22 كاملة في المعرض
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
      // صورة الغلاف هي الأولى دائماً
      image: "assets/suide/suide-cover.png",
      summary: "تصميم وإخراج تحريري وصحفي شامل لمجلة ثقافية واجتماعية رائدة وفق أرقى المعايير الإخراجية الحديثة.",
      overview: "مشروع الإخراج الصحفي والتصميم التحريري لـ 'المجلة السعودية'. يتضمن تصميم الغلاف الرئيسي بأسلوب بصري فريد يعكس الطابع الثقافي والأدبي الأصيل، بالإضافة لتنسيق الأبواب الداخلية والمقالات والحوارات، وتوزيع الصور والمساحات البيضاء بتوازن هندسي دقيق يمنح القارئ تجربة مطالعة ثرية وانسيابية.",
      role: "تصميم الغلاف، الإخراج الصحفي، والتنسيق الداخلي",
      tools: ["Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator"],
      // صور المجلة كاملة (8 صور ونماذج)
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
      // صورة الغلاف هي الأولى دائماً
      image: "assets/report/report-cover.jpg",
      summary: "تصميم وإخراج التقارير الدولية والسنوية الرسمية مع رسوم بيانية وتنسيق معلوماتي متقدم واحترافي.",
      overview: "إخراج وتنسيق التقارير والوثائق الرسمية الدولية. يركز المشروع على تصميم غلاف رسمي يعكس رصانة ومصداقية التقرير، مع إخراج وتنسيق الصفحات الداخلية متعددة اللغات، وتحويل البيانات والإحصاءات المعقدة إلى مخططات إنفوجرافيك وجداول مرئية واضحة ومتقنة تلائم العرض الرقمي والطباعة الفاخرة.",
      role: "تصميم الغلاف، تنسيق التقارير، وتصميم الإنفوجرافيك",
      tools: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"],
      // صور التقارير كاملة (7 صور ونماذج)
      gallery: [
        "assets/report/report-cover.jpg",
        "assets/report/report-page-02.jpg",
        "assets/report/report-page-03.jpg",
        "assets/report/report-page-04.jpg",
        "assets/report/report-page-05.png",
        "assets/report/report-page-06.png",
        "assets/report/report-page-07.png"
      ]
    }
  ]
};
