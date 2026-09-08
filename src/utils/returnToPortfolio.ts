const TRAINING_ANCHOR = '/#training';

/**
 * Sends the user back to the portfolio tab that opened this page, scrolled to the
 * Training and Professional Development section, then closes this tab.
 * Falls back to navigating the current tab when the opener is gone.
 */
export function returnToPortfolio(event?: {preventDefault: () => void;}): void {
  event?.preventDefault();

  try {
    const opener = window.opener as Window | null;
    if (opener && !opener.closed) {
      opener.location.href = TRAINING_ANCHOR;
      opener.focus();
      window.close();
      return;
    }
  } catch {

    // Cross-origin or blocked opener access — fall through to the same-tab fallback.
  }
  window.location.href = TRAINING_ANCHOR;
}