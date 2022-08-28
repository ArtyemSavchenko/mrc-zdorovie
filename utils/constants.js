export const formSelectors = {
  formSelector: '#contact-form',
  approvalSelector: '.form__cb',
  inputSelector: '.input-field__input',
  inputErrorClass: 'input-field__input_error',
  submitBtnSelector: '.form__submit',
}

export const popupInfoSelectors = {
  popupSelector: "#popup-info",
  infoBoxSelector: ".popup__info-box",
};
export const popupImgSelectors = {
  popupSelector: '#popup-img',
  imgElSelector: '.popup__img',
};
export const documentPhotoSelector = '.documents__photo';
export const procedureCardSelector = ".procedure-card";

const popupTags = {
  openInfoText: '<p class="popup__info-text">',
  closeInfoText: "</p>",
  openInfoTextAccent: '<span class="popup__info-text_accent">',
  closeInfoTextAccent: "</span>",
};
export const proceduresInfos = [
  {
    name: "general-massage",
    contentHtml: `${popupTags.openInfoText}
      ${popupTags.openInfoTextAccent}Массаж${popupTags.closeInfoTextAccent} общий с&nbsp;разработкой суставов назначается для: 
      <br>&mdash;&nbsp;нормализации двигательной функции и&nbsp;повышения тонуса мышц; 
      <br>&mdash;&nbsp;улучшения проводимости мышц;
      <br>&mdash;&nbsp;улучшения движения биологических жидкостей;
      <br>&mdash;&nbsp;предотвращения ограничений пассивных движений в&nbsp;суставах;
      <br>&mdash;&nbsp;нормализации метаболических процессов;
      <br>&mdash;&nbsp;улучшения общего состояния.
      ${popupTags.closeInfoText}`,
  },
  {
    name: "speech-therapy-massage",
    contentHtml: `${popupTags.openInfoText}
      Основными задачами ${popupTags.openInfoTextAccent}логопедического массажа${popupTags.closeInfoTextAccent} являются:
      <br>&mdash;&nbsp;нормализация мышечного тонуса, преодоление гипертонуса в&nbsp;мимической и&nbsp;артикуляционной мускулатуре;
      <br>&mdash;&nbsp;устранение гиперкинезов, синкинезий, девиации;
      <br>&mdash;&nbsp;стимуляция положительных кинестезий;
      <br>&mdash;&nbsp;улучшение качества артикуляционных движений;
      <br>&mdash;&nbsp;увеличение силы мышечных сокращений;
      <br>&mdash;&nbsp;активизация тонких дифференцированных движений органов артикуляции, необходимых для коррекции звукопроизношения.
      ${popupTags.closeInfoText}`,
  },
  {
    name: "pool",
    contentHtml: `${popupTags.openInfoText}
      В&nbsp;нашем ${popupTags.openInfoTextAccent}бассейне${popupTags.closeInfoTextAccent} занятия проходят под руководством опытных сертифицированных инструкторов!
      ${popupTags.closeInfoText}
      ${popupTags.openInfoText}
      В&nbsp;ходе занятий:
      <br>&mdash;&nbsp;укрепляется иммунная система;
      <br>&mdash;&nbsp;расслабляется нервная система;
      <br>&mdash;&nbsp;пропадает страх перед водой;
      <br>&mdash;&nbsp;снижается гипертонус;
      <br>&mdash;&nbsp;нормализуется сон;
      <br>&mdash;&nbsp;происходит закаливание организма;
      <br>&mdash;&nbsp;малыш получает положительные эмоции.
      ${popupTags.closeInfoText}`,
  },
  {
    name: "bilotherapy",
    contentHtml: `${popupTags.openInfoText}
      С&nbsp;помощью ${popupTags.openInfoTextAccent}билотерапии${popupTags.closeInfoTextAccent} можно решить много задач:
      <br>&mdash;&nbsp;вывести человека из&nbsp;состояния уныния или депрессии;
      <br>&mdash;&nbsp;устранить стресс;
      <br>&mdash;&nbsp;создать позитивное настроение;
      <br>&mdash;&nbsp;активировать умственную деятельность;
      <br>&mdash;&nbsp;снять боль;
      <br>&mdash;&nbsp;снять соматическое напряжение за&nbsp;счёт физиоакустического эффекта;
      <br>&mdash;&nbsp;ликвидировать в&nbsp;мозге очаги &laquo;застойного&raquo; возбуждения;
      <br>&mdash;&nbsp;облегчить состояние психосоматических заболеваний;
      <br>&mdash;&nbsp;повысить эффективность выполнения различных психотерапевтических техник.
      ${popupTags.closeInfoText}`,
  },
  {
    name: "music-therapy",
    contentHtml: `${popupTags.openInfoText}
      Полезность ${popupTags.openInfoTextAccent}музыкотерапии${popupTags.closeInfoTextAccent} в&nbsp;работе с&nbsp;детьми с&nbsp;ограниченными возможностями в&nbsp;том, что она:
      <br>&mdash;&nbsp;помогает укрепить доверие, взаимопонимание между участниками процесса;
      <br>&mdash;&nbsp;помогает ускорить прогресс терапии, так как внутренние переживания легче выражаются с&nbsp;помощью музыки, чем при разговоре;
      <br>&mdash;&nbsp;музыка усиливает внимание к&nbsp;чувствам, служит материалом, усиливающим осознание; 
      <br>&mdash;&nbsp;косвенно повышается музыкальная компетенция, возникает чувство внутреннего контроля и&nbsp;порядка.
      ${popupTags.closeInfoText}`,
  },
  {
    name: "teacher-defectologist",
    contentHtml: `${popupTags.openInfoText}
      ${popupTags.openInfoTextAccent}Учитель-дефектолог${popupTags.closeInfoTextAccent}&nbsp;&mdash; это педагог, специализирующийся на&nbsp;работе с&nbsp;детьми, имеющими различные отклонения в&nbsp;развитии.
      В&nbsp;своей работе он&nbsp;используют различные средства, направленные на&nbsp;коррекцию и&nbsp;компенсацию недостатков, порождающих трудности в&nbsp;овладении учебными знаниями, умениями и&nbsp;навыками у&nbsp;детей разного возраста, находящихся в&nbsp;специализированных условиях обучения.
      ${popupTags.closeInfoText}`,
  },
  {
    name: "psychologist",
    contentHtml: `${popupTags.openInfoText}
      ${popupTags.openInfoTextAccent}Психология${popupTags.closeInfoTextAccent}
      ${popupTags.closeInfoText}
      ${popupTags.openInfoText}
      Основными компонентами психики являются потребности и&nbsp;образы, благодаря которым осуществляется ориентирование поведения деятельности человека. Потребности порождают цели, которые вместе с&nbsp;образами окружающей среды ориентируют человека на&nbsp;удовлетворение соответствующих нужд. В&nbsp;целом различные психические компоненты поведения образуют своего рода структуру, придающую ему устойчивость. У&nbsp;человека эта структура выступает в&nbsp;виде психического склада личности (ее&nbsp;способностей, характера, темперамента, ценностных ориентаций и&nbsp;т.&nbsp;п.), который определяет своеобразие конкретных психических проявлений. Несмотря на&nbsp;то, что особенностями основных психических процессов (ощущений и&nbsp;образов восприятия, мыслей и&nbsp;чувств) являются их&nbsp;внутренний характер, недоступность непосредственному объективному наблюдению, существует возможность их&nbsp;постижения как реальности, независимой от&nbsp;субъективного самоотчета о&nbsp;них, обусловленная возникновением и&nbsp;развитием этих процессов в&nbsp;объективной системе отношений с&nbsp;другими людьми.
      ${popupTags.closeInfoText}`,
  },
  {
    name: "logopedist",
    contentHtml: `${popupTags.openInfoText}
        ${popupTags.openInfoTextAccent}Логопедия${popupTags.closeInfoTextAccent}
        ${popupTags.closeInfoText}
        ${popupTags.openInfoText}
        Недостатки речи различны по&nbsp;своим проявлениям, своей природе, степени выраженности и&nbsp;влиянию на&nbsp;психич. состояние и&nbsp;развитие. Нек-рые нарушения относятся только к&nbsp;произношению (косноязычие), другие проявляются также в&nbsp;нарушениях чтения (алексия, дислексия), письма (аграфия, дисграфия) или захватывают лексико-грамматич. сторону речи (напр., алалия, афазия). Часто недостатки речи выражаются в&nbsp;расстройствах её&nbsp;темпа и&nbsp;плавности (заикание, тахилалия, брадифразия). Нарушения речи затрудняют общение с&nbsp;окружающими, нередко препятствуют успешному развитию познават. деятельности детей, неблагоприятно влияют на&nbsp;формирование их&nbsp;психики. У&nbsp;детей появляются такие черты, как замкнутость, неуверенность в&nbsp;себе, негативизм и&nbsp;другое.
        ${popupTags.closeInfoText}
        `,
  },
  {
    name: "korvit",
    contentHtml: `${popupTags.openInfoText}
      ${popupTags.openInfoTextAccent}&laquo;Корвит&raquo;${popupTags.closeInfoTextAccent}
      &nbsp;&mdash; это уникальный тренажёр для механотерапии, созданный в&nbsp;России, и&nbsp;предназначенный для имитации опорной нагрузки на&nbsp;ноги.
      ${popupTags.closeInfoText}
      ${popupTags.openInfoText}
      Показания к&nbsp;применению имитатора опорной нагрузки:
      <br>&mdash; гемипаретическая форма ДЦП;
      <br>&mdash; атонически-астатическая форма ДЦП;
      <br>&mdash; спастическая диплегия;
      <br>&mdash; эквинусная установка стоп у&nbsp;детей;
      <br>&mdash; отсутствие опорности стоп при хорошем соматическом и&nbsp;психическом состоянии ребёнка;
      <br>&mdash; отсутствие шаговых движений у&nbsp;ребёнка;
      <br>&mdash; вынужденная гипокинезия, вызванная тяжелым состоянием больного и&nbsp;невозможностью проведения ранней мобилизации.
      ${popupTags.closeInfoText}`,
  },
  {
    name: "physical-rehabilitation",
    contentHtml: `${popupTags.openInfoText}
      Во время занятий ${popupTags.openInfoTextAccent}ЛФК и АФК${popupTags.closeInfoTextAccent} при ДЦП: 
      <br>— расслабляются нижние и верхние конечности;
      <br>— укрепляются мышцы живота и спины;
      <br>— сохраняется способность держать равновесие стоя;
      <br>— развиваются локомоторные движения, гибкость;
      <br>— развивается мелкая моторика рук, способность к произвольному торможению движений;
      <br>— снижается гипертонус мышц;
      <br>— улучшается координация движений;
      <br>— увеличивается амплитуда движений в суставах;
      ${popupTags.closeInfoText}`,
  },
  {
    name: "training-on-simulators",
    contentHtml: `${popupTags.openInfoText}
      ${popupTags.openInfoTextAccent}Занятие${popupTags.closeInfoTextAccent} тренировочного типа ${popupTags.openInfoTextAccent}с&nbsp;тренажерами${popupTags.closeInfoTextAccent} позволяют детям овладеть комплексом упражнений, способствующих укреплению мышц рук, плечевого пояса, брюшного пресса, спины, ног и&nbsp;развитию силы, быстроты движений, ловкости, гибкости и&nbsp;общей выносливости. Упражнения на&nbsp;тренажерах совершенствуют координацию движений, укрепляют суставный аппарат, улучшается гибкость позвоночника, развивается грудная клетка, совершенствуется осанка.
      ${popupTags.closeInfoText}`,
  },
  {
    name: "electroencephalogram",
    contentHtml: `${popupTags.openInfoText}
      ${popupTags.openInfoTextAccent}Электроэнцефалография (ЭЭГ)${popupTags.closeInfoTextAccent}&nbsp;&mdash; метод, который применяется для исследования состояния человеческого мозга и&nbsp;базируется на&nbsp;регистрации его электрической активности. Это обследование позволяет обнаружить распространение патологических процессов и&nbsp;признаки эпилепсии.
      ${popupTags.closeInfoText}`,
  },
  {
    name: "interactive-room",
    contentHtml: `${popupTags.openInfoText}
      ${popupTags.openInfoTextAccent}Интерактивная комната${popupTags.closeInfoTextAccent}&nbsp;&mdash; это особым образом организованная среда, состоящая из&nbsp;множества различного рода стимуляторов, воздействующих на&nbsp;базовые органы чувств (зрение, слух, обоняние, осязание) и&nbsp;вестибулярные рецепторы.
      Предназначена для решения следующих задач: обучение на&nbsp;основе сенсорной стимуляции, социальной сети адаптации (например, детей с&nbsp;аутизмом), снятия мышечного и&nbsp;психоэмоционального напряжения, активизации различных функций нервной системы, стимуляцией зрения, осязания, слуха.
      ${popupTags.closeInfoText}`,
  },
  {
    name: "bioacoustic-correction",
    contentHtml: `${popupTags.openInfoText}
      ${popupTags.openInfoTextAccent}${popupTags.closeInfoTextAccent}
      ${popupTags.openInfoTextAccent}Биоакустическая коррекция${popupTags.closeInfoTextAccent} (БАК)&nbsp;&mdash; это способ, который заставляет мозг работать и&nbsp;налаживать старые &laquo;древние&raquo; связи. Ребенок слушает музыку, которая построена согласно его собственной электроэнцефалограммы. Она синхронизируется с&nbsp;работой мозга в&nbsp;режиме реального времени, вступает с&nbsp;ним в&nbsp;некий резонанс. Мозг слышит сам себя, т.&nbsp;е. свое эхо!
      ${popupTags.closeInfoText}
      ${popupTags.openInfoText}
      Процедура БАК заключается в&nbsp;прослушивании пациентом акустического образа собственной электроэнцефалограммы, полученного путем преобразования текущей биоэлектрической активности головного мозга в&nbsp;звук слышимого диапазона.
      ${popupTags.closeInfoText}
      ${popupTags.openInfoText}
      Метод БАК показан детям:
      <br>&mdash;&nbsp;c&nbsp;нарушениями психического развития (задержка умственного развития, умственная отсталость, аутистический синдром);
      <br>&mdash;&nbsp;c&nbsp;нарушениями речевого развития (дизартрия, дислалия, ОНР, алалия, дисграфия, дислексия);
      <br>&mdash;&nbsp;c&nbsp;синдромом дефицита внимания и&nbsp;гиперактивностью;
      <br>&mdash;&nbsp;c&nbsp;неврозоподобными нарушениями (тики, энурез);
      <br>&mdash;&nbsp;при последствиях ОНМК, органического поражения головного мозга, черепно-мозговых травм;
      <br>&mdash;&nbsp;со&nbsp;сниженным слухом.
      ${popupTags.closeInfoText}`,
  },
  {
    name: "pharmacopuncture",
    contentHtml: `${popupTags.openInfoText}
      ${popupTags.openInfoTextAccent}Фармакопунктура${popupTags.closeInfoTextAccent}&nbsp;&mdash; методика введения в&nbsp;организм человека разных лекарственных препаратов через активные точки, которые группируются в&nbsp;так называемые меридианы (12&nbsp;парных и&nbsp;2&nbsp;непарных, не&nbsp;считая &laquo;чудесных&raquo; меридиан) и&nbsp;охватывают человека полностью (туловище, голову, верхние и&nbsp;нижние конечности по&nbsp;передней, задней и&nbsp;боковыми поверхностями). За&nbsp;счет того, что введение производится в&nbsp;биологически активные точки достигается двойное воздействие на&nbsp;организм: фарамакотерапия и&nbsp;стимуляция точек. Стимуляция акупунктурных точек регулирует циркуляцию энергии, функциональную деятельность всего организма и&nbsp;нормализует его физиологические функции. Вместе с&nbsp;этим, лекарственные препараты, проникая постепенно в&nbsp;систему кровообращения и&nbsp;распространяясь по&nbsp;всему организму, также оказывают на&nbsp;него лечебное воздействие.
      ${popupTags.closeInfoText}`,
  },
  {
    name: "mud-applications",
    contentHtml: `${popupTags.openInfoText}      
      ${popupTags.openInfoTextAccent}Грязевые аппликации${popupTags.closeInfoTextAccent} обладают регенерирующим, трофическим, противомикробным эффектом. Также у&nbsp;них есть бактерицидное действие, они способны улучшить кровообращение, стабилизировать жировой баланс и&nbsp;очищать кожный покров.
      ${popupTags.closeInfoText}
      ${popupTags.openInfoText}
      Грязевые аппликации активно применяются в&nbsp;нашем Центре при лечении заболеваний нервной системы и&nbsp;опорно-двигательного аппарата. После применения данных процедур отмечается снижение спастики мышц, улучшение походки, увеличение объема движений в&nbsp;суставах.
      ${popupTags.closeInfoText}`,
  },
  {
    name: "pneumomassage",
    contentHtml: `${popupTags.openInfoText}
      ${popupTags.openInfoTextAccent}Пневмомассаж${popupTags.closeInfoTextAccent}
      предназначен для проведения циклического массажа верхних и&nbsp;нижних конечностей при профилактике и&nbsp;лечении сердечно-сосудистых нарушений, венозных и&nbsp;лимфатических расстройств, в&nbsp;т.&nbsp;ч. после операций, для предотвращения заболеваний, связанных с&nbsp;ограничением движения, а&nbsp;также для косметического (антицеллюлитного) и&nbsp;спортивного (восстановительного) массажа.
      ${popupTags.closeInfoText}`,
  },
  {
    name: "physiotherapy",
    contentHtml: `${popupTags.openInfoText}
      ${popupTags.openInfoTextAccent}Физиотерапия${popupTags.closeInfoTextAccent}&nbsp;&mdash; важный метод лечения, применяемый при различных острых и
      хронических заболеваниях. Физиотерапевтические процедуры имеют минимум побочных
      эффектов, легки в&nbsp;применении; зачастую при лечении этим методом используют
      разнообразные природные факторы. Физиотерапия незаменима в&nbsp;период реабилитации,
      восстановления после различных заболеваний, при профилактике обострений
      заболеваний, а&nbsp;также как способ укрепления организма, поддержания тонуса,
      работоспособности и&nbsp;хорошего настроения.
      ${popupTags.closeInfoText}
      ${popupTags.openInfoText}
      ${popupTags.openInfoTextAccent}Электролечение${popupTags.closeInfoTextAccent}&nbsp;&mdash; методы физиотерапии, основанные на&nbsp;использовании
      дозированного воздействия на&nbsp;организм электрических токов, электрических, магнитных
      или электромагнитных полей.
      ${popupTags.closeInfoText}
      ${popupTags.openInfoText}
      Электрические явления играют большую роль в&nbsp;важнейших физиологических
      процессах:
      <br>&mdash;&nbsp;возбуждении и&nbsp;его проведении;
      <br>&mdash;&nbsp;трансмембранном переносе веществ.
      ${popupTags.closeInfoText}
      ${popupTags.openInfoText}
      Показателем биоэлектрической активности тканей, связанной с&nbsp;протекающими
      метаболическими процессами, служит разность электрических потенциалов,
      определяемая между двумя точками живой ткани. Обычно такую разность потенциалов
      условно называют просто потенциалом. Электрический ток и&nbsp;электромагнитные
      колебания определённых параметров широко используются в&nbsp;качестве физиологических
      раздражителей, влияющих на&nbsp;функциональное состояние отдельных органов и&nbsp;систем
      организма с&nbsp;лечебной целью.
      ${popupTags.closeInfoText}`,
  },
  {
    name: "kinesiotaping",
    contentHtml: `${popupTags.openInfoText}
      ${popupTags.openInfoTextAccent}Тейпы${popupTags.closeInfoTextAccent}, которые специалист наносит на&nbsp;кожу лица, шеи, грудной клетки ребенка, способствуют решению очень актуальных проблем, влияющих на&nbsp;речевое развитие:
      <br>&mdash;&nbsp;полуоткрытый рот, нарушение носового дыхания и&nbsp;гипотонус мышц ВНЧС;
      <br>&mdash;&nbsp;гиперсаливация (слюнотечение);
      <br>&mdash;&nbsp;инфантильный тип глотания;
      <br>&mdash;&nbsp;нарушение жевания;
      <br>&mdash;&nbsp;затруднение произношения из-за слабого тонуса мышц губ и&nbsp;щек;
      <br>&mdash;&nbsp;нарушение общей и&nbsp;мелкой моторики;
      <br>&mdash;&nbsp;тейпы помогают сформировать диафрагмальный тип дыхания;
      <br>&mdash;&nbsp;парезах и&nbsp;невритах;
      <br>&mdash;&nbsp;птозах ( опущениях органа);
      <br>&mdash;&nbsp;комплексной реабилитации пациентов, перенесших инсульт.
      ${popupTags.closeInfoText}`,
  },
  {
    name: "brainBit-neurofit",
    contentHtml: `${popupTags.openInfoText}
      Система для психологов ${popupTags.openInfoTextAccent}&laquo;BrainBit NeuroFit&raquo;${popupTags.closeInfoTextAccent}&nbsp;&mdash; это беспроводной нейротренажер в&nbsp;виде гибкой ленты, который регистрирует биоритмы головного мозга в&nbsp;режиме online и&nbsp;с&nbsp;помощью специального программного обеспечения позволяет проводить психоэмоциональную коррекцию с&nbsp;применением метода биологической обратной связи (БОС).
      ${popupTags.closeInfoText}`,
  },
  {
    name: "bos",
    contentHtml: `${popupTags.openInfoText}      
      Система без проводов, используемая в&nbsp;медицинских целях ${popupTags.openInfoTextAccent}БОС &laquo;Колибри&raquo;${popupTags.closeInfoTextAccent}&nbsp;&mdash; является комплексом для мониторинга опорно-двигательной системы, психоэмоциональной коррекции путём электрофизических сигналов. Представляет собой комплект из&nbsp;четырех универсальных беспроводных датчиков, каждый из&nbsp;которых обеспечивает регистрацию электрокардиограммы, электроэнцефалограммы и&nbsp;дыхания. Система предполагает тренинг одновременно по&nbsp;четырем произвольно назначаемым каналам.
      ${popupTags.closeInfoText}`,
  },
];
