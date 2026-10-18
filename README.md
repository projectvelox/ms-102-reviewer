# MS-102 practice exam and reviewer

Unofficial practice exam and reviewer for **MS-102: Microsoft 365 Administrator**, built from `ms-102.pdf` in this folder.

## How to run

- **Online:** https://projectvelox.github.io/ms-102-reviewer/
- **Computer, offline:** open `index.html` in Chrome or Edge. No server or install is needed.
- **Phone, offline:** copy `dist/ms102-reviewer.html` to the phone and open it. It is one self-contained file (about 19 MB, because the 68 screenshot exhibits are embedded in it).

Progress and history are stored in the browser, separately for each copy and each device.

After changing anything in `assets/`, rebuild the single file with `node tools/build-single-file.js`.

The online copy is served by GitHub Pages from the `main` branch of `projectvelox/ms-102-reviewer`. Pushing to `main` updates it within a minute or two. The source PDF is not in the repository. `index.html` carries a `noindex` tag so that search engines do not list the site; anyone with the link can still open it.

## What is in the bank

The PDF's cover says 467 questions, and the file contains all **467**. All of them are in the bank, in PDF order. The cover calls the exam "Microsoft 365 Administrator (beta)"; the title is shown without "(beta)".

| Question type | Count |
| --- | ---: |
| Multiple choice (including the 29 "Does this meet the goal?" questions) | 249 |
| Multiple response | 20 |
| Hotspot, drop-downs (7 inside a command or rule, 123 with labelled rows) | 130 |
| Hotspot, Yes/No | 46 |
| Drag and drop, match | 8 |
| Drag and drop, sequence | 2 |
| Simulation (lab task) | 12 |
| **Total** | **467** |

| Skill area (official study guide) | Count |
| --- | ---: |
| Deploy and manage a Microsoft 365 tenant | 104 |
| Implement and manage Microsoft Entra identity and access | 140 |
| Manage security and threats by using Microsoft Defender XDR | 155 |
| Manage compliance by using Microsoft Purview | 68 |

Skill area, topic and difficulty were assigned during transcription. The PDF does not have them. Topics come from one fixed list of 30, so that the results screen groups cleanly.

Questions 462 and 464 are the same question, printed twice in the PDF. Both are kept.

### Case studies and scenario sets

The PDF has two real case studies. Each is printed in full in front of every one of its questions; here the shared text is shown once, in the scenario pane, with the PDF's own section names as tabs.

| Set | Questions | Kind |
| --- | --- | --- |
| Fabrikam, Inc. | 1, 2, 3, 4, 111, 234, 244, 282, 434, 440 | Case study (Overview, Existing Environment, Requirements) |
| Litware, Inc. | 109, 110, 175, 236, 237, 238 | Case study (Overview, Environment, Problem Statements, Requirements) |
| User2 sign-in | 45, 46, 47, 105 | Series, "Does this meet the goal?" (with an Exhibit tab) |
| Unsynchronized accounts | 48, 49, 50, 161 | Series |
| SecAdmin1 role | 106, 107, 108, 112, 235 | Series |
| Synchronized identities | 155, 156, 157, 158 | Series |
| Baseline threat policy | 342, 343, 344, 371 | Series |
| Defender onboarding | 349, 350, 351, 360 | Series |
| OAuth app policies | 381, 382, 383, 396 | Series |

A set always stays together in a session, in its own order. That is why, for example, question 111 follows question 4 when the Fabrikam set is drawn, and why the position shown in the header can differ from the PDF number. The PDF number is shown as "Source" under each explanation.

The seven series say that a question cannot be returned to, so they follow the no-return rule in Exam mode. The two case studies do not.

## Answers

Every answer is the one the PDF prints. For hotspot and drag-and-drop questions it was read from the marked copy of the answer area in the PDF. Where the PDF's own explanation argues for something other than its marked answer (for example Q114, Q200, Q204 and Q397), the marked answer is used.

**Questions where the PDF prints no selectable answer: none.** Every printed letter exists among the options, and every hotspot and drag-and-drop has a marked selection. Eleven questions (Q277, Q288, Q294, Q384, Q394, Q395, Q407, Q452, Q457, Q459 and Q460) have an empty "Answer:" in the PDF's text layer, but each has a marked answer area in the page image, and that is what was used.

Explanations were written for this reviewer. Where the printed answer could not be fully derived from the current documentation, the explanation says "The reference answer is ..." and explains what is true around it. That applies to 64 questions: 6, 13, 25, 28, 32, 38, 57, 72, 90, 95, 104, 115, 142, 145, 150, 153, 156, 167, 186, 189, 200, 204, 212, 215, 237, 242, 247, 262, 274, 275, 300, 303, 307, 310, 313, 318, 319, 324, 326, 334, 347, 355, 364, 368, 370, 373, 386, 389, 391, 397, 399, 402, 403, 409, 410, 415, 416, 430, 432, 441, 444, 457, 458 and 459.

## Simulations, and what was added to the app

Questions 417 to 428 are simulations: lab tasks done in a live tenant, with nothing to select. The kit's app had no type for them, so one was added, following the pattern of the AZ-400 reviewer:

