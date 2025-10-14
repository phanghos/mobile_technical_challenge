import { StringUtils } from '@/app/core/utils/strings';

describe('String Utils', () => {
  describe('capitalize', () => {
    describe('when all letters are upper-case', () => {
      it('capitalizes the first letter only and leaves the rest as lower-case', () => {});
      // Given
      const input = 'THIS IS A TEST';
      const expected = 'This is a test';

      // When
      const result = StringUtils.capitalize(input);

      // Then
      expect(result).toBe(expected);
    });

    describe('when all letters are lower-case', () => {
      it('capitalizes the first letter only and leaves the rest as lower-case', () => {
        // Given
        const input = 'this is a test';
        const expected = 'This is a test';

        // When
        const result = StringUtils.capitalize(input);

        // Then
        expect(result).toBe(expected);
      });
    });

    describe('when there is a mix of upper- and lower-case letters', () => {
      it('capitalizes the first letter only and leaves the rest as lower-case', () => {
        // Given
        const input = 'tHIs IS a tESt';
        const expected = 'This is a test';

        // When
        const result = StringUtils.capitalize(input);

        // Then
        expect(result).toBe(expected);
      });
    });
  });
});
