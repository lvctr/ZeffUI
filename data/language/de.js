/* prettier-ignore */
/* exported language */
var language = [
	{ id: "settingsheader", string: "Einstellungen" },
	{ id: "savesettings", string: "Einstellungen speichern" },
	{ id: "deletesettings", string: "Einstellungen zurücksetzen" },
	{ id: "applytoallelements", string: "Schriftart auf alle Elemente anwenden" },
	{ id: "generaloptions", string: "Allgemeine Optionen" },
	{ id: "exportsettings", string: "Einstellungen exportieren" },
	{ id: "importsettings", string: "Einstellungen importieren" },
	{ id: "exportsettingsjson", string: "JSON exportieren" },
	{ id: "importsettingsjson", string: "JSON importieren" },
	// NAV MENU	
	{ id: "healthmana", string: "Leben / Mana" },
	{ id: "tickers", string: "Ticker" },
	{ id: "timers", string: "Timer" },
	{ id: "cooldowns", string: "Cooldowns" },
	// COMPONENTS
	{ id: "healthbar", string: "Lebensbalken" },
	{ id: "manabar", string: "Manabalken" },
	{ id: "mpticker", string: "MP Ticker" },
	{ id: "dotticker", string: "DoT Ticker" },
	{ id: "hotticker", string: "HoT Ticker" },
	{ id: "pulltimers", string: "Pulltimer" },
	{ id: "bufftimers", string: "Buff Timer" },
	{ id: "dottimers", string: "DoT Timer" },
	{ id: "stacksbar", string: "Stacks Bar" },
	{ id: "raidbuffs", string: "Raid Buffs" },
	{ id: "party", string: "Gruppen Cooldowns" },
	{ id: "skin", string: "Skin" },
	{ id: "language", string: "Sprache" },
	{ id: "mitigations", string: "Defensive CDs" },
	{ id: "customcooldowns", string: "Benutzerdefinierte Cooldowns" },
	{ id: "editcustomcooldowns", string: "Benutzerdefinierte Cooldowns anpassen" },
	{ id: "overrideoptions", string: "Optionen überschreiben" },
	{ id: "importexport", string: "Importieren / Exportieren" },
	{ id: "debug", string: "Debug" },
	// DESCRIPTIONS
	{ id: "generaldescription", string: "Hier findest du allgemeine Einstellungen für ZeffUI." },
	{ id: "healthbardescription", string: "Hier kannst du die Optionen für deinen Lebensbalken anpassen." },
	{ id: "manabardescription", string: "Hier kannst du die Optionen für deinen Manabalken anpassen." },
	{ id: "mptickerdescription", string: "Hier kannst du die Optionen für deinen MP-Ticker anpassen." },
	{ id: "dottickerdescription", string: "Hier kannst du die Optionen für deinen DoT-Ticker anpassen." },
	{ id: "hottickerdescription", string: "Hier kannst du die Optionen für deinen HoT-Ticker anpassen." },
	{ id: "bufftimersdescription", string: "Hier kannst du die Optionen für deine eigenen Buffs anpassen." },
	{ id: "dottimersdescription", string: "Hier kannst du die Optionen für deine eigenen Debuffs anpassen." },
	{ id: "pulltimersdescription", string: "Hier kannst du deinen Pulltimer einstellen." },
	{ id: "stacksbardescription", string: "Hier kannst du die Optionen für deine eigenen Stacks anpassen." },
	{ id: "raidbuffdescription", string: "Hier kannst du die Optionen für Raidbuffs anpassen. (nur DPS Buffs/Debuffs)." },
	{ id: "mitigationdescription", string: "Hier kannst du die Optionen für deine defensiven CDs anpassen." },
	{ id: "customcooldownsdescription", string: "Hier kannst du die Optionen für deine benutzerdefinierte Cooldowns anpassen." },
	{ id: "editcustomcooldownsdescription", string: "Hier kannst du eigene Cooldowns hinzufügen" },
	{ id: "partydescription", string: "Hier kannst du die Optionen für deine Gruppen-Cooldowns anpassen." },
	{ id: "overridedescription", string: "Hier kannst du Standard-Einstellungen von bestimmten Fähigkeiten überschreiben." },
	{ id: "importexportdescription", string: "Hier kannst du Einstellungen Exportieren oder Importieren." },
	{ id: "debugdescription", string: "Hier findest du die Debug-Optionen für ZeffUI." },
	// COMPONENT PROPERTIES
	{ id: "posx", string: "Position X" },
	{ id: "posy", string: "Position Y" },
	{ id: "scale", string: "Skalierung" },
	{ id: "rotation", string: "Rotation" },
	{ id: "padding", string: "Abstand" },
	{ id: "color", string: "Farbe" },
	{ id: "image", string: "Bild" },
	{ id: "example", string: "Beispiel" },
	{ id: "growleft", string: "Bilder nach links wachsen lassen" },
	{ id: "growdirection", string: "Aufbau Richtung" },
	{ id: "down", string: "Unten" },
	{ id: "up", string: "Oben" },
	{ id: "left", string: "Links" },
	{ id: "right", string: "Rechts" },
	{ id: "columns", string: "Spalten pro Zeile" },
	{ id: "hideoutofcombat", string: "Außerhalb des Kampfes verbergen" },
	{ id: "hidesolo", string: "Außerhalb einer Gruppe verbergen" },
	{ id: "droppedoff", string: "Verstecke wenn abgelaufen" },
	{ id: "alwaysshow", string: "Fähigkeiten immer anzeigen (wenn sie nicht auf Cooldown sind)" },
	{ id: "textformat", string: "Text-Format" },
	{ id: "font", string: "Schriftart" },
	{ id: "healthtext", string: "Lebens-Text" },
	{ id: "manatext", string: "Mana-Text" },
	{ id: "pulltimertext", string: "Pulltimer-Text" },
	{ id: "bufftext", string: "Buff-Text" },
	{ id: "dottext", string: "DoT-Text" },
	{ id: "multidot", string: "MultiDoT (noch nicht implementiert)" },
	{ id: "ability", string: "Fähigkeit" },
	{ id: "abilityenabled", string: "Fähigkeit aktiviert" },
	{ id: "duration", string: "Dauer" },
	{ id: "cooldown", string: "Cooldown" },
	{ id: "overridedefaults", string: "Standards überschreiben" },
	{ id: "ttsenabled", string: "TTS aktiviert" },
	{ id: "ttstype", string: "TTS-Typ" },
	{ id: "abilitycooldown", string: "Fähigkeits-Cooldown" },
	{ id: "abilityduration", string: "Fähigkeits-Dauer" },
	{ id: "oncast", string: "Bei Zauber" },
	{ id: "durationcolor", string: "Dauer Farbe" },
	{ id: "cooldowncolor", string: "Cooldown Farbe" },
	{ id: "durationoutlinecolor", string: "Dauer Rahmen-Farbe" },
	{ id: "cooldownoutlinecolor", string: "Cooldown Rahmen-Farbe" },
	{ id: "durationbold", string: "Dauer fetter Text" },
	{ id: "cooldownbold", string: "Cooldown fetter Text" },
	{ id: "durationoutline", string: "Dauer Rahmen" },
	{ id: "cooldownoutline", string: "Cooldown Rahmen" },
	{ id: "includealliance", string: "Allianzmitglieder zu Partymitgliedern hinzuzählen" },
	{ id: "orderbypartymember", string: "Nach Gruppenmitglied ordnen" },
	{ id: "order", string: "Reihenfolge" },
	{ id: "partyorder", string: "Gruppen-Reihenfolge (Ziehen und loslassen)" },
	{ id: "mode", string: "Modus" },
	{ id: "add", string: "Hinzufügen" },
	{ id: "edit", string: "Bearbeiten" },
	{ id: "delete", string: "Löschen" },
	{ id: "save", string: "Speichern" },
	{ id: "noabilitiesfound", string: "Keine Fähigkeiten gefunden..." },
	{ id: "search", string: "Suche" },
	{ id: "id", string: "ID" },
	{ id: "jobrole", string: "Job / Rolle" },
	{ id: "pvp", string: "PvP" },
	{ id: "usewebtts", string: "Baidu TTS benutzen" },
	{ id: "jobthresholds", string: "Mana Schwellen (für SMA/DKR/PLD)" },
	{ id: "lowcolor", string: "Farbe wenn niedrig" },
	{ id: "medcolor", string: "Farbe wenn halbvoll" },
	{ id: "specificjobsonly", string: "Nur für spezifische Jobs" },
	{ id: "ttsearly", string: "TTS x Sekunden früher" },
	{ id: "charges", string: "Aufladungen" },
	{ id: "warning", string: "Warnung!" },
	{ id: "textalign", string: "Textausrichtung" },
	{ id: "center", string: "Center" },
	{ id: "alwaystick", string: "Immer Ticken" },
	{ id: "usehdicons", string: "HD Symbole benutzen" },
	{ id: "type", string: "Typ" },
	{ id: "staticfontsizeenabled", string: "Statische Schriftgröße aktiviert" },
	{ id: "staticfontsize", string: "Statische Schriftgröße" },
	{ id: "fontxoffset", string: "Schriftart X Versatz" },
	{ id: "fontyoffset", string: "Schriftart Y Versatz" },
	{ id: "setjob", string: "WÄHLE JOB" },
	{ id: "customfonts", string: "Benutzerdefinierte Schriftart" },
	{ id: "customcss", string: "Benutzerdefiniertes CSS" },
	// SKINS
	{ id: "skindefault", string: "Standard (von Square Enix)" },
	{ id: "skinmaterialdark", string: "Material Dark (von skotlex)" },
	{ id: "skinmaterialdiscord", string: "Material Discord (von skotlex)" },
	{ id: "skinhydaelyn", string: "Hydaelyn UI (von Vec7rex)" },
	// COLORS
	{ id: "colordarkred", string: "dunkelrot" },
	{ id: "colorbrightred", string: "hellrot" },
	{ id: "colorbabyblue", string: "babyblau" },
	{ id: "colorgreenblue", string: "grünblau" },
	{ id: "colortoxicgreen", string: "giftgrün" },
	{ id: "colorlightblue", string: "hellblau" },
	{ id: "colordarkblue", string: "dunkelblau" },
	{ id: "colordarkgreen", string: "dunkelgrün" },
	{ id: "colorjunglegreen", string: "dschungelgrün" },
	{ id: "colorpurple", string: "lila" },
	{ id: "colorfuchsia", string: "Magenta" },
	{ id: "colorlightpink", string: "hellpink" },
	{ id: "colorlightgold",	string: "hellgold"  },
	{ id: "colordarkgold", string: "dunkelgold" },
	{ id: "colororange", string: "orange" },
	{ id: "colorgrey", string: "grau" },
	// JOBS	
	{ id: "pld", string: "Paladin" },
	{ id: "gla", string: "Gladiator" },
	{ id: "war", string: "Krieger" },
	{ id: "mrd", string: "Marodeur" },
	{ id: "drk", string: "Dunkelritter" },
	{ id: "gnb", string: "Revolverklinge" },
	{ id: "whm", string: "Weißmagier" },
	{ id: "cnj", string: "Hermetiker" },
	{ id: "sch", string: "Gelehrter" },
	{ id: "ast", string: "Astrologe" },
	{ id: "mnk", string: "Mönch" },
	{ id: "pgl", string: "Faustkämpfer" },
	{ id: "drg", string: "Dragoon" },
	{ id: "lnc", string: "Pikenier" },
	{ id: "nin", string: "Ninja" },
	{ id: "rog", string: "Schurke" },
	{ id: "sam", string: "Samurai" },
	{ id: "brd", string: "Barde" },
	{ id: "arc", string: "Waldläufer" },
	{ id: "mch", string: "Machinist" },
	{ id: "dnc", string: "Tänzer" },
	{ id: "blm", string: "Schwarzmagier" },
	{ id: "thm", string: "Thaumaturg" },
	{ id: "smn", string: "Beschwörer" },
	{ id: "acn", string: "Hermetiker" },
	{ id: "rdm", string: "Rotmagier" },
	{ id: "blu", string: "Blaumagier" },
	{ id: "tank", string: "Tank" },
	{ id: "healer", string: "Heiler" },
	{ id: "dps", string: "DPS" },
	{ id: "meleedps", string: "Nahkampf DPS" },
	{ id: "rangeddps", string: "Fernkämpf DPS" },
	{ id: "casterdps", string: "Magier DPS" },
	{ id: "melee", string: "Nahkämpfer" },
	{ id: "ranged", string: "Fernkämpfer" },
	{ id: "caster", string: "Magier" },
	{ id: "other", string: "Andere" },
	// UI TEXT
	{ id: "dot-anchor", string: "DoT Anker" },
	{ id: "buff-anchor", string: "Buff Anker" },
	{ id: "raidbuffs-anchor", string: "Raidbuffs Anker" },
	{ id: "mitigation-anchor", string: "Defensive CDs Anker" },
	{ id: "party-anchor", string: "Gruppen CDs Anker" },
	{ id: "customcd-anchor", string: "Benutzerdefinierte CDs Anker" },
	{ id: "pulltimer", string: "Pulltimer" },
	// CONTEXT MENU
	{ id: "lock", string: "Sperren/Entsperren" },
	{ id: "grid", string: "Raster An/Aus" },
	{ id: "reload", string: "Neu Laden" },
	{ id: "settings", string: "Einstellungen" },
	{ id: "close", string: "Schließen" },
	// MESSAGES
	{ id: "jsonwarning", string: "Exportiere/importiere nur als JSON wenn du weißt was du tust!" },
	{ id: "reloadoverlay", string: "Bitte reloade das Overlay um das Zurücksetzen der Einstellungen abzuschließen." },
	{ id: "saveandclosewindow", string: "Willst du deine Einstellungen speichern und dieses Fenster schließen?" },
	{ id: "deleteallsettings", string: "Bist du sicher, dass du alle Einstellungen löschen willst?" },
	{ id: "activesettingswindow", string: "Es ist bereits ein anderes Einstellungs-Fenster geöffnet, möchtest du dieses schließen und ein neues öffnen?" },
	{ id: "currentsettingscopied", string: "Deine aktuellen Einstellungen wurden in deine Zwischenablage kopiert." },
	{ id: "importsettingsoverwrite", string: "Bist du sicher, dass du diese Einstellungen importieren möchtest? Dies wird alle deine vorherigen Einstellungen überschreiben" },
	{ id: "invalidsettingsstring", string: "Fehlerhafter settings string, bitte überprüfe deine Eingabe." },
	{ id: "lockoverlay", string: "BITTE SPERRT DAS OVERLAY IN ACT UM DIE ANKER BEWEGEN ZU KÖNNEN!" },	
];
