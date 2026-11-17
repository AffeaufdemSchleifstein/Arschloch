# Arschloch

Das Kartenspiel Arschloch fürs Handy – jeder spielt auf seinem eigenen Gerät.

**Spielen:** https://affeaufdemschleifstein.github.io/Arschloch/

## So geht's

1. Link öffnen, Namen eingeben, **Neuen Raum erstellen**.
2. Auf **Freunde einladen** tippen und den Link verschicken – oder den 4-Buchstaben-Code sagen.
3. Bei 3–5 Spielern auf **Spiel starten**. Fehlende Plätze kann man mit Computergegnern füllen.

Als App installieren: iPhone → Safari → Teilen → *Zum Home-Bildschirm*. Android → Chrome → Menü → *App installieren*.

## Regeln

- 32 Karten (7 bis Ass). Wer zuerst keine Karten mehr hat, wird Präsident, der Letzte Arschloch.
- Gleich viele, aber höhere Karten legen – oder passen. Wer passt, ist für den Stich raus.
- **Bombe:** Vier gleiche Karten schlagen alles, nur eine höhere Bombe kommt drüber. *Mi Bombo!*
- Ab Runde 2 wünscht sich der Präsident bis zu 2 Karten vom Arschloch (fehlt eine, gibt es die beste) und gibt 2 beliebige zurück. Bei 4+ Spielern tauschen die Vizes je 1 Karte.
- Bei 3 und 5 Spielern bleiben 2 Karten als Stock liegen: Der Bauer nimmt beide oder keine.
- Wer nach dem Tauschen alle 4 Asse hat, spielt offen.
- Mit einem Ass als letzter Karte aufhören ist verboten – dann landet man ganz hinten.
- 20 Sekunden pro Zug, ab Sekunde 10 kommt die Sanduhr.

## Technik

Eine einzelne HTML-Seite auf GitHub Pages. Spielstände liegen in einer Supabase-Datenbank (Frankfurt) mit Zugriffsregeln: Jedes Gerät meldet sich unsichtbar anonym an, und nur wer einem Raum beigetreten ist, kann dessen Spielstand lesen oder Züge speichern. Bibliothek: supabase-js (MIT-Lizenz, siehe `supabase-LICENSE.md`).
