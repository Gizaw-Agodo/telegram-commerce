import type { DraftOrder } from "../types/order";

export function buildTelegramOrderMessage(
  order: DraftOrder
): string {
  const items = order.items
    .map(
      (item) =>
        `• ${item.productName}\n  Qty: ${item.quantity}\n  ETB ${(item.unitPrice * item.quantity).toLocaleString()}`
    )
    .join("\n\n");

  return `🛍️ Order Request

Order ID: ${order.id}

${items}

━━━━━━━━━━━━━━

Total: ETB ${order.total.toLocaleString()}

Hi! I'd like to order the above item(s). Please let me know if they are available. Thank you!`;
}