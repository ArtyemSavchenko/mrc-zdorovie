import PopupInfo from '../components/PopupInfo.js';
import ProcedureCard from '../components/ProcedureCard.js';

import {
  popupInfoSelectors,
  procedureCardSelector,
  procedureDescriptionSelector,
  proceduresPopupSelector,
} from '../utils/constants.js';

const popup = new PopupInfo({
  ...popupInfoSelectors,
  popupSelector: proceduresPopupSelector,
});

const proceduresCards = Array.from(
  document.querySelectorAll(procedureCardSelector)
);
proceduresCards.forEach((cardEl) => {
  new ProcedureCard(cardEl, procedureDescriptionSelector, (infoHtml) => {
    popup.open(infoHtml);
  });
});
