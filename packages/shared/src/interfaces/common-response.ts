export interface CommonResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
  error: { code: string; details: string } | null;
}
