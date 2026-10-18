/* MS-102 question bank, part 24: questions 369 to 384 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q369", source: 369, type: "single",
    domain: "security", topic: "Secure Score and vulnerability management", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription that includes Microsoft Defender XDR.",
      "From the Microsoft Defender portal, you review the Microsoft Secure Score improvement actions shown in the following table.",
      { table: {
        head: ["Recommended action", "Status", "Points achieved"],
        rows: [
          ["Enable Conditional Access policies to block legacy authentication", "To address", "0/9"],
          ["Ensure user consent to apps accessing company data on their behalf is not allowed", "To address", "0/4"],
          ["Create an app discovery policy to identify new and trending cloud apps in your org", "To address", "0/3"]
        ],
        numeric: [2]
      } },
      "You plan to update the status of the improvement actions as shown in the following table.",
      { table: {
        head: ["Recommended action", "Status"],
        rows: [
          ["Enable Conditional Access policies to block legacy authentication", "Risk accepted"],
          ["Ensure user consent to apps accessing company data on their behalf is not allowed", "Resolved through third party"],
          ["Create an app discovery policy to identify new and trending cloud apps in your org", "Planned"]
        ]
      } },
      "How many points will the Secure Score increase after the update?"
    ],
    options: [
      { key: "A", text: "0" },
      { key: "B", text: "4" },
      { key: "C", text: "7" },
      { key: "D", text: "13" },
      { key: "E", text: "16" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Each recommended action (formerly improvement action) in Secure Score has a status, and only some statuses earn points. **To address** and **Planned** mean the action has not been implemented, so they award nothing. **Risk accepted** records a decision not to implement the action: it awards no points and removes the action from the list of recommended actions. **Resolved through third party** (or through alternate mitigation) states that another product or control already covers the recommendation, and Secure Score awards the full points of the action so the score reflects the real posture.",
        "Walking through the table: blocking legacy authentication goes to Risk accepted, 0 of 9 points. The user consent action goes to Resolved through third party, all 4 points. The app discovery policy goes to Planned, 0 of 3 points. The score rises by 4 points."
      ],
      wrong: [
        ["A", "Resolved through third party is not a neutral status: it awards the full 4 points of the user consent action."],
        ["C", "7 adds the 3 points of the app discovery policy. Planned only records the intention to implement the action and awards no points."],
        ["D", "13 adds the 9 points of the legacy authentication action. Risk accepted means you chose not to implement it, so it awards no points."],
        ["E", "16 is the total of all three actions. Only the action resolved through a third party earns its points."]
      ],
      concept: "Secure Score awards an action's points when it is completed or marked Resolved through third party or alternate mitigation; Planned and Risk accepted award none.",
      takeaway: "Third-party or alternate mitigation earns full points; Planned and Risk accepted earn zero.",
      logic: "Add only the points of the rows whose new status means the risk is covered: 4.",
      refs: [
        ["Microsoft Learn: Take action on recommended actions in Microsoft Secure Score", "https://learn.microsoft.com/defender-xdr/microsoft-secure-score-improvement-actions"],
        ["Microsoft Learn: Microsoft Secure Score", "https://learn.microsoft.com/defender-xdr/microsoft-secure-score"]
      ]
    }
  },
  {
    id: "Q370", source: 370, type: "multi",
    domain: "security", topic: "Defender XDR incidents and hunting", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Endpoint and Microsoft Intune.",
      "All devices run Windows 11 and are Microsoft Entra joined.",
      "You are alerted to a zero-day attack.",
      "You need to identify which devices were affected by the attack and send a request to Intune administrators to update the affected devices.",
      "Which two actions should you perform in the Microsoft Defender portal? Each correct answer presents part of the solution.",
      "NOTE: Each correct selection is worth one point."
    ],
    select: 2,
    options: [
      { key: "A", text: "From Threat analytics, view the list of vulnerable devices." },
      { key: "B", text: "From Incidents & alerts, select the latest incident." },
      { key: "C", text: "From Vulnerability management, open the security recommendation." },
      { key: "D", text: "Select the affected devices and request remediation." }
    ],
    answer: ["A", "D"],
    explanation: {
      correct: [
        "Threat analytics is the threat intelligence section of the Microsoft Defender portal. Microsoft security researchers publish a report for each significant emerging threat, including zero-day exploits, and the report is matched against your own data: it shows the devices with related alerts and the devices that are exposed because they lack the security update or mitigation for the vulnerability. Viewing the list of vulnerable devices in the report identifies which of your devices the attack affects (A).",
        "To have the devices patched, you request remediation for the affected devices (D). Defender Vulnerability Management turns the request into a remediation activity and, when the Microsoft Intune connection is turned on in Defender for Endpoint, sends it to Intune as a security task. Intune administrators see the task under Endpoint security and deploy the update, and the request's progress is tracked on the Remediation page of the Defender portal."
      ],
      wrong: [
        ["B", "An incident groups alerts for activity that was already detected. The latest incident is not necessarily the zero-day attack, it does not list devices that are vulnerable but not yet attacked, and it does not send update requests to Intune."],
        ["C", "A security recommendation describes one weakness and the exposed devices across the organization, and it is a page from which remediation can be requested. The reference answer starts from Threat analytics, which ties the devices to this specific attack, and counts the remediation request itself as the second step."]
      ],
      concept: "Threat analytics maps an emerging threat to the vulnerable devices in your organization, and remediation requests from Defender Vulnerability Management reach Intune administrators as security tasks.",
      takeaway: "Zero-day: find the exposed devices in the Threat analytics report, then request remediation so Intune gets a security task.",
      refs: [
        ["Microsoft Learn: Threat analytics in Microsoft Defender XDR", "https://learn.microsoft.com/defender-xdr/threat-analytics"],
        ["Microsoft Learn: Remediate vulnerabilities with Microsoft Defender Vulnerability Management", "https://learn.microsoft.com/defender-vulnerability-management/tvm-remediation"]
      ]
    }
  },
  {
    id: "Q371", source: 371, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Intermediate",
    caseId: "series-mdo-policy", caseOrder: 4,
    stem: [
      "Solution: You create an anti-phishing policy.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "The balanced baseline protection profile in the scenario is the **Standard protection** preset security policy. Preset security policies come in two profiles, Standard (a baseline profile suitable for most users) and Strict (a more aggressive profile for selected users), and each applies Microsoft's recommended settings to all the protection features at once: anti-spam, anti-malware and anti-phishing from Exchange Online Protection, plus Safe Links and Safe Attachments from Defender for Office 365. You turn the profile on and assign users to it under Email & collaboration > Policies & rules > Threat policies > Preset security policies.",
        "An anti-phishing policy is a custom policy for one threat type. It covers impersonation, spoofing and mailbox intelligence, but not spam or malware, and its settings are whatever you configure rather than a Microsoft-maintained profile. It therefore does not meet the goal."
      ],
      wrong: [
        ["A", "A custom anti-phishing policy protects only against phishing. Spam and malware need anti-spam and anti-malware settings, and the requirement for a balanced baseline profile is met by the Standard preset security policy, which covers all three."]
      ],
      concept: "Preset security policies (Standard and Strict) apply Microsoft-recommended settings for spam, malware, phishing, Safe Links and Safe Attachments in one step.",
      takeaway: "Balanced baseline against spam, phishing and malware: the Standard preset security policy, not an individual custom policy.",
      refs: [
        ["Microsoft Learn: Preset security policies in EOP and Microsoft Defender for Office 365", "https://learn.microsoft.com/defender-office-365/preset-security-policies"],
        ["Microsoft Learn: Anti-phishing policies in Microsoft 365", "https://learn.microsoft.com/defender-office-365/anti-phishing-policies-about"]
      ]
    }
  },
  {
    id: "Q372", source: 372, type: "dropdown",
    domain: "security", topic: "Defender for Endpoint", difficulty: "Intermediate",
    stem: [
      "You have an on-premises server named Server1 that runs Windows Server. Server1 is used to access a software as a service (SaaS) app named App1.",
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Cloud Apps, Microsoft Defender XDR, Microsoft Defender for Endpoint, and Microsoft Defender for Identity. You configure Cloud Discovery for App1 and Server1.",
      "You need to meet the following requirements:",
      { list: [
        "Tag Server1 as a high-value device.",
        "Ensure that an alert is triggered when App1 is accessed."
      ] },
      "What should you do for each requirement? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Tag Server1 as a high-value device:", options: [
        "Create a critical asset classification in Microsoft Defender XDR.",
        "Tag the device in Defender for Endpoint.",
        "Tag the device in Defender for Identity."
      ] },
      { id: "f2", label: "Ensure that an alert is triggered when App1 is accessed:", options: [
        "Add an indicator for IP addresses to Defender for Endpoint.",
        "Tag App1 in Defender for Cloud Apps.",
        "Tag the device in Defender for Identity."
      ] }
    ],
    answer: { f1: 0, f2: 0 },
    explanation: {
      correct: [
        "**Critical asset classification.** Critical asset management in the Microsoft Defender portal (part of Microsoft Security Exposure Management) lets you mark devices and other assets as critical and give them a criticality level, either through Microsoft's predefined classifications or through a custom classification that you create with a query matching the assets, here Server1. The criticality is used across Defender XDR, for example to prioritize incidents, alerts and attack paths that involve the asset, which is what designating Server1 as high value is meant to achieve.",
        "**Indicator for IP addresses.** Defender for Endpoint custom indicators can be created for IP addresses and for URLs or domains, with an action such as Audit, Warn or Block, and with the option to generate an alert. Server1 accesses App1, a SaaS app reached over the network, so an indicator for App1's IP addresses with alert generation turned on raises an alert each time the onboarded server connects to the app. Network indicators require network protection on the device."
      ],
      wrong: [
        ["Tag the device in Defender for Endpoint", "A device tag is a free-text label used to group, filter and scope devices, for example in device groups. A tag by itself gives Server1 no criticality in Defender XDR."],
        ["Tag the device in Defender for Identity", "Defender for Identity entity tags, such as Sensitive, describe Active Directory entities for identity detections like lateral movement paths. They neither classify Server1 as a critical asset across Defender XDR nor raise an alert when a SaaS app is accessed."],
        ["Tag App1 in Defender for Cloud Apps", "Cloud Discovery tags such as Sanctioned, Unsanctioned or Monitored govern an app; they record its approval status or block or warn on access through integrations. Tagging the app is not an alert rule."]
      ],
      concept: "Critical asset management sets the criticality of devices for all of Defender XDR, and Defender for Endpoint network indicators can audit or block a connection and generate an alert.",
      takeaway: "High-value device: critical asset classification. Alert when a device reaches an address: an IP or URL indicator with Generate alert.",
      refs: [
        ["Microsoft Learn: Critical asset management in Microsoft Security Exposure Management", "https://learn.microsoft.com/security-exposure-management/critical-asset-management"],
        ["Microsoft Learn: Create indicators for IPs and URLs/domains", "https://learn.microsoft.com/defender-endpoint/indicator-ip-domain"]
      ]
    }
  },
  {
    id: "Q373", source: 373, type: "single",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Cloud Apps.",
      "You are reviewing the activity log of the subscription.",
      "You need to ensure that events originating from the on-premises network are categorized automatically as Administrative.",
      "What should you create?"
    ],
    options: [
      { key: "A", text: "a critical asset classification" },
      { key: "B", text: "an indicator for IP addresses" },
      { key: "C", text: "an IP address range" },
      { key: "D", text: "a named location" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "The reference answer is D, a named location. A named location describes a network by its IP address ranges (or by countries) so that it can be identified and, for IP ranges, marked as trusted. Named locations are defined in the Microsoft Entra admin center and are used by Conditional Access and by the risk detections of ID Protection. The reference answer uses the on-premises network's IP range, defined once as a location, as the way to recognize where an event comes from.",
        "In Defender for Cloud Apps itself, the categories that tag activity log events by source address (Administrative, Corporate, Risky, VPN, Cloud provider and Other) are set under Settings > Cloud Apps > System > IP address ranges. Activities from addresses in a range carry its category and tags, so you can filter the activity log on them and use them in policies."
      ],
      wrong: [
        ["A", "A critical asset classification marks devices and other assets as critical in Defender XDR. It does not categorize events by the network they come from."],
        ["B", "An IP indicator in Defender for Endpoint audits, warns or blocks connections from onboarded devices to an address. It does not label activity log events in Defender for Cloud Apps."],
        ["C", "IP address ranges are the Defender for Cloud Apps setting with categories such as Administrative, Corporate, Risky and VPN, applied to the activities from those addresses. The reference answer is the named location."]
      ],
      concept: "Known networks are described by their IP ranges: as named locations for Microsoft Entra Conditional Access, and as categorized IP address ranges in Defender for Cloud Apps.",
      takeaway: "Know both: named locations in Microsoft Entra ID, and IP address ranges with categories such as Administrative in Defender for Cloud Apps. For this question the reference answer is the named location.",
      refs: [
        ["Microsoft Learn: Network assignment in Conditional Access policies", "https://learn.microsoft.com/entra/identity/conditional-access/concept-assignment-network"],
        ["Microsoft Learn: Work with IP ranges and tags in Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/ip-tags"]
      ]
    }
  },
  {
    id: "Q374", source: 374, type: "single",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Basic",
    stem: [
      "You have an on-premises server named Server1 that runs Windows Server.",
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Cloud Apps.",
      "You plan to configure Cloud Discovery and enable automatic log upload.",
      "You need to ensure that you can run the log collector on Server1.",
      "What should you install on Server1?"
    ],
    options: [
      { key: "A", text: "the Microsoft Graph PowerShell SDK" },
      { key: "B", text: ".NET Framework 4.8" },
      { key: "C", text: "Docker" },
      { key: "D", text: "the Azure Connected Machine agent" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "Automatic log upload for Cloud Discovery uses a log collector. The log collector is delivered as a Docker image: you install Docker on the host (Windows, or a supported Linux distribution), define the data source and the log collector in the Defender for Cloud Apps portal, and then run the `docker run` command the portal gives you, which pulls the image and starts the collector container.",
        "Once it runs, the firewalls and proxies send their traffic logs to the collector over Syslog or FTP, and the collector compresses them and uploads them to Defender for Cloud Apps continuously. Server1 therefore needs Docker."
      ],
      wrong: [
        ["A", "The Microsoft Graph PowerShell SDK is a set of PowerShell modules for managing Microsoft 365 through Microsoft Graph. The log collector does not use it."],
        ["B", ".NET Framework is not a prerequisite of the log collector, which runs as a container on Docker."],
        ["D", "The Azure Connected Machine agent onboards a server to Azure Arc. It has nothing to do with collecting and uploading traffic logs for Cloud Discovery."]
      ],
      concept: "The Cloud Discovery log collector runs as a Docker container that receives firewall and proxy logs and uploads them automatically.",
      takeaway: "Automatic log upload for Cloud Discovery: install Docker, then run the log collector container.",
      refs: [
        ["Microsoft Learn: Configure automatic log upload for continuous reports (Docker)", "https://learn.microsoft.com/defender-cloud-apps/discovery-docker"],
        ["Microsoft Learn: Set up Cloud Discovery", "https://learn.microsoft.com/defender-cloud-apps/set-up-cloud-discovery"]
      ]
    }
  },
  {
    id: "Q375", source: 375, type: "dropdown",
    domain: "identity", topic: "Authentication and MFA", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to enable passwordless authentication for all users.",
      "Which authentication method and portal should you use? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Authentication method:", options: ["Email OTP", "Microsoft Authenticator", "SMS", "Voice call"] },
      { id: "f2", label: "Portal:", options: ["Microsoft 365 admin center", "Microsoft Defender portal", "Microsoft Entra admin center"] }
    ],
    answer: { f1: 1, f2: 2 },
    explanation: {
      correct: [
        "**Microsoft Authenticator** supports passwordless phone sign-in: the user enters the user name, then approves the sign-in in the app with a number match and the device's biometric or PIN, without typing a password. Authenticator can also hold passkeys. Of the methods offered it is the only passwordless one.",
        "Authentication methods are managed in the **Microsoft Entra admin center**, under Protection (or Entra ID) > Authentication methods > Policies. There you enable Microsoft Authenticator, target All users, and set the authentication mode to Passwordless or Any so that users can sign in without a password."
      ],
      wrong: [
        ["Email OTP", "Email one-time passcode is mainly used to authenticate B2B guest users and for self-service password reset. It is not a passwordless sign-in method for members."],
        ["SMS", "SMS is a phone-based method used mostly as a second factor. SMS-based sign-in exists for limited scenarios such as frontline workers, but it is not one of the passwordless methods Microsoft recommends."],
        ["Voice call", "A voice call can only be a second factor or a reset method. It cannot be used for primary sign-in."],
        ["Microsoft 365 admin center or Microsoft Defender portal", "The Microsoft 365 admin center manages users, licenses and services, and the Defender portal manages security operations. Neither holds the authentication methods policy of the tenant."]
      ],
      concept: "Passwordless sign-in in Microsoft Entra ID uses Microsoft Authenticator, FIDO2 security keys or passkeys, Windows Hello for Business or certificate-based authentication, enabled in the authentication methods policy.",
      takeaway: "Passwordless for everyone: enable Microsoft Authenticator in the authentication methods policy of the Microsoft Entra admin center.",
      refs: [
        ["Microsoft Learn: Passwordless authentication options for Microsoft Entra ID", "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-passwordless"],
        ["Microsoft Learn: Enable passwordless sign-in with Microsoft Authenticator", "https://learn.microsoft.com/entra/identity/authentication/howto-authentication-passwordless-phone"]
      ]
    }
  },
  {
    id: "Q376", source: 376, type: "single",
    domain: "identity", topic: "Identity Protection", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription that contains a Microsoft Entra tenant named contoso.com. The tenant includes a user named User1.",
      "You plan to use Microsoft Entra ID Protection.",
      "You need to ensure that User1 can review the list in Microsoft Entra ID Protection of users flagged for risk. The solution must use the principle of least privilege.",
      "To which role should you add User1?"
    ],
    options: [
      { key: "A", text: "Security Reader" },
      { key: "B", text: "Reports Reader" },
      { key: "C", text: "Service Administrator" },
      { key: "D", text: "User Administrator" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "ID Protection documents which roles can do what. Security Administrator has full access, Security Operator can view the reports and act on them (dismiss user risk, confirm compromise), and **Security Reader** can view all ID Protection reports and the overview, including the Risky users report, but cannot change policies, reset passwords or give feedback on detections.",
        "User1 only needs to review the list of users flagged for risk, so a read-only role is enough, and Security Reader is the least-privileged role in the list that grants it."
      ],
      wrong: [
        ["B", "Reports Reader reads usage reports, sign-in activity and audit logs. It is not one of the roles that give access to the ID Protection risk reports."],
        ["C", "There is no Microsoft Entra built-in role by this name that reads ID Protection data. The similar Service Support Administrator role opens support requests and reads service health."],
        ["D", "User Administrator manages users and groups, including resetting passwords. Whatever it can see, it carries far more write permissions than reviewing a report requires, so it fails least privilege."]
      ],
      concept: "ID Protection access is role-based: Security Reader and Global Reader read the reports, Security Operator also acts on risk, Security Administrator has full control.",
      takeaway: "Only view risky users in ID Protection: Security Reader.",
      refs: [
        ["Microsoft Learn: What is Microsoft Entra ID Protection?", "https://learn.microsoft.com/entra/id-protection/overview-identity-protection"],
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  },
  {
    id: "Q377", source: 377, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription and use Microsoft Defender for Office 365.",
      "You need to recommend a solution to educate users on topics that relate to social engineering risks. The users must receive a weekly reminder to complete a learning task.",
      "What should you use in the Microsoft Defender portal?"
    ],
    options: [
      { key: "A", text: "Learning hub" },
      { key: "B", text: "Campaigns" },
      { key: "C", text: "Threat tracker" },
      { key: "D", text: "Attack simulation training" }
    ],
    answer: ["D"],
    explanation: {
      correct: [
        "Attack simulation training in Defender for Office 365 Plan 2 (included in Microsoft 365 E5) teaches users to recognize social engineering. Besides simulated phishing attacks, it offers training campaigns that assign training modules directly to users without a simulation, and simulations can assign training after a user falls for one.",
        "Both simulations and training campaigns send notifications to the users: an assignment notification and a training reminder notification, whose frequency you set to weekly or twice a week until the training is completed. That covers the weekly reminder to complete a learning task."
      ],
      wrong: [
        ["A", "Learning hub in the Defender portal collects learning content about Microsoft security products for administrators and analysts. It does not assign training to users or send them reminders."],
        ["B", "Campaigns shows coordinated phishing or malware campaigns that targeted your organization, for investigation. It does not educate users."],
        ["C", "Threat tracker is a set of widgets that informs security teams about threats affecting the organization. It has no user training."]
      ],
      concept: "Attack simulation training runs simulations and training campaigns for users, with assignment and reminder notifications on a weekly or twice-weekly schedule.",
      takeaway: "User awareness training with reminders in Defender for Office 365: Attack simulation training.",
      refs: [
        ["Microsoft Learn: Get started using Attack simulation training", "https://learn.microsoft.com/defender-office-365/attack-simulation-training-get-started"],
        ["Microsoft Learn: Training campaigns in Attack simulation training", "https://learn.microsoft.com/defender-office-365/attack-simulation-training-training-campaigns"]
      ]
    }
  },
  {
    id: "Q378", source: 378, type: "single",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Office 365.",
      "You need to create a policy that will quarantine messages containing attachments that match .apk and .appx extensions.",
      "Which type of policy should you configure?"
    ],
    options: [
      { key: "A", text: "anti-malware" },
      { key: "B", text: "anti-phishing" },
      { key: "C", text: "Safe Attachments" },
      { key: "D", text: "anti-spam" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "Anti-malware policies contain the **common attachments filter**. When it is turned on, a message with an attachment whose true file type matches one of the listed file types is treated as malware: it is quarantined, or rejected with a non-delivery report, depending on the policy. The default list already includes many risky types, among them apk and appx, and you can add or remove types.",
        "Matching attachments by file type and quarantining the messages is therefore an anti-malware policy setting."
      ],
      wrong: [
        ["B", "Anti-phishing policies deal with impersonation, spoofing and mailbox intelligence. They do not filter attachments by file type."],
        ["C", "Safe Attachments detonates attachments in a sandbox to detect unknown malware by its behavior. It does not block attachments because of their file type."],
        ["D", "Anti-spam policies classify messages as spam, high confidence spam, bulk or phishing and act on the verdict. File type filtering is not part of them."]
      ],
      concept: "The common attachments filter of an anti-malware policy blocks messages by attachment file type and treats them as malware.",
      takeaway: "Block or quarantine by attachment extension: the common attachments filter in an anti-malware policy.",
      refs: [
        ["Microsoft Learn: Anti-malware protection in EOP", "https://learn.microsoft.com/defender-office-365/anti-malware-protection-about"],
        ["Microsoft Learn: Configure anti-malware policies in EOP", "https://learn.microsoft.com/defender-office-365/anti-malware-policies-configure"]
      ]
    }
  },
  {
    id: "Q379", source: 379, type: "dragdrop",
    domain: "identity", topic: "Authentication and MFA", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains two security groups named Group1 and Group2.",
      "You need to recommend an authentication solution to meet the following requirements:",
      { list: [
        "Administrators must be able to generate a time-limited code to allow the members of Group1 to authenticate without using their password.",
        "The members of Group2 must be able to authenticate by confirming a two-digit code on their mobile device."
      ] },
      "Which authentication method should you recommend for each group? To answer, drag the appropriate methods to the correct groups. Each method may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
      "NOTE: Each correct selection is worth one point."
    ],
    sourceLabel: "Authentication methods",
    sources: [
      "Certificate-based authentication",
      "Email one-time password (OTP)",
      "A FIDO2 security key",
      "Microsoft Authenticator",
      "A Temporary Access Pass",
      "Third-party software OAuth tokens"
    ],
    targets: [
      { id: "t1", label: "Group1:" },
      { id: "t2", label: "Group2:" }
    ],
    answer: { t1: 4, t2: 3 },
    explanation: {
      correct: [
        "**Group1: A Temporary Access Pass.** A Temporary Access Pass (TAP) is a time-limited passcode that an administrator creates for a user. It satisfies strong authentication, so the user can sign in without a password, typically to onboard or recover passwordless methods such as Microsoft Authenticator, a passkey or Windows Hello for Business. You enable the method in the authentication methods policy and target it to Group1; the policy also sets the lifetime and whether a pass is one-time.",
        "**Group2: Microsoft Authenticator.** With Authenticator push notifications, the sign-in screen shows a two-digit number that the user enters in the app on the mobile device to approve the sign-in. This number matching is always on for Authenticator push notifications and passwordless phone sign-in."
      ],
      wrong: [
        ["Certificate-based authentication", "The user signs in with an X.509 certificate on a smart card or the device. No code is generated or confirmed."],
        ["Email one-time password (OTP)", "The service sends the code to an email address, not the administrator, and it is used mainly for B2B guests and password reset. It involves no two-digit confirmation."],
        ["A FIDO2 security key", "A FIDO2 key or passkey signs in with a hardware key or device and a PIN or biometric. There is no administrator-issued code and no number to confirm."],
        ["Third-party software OAuth tokens", "Software OATH tokens are authenticator apps that generate six-digit time-based codes for the user to type. The administrator does not generate them, and they do not show a two-digit number to confirm."]
      ],
      concept: "A Temporary Access Pass is an administrator-issued, time-limited passcode, and Microsoft Authenticator push notifications use two-digit number matching.",
      takeaway: "Admin-generated time-limited code: Temporary Access Pass. Two-digit number on the phone: Microsoft Authenticator.",
      refs: [
        ["Microsoft Learn: Configure Temporary Access Pass", "https://learn.microsoft.com/entra/identity/authentication/howto-authentication-temporary-access-pass"],
        ["Microsoft Learn: Number matching in MFA push notifications", "https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-number-match"]
      ]
    }
  },
  {
    id: "Q380", source: 380, type: "dropdown",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Cloud Apps.",
      "You need to create a file policy to generate an alert when a file is shared with a domain named fabrikam.com.",
      "How should you complete the filter for the policy? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    template: `{{f1}} {{f2}} contains fabrikam.com
{{f3}} equals public (Internet),Public,External`,
    fields: [
      { id: "f1", label: "First filter, first drop-down", options: ["App", "Collaborators", "File name"] },
      { id: "f2", label: "First filter, before contains fabrikam.com", options: ["Any from domain", "Entire organization", "Groups"] },
      { id: "f3", label: "Second filter, before equals", options: ["Access level", "App", "Collaborators"] }
    ],
    answer: { f1: 1, f2: 0, f3: 0 },
    explanation: {
      correct: [
        "A file policy in Defender for Cloud Apps selects files with filters and then raises an alert or runs governance actions on the matches. The **Collaborators** filter looks at who has access to a file, and its **Any from domain** option matches files that are shared with any user from the domain you enter, here fabrikam.com.",
        "The **Access level** filter describes how widely a file is shared: Public (Internet), Public, External, Internal or Private. Limiting it to Public (Internet), Public and External keeps the files that are shared outside the organization. Together the two filters find files shared with fabrikam.com, and the policy's alert setting creates an alert for each match."
      ],
      wrong: [
        ["App", "The App filter limits the policy to files in a particular connected app, such as SharePoint Online or OneDrive. It says nothing about who the file is shared with or how."],
        ["File name", "This filter matches the name of the file, not the domain of the people it is shared with."],
        ["Entire organization or Groups", "These describe internal collaborators: everyone in your organization or members of specific groups. A share with an external domain needs Any from domain."],
        ["Collaborators in the second filter", "The values Public (Internet), Public and External are sharing levels, which belong to the Access level filter."]
      ],
      concept: "File policies combine filters such as Collaborators (who has access, including any user from a domain) and Access level (Public (Internet), Public, External, Internal, Private).",
      takeaway: "Shared with a specific external domain: Collaborators > Any from domain, plus Access level External or public.",
      refs: [
        ["Microsoft Learn: File policies in Microsoft Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/data-protection-policies"],
        ["Microsoft Learn: File filters in Microsoft Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/file-filters"]
      ]
    }
  },
  {
    id: "Q381", source: 381, type: "single",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    caseId: "series-cloud-apps", caseOrder: 1,
    stem: [
      "Solution: You connect Microsoft 365 to Defender for Cloud Apps.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "OAuth app policies evaluate the third-party apps that users have authorized to access their organizational data, using properties such as the permissions granted, the permission level, the number of users and how common the app is. Defender for Cloud Apps learns about these apps through the API connector of a connected app. When you connect Microsoft 365 with its app connector, Defender for Cloud Apps reads the tenant's activities and its OAuth app grants, the OAuth apps page fills, and you can create OAuth app policies from it.",
        "The scenario needs exactly that ability while Defender for Cloud Apps is being implemented, so connecting Microsoft 365 meets the goal. In current portals, policies for Microsoft 365 OAuth apps are managed in app governance, which is part of Defender for Cloud Apps."
      ],
      wrong: [
        ["B", "The app connector is the prerequisite for OAuth app policies. Once Microsoft 365 is connected, the apps users granted access to are discovered and the policy type can be used."]
      ],
      concept: "OAuth app visibility and policies in Defender for Cloud Apps come from the API connection to the app, such as the Microsoft 365 app connector.",
      takeaway: "OAuth app policies need the app connector: connect Microsoft 365 first.",
      refs: [
        ["Microsoft Learn: Connect Microsoft 365 to Microsoft Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/connect-office-365"],
        ["Microsoft Learn: Create policies to control OAuth apps", "https://learn.microsoft.com/defender-cloud-apps/app-permission-policy"]
      ]
    }
  },
  {
    id: "Q382", source: 382, type: "single",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    caseId: "series-cloud-apps", caseOrder: 2,
    stem: [
      "Solution: You configure Conditional Access app control.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Conditional Access app control routes user sessions to cloud apps through the Defender for Cloud Apps reverse proxy, which a Conditional Access policy in Microsoft Entra ID triggers. It enables access policies and session policies, for example blocking downloads or monitoring activities in real time.",
        "It does not give Defender for Cloud Apps the OAuth apps that users have authorized, because that information comes through the API connector of the connected app. To create OAuth app policies you connect Microsoft 365 as an app, so configuring Conditional Access app control does not meet the goal."
      ],
      wrong: [
        ["A", "Conditional Access app control provides real-time session and access controls through a proxy. OAuth app policies depend on the app connector, which this solution does not configure."]
      ],
      concept: "Conditional Access app control is the proxy for real-time session and access policies; OAuth app data comes from app connectors.",
      takeaway: "Session and access policies: Conditional Access app control. OAuth app policies: connect the app with its API connector.",
      refs: [
        ["Microsoft Learn: Conditional Access app control in Defender for Cloud Apps", "https://learn.microsoft.com/defender-cloud-apps/proxy-intro-aad"],
        ["Microsoft Learn: Create policies to control OAuth apps", "https://learn.microsoft.com/defender-cloud-apps/app-permission-policy"]
      ]
    }
  },
  {
    id: "Q383", source: 383, type: "single",
    domain: "security", topic: "Defender for Cloud Apps", difficulty: "Intermediate",
    caseId: "series-cloud-apps", caseOrder: 3,
    stem: [
      "Solution: You configure Cloud Discovery.",
      "Does this meet the goal?"
    ],
    options: [
      { key: "A", text: "Yes" },
      { key: "B", text: "No" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Cloud Discovery analyzes traffic logs, from firewalls and proxies or from Defender for Endpoint, to find the cloud apps that people in the organization use, including shadow IT, and rates each app's risk. It works from network traffic and sees which apps are visited, not which apps users have authorized with OAuth permissions in the organization's tenant.",
        "OAuth app policies need the OAuth app grants that Defender for Cloud Apps reads through the API connector of a connected app such as Microsoft 365. Configuring Cloud Discovery does not connect Microsoft 365, so it does not meet the goal."
      ],
      wrong: [
        ["A", "Cloud Discovery reports app usage from traffic logs. It does not provide the OAuth app information on which OAuth app policies are built; that requires connecting Microsoft 365 as an app."]
      ],
      concept: "Cloud Discovery maps cloud app usage from traffic logs; OAuth app policies depend on the app connector of the connected app.",
      takeaway: "Shadow IT from traffic: Cloud Discovery. Apps granted OAuth access: app connector, then OAuth app policies.",
      refs: [
        ["Microsoft Learn: Set up Cloud Discovery", "https://learn.microsoft.com/defender-cloud-apps/set-up-cloud-discovery"],
        ["Microsoft Learn: Create policies to control OAuth apps", "https://learn.microsoft.com/defender-cloud-apps/app-permission-policy"]
      ]
    }
  },
  {
    id: "Q384", source: 384, type: "dropdown",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to use Microsoft Graph PowerShell to assign a Microsoft 365 E5 license to a new user named user1@contoso.com.",
      "How should you complete the command? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    template: `$e5Sku = {{f1}} -All | Where SkuPartNumber -eq 'SPE_E5'
{{f2}} -UserId "user1@contoso.com" -AddLicenses @{SkuId = $e5Sku.SkuId} -RemoveLicenses @()`,
    fields: [
      { id: "f1", label: "Cmdlet that sets $e5Sku", options: ["Get-MgSubscriberSku", "Get-MgSubscription", "Get-MgUserLicenseDetail", "Get-MgUserLicenseDetailCount"] },
      { id: "f2", label: "Cmdlet before -UserId", options: ["Set-MgUserLicense", "Update-MgSubscriberSku", "Update-MgSubscription"] }
    ],
    answer: { f1: 0, f2: 0 },
    explanation: {
      correct: [
        "The first line has to read the license SKUs that the organization has bought and pick Microsoft 365 E5, whose `SkuPartNumber` is `SPE_E5`. The Graph cmdlet for the tenant's subscribed SKUs is `Get-MgSubscribedSku`, printed in the answer area as `Get-MgSubscriberSku`. With `-All` it returns every SKU, and the `Where` filter keeps the E5 one, so `$e5Sku.SkuId` holds its GUID.",
        "`Set-MgUserLicense` assigns and removes licenses on a user: `-AddLicenses` takes hash tables with the `SkuId` to add, and `-RemoveLicenses` takes the SKU IDs to remove; the parameter is required, so an empty array `@()` is passed when nothing is removed. A new user must also have a usage location before a license can be assigned."
      ],
      wrong: [
        ["Get-MgSubscription", "This cmdlet returns Microsoft Graph change notification subscriptions (webhooks), not license subscriptions or SKUs."],
        ["Get-MgUserLicenseDetail or Get-MgUserLicenseDetailCount", "These return the licenses already assigned to one user, or their count. A new user has none, and the command needs the tenant's E5 SKU."],
        ["Update-MgSubscriberSku", "The SKU objects describe what the organization bought. A license is assigned on the user object, with `Set-MgUserLicense`."],
        ["Update-MgSubscription", "This changes a change notification subscription, for example its expiration. It has nothing to do with licensing."]
      ],
      concept: "In Microsoft Graph PowerShell, a license is assigned by reading the SKU with `Get-MgSubscribedSku` and calling `Set-MgUserLicense` with `-AddLicenses` and `-RemoveLicenses`.",
      takeaway: "Graph licensing: `Get-MgSubscribedSku -All` to find the SkuId, then `Set-MgUserLicense -UserId ... -AddLicenses @{SkuId = ...} -RemoveLicenses @()`.",
      refs: [
        ["Microsoft Learn: Assign Microsoft 365 licenses to user accounts with PowerShell", "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"],
        ["Microsoft Learn: Set-MgUserLicense", "https://learn.microsoft.com/powershell/module/microsoft.graph.users.actions/set-mguserlicense"]
      ]
    }
  }
);