- **Type `simulation`.** The question shows the task (with the lab's sign-in lines as printed). The answer area asks for a self-assessment, "I can complete this task" or "I cannot complete this task", and the question is scored from that. The answer shows the PDF's reference steps, typed out as text, with the portal screenshots that the steps depend on.
- **Files changed:** `assets/js/app/engine.js` (answer state, grading and the answer text of the new type), `assets/js/app/widgets.js` (the self-assessment widget and its result, answer cards and heading), `assets/js/app/exam.js` (the type label, the announcement after checking, and a line on the instructions screen when a session includes simulations) and `assets/css/exam.css` (three rules for the self-assessment options).
- **Tools:** `tools/validate-bank.js` knows the new type (a simulation needs `solution` blocks and `answer: ["can"]`; `explanation.wrong` is optional), and `tools/smoke-test.js` can answer it. The smoke test also has the fix from the SC-200 reviewer that keeps the drag source on screen when an answer area is taller than a phone screen.
- **`index.html`:** a `noindex` tag for the online copy, as in the SC-200 reviewer.

Nothing else in the interface or its behavior was changed.

## Transcription notes

Wording, options and their order are as printed. The changes below are the only ones.

**Applied to all questions**

- Scaffolding words are left out: "HOTSPOT -", "DRAG DROP -", "SIMULATION - Lab", "Answer Area", "Hot Area:", "Select and Place:", "Answer:". The app shows the question type itself.
- Tables, commands, rules and settings that the PDF shows as pictures are typed out as text. Curly quotes and apostrophes are replaced with straight ones everywhere.
- The bullet marks of the PDF ("•", "✑") became bullet lists. In some questions, requirement lines printed one per line without bullets were also made into lists.
- Lines that the PDF prints as headings with a trailing dash ("Existing Environment -") are headings without the dash.
- The shared text of each case study and series is shown once, in the scenario pane. Each question keeps only its own part.
- **Scraped e-mail addresses.** The PDF replaced most e-mail addresses with the text "[email protected]", a web-scraping artifact. An address was restored only where the PDF itself settles it: its own hint lines ("In Question- [email protected] = @contoso.com"), a table, an exhibit, the options, the marked answer or the reference steps. Everywhere else "[email protected]" is kept as printed: Q045 (the Solution line), Q058, Q085 (the UPN line), Q122, Q254, Q293, and the lab sign-in line of the twelve simulations. Q132's current sign-in name, User1@contoso.onmicrosoft.com, follows from the scenario rather than a hint: the tenant has only contoso.onmicrosoft.com until the custom domain is added. Every replacement is listed under "E-mail addresses" below.
- The placeholder "[Answer choice]" in Q090 is written in lower case, "[answer choice]", like everywhere else, so that the app can fill in the chosen value when it shows answers.
- 68 exhibits are kept as images because they are portal screenshots. They are in `assets/exhibits/`, named after their question. Each has an alt text that states what is needed to answer. Where an exhibit had to be cut from an unmarked answer area, the "Answer Area" caption was cropped off.

**Hotspots on a screenshot.** Some hotspots ask you to click one or more areas of a portal screenshot. The app has no click-on-image widget, so these are drop-downs whose options are the clickable items in the order shown. When the stem names one requirement per selection, there is one drop-down per requirement (Q039, Q056, Q167, Q181, Q227, Q297, Q327, Q345). The PDF marks the items without saying which goes with which requirement; the pairing follows the PDF's own explanation, or the documentation where the explanation does not say. When it does not, the drop-downs follow the sections or the order of the screen, and their labels say so (Q168, Q195, Q231, Q303, Q309, Q317, Q415, Q459). Q245 is a multiple-response question whose options are the five areas of the screenshot. Details are in the notes below.

**Kept as printed, including apparent errors**

- Q057: the stem says "the users shown in the following table", but the PDF prints the groups table that also appears in Q060. It is kept as printed, and the explanation says the table does not show the users' roles.
- Typos and slips in stems and options are kept, for example "alow" (Q077), "ES subscription" (Q150), "multifact or authentication" (Q346), `Get-MgSubscriberSku` (Q384), and "Windows 10 Enterprise ES" in the Litware case study. The notes below list each one.

## Testing

`node tools/validate-bank.js` reports no errors.

The answer key was compared with the PDF question by question. The 269 letter answers were compared by script with the answers in the PDF's text layer. Every hotspot and drag-and-drop answer was read from the marked image by the agent that transcribed it, and then checked again, independently, against the marked image, together with the order and wording of every drop-down option and drag source. All 187 match.

`node tools/smoke-test.js` reports `ALL CHECKS PASSED`. All 467 questions answered with the key through the interface score 100 percent (728 of 728 points). The test also checks every question for overflow at desktop, tablet and phone sizes, the reveal in Reviewer mode for each kind of question, drag and drop with a real mouse and by touch, resume and timer expiry, and accessibility. The screenshots of each kind of question and of every question with an exhibit were looked at, on desktop and on phone.

All 385 distinct reference links were requested and resolve on Microsoft Learn.

To rerun the browser test, install its dependencies first:

```
npm install --prefix tools/.test-deps puppeteer-core axe-core
node tools/smoke-test.js
```

## Files

```
index.html                     the app, for a computer
dist/ms102-reviewer.html       the same app as one file, for a phone
assets/js/bank/meta.js         exam details, skill areas, case studies and scenario sets
assets/js/bank/bank-01..29.js  the 467 questions, 16 per file (19 in the last)
assets/js/app/, assets/css/    the app (the kit's, plus the simulation type)
assets/exhibits/               the 68 image exhibits
tools/                         validate, test and build scripts
```

## Notes by question

These are the transcription notes for single questions, in PDF order. "Shared text" refers to the case studies and series in `assets/js/bank/meta.js`.

### Hotspots on a screenshot and other modelling

- Q039: hotspot on a screenshot of the Solutions navigation of the Microsoft Purview compliance portal (two areas to click). Modelled as a drop-down with two fields, one per requirement ("Automatically encrypt documents stored in Microsoft OneDrive and SharePoint", "Enable co-authoring for Microsoft Office documents encrypted by using a sensitivity label"), each with the 14 items of the screenshot in the order shown: Catalog, Audit, Content search, Communication compliance, Data loss prevention, eDiscovery, Data lifecycle management, Information protection, Information barriers, Insider risk management, Records management, Priva Privacy Risk Managem..., Priva Subject Rights Requests, Settings. The marked answer is Information protection and Settings; the mapping of each to its requirement follows the PDF's explanation (Information Protection for automatic encryption, Settings for co-authoring). The screenshot is not kept, since the question reads without it.
- Q056: hotspot on a screenshot of the Microsoft 365 admin center navigation, modelled as a drop-down with two fields, one per task of the stem ("View the Adoption Score of the company." and "Create a new service request to Microsoft."), each with the ten boxed (selectable) items in the order shown: Users, Teams & groups, Roles, Resources, Billing, Support, Settings, Setup, Reports, Health. Home is not boxed and is left out. The screenshot is not kept as an image (the question reads without it). Key: Reports, Support, as marked.
- Q167: hotspot with a checkbox list of 19 roles (grouped under Devices, Global and Identity), "Which two roles should you assign?". Modelled as a drop-down with two fields, one per task of the stem ("View BitLocker recovery keys", "Configure the usage location for the users in contoso.com"), each offering the 19 roles in the order shown (group headings left out). Answer: Helpdesk Administrator and License Administrator, as marked. The task-to-role mapping is the only consistent one (License Administrator cannot read BitLocker keys, Helpdesk Administrator cannot set the usage location).
- Q168: hotspot on a New Conditional Access policy screenshot, "Which three settings should you configure?". Modelled as a drop-down with three fields, one per section of the screenshot: Assignments (Users or workload identities, Cloud apps or actions, Conditions), Access controls (Grant, Session), Enable policy (Report-only, On, Off). Answer as marked: Cloud apps or actions, Grant, On. The unmarked screenshot is kept in the stem because the current state (All users already selected, Report-only on) is needed to answer.
- Q181: hotspot on a screenshot of the Threat policies page (select two items). Modelled as a dropdown with two fields, one per requirement ("Limit a user named User1 ..." and "Prevent the delivery of a specific file ..."), each with the 13 selectable items in the order shown: Preset Security Policies, Configuration analyzer, Anti-phishing, Anti-spam, Anti-malware, Safe Attachments, Safe Links, Tenant Allow/Block Lists, Email authentication settings, DKIM, Advanced delivery, Enhanced filtering, Quarantine policies. The mapping of each marked item to a requirement follows the PDF's explanation ("1. Anti-spam 2. Tenant allow/block list -> Files"). Screenshot not kept (the item names carry the question).
- Q195: hotspot on a screenshot (select two settings from a list grouped under "Policies" and "Rules"). Modelled as a drop-down with two fields, one per heading of the screenshot: "Policies" (Anti-phishing, Anti-spam, Anti-malware, Safe Attachments, Safe Links) and "Rules" (Tenant Allow/Block Lists, Email authentication settings, DKIM, Advanced delivery, Enhanced filtering, Quarantine policies), in the order shown. Answer: Anti-phishing, Advanced delivery. The screenshot is not kept as an image.
- Q227: hotspot on a screenshot of the Microsoft Purview compliance portal navigation, modelled as a drop-down with two fields, one per task of the stem ("Create a sensitive info type named SIT1 based on a regular expression." and "Add a watermark to all new documents that are matched by SIT1."), each with the 14 boxed (selectable) items in the order shown: Compliance Manager, Data classification, Data connectors, Reports, Catalog, App governance, Audit, Content search, Communication compliance, Data loss prevention, Information protection, Insider risk management, Records management, Subject rights requests. Home and the unboxed expandable groups (eDiscovery, Data lifecycle management, Information barriers, Privacy risk management) are left out. Screenshot not kept (the question reads without it). Key: Data classification, Information protection, as marked. Same approach as Q056 in bank-04.
- Q231: hotspot on the "Choose locations to apply the policy" screenshot (seven location rows), modelled as a drop-down with two fields, "First location (in list order)" and "Second location (in list order)", each with the seven locations in the order shown: Exchange email, SharePoint sites, OneDrive accounts, Teams chat and channel messages, Devices, Microsoft Cloud App Security, On-premises repositories. The two marked locations have no task of their own, so the labels fix the order (higher in the list first). Screenshot not kept. Key: SharePoint sites, OneDrive accounts, as marked.
- Q245: hotspot on a screenshot of the New Conditional Access policy page in which two areas must be selected ("Which two settings ..."). Modelled as `multi` with `select: 2` and the five selectable areas as options A to E in the order shown: Users or workload identities, Cloud apps or actions, Conditions, Grant, Session. Answer C (Conditions) and D (Grant), as marked. A one-field drop-down cannot hold two selections, and two drop-downs would either force an order or hint that one answer is in each section. The screenshot is not kept; the question reads without it.
- Q272: drag-and-drop into "Step 1:", "Step 2:", "Step 3:" with the sentence "Each action may be used once, more than once, or not at all", modelled as `dragdrop` (not `order`).
- Q297: hotspot on a screenshot of the Email entity page (select two settings). Modelled as a drop-down with two fields, one per requirement of the stem: "To examine the email message header" (answer Analysis) and "To submit the message to Microsoft for review" (answer Take action). Options in both fields are the six boxed items of the screenshot, in the order shown: Take action, Email preview, Analysis, Attachment, URL, Similar emails. The PDF marks Take action and Analysis without saying which goes with which requirement; the pairing follows the PDF's explanation and Microsoft Learn (header on the Analysis tab, Submit to Microsoft for review in the Take action wizard). Screenshot not kept: the question reads without it.
- Q303: hotspot on a screenshot of the Entra "Manage" menu (select two settings). The stem has a single requirement, so the two fields are told apart by menu position: "First setting (the one higher in the Manage menu)" (answer Roles and administrators) and "Second setting (the one lower in the Manage menu)" (answer Licenses). Both fields offer the 22 menu items in the order shown, from Users to Security. Screenshot not kept.
- Q309: hotspot on a screenshot (Microsoft Defender, Settings > Cloud apps, System section) where you select two items. Modelled as a drop-down with two fields, "First setting (in list order)" and "Second setting (in list order)", each with the ten boxed items in the order shown: About, Organization details, Mail settings, Scoped deployment and privacy, Preview Features, IP address ranges, User groups, API tokens, SIEM agents, Playbooks. Key: Scoped deployment and privacy (3), User groups (6), as marked. The screenshot is not kept, because the question reads without it.
- Q317: hotspot on a screenshot of the app discovery policy form where you select two items. Modelled as a drop-down with two fields, "First setting (in the order of the form)" and "Second setting (in the order of the form)", each with the eight boxed items in the order shown: Add a filter, All continuous reports, Trigger a policy match if all the following occur on the same day:, Create an alert for each matching event with the policy's severity, Tag app as sanctioned, Tag app as unsanctioned, Tag app as monitored, Tag app with custom tag. "Select a filter" and "Select app tag" have no hot-area box and are left out. Key: Add a filter (0), Tag app as unsanctioned (5), as marked. The unmarked screenshot is kept in the stem, because options such as "All continuous reports" only make sense beside the form.
- Q327: hotspot on a screenshot of the Defender for Cloud Apps settings (two selections), modelled as a drop-down with two fields, one per requirement of the stem ("Inspects files in connected software as a service (SaaS) apps" and "Inspects protected files"), each with the ten selectable settings in the order shown: Admin quarantine, Microsoft Information Protection, Azure security, Files, General Settings, User monitoring, Device identification, App onboarding/maintenance, Edge for Business protection, Service status. Key: Files, Microsoft Information Protection (the two marked boxes; each maps to one requirement: Enable file monitoring under Files, Inspect protected files under Microsoft Information Protection). The screenshot is not kept; the three headings of the answer area (Information Protection, Conditional Access App Control, App governance) and the settings under each are given in a `note` block at the end of the stem.
- Q345: hotspot on a screenshot of a new Conditional Access policy ("Which two settings should you configure?"), modelled as a drop-down with two fields, one per requirement of the stem ("Applies to high-risk users" and "Requires multifactor authentication (MFA)"), each with the five boxed settings in the order shown: Users, Target resources, Conditions, Grant, Session. The PDF marks Conditions and Grant; the key maps Conditions to the high-risk requirement and Grant to MFA. The screenshot is not kept (the question reads without it; it shows Users: All users and every other setting unconfigured).
- Q415: hotspot on a screenshot of the Microsoft Defender portal navigation (select two settings). The PDF marks "Threat intelligence" (a navigation group heading that isn't one of the boxed items) and "Threat analytics", without saying which goes with which requirement. Since Threat analytics covers both requirements (Actor and OSINT categories), a mapping per requirement would be made up. So, as in Q231 and Q303, the fields go by position: "First setting (the one higher in the navigation pane)" (key Threat intelligence) and "Second setting (the one lower in the navigation pane)" (key Threat analytics). Both fields offer all 16 navigation entries in the order shown, so that the marked group heading can be chosen: Home, Incidents & alerts, Hunting, Advanced hunting, Custom detection rules, Actions & submissions, Action center, Submissions, Threat intelligence, Threat analytics, Intel profiles, Intel explorer, Intel projects, Learning hub, Trials, Partner catalog. The screenshot isn't kept (the question reads without it).
- Q459: hotspot on a New Conditional Access policy screenshot ("Which three settings should you configure"). Modelled as a drop-down with three fields told apart by position on the page: "First setting (highest of the three on the page)", "Second setting", "Third setting (lowest of the three on the page)". Each offers the eight boxed settings in the order shown: Name, Users, Target resources, Network, Conditions, Grant, Session, Enable policy. Key as marked: Name, Conditions, Enable policy. The red box on Enable policy encloses the whole toggle (Report-only shown selected), so the selection is the setting itself, not a value. A section-per-field model like Q168's (bank-11) was not possible because Name, a marked item, sits outside the Assignments and Access controls sections. The unmarked screenshot is kept in the stem, because the current state (All users, no target resources, Report-only) matters.

### E-mail addresses

- Q001 to Q004: the stems contain no address; the "[email protected]" UPN line belongs to the shared Fabrikam text in meta.js (the PDF's own hint gives the format username@fabrikam.com).
- Q011: User1@contoso.com appears only in the exhibit image; nothing to replace.
- Q045: Solution line "You instruct User2 to sign in as [email protected]" kept as printed. The PDF's hint for this question ("In Question- [email protected] = username@fabrikam.com") is ambiguous between the two addresses of the question, and nothing else settles the Solution address. The explanation is written so that it does not depend on the address.
- Q046: "[email protected]" -> User2@contoso.com (settled by the sentence itself: the UPN suffix for User2 is set to @contoso.com).
- Q047: "[email protected]" -> User2@fabrikam.com (settled by the users table, where User2 has the UPN suffix Fabrikam.com, by the Solution sentence, which adds fabrikam.com as a custom domain, and by the PDF's hint "username@fabrikam.com"). Same spelling as the shared scenario line in meta.js (User2@fabrikam.com).
- Q058: "[email protected]" kept as printed. The PDF's hint ("In question-[email protected]=@outlook.com") settles only the domain, not the local part. The explanation calls it an outlook.com address.
- Q062: "[email protected]" → User1@contoso.com (settled by the PDF's hint "In Question- [email protected] = user1@contoso.com" and by the command in the answer area, `-UserId User1@contoso.com`; the capitalization of the command is used).
- Q085: "Email address: [email protected]", "by using the use[email protected] email address" and "by using [email protected]" → user1@marketing.contoso.com. Settled by the PDF's own hint "In Question- [email protected] = @marketing.contoso.com", the user name User1, and the "use" prefix that survives in "use[email protected]". The UPN line "UPN: [email protected]" is kept as printed: the hint cannot apply to the UPN (the question only makes sense if the UPN differs from the email address), and nothing else in the PDF gives its value.
- Q105: solution sentence "You instruct User2 to sign in as [email protected]" → User2@fabrikam.com (settled by the PDF's own hint in Q105's explanation, "In Question-[email protected]=@fabrikam.com", together with the users table where User2 has the UPN suffix Fabrikam.com). The shared-text sentence "User2 fails to authenticate ... as [email protected]" belongs to meta.js and was not touched.
- Q122: "[email protected]" kept as printed. The PDF's hint ("In Question-[email protected]=@contoso.com.") settles only the domain part, not the local part, so the full address is not settled. The explanation says only that the address is in the contoso.com domain.
- Q132: "[email protected]" (target sign-in) → User1@contoso.com (settled by the PDF's own hint "In Question -[email protected]=@contoso.com" and the stem: the user is named User1, the new domain is contoso.com).
- Q132: "[email protected]" (current sign-in) → User1@contoso.onmicrosoft.com (settled by the stem: the tenant is contoso.onmicrosoft.com and contoso.com is not yet added, since the marked answer adds and verifies it first, so a newly created User1 can only be on contoso.onmicrosoft.com). See Doubts.
- Q188: Notification1 "Recipients: [email protected], [email protected]" -> "User1@contoso.com, User2@contoso.com"; Notification2 "Recipients: [email protected]" -> "User1@contoso.com". Settled by the PDF's own hint "In Question-[email protected]=@contoso.com", the statements (User1@contoso.com, User2@contoso.com, printed in the image) and the explanation (User1 receives notifications from both Notification1 and Notification2; User2 already received the Notification1 email at 08:05). The order of the two addresses within Notification1 is not settled by the PDF; User1 first is assumed (it does not affect the answer).
- Q177, Q189: the addresses are printed in the exhibits (not scraped); kept as shown.
- Q212: "[email protected] and [email protected]" in the stem → User1@contoso.com and User2@contoso.com (settled by the User notifications column of the rules table, the answer area labels, and the PDF's hint "In Question [email protected]=@contoso.com").
- Q251: "[email protected]" -> admin1@contoso.com (settled by the answer area, which prints admin1@contoso.com, and by the PDF's hint "In Question-[email protected]=@contoso.com").
- Q253: "[email protected]" -> User1@adatum.com (settled by the PDF's hint "IN question[email protected]=@adatum.com" together with the answer area and requirements, which name the user User1).
- Q254: Allan Yoo's username kept as printed ("[email protected]"); nothing in the PDF settles it.
- Q293: "[email protected]" (twice: the protected user and the regular contact) kept as printed. Nothing in the question or its explanation settles the addresses.
- Q384: "a new user named [email protected]" → user1@contoso.com (settled by the command in the answer area, `-UserId "user1@contoso.com"`; lowercase as printed there).
- Q389: the two "[email protected]" bullets of the cloud user accounts → user1@contoso.com and user2@contoso.com (settled by the answer-area statements "User1 syncs with user1@contoso.com." and "User2 syncs with user2@contoso.com.", and by the PDF's explanation, which calls user2@contoso.com the pre-existing cloud user).
- Q417 to Q428: "Microsoft 365 Username: [email protected]" kept as printed (nothing in the PDF settles the admin account).
- Q420: task "invite an external user named [email protected]" → user1@contoso.com (settled by the reference steps, Step 4: "[Enter user1@contoso.com]").
- **Shared text of the case studies and series:**
  - fabrikam (Existing Environment): "a UPN format of [email protected]" -> username@fabrikam.com (settled by the PDF's own hint in the Fabrikam explanations, "In Question- [email protected] = username@fabrikam.com", for example Q001).
  - series-user2-upn (Scenario): "User2 fails to authenticate to Azure AD when signing in as [email protected]" -> User2@fabrikam.com (settled by the table of users, where User2 has the UPN suffix Fabrikam.com, and by the PDF's hint in Q105, "In Question-[email protected]=@fabrikam.com"). The Solution lines of Q045, Q046, Q047 and Q105 also contain "[email protected]"; those are in the question stems, for the bank agents.

### Other transcription notes

- Q001 to Q004: the shared Fabrikam text is word for word the same in all four questions (checked with diff) and ends at "The principle of least privilege must be used."; the stems start with the next sentence. Q004 begins with "HOTSPOT -" before "Overview -"; left out. Q004's question-specific part also has its own exhibit (Azure AD Connect page), kept in the Q004 stem.
- Q006: the answer area shows the rule without a final closing parenthesis, "(user.userType [ ] ) and (user.department [ ]"; kept as printed in the template.
- Q008: the four requirements are printed as plain lines without bullets; kept as paragraphs.
- Q010: the two assignment blocks are printed with a trailing " -" on every line ("Scope type: Directory -"); these are data lines, not headings, so the dash was dropped and each block made a list.
- Q006, Q008, Q010, Q011: the user tables are pictures in the PDF, transcribed as tables.
- Q007: the PDF's reference link has an fr-fr locale; used without the locale.
- Q024: the Members column of the device group table is printed in a monospace font; transcribed with backticks (`Tag Equals demo And OS In Windows 10` ...). "Not applicable" (printed in italics) is plain text.
- Q025, Q030, Q032: the PDF prints the items to identify (Q25), the requirements (Q30) and the policy configuration (Q32) as separate lines without bullet characters; they are rendered as `{ list: [...] }` for readability.
- Q018, Q032: the "Statements / Yes / No" header of the answer area is left out (scaffolding); the three statements are the yesno statements.
- Q024: drop-down labels keep "[answer choice]" as printed.
- Q025: the answer box also contains a screenshot of the Mailflow status report (Mailflow view with a ZAP removed column); it belongs to the answer, so it is not used in the stem.
- Drop-down field labels keep the row text as printed, including the trailing colon ("Policy type:", "Tool:" ...).
- Q033: option B "Modem authentication" (for "Modern") kept as printed.
- Q034, Q037, Q039, Q043: the requirement lines are printed without bullets; kept as paragraphs (as bank-01 does).
- Q041: the four locations are printed with a trailing " -" ("Microsoft Teams -" ...). They are list items, not headings, so the dash was dropped and they became a list.
- Q039: the truncated label "Priva Privacy Risk Managem..." kept as printed in the screenshot.
- Q035, Q036, Q038, Q044: tables that are pictures in the PDF transcribed as tables ("None" in the Q035 groups table and the Q036 users table is italic in the picture; plain text here).
- Q045 to Q047, Q048: stems hold only the Solution line and "Does this meet the goal?"; no question adds a sentence to the shared text.
- Q051: the two items after "You need to review metrics for the following:" are printed as plain lines without bullets, the second with a trailing " -" (scraping artifact); made a list, dash dropped.
- Q056, Q059: the task lines after "the following tasks:" are printed as plain lines without bullets; made lists.
- Q052: the Task cells of the table hold bulleted lists; transcribed as lines separated by line breaks, bullets dropped.
- Q054: the user lines printed with "•" made a list.
- Q055: cmdlet names in the options set in backticks.
- Q061: the PIM role settings exhibit (a picture of two tables) transcribed as two tables under the headings "Activation" and "Assignment".
- Q062: the answer-area code typed as a template, line breaks and indentation as shown, including `select -ExcludeProperty ServicePlanID` as printed.
- Q063: "You have a Microsoft E5 subscription." kept as printed.
- Q049, Q050: stems hold only the "Solution: ..." line and "Does this meet the goal?" (series-sync-errors, caseOrder 2 and 3). No sentence is added to the shared text.
- Q065: option B prints "onlycontoso221018.onmicrosoft.com" with no space; the space was put back ("only contoso221018..."). Option C prints "Sub.contoso221018.onmicrosoft.com" (the exhibit shows Sub1); kept as printed, and the explanation says that it stands for Sub1.
- Q065: the domain name "Sub1.contoso221018.onmicrosoft.com (D..." is cut off in the exhibit; the alt text says so.
- Q068, Q075, Q077: the requirement lines after "...the following threats:" / "...the following requirements:" are printed as plain lines without bullet characters; they were made into a list.
- Q077: the drop-down option "An alow or block file" (typo for "allow") is kept as printed.
- Q078: the matching rules of the device groups are printed in two lines each; kept as two lines in the table cell ("Tag Contains Inventory" / "And OS in Android").
- Q080: the command in option C is formatted as code (`start-AdSyncSyncCycle -PolicyType Delta`), case kept as printed.
- Q067, Q074, Q076, Q078: tables shown as pictures were transcribed as tables. Q067 and Q074 keep "None" and "Not applicable" (italic in the picture) as plain text.
- Q081: the domain lines "Contoso.com -" and "East.contoso.com -" became a list, trailing " -" dropped.
- Q083: "Assignments -", "Conditions -", "Access controls -" and "Grant -" became headings; the setting lines under them became lists, trailing " -" dropped ("Grant: Block access -", "Session: 0 controls selected -", "Enable policy: On -"). The rule syntax is shown as inline code. Device1's join type "None" is italic in the picture and typed as plain text.
- Q085: the four user property lines became a list, trailing " -" dropped.
- Q087, Q091: the policy and Azure AD Connect setting lines became lists, trailing " -" dropped.
- Q088: the two requirement lines after "the following requirements:" became a list.
- Q090: the three password lines became a list of inline code, trailing " -" dropped. The first drop-down label keeps "[Answer choice]" with a capital A, as printed.
- Q086: "as shown in the Domain/OU Filtering exhibit (Click the Domain/OU Filtering tab.)" kept without the missing period, as printed.
- Q092: "You plan to sync contoso.com to an Azure AD tenant" kept without the final period, as printed.
- Q093: "forests trust relationships" kept as printed.
- Q094: "1 years" and "January 31,2022" kept as printed.
- Q096: the multi-line Action cells of the rules table use line breaks (\n) within the cell.
- Tables typed as text: Q081 (users), Q082 (servers), Q083 (users, devices), Q086 (objects, group members), Q087 (dates), Q091 (users), Q094 (retention policies), Q095 (groups), Q096 (rules, files).
- Q098: the stem calls the label Retention1, while the exhibit shows the name 6Months. Kept both as printed; the alt text says 6Months.
- Q100: "Your company has a Microsoft 365 E5 tenant" has no final period in the PDF; kept as printed. The version lines "Office for the web -", "Office 2016 -", "Office 2019 -" carry the scraping dash; dropped the dash and put the versions, the file types and the two "You need to identify" lines in lists (the PDF prints them as plain lines).
- Q101: the configuration table (Label to auto-apply: 6Months; Locations: Exchange email) is transcribed as a table. The two exhibits stay as images.
- Q103: "Retention period: 7 years -" has the scraping dash; dropped, and the two settings put in a list.
- Q105, Q106 to Q108, Q112: stems hold only the Solution line and "Does this meet the goal?". No sentence added to the shared text.
- Q109, Q110: stems start after the Litware case text; Q109's leading "HOTSPOT -" dropped. No sentence added to the shared text.
- Q111: stem starts with "You are evaluating the required processes for Project1." (same question-specific text as Q001, different options). No sentence added to the shared text.
- Q110: cmdlet names in options A and D put in backticks.
- Q114: the exhibit is a portal screenshot of the Groups list; transcribed as a table (Name, Group type, Membership type, Source, Security enabled). The toolbar, search box, "Search mode Contains", "5 groups found" and the group icons are left out. Option "Group1, and Group3 only" (with the stray comma) kept as printed.
- Q117: the users table and the role assignments table transcribed; the role cell "AU1\User Administrator" kept with its backslash. The dynamic membership rule is printed as text in the PDF and put in a code block.
- Q119, Q121, Q127, Q128: the bullet lines ("•") became lists.
- Q123: the device group table cell "Name starts with Comp And OS in Windows 10" is printed on two lines in the picture; joined into one line. In the answer area picture the label "Computer2:" sits beside the first drop-down's list because of the layout; the fields are Computer1 (four options) and Computer2 (three options) as the answer image shows.
- Q124, Q126: tables transcribed from pictures.
- Q128: drag-and-drop, sources in the order printed (Message center, New service request, Product feedback, Service health).
- Q129: the exhibit, a portal screenshot of "Groups | All groups" (Contoso Ltd. - Azure Active Directory, 4 groups found), transcribed as a table of its columns Name, Group type, Security enabled, Role assignments allowed. Toolbar and search box left out.
- Q130: "You need ensure that the report meets ..." kept as printed (missing "to").
- Q132: the action "Run Update-MgDomain -DomainId contoso.com." printed with the command in code font; written as "Run `Update-MgDomain -DomainId contoso.com`."
- Q131: cmdlet names in options A and B put in backticks.
- Q134: the exhibit, a portal screenshot of the Domains page, transcribed as a table (Domain name, Status). Toolbar, check boxes and status icons left out.
- Q135: the stem bullet says "The number of active users per team" and the target label says "Number of active users per Microsoft Team:"; both kept as printed.
- Q136: no NOTE line in the PDF for this question, so none added. Table values "Contoso.com" and "Contoso.onmicrosoft.com" kept with the capital C as printed.
- Q140, Q141, Q142, Q143: "Not set", "None" and "Not applicable" are printed in italics in the tables; transcribed as plain text.
- Q143: the exhibit's External collaboration settings kept as an image (portal screenshot); the two tables transcribed.
- Q145: the task list says "Create guest user accounts." while the answer-area label says "Create new guest users in Azure AD:"; both kept as printed.
- Q145, Q146, Q148, Q152: "None" cells are italic in the source tables; transcribed as plain "None".
- Q150: "Microsoft 365 ES subscription" and "signs in for the first time and perform the following actions" kept as printed (typos).
- Q151, Q152: the policy settings are printed as one flat bullet list (sub-settings such as "Include: Group1" are not indented in the PDF); kept as a flat list.
- Q151: the stem says "User1 is on the multi-factor authentication (MFA) blocked users list" (legacy Block/unblock users feature, removed in 2025); the explanation describes it in the past tense.
- Q152: the third column of the users table has an empty header in the source image; transcribed as "".
- Q153: role printed as "Report Reader" (the role is Reports Reader); kept as printed in the table, explained in the text.
- Q155 to Q158: stems hold only the "Solution: ..." line and "Does this meet the goal?"; the shared scenario in meta.js matches the PDF text of all four questions (no question adds a sentence).
- Q161: series-sync-errors, caseOrder 4. The shared scenario is word for word the one of Q048; the stem holds only the Solution line and "Does this meet the goal?".
- Q175: litware, caseOrder 3. Stem starts at "You need to ensure that the Microsoft 365 incidents and advisories are reviewed monthly."; no sentence added to the shared case text.
- Q166: the third option of the second drop-down is printed "the password  hash  in Azure AD will be unchanged" with doubled spaces; normalized to single spaces.
- Q167: typos kept as printed: "perform following tasks" and "assign roles to Admin to meet the requirements". No NOTE line is printed for this question.
- Q168: the question sentence ends with a comma as printed ("...in the answer area,"). The NOTE line is moved after the screenshot, at the end of the stem.
- Q173: the answer area is a command line with two drop-downs; modelled as a code template `{{f1}} -PolicyType {{f2}}`.
- Q174: "(Click the Exhibit tab.)" kept as printed; the exhibit follows in the stem.
- Q162, Q164, Q171, Q174: user tables typed as tables.
- Q168: the embedded image p187_2 includes the "Answer Area" caption at the top; cropped off (36 px).
- Q177: the anti-phishing policy exhibit (portal summary page) is transcribed as a table; the column headers "Section", "Setting", "Value" are added (the exhibit has none), the section name is repeated on each row, and the "Edit" links are left out. The empty Description is "". Option "the messages is moved to the Junk Email folder" kept as printed (typo "messages").
- Q183: the two policies are a flat bullet list in the PDF (nesting lost); kept as one flat list, as printed.
- Q185: the Secure Score exhibit is transcribed as a table (Rank, Recommended action, Score impact, Points achieved, Status); the page title "Microsoft Secure Score", the tabs (Overview, Recommended actions, History, Metrics & trends), "Export" and the row check boxes are left out. "company's" straightened.
- Q186: devices table transcribed; "Azure AD-joined, Microsoft Intune-managed" joined from the wrapped cell.
- Q188: devices and alerts tables transcribed from images.
- Q189: "You have Microsoft 365 subscription." kept as printed (missing "a").
- Q187: "NOTE: Each correct answer is worth one point." kept as printed.
- Q191: explanation notes that Microsoft retired the Adoption Score technology experiences (including Endpoint analytics) in early 2026.
- Q193, Q202, Q204, Q207: tables shown as pictures transcribed as tables.
- Q197: the second drop-down label reads "Documents uploaded to Teams, SharePoint Online, and OneDrive ..." while the stem bullet reads "Microsoft Teams"; both kept as printed.
- Q201: drop-down options keep their trailing periods as printed ("Add a connected application." ...).
- Q204: field label "Devices that can onboarded to Microsoft Defender for Endpoint:" kept with the PDF's typo ("can onboarded"). The two lines "You plan to use risk levels ..." and "Noncompliant devices must be blocked ..." kept as separate paragraphs.
- Q207: the PDF's explanation labels "User1 can open File2 -> Yes" as a "Correction"; the marked answer area shows Yes, Yes, No, which is the key.
- Q211: the role group cells that list two role groups are one cell with a line break (`\n`), as in the picture.
- Q212: the drop-downs list 0 to 8; a tiny mark under "8" in both lists (and in the answer image) looks like a clipped scroll artifact, not another value, and was left out.
- Q217: the options are cmdlets and are shown as inline code.
- Q219: the answer area is a command line with two drop-downs; modelled as a dropdown inside code with the template `{{f1}} -Identity "Policy1" {{f2}} $true`.
- Q221: the command is printed as "Set-RetentionCompliancePolicy Policyl -RestrictiveRetention $true -Force" (lowercase L in "Policyl"); kept as printed in a code block. "None" is italic in the users table; transcribed as plain text.
- Q223: "(Click the Exhibit tab.)" kept as printed; the exhibit is shown inline below it.
- Q229: "User emails a product catalog ..." kept as printed (the PDF omits the "1" of User1).
- Q232: the "Define content that contains sensitive info" exhibit is a portal screenshot and is kept as an image (embedded image p255_2.png, not clipped).
- Q236: the stem asks "Which tool ... and which action", but the answer area lists Action first, then Tool; the fields follow the answer area. Option texts keep their trailing periods ("Enable password writeback.") as printed.
- Q233: field labels "File1:" and "File2:" as printed in the answer area.
- Q234, Q236, Q237, Q238: the stems start after the shared case text; none of them adds a sentence to the shared text. The Q234 shared text matches Q1 (Fabrikam); the Q236 to Q238 shared text matches Q109 (Litware).
- Q235: the shared series text matches Q106; the stem holds only the Solution line and "Does this meet the goal?".
- Tables transcribed as text: Q225 (users), Q230 (labels, items), Q232 (files), Q233 (files, DLP rules).
- Q242: the two anti-spam policies, printed as one flat bullet list, are split into two lists, one per policy. Wording and order unchanged.
- Q247: the nested "o" sub-bullets are merged into their parent bullet because lists cannot be nested: "Assignments: Include: Group1; Exclude: Group2", "Assignments: Include: Group2; Exclude: Group1", "Access controls: Grant, Require multi-factor authentication". The "; " separator is added.
- Q251: the PIM Role settings exhibit (a portal screenshot that consists of two Setting/State tables) is transcribed as two tables under the headings "Activation" and "Assignment". The page title "Global Administrator | Role settings / Privileged Identity Management | Azure AD roles" is left out because the stem names the role.
- Q256: the cmdlet names in the options are wrapped in backticks.
- Q244: the case-study text printed with Q244 is identical to Q1's apart from the bullet characters (checked with a diff); no sentence added.
- Layout only: the box of Q246 starts at the bottom of page 274 (header only, text on page 275); the answer area of Q245 is on page 273, page 272 is blank below its stem.
- Q257: cmdlet names in the options are in backticks.
- Q260: the Secure Score screenshot is kept as an image (portal screenshot); its two truncated action names ("Ensure all users can complete multi-factor authentication for ...", "Do not allow users to grant consent to unmanaged applicatio...") are given as truncated in the alt text.
- Q264: "Not applicable" in the components table is italic in the picture; typed as plain text.
- Q265: option A "the Microsoft Authentication app" kept as printed (the product is Microsoft Authenticator).
- Q267: the membership rules are typed as inline code. The PDF prints the policy settings as a flattened hierarchy ("•Assignments", "o Users", "Include: Group1", "Exclude: Group2, Group3", "o Target resources", "Cloud apps", "App1", "Access controls", "Grant", "Block access"). Shown as a two-item list (Assignments, Access controls) with one line per sub-item: "Users: Include: Group1; Exclude: Group2, Group3", "Target resources: Cloud apps: App1", "Grant: Block access". The words are as printed; colons and semicolons were added to join each level.
- Q267: "Not applicable" and "None" in the tables are italic in the picture; typed as plain text.
- Q268: "password less sign-in" kept as printed; option C "X.509.3 certificates" kept as printed.
- Q278: the Members cell of Group2 holds two lines (User2, User3), transcribed as "User2\nUser3". User3's row (Role None, Scope Organization) kept as printed.
- Q279: the PowerShell answer area typed as a template with three drop-downs; the GroupId GUID checked at high zoom. `$person.ObjectId` kept as printed.
- Q282: stem holds only the question-specific sentences. The shared case text in the PDF is identical to Q1's apart from the bullet characters; no sentence is added. Option A here is "name server (NS)" (Q1 has "host (A)").
- Q288: "DIP policy rule" kept as printed (typo for DLP).
- Q287: option A "the Microsoft Authentication app" kept as printed; the explanation names it Microsoft Authenticator.
- Q273 has five options (A to E).
- Q289: option C has no final period, as printed.
- Q294: the three tables were transcribed from pictures. "Name Starts with Dev" and "OS In Windows 11" are printed in a monospace font in the picture; transcribed as plain text. Italics of "Not applicable" dropped.
- Q295: "password less sign-in" kept as printed.
- Q296: "that will user FIDO2 security key" kept as printed (typo for "use").
- Q298, Q299: tables transcribed from pictures; italic "None" cells kept as "None".
- Q299, Q304: drop-down labels keep the trailing colon of the answer area ("Users:", "Groups:", "Enables the real-time monitoring of user activities:", "Blocks specific activities as needed:").
- Q304: the "•" bullets of the requirements became a list.
- Q306: "Semi – require approval for non-temp folders" keeps the en dash as printed. Option B has no final period, as printed. The backslashes and asterisks of the folder paths are kept as printed.
- Q307: "You need identify which cloud apps ..." kept as printed (missing "to").
- Q308: the exhibit stays as an image (portal screenshot, outbound anti-spam Protection settings). The alt text gives every value.
- Q310: "From Microsoft Defender Cloud Apps" (missing "for") and the policy named "Policy" in the stem but "Policy1" in the question, kept as printed. The three file names, printed with "•", are a list.
- Q311, Q313, Q316: lines printed with "•" made lists.
- Q312: the policy is named "Policy" in the stem and "Policy1" in the requirements and the question, kept as printed. The two requirements, printed with "•", are a list.
- Q314: option E "a messages that includes URL links" kept as printed.
- Q317: the image is a crop of the PDF's embedded image p339_2.png with the "Answer Area" title removed (top 40 px). The image goes after the question sentence and before the NOTE line.
- Q321, Q334: the tables (pictures in the PDF) transcribed as tables; checked cell by cell at high zoom (Q321). Q334's "None" is printed in italics; kept as plain text.
- Q327, Q332, Q334: the lines printed with "•" made lists.
- Q332: "Track any users that selects the email message link." kept as printed.
- Q333: "company-based" is broken over two lines in the PDF ("company-" / "based"); joined.
- Q324: drop-down labels kept as printed with colons ("Monitor:", "Integrate:"); likewise Q321 ("User1:", "User2 and User3:") and Q330 ("Settings:", "Filter type:").
- Q321: the PDF's explanation lists User1's third email as "8:00:10 AM", a typo for 8:05:00 AM; not used.
- Q337: option C "Set Allow permanent active to assignment Yes." kept as printed (garbled word order).
- Q338, Q340, Q345: the "•" requirement lines made lists.
- Q339, Q340, Q347: the user, device and policy tables (pictures) transcribed as tables. Q340 keeps the lowercase "Application administrator" as printed.
- Q346: the stem's "access the Azure portal. Azure PowerShell, or Azure Command-Line Interface (CLI)." (period instead of comma) and the drop-down option "Set Grant to Require multifact or authentication." (space inside "multifactor" in the answer-area image) kept as printed.
- Q342 to Q344 (series-mdo-policy) and Q349 to Q351 (series-device-policy): the shared text of each question is word for word the one in meta.js; the stems hold only the Solution line and "Does this meet the goal?". No question adds a sentence.
- Topics: Q349 to Q351 (onboarding to Defender for Endpoint through Intune policies) and Q347 (Endpoint security templates) filed under security / "Defender for Endpoint" rather than "Intune and device compliance".
- Q355: "You need to block users from connecting to Appl from Microsoft Edge" ("Appl" for App1) and "Which type of app tag should you use. and what should you configure" (period for a comma) kept as printed. The stray "-" line after "HOTSPOT" left out.
- Q359: the policy settings are printed as "•" items with "o" sub-items; made a list whose items carry the sub-items as "\n- " lines (as bank-17 does). "Groups: Group 1" (with a space) and "Object tags in HTML On" (no colon) kept as printed. The table cells "None" are italic in the picture; typed as plain text. The explanation refers to Group1.
- Q362: table cells "Not applicable" are italic in the picture; typed as plain text.
- Q364: the two policies' "•"/"o" settings made lists, with the Include/Exclude sub-items as "\n- " lines.
- Q365: users table and offices table transcribed; the activity policy exhibit kept as an image. "New York" in the table and "New York City" in the stem kept as printed.
- Q366: the two "•" settings made a list; the messages table transcribed.
- Q367: no "NOTE: Each correct selection is worth one point." in the PDF for this question, so none in the stem.
- Q358: the PDF has three options only (A to C); kept.
- Q360: stem holds only the Solution line and "Does this meet the goal?" (series-device-policy, caseOrder 4). No sentence added to the shared text; the shared text in meta.js matches the PDF's text of Q360 word for word.
- Dropdown labels keep the trailing colon as printed ("App tag type:", "Group:", "Policy type:" ...).
- Q369: both tables (improvement actions with status and points, and planned statuses) are pictures in the PDF. Transcribed as tables, with the points column right-aligned.
- Q371: stem holds only the Solution line and "Does this meet the goal?". The shared text in the PDF matches the series-mdo-policy case in meta.js word for word, except that Q371 prints "As a result, these questions" with a comma where Q342 (and meta.js) has "As a result these questions". meta.js was not touched. The PDF's explanation for Q371 talks about .apk/.appx attachments (it belongs to Q378) and was ignored.
- Q372, Q379: "•" bullet lines turned into lists. "HOTSPOT -" / "DRAG DROP -" dropped.
- Q372: drop-down options keep their final periods, as printed in the answer area.
- Q375: "HOTSPOT -" dropped.
- Q381, Q382, Q383: stems hold only the Solution line and "Does this meet the goal?". No sentence was added to the shared text.
- Q384: the answer area code was typed as a template with two drop-downs. The cmdlet names "Get-MgSubscriberSku" and "Update-MgSubscriberSku" are kept as printed (the real Graph cmdlet is Get-MgSubscribedSku; the explanation says so).
- Q385: options C and D print "Device 3" and "Device 4" with a space; kept as printed. The device table typed as text.
- Q389: user table typed as text; the two OU bullets and the two account bullets became lists.
- Q391: "NOTE: Each correct selection is worth one point" printed without a final period; kept as printed.
- Q395: requirement bullets became a list.
- Q396: series question (series-cloud-apps, caseOrder 4); the stem holds only the Solution line and "Does this meet the goal?". The shared text in the PDF is identical to the series text in meta.js; no sentence added.
- Q397: "You have Microsoft 365 E5 subscription" (missing "a") kept as printed. Identity table typed as text.
- Q400: the DLP rule exhibit kept as an image (portal screenshot) with a full alt text.
- Q402: the scoping filter entry "CN=Group1,OU=OU2,DC=contoso, DC=com" is kept as printed (with the space before the last DC) in a code block. "None" in the groups table is italic in the picture; typed as plain text.
- Q403: the first drop-down label "Devices that can onboarded to Microsoft Defender for Endpoint:" is kept as printed (missing "be"). The two lines "You plan to use risk levels ..." and "Noncompliant devices must be blocked ..." are kept as two paragraphs, as printed.
- Q404: the drop-down options keep their trailing periods as printed.
- Q407: the exhibit is a portal screenshot of "Manage your report schedules here" (2 items). It is transcribed as a table of its columns (Schedule start date, Schedule name, Report type, Frequency). The title, Refresh button, item count, search box and check boxes are left out.
- Q411: options are printed without a space after the letter ("A.Deploy ..."); the text starts at the word.
- Q414: the bullet lines became a list; "SharePoint Online." keeps its final period as printed.
- Q415: the bullet lines became a list; "Information-about known malicious organizations." keeps the hyphen as printed.
- Q416: the bullet lines (tasks at 10 AM) became a list. "Description" in statement 3 is printed in a monospace font; written as `Description`. "(Click the Exhibit tab.)" kept as printed. The Domain and OU filtering exhibit is kept as an image (wizard screenshot).
- Q417 to Q428 (simulations): one stem layout for all 12: "Use the following login credentials as needed:", a list of the six credential lines, the Edge/portal paragraph, `{ heading: "Task" }`, then the task sentences. The scaffolding lines "SIMULATION", "Lab" and the stray "-" separators are left out. The credential text is identical in all 12 questions.
- Q417 to Q428: the reference steps are images of text in the PDF; all of them are typed as text in `solution`. Each "Step N:" block is one paragraph, with the PDF's own line breaks kept as `\n`. Runs of spaces after "Step N:" collapsed to one. Lines that stand alone as a title with no punctuation are `{ heading }` (for example "Create a custom SIT from scratch", "Steps to Create the Alert Policy"); lines ending in a colon ("Step-by-step guide:", "Incorrect:") stay as paragraphs. Odd wording kept as printed ("Sign in: to the ...", "Log in: to ...", "Select Create to create to enable your policy.", "[Select the Executive Corner Sharepoint site]", "*->" markers, Q417 Step 2 without a final period, Q427 Step 7 ending in "and click").
- Q417 to Q428: the "Reference:" line and URL at the end of each answer image are not put in `solution`. Microsoft Learn ones are used in `explanation.refs` (locale removed); the third-party ones (Q419 office365itpros.com, Q425 and Q427 blog.admindroid.com) are replaced by Microsoft Learn pages.
- Q421: bold "Exclude" and "Users and groups" in step 5b kept as `**bold**`, as in the image.
- Q426: "Sign in to the Microsoft Purview portal ." printed with a space before the period; the space is removed.
- Q427: the task names the Contoso Landings site, while the reference step 6 says "[Select the Executive Corner Microsoft SharePoint Online site]" (the site of Q425). Kept as printed; the explanation scopes the policy to "the Contoso Landings site, the site the task names" without commenting on the step.
- Q431: the nested bullets of Policy1 ("•Locations / o Devices ..." and "•Rules / o Name / o Conditions / - Sensitivity labels / o Actions / - Print") become a two-item list; the "o" sub-bullets are put on separate lines with `\n`, a colon is added after "Locations" and "Rules", and each "-" sub-item is joined to its parent with ", " ("Conditions: Content contains, Sensitivity labels: Label1"; "Actions: Audit or restrict activities on devices, Print: Block"). Table of files transcribed as text.
- Q432: drop-down option order checked against both answer areas (p457); marked: box 1 option 3, box 2 option 1.
- Q434, Q440: Fabrikam case study (caseOrder 9 and 10). The shared text printed with each question is identical to the case text in meta.js (checked against Q001's text); no sentence added. Stems start at "You are evaluating the required processes for Project1."
- Q435: the first line is printed "You have a Microsoft 365 tenant -" (scraping artifact for the final period; Q439 prints the same sentence with a period). Written "You have a Microsoft 365 tenant." and not treated as a heading.
- Q436: option B prints "Set-Msoluser" (lowercase u), kept as printed; the cmdlet names in the options are shown as inline code.
- Q438, Q441, Q446: tables shown as pictures transcribed as tables. In Q441 the "None" cells are italic in the picture and typed as plain text.
- Q446, Q448: bullet lines ("•") became lists.
- Drop-down labels keep the row text as printed, with the trailing colon ("Add:", "Create:", "Portals:", "Groups:", "User1:", "User2:", "Detect operating system vulnerabilities:", "Perform a configuration assessment of the operating system:", "Create Mbox1:", "Grant User1 the Send As permission:").
- Topics: Q433 (Microsoft 365 Backup billing setup) has no dedicated topic, placed under tenant / "Tenant settings and service health". Q442 (Defender Threat Intelligence projects) placed under security / "Defender XDR incidents and hunting" as the closest. Q443 (Security Exposure Management attack paths) placed under security / "Secure Score and vulnerability management" as the closest posture-management topic.
- Q449: "2.000 user accounts" kept as printed. The three requirement lines printed with "•" made a list.
- Q450: option C "reset the password or the ADSync service account" kept as printed ("or" for "of"). Cmdlet names in options B and D put in backticks.
- Q451, Q452: the user table and the documents table are pictures in the PDF, transcribed as tables (Q452 count columns right-aligned).
- Q452: the "Statements / Yes / No" header of the answer area left out; the DLP rule exhibit kept as an image (portal screenshot).
- Q453: "The solution must follow the principle of least privilege" has no final period; kept as printed.
- Q456: option C "an Identity Protection settings" kept as printed.
- Q457: the versions, file types and the two "You need to identify" lines (printed with "•") made lists. Drop-down options kept exactly as printed in both the question and answer images, including ".doc and .xlsx" and ".doc, .docs, .xls, and .xlsx" (".docs"). Compare Q100 (bank-07), an earlier version of this question whose options read ".docx and .xlsx" and ".doc, .docx, .xls, and .xlsx".
- Q462 and Q464 are the same question (same stem, options and key) printed twice in the PDF; both kept, with separately worded explanations.
- Q461, Q463, Q466: "Microsoft 365 Copilot" kept as printed; the Q461 explanation mentions the new name, Microsoft Copilot.
- Page 498 is the closing page of the PDF ("Thank you", "Total: 467 Questions"); nothing to transcribe.
- **Shared text of the case studies and series:**
  - Sources: fabrikam from Q001 (bullets from the Q111 and later copies); litware from Q110 (checked against Q109); series from Q045, Q048, Q106, Q155, Q342, Q349, Q381. A script compared the shared text of every member of each set: all identical after whitespace and bullet normalization (fabrikam 10 copies, litware 6 copies, every series member), except the one comma noted below. The litware tables and the user2 exhibit are the same embedded images in every copy (same file hashes).
  - Shared text ends: fabrikam and litware with "The principle of least privilege must be used." (the next sentence differs per question); every series just before "Solution:".
  - Tabs: the top-level sections of the PDF (headings printed with a trailing " -"), sub-sections as { heading }. "HOTSPOT -" printed before "Overview -" in Q004, Q109, Q175, Q236 and Q237 is scaffolding and left out.
  - litware: the PDF prints "Problem Statements -" with the same marker as all other headings; it is made a tab of its own (between Environment and Requirements, in PDF order) because it is not part of the environment description and is a top-level section in Microsoft's case-study layout.
  - litware Technical Requirements: the three activities (Join Microsoft Teams channels., Join Microsoft Teams chats., Access shared files.) are sub-items of "Litware users must be able to invite A. Datum users to participate in the following activities:". The PDF prints them flat with the same bullet as the other items, and the list block has no nesting, so they stay as items of the same flat list, in printed order.
  - litware: "Convert all the Windows 10 Pro devices to Windows 10 Enterprise ES." kept as printed ("ES", probably E5 in the original).
  - litware tables (users and OUs, users and roles) transcribed from the pictures as { table }.
  - series-user2-upn: users table (Name, UPN suffix) transcribed as { table }, values with the capitals as printed (Contoso.com, Fabrikam.com). The sentence "(Click the Exhibit tab.)" kept as printed; the exhibit is in an "Exhibit" tab.
  - series-mdo-policy: Q342, Q343 and Q344 print "As a result these questions do not appear on the Review Screen." (no comma); Q371 prints "As a result, these questions ...". The text follows Q342. series-cloud-apps prints the comma in all four questions and keeps it.
  - Series instructions: the "Note: ..." sentence and the "After you answer a question in this section ..." sentence form the Overview tab, as two paragraphs, as printed. Series scenario lines are one paragraph per printed line (sentence).
  - Titles and short titles reworded to describe each scenario: series-user2-upn "User2 fails to authenticate to Azure AD"; series-sync-errors "10 user accounts in an OU are not synchronized" / "Unsynchronized accounts"; series-secadmin1 "SecAdmin1 must manage Defender for Office 365 policies"; series-password-policy "security solution for synchronized identities" / "Synchronized identities"; series-mdo-policy "balanced baseline threat policy in Defender for Office 365" / "Baseline threat policy"; series-device-policy "automatic onboarding to Defender for Endpoint at Intune enrollment" / "Defender onboarding"; series-cloud-apps "OAuth app policies in Defender for Cloud Apps" / "OAuth app policies". ids and noReturn unchanged.
