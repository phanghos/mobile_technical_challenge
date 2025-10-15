import { LanguageUtils } from '@/shared/utils/language';

describe('LanguageUtils', () => {
  it('Given a language code, it returns the full name of the first language spoken', () => {
    const result = LanguageUtils.getFullLanguage('es');

    expect(result).toBe('Spanish');
  });
});
