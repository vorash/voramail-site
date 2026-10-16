/** Vora Mail's app icon (a V woven through an envelope), a copy of vorash/vora-mail
 *  assets/icons/scalable/apps/dev.vora.Mail.svg in public/. It carries its own dark tile,
 *  so it is the same file in both themes. */
export function MarkMail({ size = 32 }: { size?: number }) {
  return <img className="cr-mark-mail" src="/vora-mail-icon.svg" width={size} height={size} alt="" aria-hidden="true" />;
}
