# AB Learns to Draw

An iPad drawing studio for AB: 45 beginner lessons with animated line demonstrations, written instructions, paper mode, an on-screen drawing canvas, optional gentle music, and progress saved on the device. No narration, account, ads, or backend service is needed.

## Publish the same way as ABs_Game

ABs_Game's README specifies GitHub Pages from the repository root. This package uses that same root layout. Put **the package contents** at the top level of a new repository, for example `E-Wetz/AB_Learns_To_Draw`. Keep this a separate repository from ABs_Game.

In the new repository, open **Settings → Pages → Build and deployment**, select **Deploy from a branch**, then **main** and **/(root)**, and save. GitHub will display the published address when deployment succeeds. A prospective address for that example repository is `https://e-wetz.github.io/AB_Learns_To_Draw/`; this is not a live link until that repository and its Pages deployment exist.

There is no dependency installation or build step. All app, icon, music, and drawing resources are local and all asset paths are relative, so the app works under a GitHub project subdirectory.

## Add to the iPad Home Screen

Open the published address in Safari. Choose **Share → Add to Home Screen**, then **Add**. The purple AB pencil icon is supplied as a 180-pixel Apple touch icon. The app opens in its own window. Allow the first online load to finish before using it offline.

Drawings and progress are saved in that iPad's browser storage. They do not sync across devices. Clearing Safari website data can remove them; use **Save picture** for drawings you want to keep separately.

## Updating

Replace the relevant app files in the repository and change the `CACHE` name in `sw.js` for each release. The app checks its service worker when returning to the foreground. Close and reopen the installed app after a release if it still shows an old page.

The revised artwork uses a separate saved-canvas version so earlier sketches are preserved. An **Earlier drawing** download button appears when an older sketch exists for an updated lesson.

## Artwork review

All 45 completed illustrations and every cumulative teaching step were rendered and visually reviewed. The revised drawings use matching step descriptions and the same vector paths for cards, demonstrations, tracing guides, and final previews. There are no hidden masks that remove lines without telling the learner. Some lines intentionally meet, such as connected limbs, facial features, shell panels, and castle walls.

The local source project includes `outputs/audit/` with finished-picture contact sheets and step-by-step review sheets. These development review files are excluded from the published app folder.
