import { LanguageUtils } from '@/app/core/utils/language';

describe('LanguageUtils', () => {
  it('Returns the first language spoken', () => {
    const result = LanguageUtils.getFullLanguage('es');

    expect(result).toBe('Spanish');
  });
});
