export interface EmailService {
  subscribeNewsletter(email: string, firstName?: string): Promise<void>;
  sendTransactional(to: string, subject: string, html: string): Promise<void>;
}

// Placeholder — implementar con Resend en etapas posteriores
