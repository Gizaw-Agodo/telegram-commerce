class TelegramService {
  openChat(username: string) {
    window.open(`https://t.me/${username}`, "_blank");
  }
}

export const telegramService = new TelegramService();