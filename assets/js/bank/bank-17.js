/* MS-102 question bank, part 17: questions 257 to 272 of the reference PDF. */
window.EXAM.questions.push(
  {
    id: "Q257", source: 257, type: "single",
    domain: "identity", topic: "Entra Connect and Cloud Sync", difficulty: "Intermediate",
    stem: [
      "Your network contains an Active Directory domain named adatum.com that is synced to Azure AD.",
      "The domain contains 100 user accounts.",
      "The city attribute for all the users is set to the city where the user resides.",
      "You need to modify the value of the city attribute to the three-letter airport code of each city.",
      "What should you do?"
    ],
    options: [
      { key: "A", text: "From Windows PowerShell on a domain controller, run the `Get-ADUser` and `Set-ADUser` cmdlets." },
      { key: "B", text: "From Azure Cloud Shell, run the `Get-ADUser` and `Set-ADUser` cmdlets." },
      { key: "C", text: "From Windows PowerShell on a domain controller, run the `Get-MgUser` and `Update-MgUser` cmdlets." },
      { key: "D", text: "From the Azure portal, select all the Azure AD users, and then use the User settings blade." }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "The users are synchronized from adatum.com, so the on-premises Active Directory is the source of authority for their attributes. Azure AD Connect (now Microsoft Entra Connect) copies attributes such as the city from the on-premises accounts to Azure AD, and Azure AD does not let you edit those attributes in the cloud. The change has to be made in Active Directory, and the next synchronization cycle carries the new value to Azure AD.",
        "For 100 accounts the practical tool is the Active Directory module for Windows PowerShell on a domain controller. `Get-ADUser` reads the accounts with their `City` property, and `Set-ADUser -City` writes the new value, for example in a loop over a CSV file that maps each city name to its airport code."
      ],
      wrong: [
        ["B", "Azure Cloud Shell runs in Azure, not in the adatum.com network. It does not provide the Active Directory module or a connection to the domain controllers that `Get-ADUser` and `Set-ADUser` need."],
        ["C", "`Get-MgUser` and `Update-MgUser` are Microsoft Graph PowerShell cmdlets. Wherever they run, they act on Azure AD, and Azure AD refuses changes to attributes of synchronized users whose source of authority is on-premises."],
        ["D", "The User settings blade holds tenant-wide settings for users, not the attributes of individual accounts. The attributes of synchronized users are also read-only in the Azure portal."]
      ],
      concept: "For synchronized users, attributes are mastered in on-premises Active Directory and flow to Azure AD through directory synchronization.",
      takeaway: "To change an attribute of a synced user, change it on-premises (for example with `Set-ADUser`) and let synchronization update Azure AD.",
      refs: [
        ["Microsoft Learn: Set-ADUser", "https://learn.microsoft.com/powershell/module/activedirectory/set-aduser"],
        ["Microsoft Learn: What is Microsoft Entra Connect?", "https://learn.microsoft.com/entra/identity/hybrid/connect/whatis-azure-ad-connect"]
      ]
    }
  },
  {
    id: "Q258", source: 258, type: "dropdown",
    domain: "security", topic: "Defender for Office 365", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription that uses Microsoft Defender for Office 365.",
      "You need to identify the settings that are configured less secure than the Standard protection profile settings in the preset security policies.",
      "What should you use? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Portal:", options: ["Microsoft 365 admin center", "Microsoft 365 Defender portal", "Microsoft Purview compliance portal"] },
      { id: "f2", label: "Feature:", options: ["Configuration analyzer", "Preset security policies", "Threat tracker"] }
    ],
    answer: { f1: 1, f2: 0 },
    explanation: {
      correct: [
        "The **Configuration analyzer** compares your Exchange Online Protection and Defender for Office 365 policies (anti-spam, anti-malware, anti-phishing, Safe Links and Safe Attachments) with the Standard and Strict protection profiles of the preset security policies. On its Standard recommendations tab it lists every setting that is less secure than the Standard recommendation, shows the current and the recommended value, and lets you apply the recommendation.",
        "The tool is part of the threat policies in the **Microsoft 365 Defender portal** (now the Microsoft Defender portal), under Email & collaboration > Policies & rules > Threat policies > Configuration analyzer."
      ],
      wrong: [
        ["Microsoft 365 admin center", "The Microsoft 365 admin center manages users, licenses, billing and tenant settings. The threat policies of Defender for Office 365 and their analysis are in the Defender portal."],
        ["Microsoft Purview compliance portal", "The Purview portal hosts compliance features such as DLP, retention and eDiscovery, not the email threat protection policies."],
        ["Preset security policies", "Preset security policies apply the Standard or Strict profile to chosen users. They do not report how your other policies differ from those profiles; that comparison is what the Configuration analyzer does."],
        ["Threat tracker", "Threat trackers are widgets and saved queries about current cyberthreats in Defender for Office 365 Plan 2. They do not evaluate policy settings."]
      ],
      concept: "The Configuration analyzer in the Defender portal finds the email protection settings that fall below the Standard or Strict preset recommendations.",
      takeaway: "Settings weaker than Standard or Strict: Defender portal > Threat policies > Configuration analyzer.",
      refs: [
        ["Microsoft Learn: Configuration analyzer for protection policies in EOP and Defender for Office 365", "https://learn.microsoft.com/defender-office-365/configuration-analyzer-for-security-policies"],
        ["Microsoft Learn: Preset security policies in EOP and Defender for Office 365", "https://learn.microsoft.com/defender-office-365/preset-security-policies"]
      ]
    }
  },
  {
    id: "Q259", source: 259, type: "dropdown",
    domain: "security", topic: "Secure Score and vulnerability management", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the devices shown in the following table.",
      { table: { head: ["Name", "Platform"], rows: [
        ["Device1", "Windows 11"],
        ["Device2", "Windows 10"],
        ["Device3", "Android"],
        ["Device4", "iOS"]
      ] } },
      "All the devices are onboarded to Microsoft Defender for Endpoint.",
      "You plan to use Microsoft Defender Vulnerability Management to meet the following requirements:",
      { list: ["Detect operating system vulnerabilities.", "Perform a configuration assessment of the operating system."] },
      "Which devices support each requirement? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Detect operating system vulnerabilities:", options: ["Device1 only", "Device1 and Device2 only", "Device1, Device2, and Device3 only", "Device1, Device2, and Device4 only", "Device1, Device2, Device3, and Device4"] },
      { id: "f2", label: "Perform a configuration assessment of the operating system:", options: ["Device1 only", "Device1 and Device2 only", "Device1, Device2, and Device3 only", "Device1, Device2, and Device4 only", "Device1, Device2, Device3, and Device4"] }
    ],
    answer: { f1: 4, f2: 1 },
    explanation: {
      correct: [
        "Defender Vulnerability Management does not offer every capability on every platform. Its table of supported capabilities lists operating system vulnerabilities (like software vulnerabilities) for Windows, macOS, Linux, Android and iOS. All four onboarded devices, Windows 11, Windows 10, Android and iOS, therefore support the detection of operating system vulnerabilities.",
        "The configuration assessment of the operating system, which produces security recommendations for misconfigured settings, is supported on Windows (as well as macOS and Linux) but not on Android or iOS. Only the two Windows devices, Device1 and Device2, support that requirement."
      ],
      wrong: [
        ["Device1 only", "Windows 10 is supported for both capabilities, just like Windows 11, so Device2 is never excluded."],
        ["Device1, Device2, and Device3 only / Device1, Device2, and Device4 only", "For operating system vulnerabilities, Android and iOS are both supported, so neither mobile device should be left out. For configuration assessment, neither of them is supported."],
        ["Device1, Device2, Device3, and Device4 for configuration assessment", "Configuration assessment is not available for Android and iOS devices, even when they are onboarded."]
      ],
      concept: "Defender Vulnerability Management detects OS vulnerabilities on desktop and mobile platforms, but performs configuration assessment only on Windows, macOS and Linux.",
      takeaway: "Mobile devices (Android, iOS): vulnerabilities yes, configuration assessment no.",
      refs: [
        ["Microsoft Learn: Supported operating systems, platforms and capabilities", "https://learn.microsoft.com/defender-vulnerability-management/tvm-supported-os"]
      ]
    }
  },
  {
    id: "Q260", source: 260, type: "multi",
    domain: "identity", topic: "Authentication and MFA", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 tenant.",
      "The Microsoft Secure Score for the tenant is shown in the following exhibit.",
      { image: "q260-secure-score-improvement-actions.png", alt: "Microsoft Secure Score, Improvement actions tab, 12 items. Columns: rank, improvement action, score impact, points achieved. 1 Require MFA for administrative roles, +16.95%, 0/10. 2 Ensure all users can complete multi-factor authentication for ... (truncated), +15.25%, 0/9. 3 Enable policy to block legacy authentication, +13.56%, 0/8. 4 Turn on user risk policy, +11.86%, 0/7. 5 Turn on sign-in risk policy, +11.86%, 0/7. 6 Do not allow users to grant consent to unmanaged applicatio... (truncated), +6.78%, 0/4. 7 Enable self-service password reset, +1.69%, 0/1. 8 Turn on customer lockbox feature, +1.69%, 0/1. 9 Use limited administrative roles, +1.69%, 0/1. 10 Designate more than one global admin, +1.69%, 0/1." },
      "You plan to enable Security defaults for Azure AD.",
      "Which three improvement actions will this affect?",
      "NOTE: Each correct selection is worth one point."
    ],
    select: 3,
    options: [
      { key: "A", text: "Require MFA for administrative roles" },
      { key: "B", text: "Ensure all users can complete multi-factor authentication for secure access" },
      { key: "C", text: "Enable policy to block legacy authentication" },
      { key: "D", text: "Enable self-service password reset" },
      { key: "E", text: "Use limited administrative roles" }
    ],
    answer: ["A", "B", "C"],
    explanation: {
      correct: [
        "Security defaults (in Microsoft Entra ID, formerly Azure AD) turn on a fixed set of identity protections for the whole tenant. Every user must register for multi-factor authentication, users in administrative roles must perform MFA every time they sign in, other users are prompted for MFA when needed, and legacy authentication protocols are blocked.",
        "Those settings match three improvement actions in the exhibit: **Require MFA for administrative roles** (A), **Ensure all users can complete multi-factor authentication for secure access** (B), because all users must register for MFA, and **Enable policy to block legacy authentication** (C)."
      ],
      wrong: [
        ["D", "Self-service password reset is enabled separately, in the Password reset settings. Security defaults require MFA registration but do not turn on SSPR."],
        ["E", "This action is about giving administrators less privileged roles instead of Global Administrator. That is a decision about role assignments, which security defaults do not change."]
      ],
      concept: "Security defaults enforce MFA registration for all users, MFA for administrators and the blocking of legacy authentication.",
      takeaway: "Security defaults cover MFA for admins, MFA registration for everyone and blocking legacy authentication; nothing else.",
      refs: [
        ["Microsoft Learn: Security defaults in Microsoft Entra ID", "https://learn.microsoft.com/entra/fundamentals/security-defaults"],
        ["Microsoft Learn: Microsoft Secure Score", "https://learn.microsoft.com/defender-xdr/microsoft-secure-score"]
      ]
    }
  },
  {
    id: "Q261", source: 261, type: "single",
    domain: "security", topic: "Intune and device compliance", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that has Microsoft Defender for Endpoint integrated with Microsoft Intune.",
      "Devices are enrolled to Microsoft Intune and onboarded by using Microsoft Defender for Endpoint.",
      "You plan to block devices based on the results of the machine risk score calculated by Microsoft Defender for Endpoint.",
      "What should you create first?"
    ],
    options: [
      { key: "A", text: "a device configuration policy" },
      { key: "B", text: "an endpoint detection and response policy" },
      { key: "C", text: "a device compliance policy" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "With the connector between Intune and Defender for Endpoint turned on, Intune receives the machine risk score of each onboarded device. A **device compliance policy** uses it through the Defender for Endpoint rule **Require the device to be at or under the machine risk score**, with a threshold of Clear, Low, Medium or High. A device whose risk score is above the threshold becomes noncompliant.",
        "The block itself comes from Conditional Access: a policy that requires a compliant device denies access to the noncompliant ones. Conditional Access can only use the compliance state that the compliance policy produces, so the compliance policy is what you create first."
      ],
      wrong: [
        ["A", "A device configuration profile can onboard devices to Defender for Endpoint or configure device settings, but it does not evaluate the risk score or mark devices as noncompliant. The devices are already onboarded."],
        ["B", "An endpoint detection and response policy configures the EDR settings and onboarding of Defender for Endpoint. It does not turn the risk score into a compliance state that can be used to block devices."]
      ],
      concept: "The Defender for Endpoint risk score reaches Conditional Access through an Intune compliance policy that sets a maximum allowed machine risk score.",
      takeaway: "Block risky devices: compliance policy with a machine risk score threshold, then Conditional Access requiring a compliant device.",
      refs: [
        ["Microsoft Learn: Device compliance settings for Windows in Intune", "https://learn.microsoft.com/mem/intune/protect/compliance-policy-create-windows"],
        ["Microsoft Learn: Configure Microsoft Defender for Endpoint in Intune", "https://learn.microsoft.com/mem/intune/protect/advanced-threat-protection-configure"]
      ]
    }
  },
  {
    id: "Q262", source: 262, type: "single",
    domain: "compliance", topic: "Retention and records", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You create a retention label named Retention1 as shown in the following exhibit.",
      { image: "q262-retention1-label.png", alt: "Create retention label wizard, Review and finish page. Name: Retention1. Retention period: 6 months. Retention action: Retain and Delete. Based on: Based on when it was created." },
      "You apply Retention1 to all the Microsoft OneDrive content.",
      "On January 1, 2020, a user stores a file named File1 in OneDrive.",
      "On January 10, 2020, the user modifies File1.",
      "On February 1, 2020, the user deletes File1.",
      "When will File1 be removed permanently and unrecoverable from OneDrive?"
    ],
    options: [
      { key: "A", text: "February 1, 2020" },
      { key: "B", text: "July 1, 2020" },
      { key: "C", text: "July 10, 2020" },
      { key: "D", text: "August 1, 2020" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "Retention1 is a retain-and-delete label: it keeps content for 6 months, counted from when the item was created, and then deletes it. File1 was created on January 1, 2020, so its retention period ends on July 1, 2020. The modification on January 10 does not matter, because the label counts from the creation date.",
        "When the user deletes File1 on February 1, the file is still inside its retention period. OneDrive therefore keeps a copy in the Preservation Hold library of the user's OneDrive site, out of the user's reach. When the retention period ends, the delete action of the label applies to that copy. The reference answer takes that date, July 1, 2020, as the moment File1 is removed for good. (The removal itself is carried out by a background timer job, so in a real tenant it can happen some days after the date.)"
      ],
      wrong: [
        ["A", "The user's deletion on February 1 does not remove the file permanently. The label still retains it, so a copy stays in the Preservation Hold library until the retention period ends."],
        ["C", "July 10, 2020 is six months after the last modification. Retention1 counts from when the item was created, not from when it was last modified."],
        ["D", "August 1, 2020 is six months after the deletion. Deleting a retained item does not start a new retention period."]
      ],
      concept: "A retain-and-delete label keeps content for the retention period from its start date (here the creation date), even if a user deletes it, and deletes it at the end of the period.",
      takeaway: "Count the retention period from the event the label names (created, modified, labeled), not from the deletion.",
      refs: [
        ["Microsoft Learn: Learn about retention for SharePoint and OneDrive", "https://learn.microsoft.com/purview/retention-policies-sharepoint"],
        ["Microsoft Learn: Learn about retention policies and retention labels", "https://learn.microsoft.com/purview/retention"]
      ]
    }
  },
  {
    id: "Q263", source: 263, type: "single",
    domain: "identity", topic: "Identity Protection", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 subscription that contains an Azure AD tenant named contoso.com. The tenant includes a user named User1.",
      "You enable Azure AD Identity Protection.",
      "You need to ensure that User1 can review the list in Azure AD Identity Protection of users flagged for risk. The solution must use the principle of least privilege.",
      "To which role should you add User1?"
    ],
    options: [
      { key: "A", text: "Global Administrator" },
      { key: "B", text: "Service Administrator" },
      { key: "C", text: "Security Administrator" },
      { key: "D", text: "Reports Reader" }
    ],
    answer: ["C"],
    explanation: {
      correct: [
        "The list of users flagged for risk is the Risky users report of Identity Protection (now Microsoft Entra ID Protection). Access to the Identity Protection reports is granted by a short list of roles: Security Reader, Global Reader, Security Operator, Security Administrator and Global Administrator.",
        "Of the roles offered, only Security Administrator and Global Administrator are on that list. Security Administrator is limited to security features, while Global Administrator controls the whole tenant, so Security Administrator is the least privileged choice here. (If Security Reader were offered, it would be the least privileged role, because it can view the reports without changing anything.)"
      ],
      wrong: [
        ["A", "Global Administrator can review risky users, but it grants full control of every service in the tenant, far more than the task needs."],
        ["B", "There is no Azure AD role of this name that grants access to Identity Protection. Service Administrator is a classic Azure subscription role, and the Azure AD role Service Support Administrator only handles service requests and service health."],
        ["D", "Reports Reader can read usage reports and sign-in and audit activity, but it is not one of the roles that can open the Identity Protection risk reports."]
      ],
      concept: "Identity Protection reports are available to Security Reader, Global Reader, Security Operator, Security Administrator and Global Administrator.",
      takeaway: "View risky users with least privilege: Security Reader if offered, otherwise Security Administrator before Global Administrator.",
      refs: [
        ["Microsoft Learn: What is Microsoft Entra ID Protection?", "https://learn.microsoft.com/entra/id-protection/overview-identity-protection"],
        ["Microsoft Learn: Microsoft Entra built-in roles", "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"]
      ]
    }
  },
  {
    id: "Q264", source: 264, type: "yesno",
    domain: "compliance", topic: "Sensitivity labels and encryption", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 tenant.",
      "You have a sensitivity label configured as shown in the Sensitivity label exhibit.",
      { image: "q264-sensitivity-label.png", alt: "Sensitivity label exhibit, Review your settings and finish page. Name: Sensitivity1. Display name: Sensitivity1. Description for users: Sensitivity1. Scope: File, Email. Encryption: no value shown. Content marking: Watermark: Watermark; Header: Header. Auto-labeling, Group settings and Site settings: no value shown. Auto-labeling for database columns: None." },
      "You have an auto-labeling policy as shown in the Auto-labeling policy exhibit.",
      { image: "q264-auto-labeling-policy.png", alt: "Auto-labeling policy exhibit, policy details with Edit policy and Delete policy buttons. Policy name: Auto-labeling policy. Description: empty. Label in simulation: Sensitivity1. Info to label: IP Address. Apply to content in these locations: Exchange email, All. Rules for auto-applying this label: Exchange email, 1 rule. Mode: On. Comment: empty." },
      "A user sends an email that contains the components shown in the following table.",
      { table: { head: ["Type", "File", "Includes IP address"], rows: [
        ["Mail body", "Not applicable", "No"],
        ["Attachment", "File1.docx", "Yes"],
        ["Attachment", "File2.xml", "Yes"]
      ] } },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "Sensitivity1 is applied to the email." },
      { text: "A watermark is added to File1.docx." },
      { text: "A header is added to File2.xml." }
    ],
    answer: [true, false, false],
    explanation: {
      correct: [
        "The auto-labeling policy applies Sensitivity1 to Exchange email that contains an IP address, and its mode is On, so it labels messages rather than only simulating. For Exchange, an auto-labeling policy checks not only the message body but also Office attachments, such as Word, Excel and PowerPoint files, and PDF attachments. The body has no IP address, but File1.docx does, so the condition is met and **Sensitivity1 is applied to the email** (Yes).",
        "When an attachment causes the match, the email is labeled but the attachment is not. File1.docx stays unlabeled, so it receives none of the label's content markings and **no watermark is added to File1.docx** (No). The same is true of File2.xml: an .xml file is not one of the attachment types the policy inspects, the attachment is not labeled, and a plain XML file cannot carry a header in any case, so **no header is added to File2.xml** (No)."
      ],
      wrong: [
        ["Statement 1 — No", "It is tempting to look only at the mail body, which has no IP address. Exchange auto-labeling also inspects Office and PDF attachments, and File1.docx contains an IP address."],
        ["Statement 2 — Yes", "The watermark is a content marking of the label, but the label goes on the email message only. The attached document is not labeled, so it is not marked either."],
        ["Statement 3 — Yes", "The header would only apply to labeled content that supports headers. File2.xml is neither labeled nor an Office document."]
      ],
      concept: "An Exchange auto-labeling policy evaluates the message and its Office and PDF attachments, but labels only the email, not the attachments.",
      takeaway: "Attachment matches, email gets the label; the attached files themselves stay unlabeled and unmarked.",
      refs: [
        ["Microsoft Learn: Automatically apply a sensitivity label in Microsoft 365", "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"],
        ["Microsoft Learn: Learn about sensitivity labels", "https://learn.microsoft.com/purview/sensitivity-labels"]
      ]
    }
  },
  {
    id: "Q265", source: 265, type: "single",
    domain: "identity", topic: "Authentication and MFA", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You need to implement a passwordless authentication solution that supports the following device types:",
      { list: ["Windows", "Android", "iOS"] },
      "The solution must use the same authentication method for all devices.",
      "Which authentication method should you use?"
    ],
    options: [
      { key: "A", text: "the Microsoft Authentication app" },
      { key: "B", text: "FIDO2-compliant security keys" },
      { key: "C", text: "multi-factor authentication (MFA)" },
      { key: "D", text: "Windows Hello for Business" }
    ],
    answer: ["B"],
    explanation: {
      correct: [
        "A FIDO2 security key is a hardware passkey that the user connects over USB or taps over NFC, then unlocks with a PIN or a biometric gesture. Microsoft Entra ID supports passwordless sign-in with FIDO2 keys on Windows, Android and iOS, so the same credential and the same method work on every device type in the requirement.",
        "The other passwordless methods are tied to one kind of device: Windows Hello for Business lives on a Windows PC, and Microsoft Authenticator phone sign-in lives on a phone."
      ],
      wrong: [
        ["A", "Microsoft Authenticator runs on Android and iOS, not on Windows. Signing in on a Windows device with it means approving on a separate phone, so the method is not the same on all three device types."],
        ["C", "MFA is a requirement for more than one factor, not a passwordless method. In its usual form it adds a second factor to a password."],
        ["D", "Windows Hello for Business is a Windows feature. It cannot be used to sign in on Android or iOS devices."]
      ],
      concept: "FIDO2 security keys are a cross-platform passwordless method, while Windows Hello for Business is Windows-only and Authenticator is phone-based.",
      takeaway: "One passwordless method for Windows, Android and iOS: FIDO2 security keys.",
      refs: [
        ["Microsoft Learn: Microsoft Entra passwordless sign-in", "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-passwordless"]
      ]
    }
  },
  {
    id: "Q266", source: 266, type: "dropdown",
    domain: "compliance", topic: "Sensitivity labels and encryption", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 subscription.",
      "You need to configure an auto-apply policy for sensitivity labels that will protect corporate data. The solution must meet the following requirements:",
      { list: [
        "Documents containing content that matches a custom regular expression must be classified automatically.",
        "Contract documents in a standard format must be classified automatically."
      ] },
      "What should you configure for each requirement? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Documents containing content that matches a custom regular expression must be classified automatically:", options: ["A sensitive info type", "A trainable classifier", "An exact data match (EDM) schema"] },
      { id: "f2", label: "Contract documents in a standard format must be classified automatically:", options: ["A data connector", "A trainable classifier", "An exact data match (EDM) schema"] }
    ],
    answer: { f1: 0, f2: 1 },
    explanation: {
      correct: [
        "A **sensitive information type** recognizes content by pattern. When you create a custom sensitive information type, its primary element can be a regular expression, optionally with keywords and confidence levels. Auto-labeling that uses this type classifies every document whose content matches the custom regular expression.",
        "A **trainable classifier** recognizes a category of document as a whole, based on what such documents look like, rather than on one pattern. Contracts in a standard format are a typical case: you use a pretrained classifier such as Agreements, or train a custom classifier with sample contracts, and auto-labeling then classifies new contracts automatically."
      ],
      wrong: [
        ["A trainable classifier for the regular expression", "A trainable classifier is a machine-learning model trained on examples. It does not evaluate a regular expression; patterns are what sensitive information types are for."],
        ["An exact data match (EDM) schema", "EDM matches content against the exact values of a sensitive data table that you upload, such as customer records. It is neither a regular expression detector nor a way to recognize a document category such as contracts."],
        ["A data connector", "Data connectors import and archive data from third-party sources into Microsoft 365. They do not classify documents."]
      ],
      concept: "Sensitive information types detect patterns such as regular expressions, while trainable classifiers detect categories of documents.",
      takeaway: "Pattern or regex: sensitive information type. Kind of document (contract, resume, source code): trainable classifier.",
      refs: [
        ["Microsoft Learn: Create custom sensitive information types", "https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type"],
        ["Microsoft Learn: Learn about trainable classifiers", "https://learn.microsoft.com/purview/trainable-classifiers-learn-about"]
      ]
    }
  },
  {
    id: "Q267", source: 267, type: "yesno",
    domain: "identity", topic: "Conditional Access", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains the security groups shown in the following table.",
      { table: { head: ["Name", "Membership type", "Membership rule"], rows: [
        ["Group1", "Assigned", "Not applicable"],
        ["Group2", "Dynamic", '`(user.department -eq "Finance")`'],
        ["Group3", "Dynamic", '`(user.department -eq "R&D")`']
      ] } },
      "The subscription contains the users shown in the following table.",
      { table: { head: ["Name", "Department", "Assigned group membership"], rows: [
        ["User1", "Finance", "Group1"],
        ["User2", "Technical", "None"],
        ["User3", "R&D", "Group1"]
      ] } },
      "You have a Conditional Access policy that has the following settings:",
      { list: [
        "Assignments\n- Users: Include: Group1; Exclude: Group2, Group3\n- Target resources: Cloud apps: App1",
        "Access controls\n- Grant: Block access"
      ] },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 can sign in to App1." },
      { text: "User2 can sign in to App1." },
      { text: "User3 can sign in to App1." }
    ],
    answer: [true, true, true],
    explanation: {
      correct: [
        "The policy blocks App1 for the members of Group1, minus the members of Group2 and Group3. In Conditional Access an exclusion always wins over an inclusion, so a user who is in Group1 and also in an excluded group is not affected by the policy. The dynamic groups add members by department: Group2 holds the Finance users and Group3 the R&D users.",
        "**User1** is assigned to Group1, and as a Finance user is also a member of Group2, which is excluded. The policy does not apply, so User1 can sign in to App1 (Yes). **User2** is in the Technical department and has no assigned group, so the user is not in Group1 and the policy never applies (Yes). **User3** is assigned to Group1, and as an R&D user is also a member of Group3, which is excluded, so User3 can sign in as well (Yes)."
      ],
      wrong: [
        ["Statement 1 — No", "User1 is included through Group1, but the Finance department puts User1 in Group2. Exclusions take precedence, so the block does not apply."],
        ["Statement 2 — No", "A Conditional Access policy only affects the users it includes. User2 is in no included group, so nothing blocks the sign-in."],
        ["Statement 3 — No", "User3 is included through Group1, but the R&D department puts User3 in Group3, which is excluded."]
      ],
      concept: "Conditional Access evaluates inclusions and exclusions together, and a user who matches any exclusion is outside the policy, whatever the inclusions say.",
      takeaway: "Check the dynamic group rules: users can be excluded by an attribute such as department even when they are in the included group.",
      refs: [
        ["Microsoft Learn: Users and groups in Conditional Access policy", "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-users-groups"],
        ["Microsoft Learn: Dynamic membership rules for groups", "https://learn.microsoft.com/entra/identity/users/groups-dynamic-membership"]
      ]
    }
  },
  {
    id: "Q268", source: 268, type: "single",
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
      { key: "C", text: "Deploy X.509.3 certificates to all the users." },
      { key: "D", text: "Deploy the Microsoft Authenticator app." }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "The passwordless methods for signing in on a Windows 10 device, Windows Hello for Business and FIDO2 security keys, are built for devices that have an identity in the tenant: Microsoft Entra joined devices, or hybrid joined devices when there is an on-premises domain. A device in a workgroup has no relationship with contoso.com, so its users cannot sign in to it with their Microsoft Entra credentials, with or without a password.",
        "The infrastructure change is therefore to join the Windows 10 devices to Microsoft Entra ID (contoso.com). Users then sign in to the device with their work account, can set up Windows Hello for Business or a security key, and get single sign-on to the Office 365 apps."
      ],
      wrong: [
        ["B", "Application Proxy publishes on-premises web apps for remote access through Microsoft Entra ID. It has nothing to do with how users sign in to their devices."],
        ["C", "Certificate-based authentication needs a public key infrastructure and certificates on smart cards or devices, and it still does not give the workgroup devices an identity in contoso.com. It is not the change the scenario calls for."],
        ["D", "The Authenticator app is installed by users on their phones. It is not a change to the infrastructure, and it does not provide passwordless sign-in to the Windows 10 devices themselves."]
      ],
      concept: "Passwordless Windows sign-in with Windows Hello for Business or FIDO2 keys requires devices that are joined to Microsoft Entra ID (or hybrid joined).",
      takeaway: "Workgroup Windows devices and passwordless sign-in: join the devices to Microsoft Entra ID first.",
      refs: [
        ["Microsoft Learn: Microsoft Entra passwordless sign-in", "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-passwordless"],
        ["Microsoft Learn: Microsoft Entra joined devices", "https://learn.microsoft.com/entra/identity/devices/concept-directory-join"]
      ]
    }
  },
  {
    id: "Q269", source: 269, type: "dropdown",
    domain: "identity", topic: "Conditional Access", difficulty: "Intermediate",
    stem: [
      "You have a Microsoft 365 E5 subscription that contains two security groups named Group1 and Group2.",
      "You need to enable multi-factor authentication (MFA) for the members of Group1 and Group2. The solution must meet the following requirements:",
      { list: [
        "The Group1 members must be prompted for MFA only when authenticating to Microsoft Entra ID from Android devices.",
        "The Group2 members must be prompted for MFA only when accessing Microsoft Exchange Online from outside the corporate network.",
        "Administrative effort must be minimized."
      ] },
      "What should you configure for each group? To answer, select the appropriate options in the answer area.",
      "NOTE: Each correct selection is worth one point."
    ],
    fields: [
      { id: "f1", label: "Group1:", options: ["Microsoft Entra Identity Protection", "Microsoft Entra Privileged Identity Management (PIM)", "Conditional Access", "Per-user MFA", "Microsoft Entra Security defaults"] },
      { id: "f2", label: "Group2:", options: ["Microsoft Entra Identity Protection", "Microsoft Entra Privileged Identity Management (PIM)", "Conditional Access", "Per-user MFA", "Microsoft Entra Security defaults"] }
    ],
    answer: { f1: 2, f2: 2 },
    explanation: {
      correct: [
        "Both requirements ask for MFA only under specific conditions, and Conditional Access is the feature that requires MFA based on conditions. For Group1, a policy assigned to Group1 that targets all cloud apps, uses the **Device platforms** condition with Android only, and grants access with **Require multifactor authentication**.",
        "For Group2, a policy assigned to Group2 that targets Office 365 Exchange Online, uses the **Locations** condition to include any location but exclude the corporate network (defined as a trusted named location), and requires MFA. Two policies in the same tool are also the solution with the least administrative effort."
      ],
      wrong: [
        ["Microsoft Entra Identity Protection", "Identity Protection policies require MFA or a password change based on sign-in risk or user risk. They cannot target a device platform or a particular app off the corporate network."],
        ["Microsoft Entra Privileged Identity Management (PIM)", "PIM controls the activation of privileged roles. It can require MFA when a role is activated, not when ordinary users sign in or open Exchange Online."],
        ["Per-user MFA", "Per-user MFA prompts the user on every sign-in. It cannot be limited to Android devices or to Exchange Online."],
        ["Microsoft Entra Security defaults", "Security defaults apply the same protections to the whole tenant and cannot be scoped to groups, platforms, apps or locations."]
      ],
      concept: "Conditional Access policies combine users, target apps and conditions such as device platform and location to decide when MFA is required.",
      takeaway: "MFA only for certain platforms, apps or locations: Conditional Access.",
      refs: [
        ["Microsoft Learn: What is Conditional Access?", "https://learn.microsoft.com/entra/identity/conditional-access/overview"],
        ["Microsoft Learn: Conditional Access conditions", "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-conditions"]
      ]
    }
  },
  {
    id: "Q270", source: 270, type: "single",
    domain: "tenant", topic: "Users, groups and licenses", difficulty: "Basic",
    stem: [
      "You have a Microsoft 365 E5 subscription.",
      "You need to create a mail-enabled contact.",
      "Which portal should you use?"
    ],
    options: [
      { key: "A", text: "the Microsoft 365 admin center" },
      { key: "B", text: "the Microsoft Teams admin center" },
      { key: "C", text: "the Intune admin center" },
      { key: "D", text: "the Microsoft Purview compliance portal" }
    ],
    answer: ["A"],
    explanation: {
      correct: [
        "A mail-enabled contact (mail contact) represents a person outside the organization who has an external email address. It appears in the global address list and can be added to distribution groups, but it cannot sign in to the tenant.",
        "In the Microsoft 365 admin center you create one under Users > Contacts > Add a contact, by entering the display name and the external email address. Mail contacts can also be created in the Exchange admin center or with the `New-MailContact` cmdlet, but of the portals offered, the Microsoft 365 admin center is the one that does it."
      ],
      wrong: [
        ["B", "The Teams admin center manages Teams policies, meetings, devices and calling. It does not create Exchange recipients."],
        ["C", "The Intune admin center manages devices and apps. It does not create recipients."],
        ["D", "The Purview compliance portal hosts compliance features such as retention, DLP and eDiscovery. It does not create mail contacts."]
      ],
      concept: "Mail contacts are Exchange Online recipients for external email addresses, managed from the Microsoft 365 admin center or the Exchange admin center.",
      takeaway: "Add an external address to the GAL: Microsoft 365 admin center > Users > Contacts.",
      refs: [
        ["Microsoft Learn: Manage mail contacts in Exchange Online", "https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-mail-contacts"],
        ["Microsoft Learn: About the Microsoft 365 admin center", "https://learn.microsoft.com/microsoft-365/admin/admin-overview/admin-center-overview"]
      ]
    }
  },
  {
    id: "Q271", source: 271, type: "yesno",
    domain: "identity", topic: "Privileged Identity Management", difficulty: "Advanced",
    stem: [
      "You have a Microsoft 365 subscription that contains the users shown in the following table.",
      { table: { head: ["Name", "Role", "Role assignment type"], rows: [
        ["User1", "Global Administrator", "Eligible"],
        ["User2", "Global Administrator", "Assigned"],
        ["User3", "Global Administrator", "Eligible"]
      ] } },
      "The Global Administrator role has the Privileged Identity Management (PIM) settings shown in the following table.",
      { table: { head: ["Setting", "State"], rows: [
        ["Activation maximum duration (hours)", "8 hour(s)"],
        ["On activation, require", "Azure MFA"],
        ["Require justification on activation", "Yes"],
        ["Require ticket information on activation", "No"],
        ["Require approval to activate", "No"],
        ["Expire eligible assignments after", "15 Days"]
      ] } },
      "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
      "NOTE: Each correct selection is worth one point."
    ],
    statements: [
      { text: "User1 must provide justification to activate the Global Administrator role." },
      { text: "User2 must perform multifactor authentication (MFA) to activate the Global Administrator role." },
      { text: "After eight hours, User3 will no longer be able to activate the Global Administrator role." }
    ],
    answer: [true, false, false],
    explanation: {
      correct: [
        "The activation settings of a role in PIM apply to users with an **eligible** assignment, who must activate the role before they can use it. **User1** is eligible, and the role requires justification on activation, so User1 must enter a reason every time the role is activated (Yes).",
        "**User2** has an Assigned (active) assignment: the role is already in effect, and there is nothing to activate. The MFA requirement on activation therefore never applies to User2 (No). **User3** is eligible. The 8-hour setting limits how long one activation lasts; when it ends, User3 can activate the role again. The eligibility itself is limited by the setting Expire eligible assignments after 15 Days, not by eight hours, so after eight hours User3 can still activate the role (No)."
      ],
      wrong: [
        ["Statement 1 — No", "Require justification on activation is set to Yes, and User1 has an eligible assignment, so every activation asks for a justification."],
        ["Statement 2 — Yes", "MFA on activation is required only when someone activates the role. An active (assigned) role is not activated, so User2 is never asked for MFA by PIM to use it."],
        ["Statement 3 — Yes", "Eight hours is the maximum duration of one activation, not the lifetime of the eligibility. User3 can activate again after an activation expires, until the eligible assignment itself expires."]
      ],
      concept: "PIM activation settings (MFA, justification, approval, maximum duration) apply to eligible assignments; active assignments are always in effect.",
      takeaway: "Activation duration limits one activation; eligible assignment expiration limits how long the user can keep activating.",
      refs: [
        ["Microsoft Learn: Configure Microsoft Entra role settings in Privileged Identity Management", "https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-how-to-change-default-settings"],
        ["Microsoft Learn: Activate a Microsoft Entra role in PIM", "https://learn.microsoft.com/entra/id-governance/privileged-identity-management/pim-how-to-activate-role"]
      ]
    }
  },
  {
    id: "Q272", source: 272, type: "dragdrop",
    domain: "identity", topic: "Passwords and SSPR", difficulty: "Intermediate",
    stem: [
      "You have an Azure subscription that is linked to a hybrid Microsoft Entra tenant.",
      "All users sync from Active Directory Domain Services (AD DS) to the tenant by using Express Settings in Microsoft Entra Connect.",
      "You plan to implement self-service password reset (SSPR).",
      "You need to ensure that when a user resets or changes a password, the password syncs with AD DS.",
      "Which actions should you perform in sequence? To answer, drag the appropriate actions to the correct order. Each action may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
      "NOTE: Each correct selection is worth one point."
    ],
    sourceLabel: "Actions",
    sources: [
      "From the Microsoft Entra admin center, configure on-premises integration password writeback.",
      "From the Microsoft Entra admin center, configure the authentication methods for SSPR.",
      "From the Microsoft Entra admin center, configure the registration settings for SSPR.",
      "Select Group writeback in Microsoft Entra Connect.",
      "Select Password writeback in Microsoft Entra Connect."
    ],
    targets: [
      { id: "t1", label: "Step 1:" },
      { id: "t2", label: "Step 2:" },
      { id: "t3", label: "Step 3:" }
    ],
    answer: { t1: 1, t2: 4, t3: 0 },
    explanation: {
      correct: [
        "SSPR first needs the authentication methods that users prove their identity with, such as the Authenticator app, a mobile phone or email, so you configure the **authentication methods for SSPR** in the Microsoft Entra admin center (Password reset > Authentication methods).",
        "Writing a reset or changed password back to AD DS is password writeback, and it takes two settings. Express Settings enable password hash synchronization but not writeback, so you run the Microsoft Entra Connect wizard again, choose to customize the synchronization options and **select Password writeback** among the optional features. Then, in the Microsoft Entra admin center, you **configure on-premises integration password writeback** (Password reset > On-premises integration > Enable password write back for synced users). The portal setting depends on Entra Connect being configured for writeback, which is why the Connect step comes first."
      ],
      wrong: [
        ["From the Microsoft Entra admin center, configure the registration settings for SSPR.", "Registration settings decide whether users are asked to register at sign-in and how often they reconfirm their information. They have working defaults and have no effect on whether passwords are written back to AD DS."],
        ["Select Group writeback in Microsoft Entra Connect.", "Group writeback writes groups from Microsoft Entra ID back to Active Directory. It has nothing to do with passwords."],
        ["On-premises integration before Password writeback in Entra Connect", "The writeback setting in the admin center relies on Entra Connect already having password writeback enabled, so the Connect step comes before it."]
      ],
      concept: "SSPR writeback needs Password writeback enabled in Microsoft Entra Connect and then in the on-premises integration settings of SSPR.",
      takeaway: "Passwords reset in the cloud reach AD DS only with password writeback: Entra Connect optional feature first, then SSPR on-premises integration.",
      refs: [
        ["Microsoft Learn: Tutorial: Enable Microsoft Entra self-service password reset writeback to an on-premises environment", "https://learn.microsoft.com/entra/identity/authentication/tutorial-enable-sspr-writeback"],
        ["Microsoft Learn: How does self-service password reset writeback work in Microsoft Entra ID?", "https://learn.microsoft.com/entra/identity/authentication/concept-sspr-writeback"]
      ]
    }
  }
);
