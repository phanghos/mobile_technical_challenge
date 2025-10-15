import { LanguageUtils } from '@/shared/utils/language';

describe('LanguageUtils', () => {
  it('given a language code, it returns the full name of the first language spoken', () => {
    // When
    const result = LanguageUtils.getFullLanguage('es');

    // Then
    expect(result).toBe('Spanish');
  });
});
