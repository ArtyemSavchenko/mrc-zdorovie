import '../utils/mobile-menu.js';

import {
  popupInfoSelectors,
  proceduresInfos,
  procedureCardSelector,
  proceduresPopupSelector
} from "../utils/constants.js";
import PopupInfo from "../components/PopupInfo.js";
import ProcedureCard from "../components/ProcedureCard.js";

const popup = new PopupInfo({...popupInfoSelectors, popupSelector: proceduresPopupSelector});

const proceduresCards = Array.from(document.querySelectorAll(procedureCardSelector));
proceduresCards.forEach((cardEl) => {
  new ProcedureCard(cardEl, () => {
    const infoHtml = proceduresInfos.find(el => el.name === cardEl.id).contentHtml;
    popup.open(infoHtml);
  });
});
