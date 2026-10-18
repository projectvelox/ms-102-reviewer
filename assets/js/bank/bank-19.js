/* MS-102 question bank, part 19: questions 289 to 304 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q289", source: 289, type: "single",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Intermediate",
    stem: [
      "You need to notify the manager of the human resources department when a user in the department shares a file or folder from the department's Microsoft SharePoint site.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "From the SharePoint site, create an alert." },
      { key: "B", text: "From the Microsoft Defender portal, create an alert policy." },
      { key: "C", text: "From the SharePoint admin center, modify the sharing settings" },
      { key: "D", text: "From the Microsoft 365 admin center, configure SharePoint.org settings." }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Alert policies in the Microsoft Defender portal (**Email & collaboration** > **Policies & rules** > **Alert policy**) watch the user and admin activities that Microsoft 365 records and raise an alert when an activity matches the policy. You pick the activity to track, here a sharing activity such as sharing a file or folder, and you can add conditions on who performs it (the users of the human resources department) and on the file name or URL it concerns (the department's site).",
        "In the notification settings of the policy you enter the recipients of the alert email. Adding the manager of the department as the recipient means the manager is notified each time a member of the department shares something from the site."
      ],
      wrong: [
        ["A", "A SharePoint alert on a list or library emails the chosen people when items are added, changed or deleted. It doesn't track sharing actions, so it can't report that a department member shared a file."],
        ["C", "Sharing settings in the SharePoint admin center decide what sharing is allowed, such as the external sharing level and the default link type. They control sharing; they don't notify anyone when sharing happens."],
        ["D", "The SharePoint entry in Org settings of the Microsoft 365 admin center holds tenant-wide sharing options, such as whether content can be shared outside the organization. Like the other sharing settings, it allows or blocks sharing and sends no notifications."]
      ],
      concept: "Alert policies turn recorded user activities, filtered by activity, user and location, into alerts with email notifications to chosen recipients.",
      takeaway: "Notify someone when specific users perform an activity such as sharing: create an alert policy in the Defender portal and make that person the notification recipient.",
      refs: [["Microsoft Learn: Alert policies in the Microsoft Defender portal", "https://learn.microsoft.com/defender-xdr/alert-policies"]]
    }
  },
  {
    id: "Q290", source: 290, type: "single",
    domain: "compliance", topic: "Sensitivity labels and encryption", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 tenant.",
      "You create an auto-labeling policy to encrypt emails that contain a sensitive info type. You specify the locations where the policy will be applied.",
      "You need to deploy the policy.",
      "What should you do first?"
    ],
    options: [
      { key: "A", text: "Run the policy in simulation mode." },
      { key: "B", text: "Turn on co-authoring for files with sensitivity labels." },
      { key: "C", text: "Review the sensitive information in Activity explorer." },
      { key: "D", text: "Turn on the policy." }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "A service-side auto-labeling policy applies a sensitivity label, here one that encrypts, to the items in its locations that match its conditions, such as email that contains a sensitive info type. Because it acts automatically and on a large scale, the deployment starts in simulation mode.",
        "In simulation the policy evaluates content against its conditions and reports the items it would label, without applying the label. You review the matches, refine the conditions if they catch too much or too little, and only then turn the policy on."
      ],
      wrong: [
        ["B", "Co-authoring for files with sensitivity labels is a tenant setting that lets Office desktop apps co-author and AutoSave encrypted documents in SharePoint and OneDrive. It has nothing to do with labeling email and is not a deployment step for an auto-labeling policy."],
        ["C", "Activity explorer shows labeling and other activity that has already happened. It is not the first step in deploying a new policy."],
        ["D", "Turning the policy on is the last step. Doing it first would label and encrypt real messages before you have checked what the conditions match."]
      ],
      concept: "Auto-labeling policies are first run in simulation mode, which reports what would be labeled, and are turned on after the results are reviewed.",
      takeaway: "New auto-labeling policy: simulate, review the results, then turn it on.",
      refs: [["Microsoft Learn: Automatically apply a sensitivity label to Microsoft 365 data", "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"]]
    }
  },
  {
    id: "Q291", source: 291, type: "single",
    domain: "compliance", topic: "Data loss prevention", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You create a data loss prevention (DLP) policy named DLP1.",
      "You need to ensure that endpoint rule actions are available in the advanced DLP rules for DLP1.",
      "To which location should you apply DLP1?"
    ],
    options: [
      { key: "A", text: "Instances" },
      { key: "B", text: "OneDrive accounts" },
      { key: "C", text: "On-premises repositories" },
      { key: "D", text: "Devices" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Endpoint DLP extends a DLP policy to onboarded Windows and macOS devices. When the policy includes the **Devices** location, its rules can use the endpoint actions: audit, block with override or block activities such as copying to a USB device, printing, copying to the clipboard, uploading to cloud service domains or opening files in unallowed apps.",
        "These actions are enforced by the device itself, so the rule editor only offers them when Devices is one of the policy's locations."
      ],
      wrong: [
        ["A", "Instances applies the policy to connected cloud app instances through Microsoft Defender for Cloud Apps. Its rules act on files in those apps, not on actions on a device."],
        ["B", "OneDrive accounts protects content stored in OneDrive, with actions such as restricting access or sharing. Endpoint actions are not available for it."],
        ["C", "On-premises repositories applies the policy to file shares and SharePoint Server libraries scanned by the information protection scanner. It doesn't control what users do on their devices."]
      ],
      concept: "The locations of a DLP policy decide which rule actions are available; endpoint activities belong to the Devices location.",
      takeaway: "USB, print, clipboard or browser upload restrictions in DLP: include the Devices location (endpoint DLP).",
      refs: [
        ["Microsoft Learn: Learn about Endpoint data loss prevention", "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"],
        ["Microsoft Learn: Learn about data loss prevention", "https://learn.microsoft.com/purview/dlp-learn-about-dlp"]
      ]
    }
  },
  {
    id: "Q292", source: 292, type: "single",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to create a mail-enabled contact.",
      "Which portal should you use?"
    ],
    options: [
      { key: "A", text: "the SharePoint admin center" },
      { key: "B", text: "the Microsoft Defender portal" },
      { key: "C", text: "the Intune admin center" },
      { key: "D", text: "the Microsoft 365 admin center" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "A mail contact is a mail-enabled object for a person outside the organization. It has an external email address and appears in the address book, but it has no mailbox and cannot sign in.",
        "Contacts are recipient objects, and the Microsoft 365 admin center manages them under **Users** > **Contacts**, where you add a contact with a display name and its external email address. The Exchange admin center (Recipients > Contacts) can create them as well, but it isn't among the options."
      ],
      wrong: [
        ["A", "The SharePoint admin center manages sites, sharing and SharePoint settings. It doesn't create recipients."],
        ["B", "The Defender portal handles threats, incidents and security policies. It has no recipient management."],
        ["C", "The Intune admin center manages devices and apps. Contacts are not created there."]
      ],
      concept: "Mail contacts are recipient objects for external addresses, managed in the Microsoft 365 admin center or the Exchange admin center.",
      takeaway: "An external person in the address book without a mailbox or account: add a contact in the Microsoft 365 admin center.",
      refs: [["Microsoft Learn: Manage mail contacts in Exchange Online", "https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-mail-contacts"]]
    }
  },
  {
    id: "Q293", source: 293, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains a domain named contoso.com.",
      "You deploy a new Microsoft Defender for Office 365 anti-phishing policy named Policy1 that has user impersonation protection enabled for a user named [email protected].",
      "You discover that Policy1 blocks email messages from a regular contact named [email protected].",
      "You need to ensure that the messages are delivered successfully.",
      "What should you do for Policy1?"
    ],
    options: [
      { key: "A", text: "Select Enable domains to protect." },
      { key: "B", text: "Configure the Phishing email threshold setting." },
      { key: "C", text: "Configure which users to protect." },
      { key: "D", text: "Select Enable mailbox intelligence." }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "User impersonation protection flags messages whose sender looks like a protected user, for example the same display name with a different address. A regular contact who happens to resemble the protected user is caught as a false positive.",
        "Mailbox intelligence learns each recipient's email patterns and frequent contacts. Microsoft's own example is exactly this case: the CEO at contoso.com is a protected user, and some recipients regularly exchange mail with a vendor of the same name at another domain; because those recipients have a communication history with the vendor, mailbox intelligence doesn't treat the vendor's messages as impersonation. With mailbox intelligence and intelligence for impersonation protection on, user impersonation protection doesn't act on mail between a sender and recipient who have communicated before, so the contact's messages are delivered."
      ],
      wrong: [
        ["A", "Domains to protect adds domain impersonation protection for your own or custom domains. It adds detections; it doesn't stop the false positive."],
        ["B", "The phishing email threshold tunes how aggressively machine learning applies phishing verdicts. The block here comes from user impersonation protection, which the threshold doesn't govern."],
        ["C", "The users to protect are the senders that get impersonation protection. The protected user must stay on that list; changing it would weaken the protection the policy was created for, not tell the contact apart."]
      ],
      concept: "Mailbox intelligence uses each recipient's contact history to tell frequent legitimate senders from impersonators, which reduces impersonation false positives.",
      takeaway: "Impersonation protection blocking a known regular contact: enable mailbox intelligence (trusted senders are the other way to exempt a sender).",
      refs: [["Microsoft Learn: Anti-phishing policies in Microsoft 365", "https://learn.microsoft.com/defender-office-365/anti-phishing-policies-about"]]
    }
  },
  {
    id: "Q294", source: 294, type: "yesno",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You have devices onboarded to Microsoft Defender for Endpoint as shown in the following table.",
      { table: { head: ["Name", "Platform"], rows: [
        ["Device1", "Windows 11"],
        ["Computer2", "Windows 11"],
        ["Device3", "Android"]
      ] } },
      "You create the device groups shown in the following table.",
      { table: { head: ["Rank", "Name", "Matching rule"], rows: [
        ["1", "Group1", "Name Starts with Dev"],
        ["2", "Group2", "OS In Windows 11"],
        ["Last", "Ungrouped devices (default)", "Not applicable"]
      ] } },
      "IP address indicators are defined as shown in the following table.",
      { table: { head: ["IP address", "Action", "Scope"], rows: [
        ["131.107.10.50", "Block", "Group2"],
        ["20.30.40.50", "Block", "Group1"],
        ["2.23.10.15", "Block", "UnassignedGroup"]
      ] } },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "Defender for Endpoint blocks access to IP address 20.30.40.50 from Device1." },
      { text: "Defender for Endpoint blocks access to IP address 2.23.10.15 from Computer2." },
      { text: "Defender for Endpoint blocks access to IP address 131.107.10.50 from Device3." }
    ],
    answer: [true, false, false],
    explanation: {
      correct: [
        "Every device belongs to exactly one device group: the highest-ranked group whose matching rule it meets. A device that matches no rule falls into Ungrouped devices (default), the group the indicator table calls UnassignedGroup. An indicator scoped to device groups applies only to the devices in those groups.",
        "**Device1** starts with Dev, so it lands in Group1 (rank 1). The block for 20.30.40.50 is scoped to Group1, so it applies: **Yes**.",
        "**Computer2** doesn't start with Dev, but it runs Windows 11, so it lands in Group2. The block for 2.23.10.15 applies only to ungrouped devices, and Computer2 is not ungrouped: **No**.",
        "**Device3** is an Android device whose name starts with Dev, so the rank 1 rule puts it in Group1. The block for 131.107.10.50 is scoped to Group2 and doesn't apply to it: **No**."
      ],
      wrong: [
        ["Statement 1 — No", "Device1 matches the Group1 rule, and the indicator for 20.30.40.50 is scoped to Group1."],
        ["Statement 2 — Yes", "The 2.23.10.15 indicator covers only Ungrouped devices. Computer2 matches the Group2 rule, so it isn't in that group."],
        ["Statement 3 — Yes", "Device3 is placed in Group1 by its name before the Group2 rule is considered, and the 131.107.10.50 indicator is scoped to Group2 only. Its platform doesn't matter for the name rule."]
      ],
      concept: "Device groups are evaluated in rank order, each device joins the first group it matches, and indicators scoped to a group apply only to its members.",
      takeaway: "For scoped indicators: place each device in its single highest-ranked matching group first, then check the indicator's scope.",
      refs: [
        ["Microsoft Learn: Create and manage device groups", "https://learn.microsoft.com/defender-endpoint/machine-groups"],
        ["Microsoft Learn: Create indicators for IPs and URLs/domains", "https://learn.microsoft.com/defender-endpoint/indicator-ip-domain"]
      ]
    }
  },
  {
    id: "Q295", source: 295, type: "single",
    domain: "identity", topic: "Authentication and MFA", difficulty: "Intermediate",
    stem: [
      "Your company has a Microsoft Entra tenant named contoso.com and a Microsoft 365 subscription.",
      "All users use Windows 10 devices to access Microsoft Office 365 apps.",
      "All the devices are in a workgroup.",
      "You plan to implement password less sign-in to contoso.com.",
      "You need to recommend changes to the infrastructure for the planned implementation.",
      "What should you include in the recommendation?"
    ],
    options: [
      { key: "A", text: "Join all the devices to contoso.com." },
      { key: "B", text: "Deploy Microsoft Entra Application Proxy." },
      { key: "C", text: "Deploy the Microsoft Entra Connect provisioning agent." },
      { key: "D", text: "Deploy the Microsoft Authenticator app." }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Passwordless sign-in on Windows, with Windows Hello for Business or a FIDO2 security key, requires the device to be Microsoft Entra joined (or hybrid joined). A workgroup computer only knows local accounts, so the users' Entra identities can't sign in to it with a passwordless credential.",
        "Joining the Windows 10 devices to the contoso.com tenant (Microsoft Entra join) is the infrastructure change that enables those methods. Users then sign in to Windows with their Entra account, without a password, and get single sign-on to the Office 365 apps."
      ],
      wrong: [
        ["B", "Application Proxy publishes on-premises web applications for remote access. It doesn't change how users sign in to their devices or to Microsoft 365."],
        ["C", "The provisioning agent is used by Microsoft Entra Cloud Sync to synchronize users from an on-premises Active Directory. The devices are in a workgroup and there is nothing to synchronize."],
        ["D", "Microsoft Authenticator is an app that users install, and it can offer phone sign-in to their Entra account. It is not an infrastructure change, and it doesn't make the workgroup devices able to use Windows passwordless sign-in."]
      ],
      concept: "Windows passwordless methods such as Windows Hello for Business and FIDO2 security keys require Microsoft Entra joined or hybrid joined devices.",
      takeaway: "Workgroup PCs and a passwordless plan: Microsoft Entra join the devices first.",
      refs: [
        ["Microsoft Learn: Microsoft Entra joined devices", "https://learn.microsoft.com/entra/identity/devices/concept-directory-join"],
        ["Microsoft Learn: How to enable passkeys (FIDO2) in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2"]
      ]
    }
  },
  {
    id: "Q296", source: 296, type: "single",
    domain: "identity", topic: "Authentication and MFA", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You plan to implement an authentication policy that will user FIDO2 security key as a user authentication method.",
      "You need to ensure that during enrollment, each FIDO2 security key is verified by using the FIDO Alliance Metadata Service.",
      "Which setting should you enable?"
    ],
    options: [
      { key: "A", text: "Allow self-service setup" },
      { key: "B", text: "Restrict specific keys" },
      { key: "C", text: "Enforce attestation" },
      { key: "D", text: "Enforce key restrictions" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "In the Passkey (FIDO2) authentication method policy, **Enforce attestation** set to Yes requires attestation when a key is registered. Microsoft Entra ID checks the attestation of the key, its make and model, against trusted metadata from the FIDO Alliance Metadata Service, so only genuine keys from the stated vendor can be enrolled.",
        "Attestation is checked only at registration. Keys that were registered without attestation keep working for sign-in if the setting is turned on later."
      ],
      wrong: [
        ["A", "Allow self-service setup lets users register their own keys in Security info. It doesn't verify the keys."],
        ["B", "Restrict specific keys chooses whether the listed key models (AAGUIDs) are allowed or blocked. It filters by model; it doesn't check the key against the metadata service."],
        ["D", "Enforce key restrictions turns on the allow or block list of key models. Without attestation, the AAGUID a key reports isn't verified, so this setting alone doesn't validate keys."]
      ],
      concept: "Attestation verifies at registration that a FIDO2 key is genuine by checking its metadata; key restrictions only allow or block models by AAGUID.",
      takeaway: "Verify keys against the FIDO Alliance Metadata Service at enrollment: Enforce attestation.",
      refs: [["Microsoft Learn: How to enable passkeys (FIDO2) in Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2"]]
    }
  },
  {
    id: "Q297", source: 297, type: "dropdown",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You are investigating a suspicious email message that generated alerts in the Microsoft Defender portal.",
      "You need to examine the email message header and submit the message to Microsoft for review.",
      "Which two settings should you use? To answer, select the appropriate settings in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "To examine the email message header", options: ["Take action", "Email preview", "Analysis", "Attachment", "URL", "Similar emails"] },
      { id: "f2", label: "To submit the message to Microsoft for review", options: ["Take action", "Email preview", "Analysis", "Attachment", "URL", "Similar emails"] }
    ],
    answer: { f1: 2, f2: 0 },
    explanation: {
      correct: [
        "The answer area is the Email entity page of the message in the Defender portal. Its **Analysis** tab holds the in-depth details of the message, and its message details area has a **Plain-text email header** tab that shows the whole header, which you can copy into the Microsoft Message Header Analyzer.",
        "**Take action**, at the top of the page, opens the Take action wizard. One of its response actions is **Submit to Microsoft for review**, where you report the message as clean, suspicious or a threat (phish, malware or spam) and can add allow or block entries to the Tenant Allow/Block List."
      ],
      wrong: [
        ["Email preview", "Shows the body of the message as the recipient sees it, and requires the Preview role. It shows neither the header nor a way to submit the message."],
        ["Attachment or URL", "These tabs list the files and links in the message with their scan results. The header is on the Analysis tab."],
        ["Similar emails", "Lists other messages with the same body fingerprint. It is for scoping a campaign, not for reading the header or submitting the message."]
      ],
      concept: "The Email entity page gathers everything about one message: tabs for timeline, analysis (including the header), attachments, URLs and similar emails, and actions such as Take action.",
      takeaway: "Email entity page: header on the Analysis tab, submission to Microsoft through Take action.",
      refs: [
        ["Microsoft Learn: The Email entity page in Defender for Office 365", "https://learn.microsoft.com/defender-office-365/mdo-email-entity-page"],
        ["Microsoft Learn: Threat hunting in Threat Explorer and Real-time detections", "https://learn.microsoft.com/defender-office-365/threat-explorer-threat-hunting"]
      ]
    }
  },
  {
    id: "Q298", source: 298, type: "single",
    domain: "identity", topic: "Identity Protection", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You create the users shown in the following table.",
      { table: { head: ["Name", "Assigned role"], rows: [
        ["Admin1", "Security Administrator"],
        ["Admin2", "Security Operator"],
        ["Admin3", "Security Reader"]
      ] } },
      "You plan to use Microsoft Entra ID Protection.",
      "Which users will be added automatically to the User at risk detected alerts list?"
    ],
    options: [
      { key: "A", text: "Admin1 only" },
      { key: "B", text: "Admin2 only" },
      { key: "C", text: "Admin1 and Admin2 only" },
      { key: "D", text: "Admin1 and Admin3 only" },
      { key: "E", text: "Admin1, Admin2, and Admin3" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "ID Protection sends the **Users at risk detected** email (and the weekly digest) to a recipient list. By default, users actively assigned the Global Administrator, Security Administrator or Security Reader role are added to that list automatically, provided they have an email or alternate email address. Users who are only eligible through PIM receive the email only while the role is active, and roles assigned through groups don't count.",
        "Admin1 (Security Administrator) and Admin3 (Security Reader) hold two of those roles and are added. Admin2's Security Operator role is not one of them, so Admin2 isn't added automatically."
      ],
      wrong: [
        ["A", "Admin3 is added as well, because Security Reader is one of the roles whose holders are added automatically."],
        ["B", "Security Operator is not one of the roles that are added automatically, and Admin1 and Admin3 hold roles that are."],
        ["C", "Admin2's Security Operator role isn't included, while Admin3's Security Reader role is."],
        ["E", "Admin2 isn't added automatically. An administrator could still add Admin2's address as a custom recipient."]
      ],
      concept: "ID Protection notification emails go by default to users actively assigned Global Administrator, Security Administrator or Security Reader.",
      takeaway: "Default risk alert recipients: Global Administrator, Security Administrator, Security Reader, not Security Operator.",
      refs: [["Microsoft Learn: Configure Microsoft Entra ID Protection notifications", "https://learn.microsoft.com/entra/id-protection/howto-identity-protection-configure-notifications"]]
    }
  },
  {
    id: "Q299", source: 299, type: "dropdown",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Member of", "Assigned license"], rows: [
        ["User1", "Group1", "Microsoft 365 E5"],
        ["User2", "Group2", "None"],
        ["User3", "None", "Microsoft 365 E5"],
        ["User4", "None", "None"]
      ] } },
      "The subscription contains the groups shown in the following table.",
      { table: { head: ["Name", "Member of", "Assigned license"], rows: [
        ["Group1", "None", "None"],
        ["Group2", "Group3", "Microsoft 365 E5"],
        ["Group3", "Group4", "None"],
        ["Group4", "None", "Microsoft 365 E5"]
      ] } },
      "Which users and groups can you delete? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Users:", options: ["User4 only", "User3 and User4 only", "User2 and User4 only", "User1, User2, User3, and User4"] },
      { id: "f2", label: "Groups:", options: ["Group1 only", "Group4 only", "Group1 and Group3 only", "Group1, Group2, Group3, and Group4"] }
    ],
    answer: { f1: 3, f2: 2 },
    explanation: {
      correct: [
        "**Users:** a license doesn't prevent deleting a user, whether it is assigned directly (User1, User3) or would come from a licensed group (User2 through Group2). Deleting the account frees its license. All four users can be deleted.",
        "**Groups:** a group that has licenses assigned through group-based licensing can't be deleted until all of its licenses are removed, so that deleting a group never strips licenses from its members by accident. Group2 and Group4 have Microsoft 365 E5 assigned and can't be deleted yet. Group1 and Group3 have no license and can be deleted. Group3's place in the nesting (it contains Group2 and is a member of Group4) doesn't matter: group-based licensing only licenses the direct members of the licensed group, and nesting doesn't block deletion."
      ],
      wrong: [
        ["User4 only / User3 and User4 only / User2 and User4 only", "Each of these assumes a license blocks deleting a user. It doesn't; only groups with assigned licenses are protected from deletion."],
        ["Group1, Group2, Group3, and Group4", "Group2 and Group4 have licenses assigned. Their licenses must be removed before they can be deleted."],
        ["Group1 only", "Group3 has no license of its own, and being nested between two licensed groups doesn't prevent its deletion."],
        ["Group4 only", "Group4 is one of the two groups that can't be deleted, because it has a license assigned."]
      ],
      concept: "A group with licenses assigned through group-based licensing can't be deleted until its licenses are removed; users can be deleted whatever licenses they have.",
      takeaway: "Licensed group: unassign its licenses first, then delete it. Licensed user: just delete.",
      refs: [["Microsoft Learn: Assign or unassign licenses to a group in the Microsoft 365 admin center", "https://learn.microsoft.com/microsoft-365/admin/manage/manage-group-licenses"]]
    }
  },
  {
    id: "Q300", source: 300, type: "single",
    domain: "tenant", topic: "Admin roles and delegation", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You create a user named Admin1.",
      "You need to ensure that Admin1 can view Endpoint security policies from the Microsoft Defender portal. The solution must follow the principle of least privilege.",
      "Which Microsoft Entra role should you assign to Admin1?"
    ],
    options: [
      { key: "A", text: "Cloud Device Administrator" },
      { key: "B", text: "Security Reader" },
      { key: "C", text: "Global Reader" },
      { key: "D", text: "Security Administrator" },
      { key: "E", text: "Security Operator" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "The reference answer is Security Reader.",
        "Security Reader is the read-only role of the Microsoft 365 security services: it lets a user view security information, reports and configuration in the Defender portal without changing anything. Of the roles offered it is the narrowest one that is both limited to security and read-only, which is why it fits a requirement to only view policies with least privilege.",
        "Microsoft's current article on endpoint security policies in the Defender portal lists, for read-only access, the Defender unified RBAC permission **Authorization and settings/Security settings/Core Security settings (read)**, and names Global Administrator, Security Administrator and Intune Administrator as the Entra roles that give full access. The list of policies a person sees is also scoped by their Intune RBAC assignments."
      ],
      wrong: [
        ["A", "Cloud Device Administrator manages device objects in Microsoft Entra ID, such as enabling, disabling or deleting devices. It grants nothing in the Defender portal."],
        ["C", "Global Reader can read the settings of every Microsoft 365 service, far more than the security policies Admin1 needs, so it doesn't follow least privilege."],
        ["D", "Security Administrator can create and change security policies. Viewing requires no write permissions."],
        ["E", "Security Operator can manage alerts and incidents and take response actions. That is more than viewing."]
      ],
      concept: "Least privilege means choosing the role with the narrowest scope (security only) and the lowest level (read) that covers the task.",
      takeaway: "View-only access to security settings in the Defender portal: Security Reader; changing them: Security Administrator.",
      refs: [
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"],
        ["Microsoft Learn: Manage endpoint security policies in Microsoft Defender for Endpoint", "https://learn.microsoft.com/defender-endpoint/endpoint-security-policies-configure"]
      ]
    }
  },
  {
    id: "Q301", source: 301, type: "single",
    domain: "identity", topic: "Authentication and MFA", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You plan to configure multi-factor authentication (MFA).",
      "You need to select an authentication method for users. The solution must ensure that each time a user is prompted for MFA, the application name that requires MFA is provided.",
      "What should you select?"
    ],
    options: [
      { key: "A", text: "SMS" },
      { key: "B", text: "Microsoft Authenticator" },
      { key: "C", text: "a voice call" },
      { key: "D", text: "email OTP" },
      { key: "E", text: "a FIDO2 security key" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Microsoft Authenticator push notifications can carry additional context: the name of the application that requests the sign-in and the geographic location of the sign-in. In the Microsoft Authenticator settings of the Authentication methods policy, **Show application name in push and passwordless notifications** turns on the application name for the users you target.",
        "Every MFA prompt then tells the user which application is asking, together with number matching, so the user can refuse a request they didn't start."
      ],
      wrong: [
        ["A", "An SMS delivers a one-time code. It doesn't tell the user which application asked for it."],
        ["C", "A voice call asks the user to press a key to approve. It gives no application name."],
        ["D", "Email one-time passcode is a method for guest users who sign in with a code sent by email. It isn't an MFA method for members and shows no application name."],
        ["E", "A FIDO2 security key is unlocked with a PIN or touch. It is phishing resistant, but there is no notification that names the application."]
      ],
      concept: "Authenticator notifications can include additional context, the application name and the location, so users can tell which sign-in they are approving.",
      takeaway: "MFA prompt must show the app name: Microsoft Authenticator with application name context.",
      refs: [
        ["Microsoft Learn: Use additional context in Microsoft Authenticator notifications", "https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-additional-context"],
        ["Microsoft Learn: Authentication methods in Microsoft Entra ID - Microsoft Authenticator", "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-authenticator-app"]
      ]
    }
  },
  {
    id: "Q302", source: 302, type: "single",
    domain: "identity", topic: "Identity Protection", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You plan to use Microsoft Entra ID Protection.",
      "You need to ensure that account passwords must be changed if account credentials are leaked.",
      "What should you configure?"
    ],
    options: [
      { key: "A", text: "a user risk policy" },
      { key: "B", text: "Password protection" },
      { key: "C", text: "a sign-in risk policy" },
      { key: "D", text: "self-service password reset (SSPR)" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Leaked credentials is a user risk detection: Microsoft finds a valid username and password pair of the user in leaked data, and the user's risk level goes up. A user risk policy, in ID Protection or as a risk-based Conditional Access policy with the user risk condition, can require a secure password change when the user risk reaches the level you choose.",
        "The password change replaces the leaked password and remediates the risk. Users who are registered for MFA can do it themselves at their next sign-in."
      ],
      wrong: [
        ["B", "Password protection blocks weak and banned passwords when users set them. It doesn't react to credentials found in a leak."],
        ["C", "A sign-in risk policy evaluates the risk of a single sign-in, such as one from an anonymous IP address, and typically requires MFA. Leaked credentials raise user risk, and a password change is the remediation for user risk."],
        ["D", "SSPR lets users reset their own password, and it is what they use to remediate. On its own it doesn't force a change when credentials leak."]
      ],
      concept: "Leaked credentials raise user risk, and a user risk policy remediates it by requiring a secure password change.",
      takeaway: "Compromised account (leaked credentials): user risk, password change. Risky sign-in: sign-in risk, MFA.",
      refs: [
        ["Microsoft Learn: Risk-based access policies", "https://learn.microsoft.com/entra/id-protection/concept-identity-protection-policies"],
        ["Microsoft Learn: What are risk detections?", "https://learn.microsoft.com/entra/id-protection/concept-identity-protection-risks"]
      ]
    }
  },
  {
    id: "Q303", source: 303, type: "dropdown",
    domain: "identity", topic: "Conditional Access", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft Entra tenant that has security defaults enabled.",
      "You create a user named Admin1.",
      "You need to ensure that Admin1 can create and apply Conditional Access policies.",
      "Which two settings should you configure? To answer, select the appropriate settings in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "First setting (the one higher in the Manage menu)", options: ["Users", "Groups", "External Identities", "Roles and administrators", "Administrative units", "Delegated admin partners", "Enterprise applications", "Devices", "App registrations", "Identity Governance", "Application proxy", "Custom security attributes", "Licenses", "Cross-tenant synchronization", "Microsoft Entra Connect", "Custom domain names", "Mobility (MDM and WIP)", "Password reset", "Company branding", "User settings", "Properties", "Security"] },
      { id: "f2", label: "Second setting (the one lower in the Manage menu)", options: ["Users", "Groups", "External Identities", "Roles and administrators", "Administrative units", "Delegated admin partners", "Enterprise applications", "Devices", "App registrations", "Identity Governance", "Application proxy", "Custom security attributes", "Licenses", "Cross-tenant synchronization", "Microsoft Entra Connect", "Custom domain names", "Mobility (MDM and WIP)", "Password reset", "Company branding", "User settings", "Properties", "Security"] }
    ],
    answer: { f1: 3, f2: 12 },
    explanation: {
      correct: [
        "The reference answer is Roles and administrators and Licenses.",
        "**Roles and administrators** is where Admin1 gets the permission: the Conditional Access Administrator role, the least privileged role that can create and manage Conditional Access policies (Security Administrator can as well). **Licenses** is where licenses are assigned to users and groups: Conditional Access is a Microsoft Entra ID P1 feature, so it needs at least P1 licensing, which is included in Microsoft 365 E3 and E5 among others.",
        "Security defaults and Conditional Access are not used together. An organization that replaces security defaults with Conditional Access policies disables security defaults in **Overview** > **Properties** > **Manage security defaults**, which also requires at least the Conditional Access Administrator role."
      ],
      wrong: [
        ["Users", "Admin1 already exists. Editing the account itself doesn't give Admin1 any permission over Conditional Access."],
        ["Security", "Security is the menu that leads to Conditional Access and other security features. It is where Admin1 works once Admin1 has the role; it doesn't grant the permission."],
        ["Administrative units", "Administrative units restrict the scope of some roles to a set of users, groups or devices. They don't grant permissions by themselves."]
      ],
      concept: "Managing Conditional Access needs an Entra role such as Conditional Access Administrator, and the feature itself needs Microsoft Entra ID P1 licensing.",
      takeaway: "Conditional Access for a new admin: role from Roles and administrators, P1 entitlement from Licenses; security defaults are turned off under Properties when CA takes over.",
      refs: [
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"],
        ["Microsoft Learn: What is Conditional Access?", "https://learn.microsoft.com/entra/identity/conditional-access/overview"],
        ["Microsoft Learn: Security defaults in Microsoft Entra ID", "https://learn.microsoft.com/entra/fundamentals/security-defaults"]
      ]
    }
  },
  {
    id: "Q304", source: 304, type: "dropdown",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Cloud Apps.",
      "You have a cloud app named App1.",
      "You need to implement a security solution for App1 that meets the following requirements:",
      { list: ["Enables the real-time monitoring of user activities", "Blocks specific activities as needed"] },
      "What should you include in the solution for each requirement? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Enables the real-time monitoring of user activities:", options: ["Conditional Access App Control", "Microsoft Purview Information Protection", "Score metrics"] },
      { id: "f2", label: "Blocks specific activities as needed:", options: ["A file policy", "A session policy", "An access policy"] }
    ],
    answer: { f1: 0, f2: 1 },
    explanation: {
      correct: [
        "**Conditional Access App Control** routes users' sessions in App1 through the Defender for Cloud Apps reverse proxy, after a Conditional Access policy hands the session over. Because every request passes through the proxy, user activities can be monitored in real time.",
        "A **session policy** defines what happens in those sessions: monitor only, or block specific activities such as downloads, uploads, copy and paste or printing, under conditions you set (user, device, content and so on)."
      ],
      wrong: [
        ["Microsoft Purview Information Protection", "Classifies and protects content with sensitivity labels. It doesn't monitor user activity inside an app session."],
        ["Score metrics", "Score metrics set how the cloud app catalog weighs risk factors when it computes app risk scores. They have nothing to do with monitoring sessions."],
        ["A file policy", "A file policy scans files at rest in connected apps through the API connector and applies governance actions. It doesn't act on activities in real time."],
        ["An access policy", "An access policy allows or blocks access to the app as a whole at sign-in. It can't block individual activities inside a session."]
      ],
      concept: "Real-time monitoring and control of activities inside a cloud app use Conditional Access App Control together with session policies.",
      takeaway: "Monitor or block in-session activities: Conditional Access App Control plus a session policy. Block the whole sign-in: an access policy.",
      refs: [
        ["Microsoft Learn: Conditional Access app control in Microsoft Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/proxy-intro-aad"],
        ["Microsoft Learn: Create session policies", "https://learn.microsoft.com/defender-cloud-apps/session-policy-aad"]
      ]
    }
  }
);
