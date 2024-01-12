import { Category } from '@prisma/client';
import { bookmarkIcon, gameIcon, headphonesIcon, speechIcon, watchIcon } from './icons';

export function getIconForCategory(category: Category) {
  switch (category) {
    case 'Speaking':
      return speechIcon;
    case 'Listening':
      return headphonesIcon;
    case 'Playing':
      return gameIcon;
    case 'Watching':
      return watchIcon;
    case 'Reading':
      return bookmarkIcon;
    default:
      return '•';
  }
}
