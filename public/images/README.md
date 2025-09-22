Local images for the site. Drop your actual assets here to enable high‑quality blur placeholders via static imports (Next.js auto‑generates blurDataURL for JPG/PNG/WebP).

Directory structure:
- public/images/artworks/
- public/images/artist/

Expected files (suggested names based on sample slugs):

Artworks (place large, good‑quality JPG/PNG, ideally 1600px+ on the long side):
- public/images/artworks/ethereal-landscapes.jpg
- public/images/artworks/urban-reflections.jpg
- public/images/artworks/abstract-emotions.jpg
- public/images/artworks/botanical-studies.jpg
- public/images/artworks/cosmic-dance.jpg
- public/images/artworks/minimalist-serenity.jpg

Artist portrait:
- public/images/artist/artist-portrait.jpg

Recommended source sizes (approximate, larger is fine):
- ethereal-landscapes: 1600×2000
- urban-reflections: 1600×2400
- abstract-emotions: 2000×1600
- botanical-studies: 1200×1600
- cosmic-dance: 1800×2400
- minimalist-serenity: 1600×1200
- artist-portrait: 1200×1200

After assets are added, we will convert sample-data.ts to static imports so Next can auto‑provide high‑quality blur placeholders and precise intrinsic sizes.

Example (we will implement this for you after the files exist):

```ts
// At the top of src/lib/sample-data.ts
import EtherealLandscapes from 'public/images/artworks/ethereal-landscapes.jpg';
import UrbanReflections from 'public/images/artworks/urban-reflections.jpg';
import AbstractEmotions from 'public/images/artworks/abstract-emotions.jpg';
import BotanicalStudies from 'public/images/artworks/botanical-studies.jpg';
import CosmicDance from 'public/images/artworks/cosmic-dance.jpg';
import MinimalistSerenity from 'public/images/artworks/minimalist-serenity.jpg';
import ArtistPortrait from 'public/images/artist/artist-portrait.jpg';

// Then set the artwork.image (and .images) fields to these imports instead of URLs
// and set artistInfo.image = ArtistPortrait.
```

Notes:
- Keep filenames lowercase, hyphen‑separated; extensions .jpg or .png are fine
- If you provide WebP, Next will still statically import and generate blur
- Once images are in place, ping me and I’ll switch sample-data.ts to use the imports

