export interface ContactFormData {
  fullName: string;
  email: string;
  company?: string;
  serviceInterest?: string;
  message: string;
  timeline?: string;
}

export interface FormSubmissionState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message?: string;
  errors?: Record<string, string>;
}
