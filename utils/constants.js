export const popupSelectors = {
  popupSelector: "#popup-info",
  infoBoxSelector: ".popup__info-box",
};

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
      <br>&mdash;&nbsp;малыш получает положительные эмоции;
      ${popupTags.closeInfoText}`,
  },

  {
    name: "test",
    contentHtml: `${popupTags.openInfoText}
          ${popupTags.openInfoTextAccent} ${popupTags.closeInfoTextAccent}h
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
    name: "bilotherapy",
    contentHtml: `${popupTags.openInfoText}
      С помощью ${popupTags.openInfoTextAccent}Билотерапии${popupTags.closeInfoTextAccent} можно решить много задач:
      <br>— вывести человека из состояния уныния или депрессии;
      <br>— устранить стресс;
      <br>— создать позитивное настроение;
      <br>— активировать умственную деятельность;
      <br>— снять боль;
      <br>— снять соматическое напряжение за счёт физиоакустического эффекта;
      <br>— ликвидировать в мозге очаги «застойного» возбуждения;
      <br>— облегчить состояние психосоматических заболеваний;
      <br>— повысить эффективность выполнения различных психотерапевтических техник.
      ${popupTags.closeInfoText}`,
  },
];
