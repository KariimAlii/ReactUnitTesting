import { formatName } from './formatName';

test('formats names correctly', () => {
    let formattedName = formatName('Ada', 'Lovelace');
    expect(formattedName).toBe('Ada Lovelace');
});
