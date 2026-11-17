# Arschloch

Das Kartenspiel Arschloch fürs Handy – jeder spielt auf seinem eigenen Gerät.

**Spielen:** https://affeaufdemschleifstein.github.io/Arschloch/

## So geht's

1. Link öffnen, Namen eingeben, **Neuen Raum erstellen**.
2. **Link teilen** oder den 4-Buchstaben-Code sagen – mit Konto auch Freunde direkt einladen.
3. Bei 3–5 Spielern auf **Spiel starten**. Fehlende Plätze kann man mit Computergegnern (leicht, normal, schwer) füllen.

Als App installieren: iPhone → Safari → Teilen → *Zum Home-Bildschirm*. Android → Chrome → Menü → *App installieren*.

## Funktionen

- Konten nur mit Benutzername und Passwort, Freunde mit Online-Status, Einladungen und Benachrichtigungen
- Chat mit Sprachnachrichten, Emote-Rad und Spezial-Emotes, die man durch viele Siege als Präsident freischaltet
- Punkte, Partie-Auswertung mit Auszeichnungen, Statistik, 15 Erfolge, Rangliste und Monats-Saison
- Pausieren und später unter „Meine Partien“ weiterspielen
- Eigenes Design: Tische, Filzfarben, Hintergründe, Kartenvorder- und -rückseiten, Avatare oder eigenes Foto
- Sounds und Hintergrundmusik (Pop, Ruhig, Lounge) mit getrennter Lautstärke
- Hausregeln in der Lobby: Zeit pro Zug, Bomben, Stock, Ass-Regel, Weiterlegen, Punkteziel

## Regeln

- 32 Karten (7 bis Ass). Wer zuerst keine Karten mehr hat, wird Präsident, der Letzte Arschloch.
- Gleich viele, aber höhere Karten legen – oder passen. Wer passt, ist für den Stich raus.
- **Weiterlegen:** Haben alle anderen gepasst, darf der Letzte allein weiter immer höher legen; hört er auf, kommt er neu raus (Hausregel, abschaltbar).
- **Bombe:** Vier gleiche Karten schlagen alles, nur eine höhere Bombe kommt drüber. *Mi Bombo!*
- Ab Runde 2 wünscht sich der Präsident bis zu 2 Karten vom Arschloch (nur wenn der Wunsch komplett erfüllbar ist, sonst gibt es die besten) und gibt 2 beliebige zurück. Bei 4+ Spielern tauscht der Vize-Präsident 1 Karte mit dem Vize-Arschloch.
- Bei 3 und 5 Spielern bleiben 2 Karten als Stock liegen: Der Bauer nimmt beide oder keine.
- Wer nach dem Tauschen alle 4 Asse hat, spielt offen.
- Mit einem Ass als letzter Karte fertig werden ist erlaubt – man landet dann aber automatisch ganz hinten.
- 20 Sekunden pro Zug (einstellbar), in der zweiten Hälfte erscheint die Sanduhr.

## Technik

Eine einzelne HTML-Seite auf GitHub Pages (`/beta` ist die Testversion). Spielstände, Konten und Statistiken liegen in einer Supabase-Datenbank (Frankfurt). Jedes Gerät meldet sich unsichtbar an; geschrieben wird nur über geprüfte Datenbank-Funktionen, und nur wer einem Raum beigetreten ist, kann dessen Spielstand lesen. Spielzüge kommen per Realtime-Broadcast in Echtzeit. Bibliothek: supabase-js (MIT-Lizenz, siehe `supabase-LICENSE.md`).
