/**
 * =========================================================================
 * ملف بيانات الموقع (Portfolio Data)
 * محدث بالكامل ببيانات السي في والمهارات والمشاريع الحقيقية
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  // المعلومات الشخصية والتعريفية (مستخرجة بدقة من السيرة الذاتية الرسمية)
  profile: {
    name: "محمد رمضان سعد",
    title: "مصمم جرافيك ومخرج مطبوعات وتطبيقات",
    experience: "4 سنوات",
    intro: "خريج جامعة القاهرة بتقدير جيد جداً مع مرتبة الشرف، مصمم جرافيك بخبرة 4 سنوات متخصصة في الإخراج الفني للكتب والمناهج الدراسية، المجلات، التقارير الدولية، وتصميم واجهات وتطبيقات الويب والموبايل.",
    email: "mohamad.ramadans100@gmail.com",
    location: "البراجيل، الجيزة، مصر",
    heroImage: "assets/images/hero-modern-ui.png",
    aboutImage: "assets/images/mohamed-ramadan-portrait.png",
    bio: [
      "مصمم جرافيك محترف بخبرة 4 سنوات متخصصة في الإخراج الفني وتنسيق المطبوعات والنشر المكتبي بدار نشر سلاح الأزهري. أمتلك خبرة عميقة في برنامج Adobe InDesign وتوزيع النصوص والتايبوغرافي الدقيق المريح للعين وفق أعلى المعايير الطباعية.",
      "خريج ليسانس آداب جغرافيا من جامعة القاهرة بتقدير عام جيد جداً مع مرتبة الشرف. أجمع بين الحس الفني الرفيع في التصميم والتحليل الدقيق، مع دراسات معتمدة في الذكاء الاصطناعي (AI) وتصميم وتطوير واجهات وتطبيقات الويب والموبايل (UI/UX) ونظم المعلومات الجغرافية (GIS)."
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
    { label: "المهارات والبرامج", href: "#skills" },
    { label: "تواصل معي", href: "#contact" }
  ],

  // تصنيفات المشاريع الفعلية في المعرض
  categories: [
    "الكل",
    "كتب وروايات",
    "تنسيق وإخراج الرسائل العلمية",
    "المجلة السعودية",
    "التقارير الدولية",
    "كتب تعليمية",
    "بروشور",
    "برزنتيشن",
    "تطبيقات الويب والموبايل",
    "سوشيال ميديا"
  ],

  // الخدمات التخصصية (تشمل التطبيقات والمواقع، الرسائل العلمية، والعروض التقديمية)
  services: [
    {
      title: "تصميم المواقع وتطبيقات الموبايل (Web & App)",
      description: "تصميم واجهات وتجربة المستخدم (UI/UX) للمواقع ولوحات التحكم (Dashboards) والتطبيقات الإلكترونية المنشورة على Google Play.",
      icon: "smartphone"
    },
    {
      title: "تصميم وتنسيق الكتب والروايات",
      description: "تنسيق داخلي احترافي لصفحات الكتب والروايات مع توزيع النصوص وضبط الهوامش والخطوط المريحة للقراءة.",
      icon: "frame"
    },
    {
      title: "تنسيق وإخراج الرسائل العلمية والأبحاث",
      description: "إخراج الأطروحات الأكاديمية (ماجستير ودكتوراه) والأبحاث المحكمة وفق اللوائح الجامعية المعتمدة وضبط الهوامش والفهارس.",
      icon: "frame"
    },
    {
      title: "تصميم العروض التقديمية (Presentations)",
      description: "إعداد وتصميم شرائح العروض التقديمية للمؤتمرات والندوات وورش العمل بأسلوب بصري تفاعلي ومؤثر.",
      icon: "megaphone"
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
    },
    {
      title: "تصاميم السوشيال ميديا والإعلانات",
      description: "تصاميم بصرية مبتكرة لحملات السوشيال ميديا والإعلانات الممولة ومساحات العمل الرقمية.",
      icon: "smartphone"
    }
  ],

  // المهارات والبرامج (مستخرجة بالكامل من السيرة الذاتية)
  skills: [
    "Adobe InDesign",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Figma & UI/UX Design",
    "Book & Textbook Layout",
    "Editorial & Magazine Design",
    "Typography & Visual Hierarchy",
    "Branding & Visual Identity",
    "Print & Brochure Design",
    "Social Media & Ad Creatives",
    "Artificial Intelligence (AI Tools)",
    "Web & App Development",
    "GIS & Cartography (ArcMap / ArcGIS Pro)",
    "Microsoft Office Suite"
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
      id: "scientific-thesis",
      title: "تنسيق وإخراج الرسائل العلمية",
      client: "باحثون أكاديميون وجامعات (أطروحة مواجهة الإخلال بأحكام الصحة)",
      category: "تنسيق وإخراج الرسائل العلمية",
      year: "2024",
      image: "assets/dr/thesis-page-01.jpg",
      summary: "تنسيق وإخراج داخلي احترافي للرسائل والأطروحات العلمية مع ضبط الهوامش والمراجع والفهارس وفق معايير الجامعات (15 صفحة ونموذجاً).",
      overview: "مشروع متخصص في التنسيق والإخراج الأكاديمي للرسائل العلمية وأطروحات الماجستير والدكتوراه (نموذج أطروحة مواجهة الإخلال بأحكام الصحة). يشمل تصميم الغلاف المعتمد، ضبط وتوحيد الخطوط والتايبوغرافي الأكاديمي، تنسيق الهوامش السفلية وعلامات التنصيص والمراجع، وإعداد فهارس الآيات والأحاديث والمصادر بدقة متناهية توافق معايير اللجان والمجالس العلمية.",
      role: "الإخراج الأكاديمي، التنسيق التايبوغرافي، وتصميم الغلاف والفهارس",
      tools: ["Adobe InDesign", "Adobe Photoshop"],
      gallery: [
        "assets/dr/thesis-page-01.jpg",
        "assets/dr/thesis-page-02.jpg",
        "assets/dr/thesis-page-03.jpg",
        "assets/dr/thesis-page-04.jpg",
        "assets/dr/thesis-page-05.jpg",
        "assets/dr/thesis-page-06.jpg",
        "assets/dr/thesis-page-07.jpg",
        "assets/dr/thesis-page-08.jpg",
        "assets/dr/thesis-page-09.jpg",
        "assets/dr/thesis-page-10.jpg",
        "assets/dr/thesis-page-11.jpg",
        "assets/dr/thesis-page-12.jpg",
        "assets/dr/thesis-page-13.jpg",
        "assets/dr/thesis-page-14.jpg",
        "assets/dr/thesis-page-15.jpg"
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
      client: "دار نشر سلاح الأزهري / المرحلة الثانوية",
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
      id: "presentation",
      title: "برزنتيشن",
      client: "مؤتمرات وورش عمل ومؤسسات تدريبية",
      category: "برزنتيشن",
      year: "2024",
      image: "assets/przntation/slide-01.jpg",
      summary: "تصميم وإخراج عروض تقديمية (Presentations) تفاعلية جذابة تشمل عرض 'من قاعات الدراسة إلى الميدان العملي' ونماذج عروض أعمال رقمية (23 شريحة).",
      overview: "تصميم احترافي لعروض الشرائح والتقديم (Presentations) للمؤتمرات والمحاضرات وحقائب التدريب. يضم العرض التفاعلي الكامل 'من قاعات الدراسة إلى الميدان العملي' ونماذج لعروض البورتفليو الرقمية، بتوزيع بصري متوازن يجمع بين الرسوم التوضيحية، الإنفوجرافيك، والرسائل النصية المركزة التي تحافظ على انتباه وتفاعل الجمهور.",
      role: "تصميم الشرائح، صياغة الإنفوجرافيك، والتنسيق البصري للعرض",
      tools: ["Adobe Illustrator", "Adobe Photoshop", "PowerPoint"],
      gallery: [
        "assets/przntation/slide-01.jpg",
        "assets/przntation/slide-02.jpg",
        "assets/przntation/slide-03.jpg",
        "assets/przntation/slide-04.jpg",
        "assets/przntation/slide-05.jpg",
        "assets/przntation/slide-06.jpg",
        "assets/przntation/slide-07.jpg",
        "assets/przntation/slide-08.jpg",
        "assets/przntation/slide-09.jpg",
        "assets/przntation/slide-10.jpg",
        "assets/przntation/slide-11.jpg",
        "assets/przntation/slide-12.jpg",
        "assets/przntation/slide-13.jpg",
        "assets/przntation/slide-14.jpg",
        "assets/przntation/slide-15.jpg",
        "assets/przntation/slide-16.jpg",
        "assets/przntation/slide-17.jpg",
        "assets/przntation/slide-18.jpg",
        "assets/przntation/slide-19.jpg",
        "assets/przntation/slide-20.jpg",
        "assets/przntation/slide-21.jpg",
        "assets/przntation/slide-22.jpg",
        "assets/przntation/slide-23.jpg"
      ]
    },
    {
      id: "web-mobile-app",
      title: "تطبيقات الويب والموبايل (Web & App)",
      client: "Google Play Store / mr1graphics",
      category: "تطبيقات الويب والموبايل",
      year: "2024",
      image: "assets/app/app-main-cover.jpg",
      appUrl: "https://play.google.com/store/apps/details?id=com.mr1graphics.menhajalmuslim",
      summary: "تصميم واجهات وتجربة المستخدم لتطبيقات الهاتف والويب (UI/UX) تشمل لوحة تحكم تفاعلية (Web Dashboard)، تطبيق السياحة والرحلات، وتطبيق منهاج المسلم على متجر Google Play (34 شاشة ونموذجاً).",
      overview: "مشروع احترافي متكامل في تصميم واجهات وتجربة المستخدم (UI/UX Design) لتطبيقات الموبايل والويب. يضم تصاميم عصرية للوحة تحكم تفاعلية (Interactive Web Dashboard)، وتطبيق السياحة وحجز الرحلات، وتطبيق 'منهاج المسلم' المنشور رسمياً على متجر Google Play، مع الاهتمام بأدق التفاصيل التفاعلية، تناغم الألوان، وضوح التايبوغرافي، وتسهيل تجربة المستخدم للوصول لكافة الخصائص بسلاسة تامة.",
      role: "تصميم واجهات المستخدم (UI/UX Design)، تصميم لوحات التحكم والأيقونات والهوية البصرية",
      tools: ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator"],
      gallery: [
        "assets/app/app-main-cover.jpg",
        "assets/app/web-dashboard-ui.jpg",
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
      client: "حملات إعلانية ومنصات رقمية",
      category: "سوشيال ميديا",
      year: "2024",
      // الغلاف الجديد من أول صورة في New folder (2)
      image: "assets/social/social-top-01.png",
      summary: "تصاميم سوشيال ميديا وإعلانات ترويجية احترافية تتصدرها حملات المجلات ومناهج الثانوية ومساحات العمل الرقمية (16 تصميماً).",
      overview: "باقة تصاميم متقدمة وشاملة لمنصات التواصل الاجتماعي، تتصدرها إعلانات المجلات الثقافية وحملات الثانوية العامة والأزهرية، بالإضافة لتصاميم مساحات العمل الإبداعية المدعومة بالذكاء الاصطناعي (AI-Powered Workspace) ونماذج بصرية تسويقية مجهزة للمنصات الرقمية بأعلى دقة وجاذبية بصرية.",
      role: "الفكرة، التصميم الرقمي، المعالجة البصرية، وإعداد الحملات",
      tools: ["Adobe Photoshop", "Adobe Illustrator"],
      // تم وضع صور New folder (2) في الأول من الأعلى مباشرة
      gallery: [
        "assets/social/social-top-01.png",
        "assets/social/social-top-02.png",
        "assets/social/social-top-03.png",
        "assets/social/social-top-04.png",
        "assets/social/social-top-05.png",
        "assets/social/social-top-06.jpg",
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
