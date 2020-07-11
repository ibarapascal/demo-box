export default class UrlService {
  /**
   * Get the last piece of url
   * @param history react-router-dom route history
   */
  static acquireName(history: any): string {
    return history.location.pathname.split('/').pop();
  }
}
