import { LanguageUtils } from '@/shared/utils/language';

describe('LanguageUtils', () => {
  describe('getFullLanguage', () => {
    it('returns the full name of the first language spoken', () => {
      // When
      const result = LanguageUtils.getFullLanguage('es');

      // Then
      expect(result).toBe('Spanish');
    });

    it('it returns the language code as fallback when the full name is not found', () => {
      // When
      const result = LanguageUtils.getFullLanguage('en');

      // Then
      expect(result).toBe('en');
    });
  });
});
