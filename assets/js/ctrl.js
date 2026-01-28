// Control font change on selection
const classToReplace = document.querySelector(".ctrl");

function updateFontOfSelection() {
  const sel = window.getSelection();

  // No selection (or selection collapsed to a caret)
  if (!sel || sel.rangeCount === 0 || sel.isCollapsed) {
    classToReplace.classList.remove("adventor-font-uppercase");
    return;
  }

  const range = sel.getRangeAt(0);

  // Turn font on only when selection overlaps the word element
  const overlaps = range.intersectsNode(classToReplace);
  classToReplace.classList.toggle("adventor-font-uppercase", overlaps);
}

if (classToReplace != null){
  document.addEventListener("selectionchange", updateFontOfSelection);
}
