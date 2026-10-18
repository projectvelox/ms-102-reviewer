/* MS-102 question bank, part 12: questions 177 to 192 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q177", source: 177, type: "dropdown",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    stem: [
      "You configure an anti-phishing policy as shown in the following exhibit.",
      { table: {
        head: ["Section", "Setting", "Value"],
        rows: [
          ["Policy setting", "Policy name", "Managers"],
          ["Policy setting", "Description", ""],
          ["Policy setting", "Applied to", "If the email is sent to:\nIrvinS@M365x289755.OnMicrosoft.com\nMiriamG@M365x289755.OnMicrosoft.com\nExcept if the email is sent to member of:\ntest1ww@M365x289755.onmicrosoft.com"],
          ["Impersonation", "Users to protect", "On - 3 User(s) specified"],
          ["Impersonation", "Protect all domains I own", "On"],
          ["Impersonation", "Protect specific domains", "On - 2 Domain(s) specified"],
          ["Impersonation", "Action > User impersonation", "Move message to the recipients' Junk Email folders"],
          ["Impersonation", "Action > Domain impersonation", "Delete the message before it's delivered"],
          ["Impersonation", "Safety tips > User impersonation", "Off"],
          ["Impersonation", "Safety tips > Domain impersonation", "Off"],
          ["Impersonation", "Safety tips > Unusual characters", "Off"],
          ["Impersonation", "Mailbox intelligence", "Off"],
          ["Spoof", "Enable antispoofing protection", "On"],
          ["Spoof", "Action", "Quarantine the message"],
          ["Advanced settings", "Advanced phishing thresholds", "3 - More Aggressive"]
        ]
      } },
      "Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "If a message is identified as a domain impersonation, [answer choice].", options: ["the message is delivered to the Inbox folder", "the message is moved to the Deleted Items folder", "the messages is moved to the Junk Email folder", "the message is NOT delivered"] },
      { id: "f2", label: "To reduce the likelihood of the impersonation policy generating false positives, configure [answer choice].", options: ["Domain impersonation", "Enable antispoofing protection", "Mailbox intelligence"] }
    ],
    answer: { f1: 3, f2: 2 },
    explanation: {
      correct: [
        "The policy has separate actions for the two kinds of impersonation. For **domain impersonation** (a sender domain that imitates one of the domains the organization owns or one of the two specific domains), the action is **Delete the message before it's delivered**. The message is removed before it reaches any folder of the recipient, so it is not delivered at all. Moving the message to the Junk Email folder is the action for user impersonation only.",
        "**Mailbox intelligence** is Off. Mailbox intelligence uses machine learning on each user's mail patterns to learn who the user communicates with regularly. With it on, impersonation protection can tell a real frequent contact from a sender who only looks like one, so fewer legitimate messages are treated as impersonation. That is the setting that reduces false positives. Domain impersonation and antispoofing protection are already on, and they define what is detected rather than make the detection more precise."
      ],
      wrong: [
        ["the messages is moved to the Junk Email folder", "That is the configured action for user impersonation. Domain impersonation has its own action: Delete the message before it's delivered."],
        ["the message is delivered to the Inbox folder", "Delivery to the Inbox would mean no action is taken. A detected domain impersonation triggers the configured delete action."],
        ["the message is moved to the Deleted Items folder", "Delete the message before it's delivered does not put the message in Deleted Items. The message never reaches the mailbox."],
        ["Domain impersonation", "Domain impersonation protection is already turned on. It decides which domains are protected, not how accurately impersonation is recognized."],
        ["Enable antispoofing protection", "Spoof intelligence deals with forged senders, which is spoofing rather than impersonation, and it is already on."]
      ],
      concept: "Anti-phishing policies in Defender for Office 365 have separate actions for user and domain impersonation, and mailbox intelligence uses each user's contacts to make impersonation detection more accurate.",
      takeaway: "Read the action of the exact detection type. To cut impersonation false positives, turn on mailbox intelligence.",
      refs: [
        ["Microsoft Learn: Anti-phishing policies in Microsoft 365", "https://learn.microsoft.com/en-us/defender-office-365/anti-phishing-policies-about"],
        ["Microsoft Learn: Configure anti-phishing policies in Microsoft Defender for Office 365", "https://learn.microsoft.com/en-us/defender-office-365/anti-phishing-policies-mdo-configure"]
      ]
    }
  },
  {
    id: "Q178", source: 178, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription that uses Microsoft Defender for Office 365.",
      "You notice that it takes several days to notify email recipients when an incoming email message is marked as spam, and then quarantined.",
      "You need to ensure that the email recipients are notified within 24 hours.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "Modify the default inbound anti-spam policy." },
      { key: "B", text: "Modify the DefaultFullAccessPolicy quarantine policy." },
      { key: "C", text: "Add a custom quarantine policy." },
      { key: "D", text: "Modify the global settings for quarantine policies." }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Quarantine notifications (formerly end-user spam notifications) are switched on or off in each quarantine policy, but how often they are sent is not a setting of any single policy. The frequency is one of the **global settings** for quarantine policies (Threat policies > Quarantine policies > Global settings), where you choose Within 4 hours, Daily or Weekly. It applies to every quarantine policy that has notifications turned on.",
        "If recipients hear about quarantined spam only after several days, the frequency is set too low. Changing it in the global settings to Daily (or Within 4 hours) ensures that they are notified within 24 hours."
      ],
      wrong: [
        ["A", "The anti-spam policy sets the action for each verdict and which quarantine policy applies to it. The notification frequency is not configured there."],
        ["B", "DefaultFullAccessPolicy gives recipients full access to their quarantined messages and has notifications turned off. Quarantine policies decide whether notifications are sent, not how often."],
        ["C", "A custom quarantine policy can turn notifications on for the messages it covers, but it uses the frequency from the global settings, so the delay would remain."]
      ],
      concept: "Quarantine policies set user permissions and turn notifications on or off, while the frequency, sender and branding of quarantine notifications are global settings.",
      takeaway: "Quarantine notification timing: Quarantine policies > Global settings.",
      refs: [
        ["Microsoft Learn: Quarantine policies", "https://learn.microsoft.com/en-us/defender-office-365/quarantine-policies"],
        ["Microsoft Learn: Use quarantine notifications to release and report quarantined messages", "https://learn.microsoft.com/en-us/defender-office-365/quarantine-quarantine-notifications"]
      ]
    }
  },
  {
    id: "Q179", source: 179, type: "single",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to ensure that administrators receive an email when Microsoft 365 Defender detects a sign-in from a risky IP address.",
      "What should you create?"
    ],
    options: [
      { key: "A", text: "a vulnerability notification rule" },
      { key: "B", text: "an alert" },
      { key: "C", text: "an incident assignment filter" },
      { key: "D", text: "an incident notification rule" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Email for one specific detection is configured on the **alert**. An alert policy describes the activity or detection that raises the alert, here a sign-in from a risky IP address, together with its severity and category. It also has notification settings: whether an email is sent when the alert is triggered and to which recipients.",
        "Creating the alert with the administrators as recipients means that they receive an email each time this sign-in is detected."
      ],
      wrong: [
        ["A", "Vulnerability notification rules (Defender Vulnerability Management) send email about new vulnerabilities and exploits found on devices. They do not react to sign-in activity."],
        ["C", "Assigning incidents, or filtering them by assignment, organizes which analyst works on an incident. It sends no email when a detection occurs."],
        ["D", "Incident notification rules send email about incidents, filtered by settings such as severity and device group. The email for one specific type of detection is set on the alert itself."]
      ],
      concept: "Alert policies define which activity or detection raises an alert and who receives an email when it is triggered.",
      takeaway: "Email for a specific detection: the alert. Email for incidents: incident notification rule. Email for vulnerabilities: vulnerability notification rule.",
      refs: [
        ["Microsoft Learn: Alert policies in the Microsoft Defender portal", "https://learn.microsoft.com/en-us/defender-xdr/alert-policies"],
        ["Microsoft Learn: Get incident notifications by email", "https://learn.microsoft.com/en-us/defender-xdr/m365d-notifications-incidents"]
      ]
    }
  },
  {
    id: "Q180", source: 180, type: "single",
    domain: "security", topic: "Intune and device compliance", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that has Microsoft Defender for Endpoint integrated with Microsoft Intune.",
      "Devices are onboarded by using Microsoft Defender for Endpoint.",
      "You plan to block devices based on the results of the machine risk score calculated by Microsoft Defender for Endpoint.",
      "What should you create first?"
    ],
    options: [
      { key: "A", text: "a device configuration policy" },
      { key: "B", text: "a device compliance policy" },
      { key: "C", text: "a conditional access policy" },
      { key: "D", text: "an endpoint detection and response policy" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "The machine risk score reaches access decisions through Intune compliance. With the Defender for Endpoint connector in place, you create a **device compliance policy** with the setting **Require the device to be at or under the machine risk score** (Clear, Low, Medium or High). Intune compares the risk level that Defender for Endpoint reports for each device with that value and marks devices with a higher risk as noncompliant.",
        "A Conditional Access policy that requires a compliant device then blocks the noncompliant devices. Conditional Access only reads the compliance state, so the compliance policy has to exist first."
      ],
      wrong: [
        ["A", "Configuration profiles deploy settings to devices, including the onboarding profile for Defender for Endpoint. They do not evaluate the risk score."],
        ["C", "Conditional Access does the blocking, but it acts on the compliance state. Without a compliance policy that uses the risk score, it has nothing to evaluate."],
        ["D", "An endpoint detection and response policy onboards devices to Defender for Endpoint. The devices are already onboarded, and the policy does not act on the risk score."]
      ],
      concept: "Defender for Endpoint risk feeds Intune device compliance, and Conditional Access enforces the compliance result.",
      takeaway: "Block on machine risk: compliance policy with the risk score first, then Conditional Access requiring a compliant device.",
      refs: [
        ["Microsoft Learn: Configure Conditional Access in Microsoft Defender for Endpoint", "https://learn.microsoft.com/en-us/defender-endpoint/configure-conditional-access"],
        ["Microsoft Learn: Configure Microsoft Defender for Endpoint with Intune and onboard devices", "https://learn.microsoft.com/en-us/intune/device-security/microsoft-defender/configure-integration"]
      ]
    }
  },
  {
    id: "Q181", source: 181, type: "dropdown",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to configure threat protection for Microsoft 365 to meet the following requirements:",
      { list: [
        "Limit a user named User1 from sending more than 30 email messages per day.",
        "Prevent the delivery of a specific file based on the file hash."
      ] },
      "Which two threat policies should you configure in Microsoft Defender for Office 365? To answer, select the appropriate threat policies in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Limit a user named User1 from sending more than 30 email messages per day.", options: ["Preset Security Policies", "Configuration analyzer", "Anti-phishing", "Anti-spam", "Anti-malware", "Safe Attachments", "Safe Links", "Tenant Allow/Block Lists", "Email authentication settings", "DKIM", "Advanced delivery", "Enhanced filtering", "Quarantine policies"] },
      { id: "f2", label: "Prevent the delivery of a specific file based on the file hash.", options: ["Preset Security Policies", "Configuration analyzer", "Anti-phishing", "Anti-spam", "Anti-malware", "Safe Attachments", "Safe Links", "Tenant Allow/Block Lists", "Email authentication settings", "DKIM", "Advanced delivery", "Enhanced filtering", "Quarantine policies"] }
    ],
    answer: { f1: 3, f2: 7 },
    explanation: {
      correct: [
        "A sending limit belongs to the **outbound** side of spam protection. Outbound spam filter policies are managed under **Anti-spam** in Threat policies, and they contain the message limits: an external and an internal recipient limit per hour and a daily message limit (the maximum number of recipients per day). A custom outbound policy that applies to User1 with a daily message limit of 30, and an action such as restricting the user from sending mail when the limit is exceeded, meets the first requirement.",
        "Blocking one specific file is done in the **Tenant Allow/Block Lists**. On the Files tab you add a block entry with the SHA256 hash of the file. Messages that contain the file are then detected as malware and are not delivered."
      ],
      wrong: [
        ["Anti-malware", "Anti-malware policies act on malware verdicts and on file types through the common attachments filter. They have no list of individual file hashes."],
        ["Safe Attachments", "Safe Attachments opens attachments in a sandbox to detect unknown malware. A known file is blocked by its hash in the Tenant Allow/Block Lists."],
        ["Preset Security Policies", "Preset policies apply Microsoft's Standard or Strict settings as a whole. They cannot set a 30-message limit for one user or block one file."],
        ["Quarantine policies", "Quarantine policies define what users can do with quarantined messages and whether they are notified. They do not limit or block anything."]
      ],
      concept: "Outbound anti-spam policies hold the per-user sending limits, and the Tenant Allow/Block Lists hold block entries for senders, domains, URLs and file hashes.",
      takeaway: "Daily sending limit: outbound anti-spam policy. Block a file by hash: Tenant Allow/Block Lists, Files.",
      refs: [
        ["Microsoft Learn: Configure outbound spam policies", "https://learn.microsoft.com/en-us/defender-office-365/outbound-spam-policies-configure"],
        ["Microsoft Learn: Allow or block files using the Tenant Allow/Block List", "https://learn.microsoft.com/en-us/defender-office-365/tenant-allow-block-list-files-configure"]
      ]
    }
  },
  {
    id: "Q182", source: 182, type: "multi",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription that uses Microsoft Defender for Office 365.",
      "A Built-in protection preset security policy is applied to the subscription.",
      "Which two policy types will be applied by the Built-in protection policy? Each correct answer presents a complete solution.",
      "NOTE: Each correct selection is worth one point."
    ],
    select: 2,
    options: [
      { key: "A", text: "Anti-malware" },
      { key: "B", text: "Safe Attachments" },
      { key: "C", text: "Safe Links" },
      { key: "D", text: "Anti-phishing" },
      { key: "E", text: "Anti-spam" }
    ],
    answer: ["B", "C"],
    explanation: {
      correct: [
        "The **Built-in protection** preset security policy exists only in organizations with Defender for Office 365. It applies to every recipient who is not covered by the Standard or Strict preset policies or by a custom policy, and it contains only **Safe Links** and **Safe Attachments** policies. Without it, these two features would protect nobody until an administrator created policies for them.",
        "Anti-malware, anti-spam and anti-phishing protection already reach everyone through the default policies of those types, which always exist. That is why the built-in protection policy does not include them."
      ],
      wrong: [
        ["A", "Anti-malware protection for everyone comes from the default anti-malware policy, not from Built-in protection."],
        ["D", "The default anti-phishing policy applies to all recipients. Built-in protection does not contain anti-phishing settings."],
        ["E", "The default anti-spam policies apply to all recipients. Built-in protection does not contain anti-spam settings."]
      ],
      concept: "Built-in protection is the baseline preset policy that gives everyone Safe Links and Safe Attachments protection in a Defender for Office 365 organization.",
      takeaway: "Built-in protection = Safe Links and Safe Attachments only. Standard and Strict cover all EOP and Defender for Office 365 policy types.",
      refs: [["Microsoft Learn: Preset security policies in EOP and Microsoft Defender for Office 365", "https://learn.microsoft.com/en-us/defender-office-365/preset-security-policies"]]
    }
  },
  {
    id: "Q183", source: 183, type: "yesno",
    domain: "security", topic: "Defender for Office 365", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Member of"], rows: [["User1", "Group1"], ["User2", "Group1, Group2"], ["User3", "Group2"]] } },
      "The subscription has the following two anti-spam policies:",
      { list: [
        "Name: AntiSpam1",
        "Priority: 0",
        "Include these users, groups and domains",
        "Users: User3",
        "Groups: Group1",
        "Exclude these users, groups and domains",
        "Groups: Group2",
        "Message limits",
        "Set a daily message limit: 100",
        "Name: AntiSpam2",
        "Priority: 1",
        "Include these users, groups and domains",
        "Users: User1",
        "Groups: Group2",
        "Exclude these users, groups and domains",
        "Groups: Group3",
        "Message limits",
        "Set a daily message limit: 50"
      ] },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 can send a maximum of 150 email messages per day." },
      { text: "User2 can send a maximum of 50 email messages per day." }
    ],
    answer: [false, false],
    explanation: {
      correct: [
        "Message limits are settings of outbound spam policies, and two rules decide which limit a sender gets. First, only **one** policy applies to a sender: the matching policy with the highest priority (the lowest number). The limits of several policies are never added together. Second, in the users, groups and domains conditions, several values of the **same** type are combined with OR, but **different** types are combined with AND. A policy that includes Users: User3 and Groups: Group1 therefore applies only to a sender who is User3 **and** a member of Group1.",
        "AntiSpam1 matches nobody, because User3 is not a member of Group1. AntiSpam2 matches nobody either, because User1 is not a member of Group2. All three users fall back to the default outbound spam policy. Statement 1 is No: no policy gives User1 a limit of 150, a number that could only come from adding 100 and 50. Statement 2 is No: AntiSpam2 does not apply to User2, so User2 is not limited to 50 messages per day."
      ],
      wrong: [
        ["Statement 1 — Yes", "150 adds the limits of both policies. A sender gets the settings of one outbound policy only, and neither custom policy matches User1."],
        ["Statement 2 — Yes", "This treats Group2 alone as enough to match AntiSpam2. Because Users and Groups conditions are combined with AND, AntiSpam2 needs a sender who is User1 and a member of Group2, so User2 stays on the default policy."]
      ],
      concept: "One outbound spam policy applies per sender, chosen by priority, and different condition types in a policy's scope are combined with AND.",
      takeaway: "Users: X plus Groups: Y in one policy means X and a member of Y, not X or Y.",
      logic: "Even if the conditions were read as OR, User1 would get AntiSpam1 with 100, never 150. Only the AND reading explains why User2 is not held to 50.",
      refs: [
        ["Microsoft Learn: Configure outbound spam policies", "https://learn.microsoft.com/en-us/defender-office-365/outbound-spam-policies-configure"],
        ["Microsoft Learn: Order and precedence of email protection", "https://learn.microsoft.com/en-us/defender-office-365/how-policies-and-protections-are-combined"]
      ]
    }
  },
  {
    id: "Q184", source: 184, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Office 365.",
      "You have the policies shown in the following table.",
      { table: { head: ["Name", "Type"], rows: [["Policy1", "Anti-phishing"], ["Policy2", "Anti-spam"], ["Policy3", "Anti-malware"], ["Policy4", "Safe Attachments"]] } },
      "All the policies are configured to send malicious email messages to quarantine.",
      "Which policies support a customized quarantine retention period?"
    ],
    options: [
      { key: "A", text: "Policy1 and Policy2 only" },
      { key: "B", text: "Policy1 and Policy3 only" },
      { key: "C", text: "Policy2 and Policy4 only" },
      { key: "D", text: "Policy3 and Policy4 only" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "How long a quarantined message is kept depends on why it was quarantined. For messages quarantined by **anti-spam** policies (spam, high confidence spam, phishing, high confidence phishing and bulk) and by **anti-phishing** policies (spoof intelligence, user and domain impersonation, mailbox intelligence), the retention period can be customized from 1 to 30 days. It is the setting **Retain spam in quarantine for this many days** of the anti-spam policy that applies to the recipient, which governs anti-phishing quarantines as well.",
        "Messages quarantined as malware, by **anti-malware** policies or by **Safe Attachments** policies, are always kept for 30 days, and that period cannot be changed. Of the four policies, only Policy1 (anti-phishing) and Policy2 (anti-spam) support a custom retention period."
      ],
      wrong: [
        ["B", "Policy3 is an anti-malware policy. Malware in quarantine is kept for a fixed 30 days."],
        ["C", "Policy4 is a Safe Attachments policy. The messages it quarantines are malware, with a fixed 30-day retention."],
        ["D", "Anti-malware and Safe Attachments both quarantine malware, and malware retention is not configurable."]
      ],
      concept: "Quarantine retention is configurable for spam and phishing detections but fixed at 30 days for malware.",
      takeaway: "Custom quarantine retention: anti-spam and anti-phishing yes, anti-malware and Safe Attachments no.",
      refs: [["Microsoft Learn: Quarantined email messages in EOP and Defender for Office 365", "https://learn.microsoft.com/en-us/defender-office-365/quarantine-about"]]
    }
  },
  {
    id: "Q185", source: 185, type: "single",
    domain: "security", topic: "Secure Score and vulnerability management", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "Your company's Microsoft Secure Score recommends the actions shown in the following exhibit.",
      { table: {
        head: ["Rank", "Recommended action", "Score impact", "Points achieved", "Status"],
        rows: [
          ["1", "Require multifactor authentication for administrative roles", "+4.15%", "0/10", "To address"],
          ["2", "Ensure all users can complete multifactor authentication", "+3.73%", "0/9", "To address"],
          ["3", "Create Safe Links policies for email messages", "+3.73%", "0/9", "To address"],
          ["4", "Enable policy to block legacy authentication", "+3.32%", "0/8", "To address"],
          ["5", "Turn on Safe Attachments in block mode", "+3.32%", "0/8", "To address"],
          ["6", "Ensure that intelligence for impersonation protection is enabled", "+3.32%", "0/8", "To address"],
          ["7", "Move messages that are detected as impersonated users by mailbox intelligence", "+3.32%", "0/8", "To address"],
          ["8", "Enable impersonated domain protection", "+3.32%", "0/8", "To address"]
        ],
        numeric: [0]
      } },
      "You select Create Safe Links policies for email messages and change Status to Risk accepted in the Status & action plan settings.",
      "How does the change affect the Secure Score?"
    ],
    options: [
      { key: "A", text: "remains the same" },
      { key: "B", text: "increases by 1 point" },
      { key: "C", text: "increases by 9 points" },
      { key: "D", text: "decreases by 1 point" },
      { key: "E", text: "decreases by 9 points" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "The status of a recommended action says how it counts toward the score. **Risk accepted** records that you have decided not to implement the recommendation and to live with the risk. No points are awarded for an action with that status. Create Safe Links policies for email messages has 0 of 9 points, it keeps 0 points, and the Secure Score remains the same.",
        "Only the statuses that state the risk is mitigated in another way, **Resolved through third party** and **Resolved through alternate mitigation**, award the points of the action, here 9, without Microsoft detecting the setting."
      ],
      wrong: [
        ["B", "Accepting a risk gives no partial credit. Points come from the setting being implemented or from a status that declares the risk mitigated."],
        ["C", "The 9 points of this action would be awarded for Resolved through third party or Resolved through alternate mitigation, not for Risk accepted."],
        ["D", "The action had 0 of 9 points achieved, so there is nothing to subtract, and accepting the risk does not take points away."],
        ["E", "The action had no points to lose. Risk accepted neither adds nor removes points."]
      ],
      concept: "Secure Score statuses Risk accepted and Planned award no points, while Resolved through third party and Resolved through alternate mitigation award the action's points.",
      takeaway: "Risk accepted = no points, score unchanged.",
      refs: [["Microsoft Learn: Microsoft Secure Score recommended actions", "https://learn.microsoft.com/en-us/defender-xdr/microsoft-secure-score-improvement-actions"]]
    }
  },
  {
    id: "Q186", source: 186, type: "dragdrop",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the devices shown in the following table.",
      { table: {
        head: ["Type", "Number of devices", "Operating system", "Enrollment status"],
        rows: [
          ["Corporate", "150", "Windows 11", "Azure AD-joined, Microsoft Intune-managed"],
          ["Bring your own device (BYOD)", "25", "Windows 11", "Unmanaged"]
        ],
        numeric: [1]
      } },
      "You need to onboard the devices to Microsoft Defender for Endpoint. The solution must minimize administrative effort.",
      "What should you use to onboard each type of device? To answer, drag the appropriate onboarding methods to the correct device types. Each onboarding method may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
      "NOTE: Each correct selection is worth one point."
    ],
    sourceLabel: "Onboarding method",
    sources: [
      "A local script",
      "Group Policy",
      "Integration with Microsoft Defender for Cloud",
      "Microsoft Intune",
      "Virtual Desktop Infrastructure (VDI) scripts"
    ],
    targets: [
      { id: "t1", label: "Corporate:" },
      { id: "t2", label: "BYOD:" }
    ],
    answer: { t1: 3, t2: 2 },
    explanation: {
      correct: [
        "The 150 corporate devices are Azure AD-joined and managed by Intune, so **Microsoft Intune** onboards them with the least effort. With the Defender for Endpoint connector enabled, an endpoint detection and response policy delivers the onboarding package to all enrolled devices at once, and nothing has to be run on the devices themselves.",
        "The reference answer is Integration with Microsoft Defender for Cloud for the BYOD devices. The 25 BYOD devices are unmanaged: they are neither enrolled in Intune nor joined to a domain, so neither Intune nor Group Policy can reach them. The integration of Defender for Cloud with Defender for Endpoint provisions the Defender for Endpoint sensor automatically on the supported machines connected to Defender for Cloud, without onboarding steps on each machine. Microsoft documents this integration for the servers and virtual machines covered by the Defender for Servers plan, such as Azure virtual machines and machines connected through Azure Arc."
      ],
      wrong: [
        ["Group Policy", "Group Policy requires devices joined to an Active Directory domain. The corporate devices are Azure AD-joined and the BYOD devices are unmanaged, so neither group receives GPOs."],
        ["A local script", "The local script works on any Windows device, but it has to be run on each device by hand and is supported for up to 10 devices, as a way to evaluate the service. It does not minimize effort."],
        ["Virtual Desktop Infrastructure (VDI) scripts", "VDI onboarding scripts are for non-persistent virtual desktops. None of these devices are VDI machines."],
        ["Microsoft Intune for BYOD", "Intune can only deliver the onboarding package to devices that are enrolled in it, and the BYOD devices are unmanaged."]
      ],
      concept: "The Defender for Endpoint onboarding method follows how a device is managed: Intune for enrolled devices, Group Policy or Configuration Manager for domain devices, Defender for Cloud for the machines it protects, and scripts for individual or VDI devices.",
      takeaway: "Intune-managed devices are onboarded with Intune. Check the management state of each device group before choosing a method.",
      refs: [
        ["Microsoft Learn: Onboard Windows client devices to Microsoft Defender for Endpoint", "https://learn.microsoft.com/en-us/defender-endpoint/onboard-client"],
        ["Microsoft Learn: Onboard Windows devices to Microsoft Defender for Endpoint by using Microsoft Intune", "https://learn.microsoft.com/en-us/defender-endpoint/configure-endpoints-mdm"],
        ["Microsoft Learn: Defender for Endpoint integration in Defender for Cloud", "https://learn.microsoft.com/en-us/azure/defender-for-cloud/integration-defender-for-endpoint"]
      ]
    }
  },
  {
    id: "Q187", source: 187, type: "multi",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You onboard all devices to Microsoft Defender for Endpoint.",
      "You need to use Defender for Endpoint to block access to a malicious website at www.contoso.com.",
      "Which two actions should you perform? Each correct answer presents part of the solution.",
      "NOTE: Each correct answer is worth one point."
    ],
    select: 2,
    options: [
      { key: "A", text: "Create a web content filtering policy." },
      { key: "B", text: "Enable Custom network indicators." },
      { key: "C", text: "Enable automated investigation." },
      { key: "D", text: "Create an indicator." },
      { key: "E", text: "Configure an enforcement scope." }
    ],
    answer: ["B", "D"],
    explanation: {
      correct: [
        "A specific website is blocked in Defender for Endpoint with an **indicator** for its URL or domain. Two steps are needed. First, turn on **Custom network indicators** in Settings > Endpoints > General > Advanced features. Without this feature, devices only block the malicious sites in Microsoft's own threat intelligence, not the IPs and URLs you add yourself.",
        "Second, **create an indicator** for www.contoso.com under Settings > Endpoints > Indicators, on the IP addresses or URLs/Domains tab, with a block action. Devices then block the site in Microsoft browsers through SmartScreen, and in other browsers and processes through network protection, which has to be in block mode for that."
      ],
      wrong: [
        ["A", "Web content filtering blocks whole categories of sites, such as gambling or social networking. It cannot target one specific URL; that is what an indicator is for."],
        ["C", "Automated investigation and remediation investigates alerts after they occur. It does not block a website in advance."],
        ["E", "The enforcement scope belongs to security settings management, which lets Defender for Endpoint apply endpoint security policies from Intune. Blocking a URL does not depend on it."]
      ],
      concept: "Custom URL and domain blocks in Defender for Endpoint require the Custom network indicators feature and an indicator with a block action.",
      takeaway: "Block one site: turn on Custom network indicators, then add a URL/domain indicator. Block categories of sites: web content filtering.",
      refs: [["Microsoft Learn: Create indicators for IPs and URLs/domains", "https://learn.microsoft.com/en-us/defender-endpoint/indicator-ip-domain"]]
    }
  },
  {
    id: "Q188", source: 188, type: "yesno",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the devices shown in the following table.",
      { table: { head: ["Name", "Group"], rows: [["Device1", "DeviceGroup1"], ["Device2", "DeviceGroup2"]] } },
      "At 08:00, you create an incident notification rule that has the following configurations:",
      { list: [
        "Name: Notification1",
        "Notification settings",
        "Notify on alert severity: Low",
        "Device group scope: All (3)",
        "Details: First notification per incident",
        "Recipients: User1@contoso.com, User2@contoso.com"
      ] },
      "At 08:02, you create an incident notification rule that has the following configurations:",
      { list: [
        "Name: Notification2",
        "Notification settings",
        "Notify on alert severity: Low, Medium",
        "Device group scope: DeviceGroup1, DeviceGroup2",
        "Recipients: User1@contoso.com"
      ] },
      "In Microsoft 365 Defender, alerts are logged as shown in the following table.",
      { table: {
        head: ["Time", "Alert name", "Severity", "Impacted assets"],
        rows: [
          ["08:05", "Activity1", "Low", "Device1"],
          ["08:07", "Activity1", "Low", "Device1"],
          ["08:08", "Activity1", "Medium", "Device1"],
          ["08:15", "Activity2", "Medium", "Device2"],
          ["08:16", "Activity2", "Medium", "Device2"],
          ["08:20", "Activity1", "High", "Device1"],
          ["08:30", "Activity3", "Medium", "Device2"],
          ["08:35", "Activity2", "High", "Device2"]
        ]
      } },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1@contoso.com will receive two incident notification emails for the alert at 08:05." },
      { text: "User2@contoso.com will receive an incident notification email for the alert at 08:07." },
      { text: "User1@contoso.com will receive an incident notification email for the alert at 08:20." }
    ],
    answer: [true, false, false],
    explanation: {
      correct: [
        "Each incident notification rule is evaluated on its own, so a recipient listed in two matching rules gets an email from each. The alert at 08:05 is Low severity on Device1, which is in DeviceGroup1. Notification1 matches (Low, all device groups), and Notification2 matches too (Low or Medium, DeviceGroup1 or DeviceGroup2). User1 is a recipient of both rules and receives two emails: Yes.",
        "The alert at 08:07 is the same Activity1 on Device1 and joins the incident that the 08:05 alert started. User2 is a recipient of Notification1 only, and that rule sends only the **first notification per incident** (the option Send only one notification per incident), which User2 already received at 08:05: No. The alert at 08:20 has **High** severity. Notification1 covers Low only and Notification2 Low and Medium, so neither rule sends User1 an email for it: No."
      ],
      wrong: [
        ["Statement 1 — No", "The rules do not merge or cancel each other. Both match the 08:05 alert and both list User1."],
        ["Statement 2 — Yes", "This ignores the First notification per incident setting of Notification1, the only rule that includes User2."],
        ["Statement 3 — Yes", "Neither rule includes High severity, whatever the device group."]
      ],
      concept: "Incident email notification rules filter on alert severity and device group, are evaluated independently, and can be limited to the first notification per incident.",
      takeaway: "Check each rule separately: severity, device group scope, recipients, and whether it sends only one notification per incident.",
      refs: [["Microsoft Learn: Get incident notifications by email", "https://learn.microsoft.com/en-us/defender-xdr/m365d-notifications-incidents"]]
    }
  },
  {
    id: "Q189", source: 189, type: "dropdown",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Intermediate",
    stem: [
      "You have Microsoft 365 subscription.",
      "You create an alert policy as shown in the following exhibit.",
      { image: "q189-alert-policy1.png", alt: "Details of the alert policy Policy1. Status: On. Name your alert: Description: none (Add a description link), Severity: Low, Category: Threat management, Policy contains tags: none. Create alert settings: Conditions: Activity is FileMalwareDetected, Aggregation: Aggregated, Scope: All users, Threshold: 20, Window: 2 hours. Set your recipients: Recipients: User1@sk220912outlook.onmicrosoft.com, Daily notification limit: 100." },
      "Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Policy1 will trigger an alert if malware is detected in [answer choice].", options: ["Exchange Online only", "SharePoint only", "SharePoint or OneDrive only", "Exchange Online, SharePoint, or OneDrive"] },
      { id: "f2", label: "The maximum number of email messages that Policy1 will generate per day is [answer choice].", options: ["5", "12", "20", "100"] }
    ],
    answer: { f1: 2, f2: 1 },
    explanation: {
      correct: [
        "The condition is the activity **FileMalwareDetected** (Detected malware in file). This audited file activity is recorded when the SharePoint anti-virus engine finds malware in a file stored in a SharePoint site or in a OneDrive account. Malware in email does not produce this activity, so Policy1 covers SharePoint or OneDrive only.",
        "The reference answer is 12. The policy is threshold based: it raises an alert when FileMalwareDetected occurs 20 times within a window of 2 hours. The reference reads this as at most one alert, and so one notification email, per 2-hour window, which gives 24 / 2 = 12 per day. What Microsoft documents around it: a threshold policy triggers when the activity count exceeds the threshold within the window, an email is sent to the recipients each time an alert is triggered, matching events that follow shortly after an alert are aggregated into it instead of creating new alerts, and the daily notification limit stops further emails for the day once it is reached. Here that limit is 100, an upper cap, and 20 is the number of activities that triggers an alert, not a number of emails."
      ],
      wrong: [
        ["Exchange Online only / Exchange Online, SharePoint, or OneDrive", "FileMalwareDetected is a SharePoint and OneDrive file activity. Malware detected in email messages is not this activity."],
        ["SharePoint only", "The activity is recorded for files in OneDrive for Business too, which is built on SharePoint Online."],
        ["20", "20 is the threshold of activities for one alert, not the number of emails per day."],
        ["100", "The daily notification limit is only an upper cap on emails. It does not say how many alerts the policy produces."]
      ],
      concept: "The activity in an alert policy determines the workload it watches, while the threshold, window and daily notification limit control when alerts and emails are produced.",
      takeaway: "FileMalwareDetected = malware in SharePoint or OneDrive files. Threshold and window decide when an alert fires; the daily notification limit only caps emails.",
      refs: [
        ["Microsoft Learn: Alert policies in the Microsoft Defender portal", "https://learn.microsoft.com/en-us/defender-xdr/alert-policies"],
        ["Microsoft Learn: Audit log activities", "https://learn.microsoft.com/en-us/purview/audit-log-activities"]
      ]
    }
  },
  {
    id: "Q190", source: 190, type: "single",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 tenant.",
      "You need to create a policy that will trigger an alert when unusual Microsoft Office 365 usage patterns are detected.",
      "What should you use to create the policy?"
    ],
    options: [
      { key: "A", text: "the Microsoft Apps admin center" },
      { key: "B", text: "the Microsoft Purview compliance portal" },
      { key: "C", text: "the Microsoft 365 admin center" },
      { key: "D", text: "the Microsoft 365 Defender portal" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Unusual usage patterns are found by behavior analytics: Microsoft Defender for Cloud Apps builds a baseline of how each user normally works in Office 365 and its anomaly detection policies raise alerts on deviations, such as unusual file downloads or deletions, mass sharing, or activity from an infrequent location. Defender for Cloud Apps policies are created and managed in the **Microsoft 365 Defender portal** (now the Microsoft Defender portal), under Cloud apps > Policies.",
        "The same portal holds the Microsoft 365 alert policies for threat-related activities, so it is the place to create a policy that alerts on unusual Office 365 activity."
      ],
      wrong: [
        ["A", "The Microsoft 365 Apps admin center manages deployment, updates and policies of the Office apps. It has no alerting on usage patterns."],
        ["B", "The compliance portal manages compliance alerts, such as alerts from DLP and other Purview solutions. Behavior-based anomaly detection is a threat protection feature configured in the Defender portal."],
        ["C", "The Microsoft 365 admin center shows usage reports and service health. It does not create alert policies for unusual activity."]
      ],
      concept: "Anomaly-based alerts on Office 365 activity come from Defender for Cloud Apps, which is managed in the Microsoft Defender portal.",
      takeaway: "Unusual activity or usage patterns: create the policy in the Defender portal.",
      refs: [
        ["Microsoft Learn: Anomaly detection policies in Defender for Cloud Apps", "https://learn.microsoft.com/en-us/defender-cloud-apps/anomaly-detection-policy"],
        ["Microsoft Learn: Alert policies in the Microsoft Defender portal", "https://learn.microsoft.com/en-us/defender-xdr/alert-policies"]
      ]
    }
  },
  {
    id: "Q191", source: 191, type: "single",
    domain: "tenant", topic: "Reports and usage analytics", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You plan to use Adoption Score and need to ensure that it can obtain device and software metrics.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "Enable privileged access." },
      { key: "B", text: "Enable Endpoint analytics." },
      { key: "C", text: "Configure Support integration." },
      { key: "D", text: "Run the Microsoft 365 network connectivity test on each device." }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Adoption Score had two areas, people experiences and technology experiences. Within technology experiences, the **Endpoint analytics** category reported on the health and performance of devices and software, such as startup performance and app reliability. That data comes from Endpoint analytics, part of Microsoft Intune, so the devices must be enrolled in Endpoint analytics through Intune or Configuration Manager. Without it, Adoption Score has no device and software metrics to show.",
        "Note that Microsoft retired the technology experiences score, with its Endpoint analytics, Network connectivity and Microsoft 365 Apps health categories, from Adoption Score in early 2026. The question describes the report as it was before that change."
      ],
      wrong: [
        ["A", "Privileged access management requires approval for high-risk administrative tasks. It provides no data to Adoption Score."],
        ["C", "Support integration connects Microsoft 365 service health and support with an IT service management tool such as ServiceNow. It provides no device metrics."],
        ["D", "The network connectivity test measures how well a location connects to Microsoft 365. It feeds network connectivity insights, not device and software metrics."]
      ],
      concept: "Adoption Score takes its device and software metrics from Endpoint analytics.",
      takeaway: "Adoption Score device and software metrics: enable Endpoint analytics for the devices.",
      refs: [
        ["Microsoft Learn: Microsoft Adoption Score", "https://learn.microsoft.com/en-us/microsoft-365/admin/adoption/adoption-score"],
        ["Microsoft Learn: Endpoint analytics in Microsoft Adoption Score", "https://learn.microsoft.com/en-us/intune/endpoint-analytics/adoption-score"]
      ]
    }
  },
  {
    id: "Q192", source: 192, type: "yesno",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Advanced",
    stem: [
      "Your network contains an on-premises Active Directory domain named adatum.com that syncs to Azure AD by using the Azure AD Connect Express Settings. Password writeback is disabled.",
      "You create a user named User1 and enter Pass in the Password field as shown in the following exhibit.",
      { image: "q192-new-object-user.png", alt: "Active Directory Users and Computers, New Object - User dialog. Create in: Adatum.com/. Password and Confirm password each contain four masked characters. All four check boxes are cleared: User must change password at next logon, User cannot change password, Password never expires, Account is disabled." },
      "The Azure AD password policy is configured as shown in the following exhibit.",
      { image: "q192-password-policy.png", alt: "Password policy: Set the password policy for all users in your organization. Days before passwords expire: 90. Days before a user is notified about expiration: 14." },
      "You confirm that User1 is synced to Azure AD.",
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 can sign in to Azure AD." },
      { text: "User1 can change the password immediately by using the My Apps portal." },
      { text: "From Azure AD, User1 must change the password every 90 days." }
    ],
    answer: [true, false, false],
    explanation: {
      correct: [
        "Azure AD Connect Express Settings turns on **password hash synchronization**. The hash of User1's on-premises password, Pass, is synchronized, and User1 signs in to Azure AD (Microsoft Entra ID) with that same password. Azure AD does not apply its own complexity rules to synchronized passwords; the on-premises password policy governs them, and it accepted the password, since the account was created and synced. Statement 1 is Yes.",
        "For a synchronized user, the on-premises directory stays the source of authority for the password. Changing it from the cloud, for example in My Apps, requires **password writeback**, which is disabled, so Statement 2 is No. Azure AD also does not apply its expiration policy to synchronized passwords: by default the cloud password of a password hash synchronized user never expires, and expiration follows the on-premises policy (unless the EnforceCloudPasswordPolicyForPasswordSyncedUsers feature is turned on). The 90-day policy applies to cloud-only users, so Statement 3 is No."
      ],
      wrong: [
        ["Statement 1 — No", "A four-character password would fail the Azure AD rules for cloud-only users, but those rules are not applied to synchronized password hashes."],
        ["Statement 2 — Yes", "Without password writeback, a synchronized user's password can only be changed on premises."],
        ["Statement 3 — Yes", "The 90-day setting applies to cloud-only users. For password hash synchronized users the cloud password does not expire by default."]
      ],
      concept: "With password hash synchronization, the on-premises directory governs the complexity and expiration of synchronized passwords, and cloud-side password changes require password writeback.",
      takeaway: "Synced user: signs in with the on-premises password, cannot change it in the cloud without writeback, and does not get the cloud expiration policy by default.",
      refs: [
        ["Microsoft Learn: Implement password hash synchronization with Microsoft Entra Connect Sync", "https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/how-to-connect-password-hash-synchronization"],
        ["Microsoft Learn: How does self-service password reset writeback work", "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-writeback"]
      ]
    }
  }
);
