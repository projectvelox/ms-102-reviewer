/*
 * Question bank — exam metadata, skill areas and scenario sets.
 * This file is loaded first. The questions follow in bank-01.js, bank-02.js ...
 * (about 16 per file), each of which calls window.EXAM.questions.push(...).
 * Every bank file must be listed in index.html, in order.
 *
 * Text conventions used in every string of the bank:
 *   `text`   inline code
 *   **text** emphasis
 *   \n       line break (table cells)
 *
 * Question (all types):
 *   id          "Q001" ... unique, in source order
 *   source      question number in the PDF, unique and increasing. If the PDF's
 *               numbering restarts (per topic, for example), use the running
 *               position in the file instead.
 *   type        single | multi | yesno | dropdown | order | dragdrop | simulation
 *   domain      a key of `domains` below
 *   topic       short topic label, used for the performance breakdown
 *   difficulty  Basic | Intermediate | Advanced
 *   caseId, caseOrder   only for questions that belong to a scenario set
 *   stem        array of blocks. A string is a paragraph. Other blocks:
 *                 { code, label?, note? }            code, JSON, CLI, query
 *                 { table: { head, rows, numeric? } } numeric = right-aligned column indexes
 *                 { list: [] }                        bullet list
 *                 { image, alt }                      file in assets/exhibits/
 *                 { heading }  { note }
 *   explanation { correct: [paragraphs],
 *                 wrong: [[label, reason], ...],
 *                 concept, takeaway, logic?, refs: [[label, url]] }
 *
 * Per type:
 *   single / multi : options [{ key: "A", text?, code? }], answer ["B"] or ["B", "D"];
 *                    multi also needs select: <number of answers>.
 *                    explanation.wrong must have one entry per non-answer option,
 *                    labelled with the option key.
 *   yesno          : statements [{ text, code? }], answer [true, false, ...]
 *   dropdown       : fields [{ id, label, options: [] }], answer { id: optionIndex }.
 *                    Add template (code with {{id}} placeholders) when the
 *                    drop-downs sit inside code.
 *   order          : sourceLabel?, items [], answer [item indexes in sequence]
 *   dragdrop       : sourceLabel, sources [], targets [{ id, label }],
 *                    answer { id: sourceIndex }. Add template for targets inside code.
 *   simulation     : solution [blocks], the reference steps printed in the PDF. A lab
 *                    task has nothing to select; the user records a self-assessment
 *                    ("I can complete this task"), and answer is ["can"].
 *                    explanation.wrong is optional.
 *
 * `answer` is always the answer printed in the reference PDF.
 */
window.EXAM = {
  exam: {
    code: "MS-102",
    title: "Microsoft 365 Administrator",
    shortTitle: "MS-102 Practice Exam",
    passPercent: 70,
    secondsPerQuestion: 120
  },

  // Skill areas from the exam's official study guide: key -> label.
  domains: {
    tenant: "Deploy and manage a Microsoft 365 tenant",
    identity: "Implement and manage Microsoft Entra identity and access",
    security: "Manage security and threats by using Microsoft Defender XDR",
    compliance: "Manage compliance by using Microsoft Purview"
  },

  /*
   * Scenario sets and case studies: questions that share one scenario.
   * The scenario stays on screen in a tabbed pane while the questions change.
   * Shape:
   *
   *   "set-id": {
   *     id: "set-id",
   *     title: "Scenario set: short description",
   *     shortTitle: "Short name",
   *     noReturn: true,     // true when the PDF says you cannot return to the question
   *     sections: [         // one tab per section, text taken from the PDF
   *       { id: "overview", title: "Overview", blocks: [ ...stem blocks... ] },
   *       { id: "scenario", title: "Scenario", blocks: [ { heading: "Requirements" }, "..." ] },
   *       { id: "exhibit",  title: "Exhibit",  blocks: [ { code: "...", label: "..." } ] }
   *     ]
   *   }
   */
  cases: {
    "fabrikam": {
      id: "fabrikam",
      title: "Case study: Fabrikam, Inc.",
      shortTitle: "Fabrikam",
      sections: [
        {
          id: "overview", title: "Overview", blocks: [
            "Fabrikam, Inc. is an electronics company that produces consumer products. Fabrikam has 10,000 employees worldwide.",
            "Fabrikam has a main office in London and branch offices in major cities in Europe, Asia, and the United States."
          ]
        },
        {
          id: "existing-environment", title: "Existing Environment", blocks: [
            { heading: "Active Directory Environment" },
            "The network contains an Active Directory forest named fabrikam.com. The forest contains all the identities used for user and computer authentication. Each department is represented by a top-level organizational unit (OU) that contains several child OUs for user accounts and computer accounts.",
            "All users authenticate to on-premises applications by signing in to their device by using a UPN format of username@fabrikam.com.",
            "Fabrikam does NOT plan to implement identity federation.",
            { heading: "Network Infrastructure" },
            "Each office has a high-speed connection to the Internet.",
            "Each office contains two domain controllers. All domain controllers are configured as DNS servers.",
            "The public zone for fabrikam.com is managed by an external DNS server.",
            "All users connect to an on-premises Microsoft Exchange Server 2016 organization. The users access their email by using Outlook Anywhere, Outlook on the web, or the Microsoft Outlook app for iOS. All the Exchange servers have the latest cumulative updates installed.",
            "All shared company documents are stored on a Microsoft SharePoint Server farm."
          ]
        },
        {
          id: "requirements", title: "Requirements", blocks: [
            { heading: "Planned Changes" },
            "Fabrikam plans to implement a Microsoft 365 Enterprise subscription and move all email and shared documents to the subscription.",
            "Fabrikam plans to implement two pilot projects:",
            { list: [
              "Project1: During Project1, the mailboxes of 100 users in the sales department will be moved to Microsoft 365.",
              "Project2: After the successful completion of Project1, Microsoft Teams will be enabled in Microsoft 365 for the sales department users."
            ] },
            "Fabrikam plans to create a group named UserLicenses that will manage the allocation of all Microsoft 365 bulk licenses.",
            { heading: "Technical Requirements" },
            "Fabrikam identifies the following technical requirements:",
            { list: [
              "All users must be able to exchange email messages successfully during Project1 by using their current email address.",
              "Users must be able to authenticate to cloud services if Active Directory becomes unavailable.",
              "A user named User1 must be able to view all DLP reports from the Microsoft Purview compliance portal.",
              "Microsoft 365 Apps for enterprise applications must be installed from a network share only.",
              "Disruptions to email access must be minimized."
            ] },
            { heading: "Application Requirements" },
            "Fabrikam identifies the following application requirements:",
            { list: [
              "An on-premises web application named App1 must allow users to complete their expense reports online. App1 must be available to users from the My Apps portal.",
              "The installation of feature updates for Microsoft 365 Apps for enterprise must be minimized."
            ] },
            { heading: "Security Requirements" },
            "Fabrikam identifies the following security requirements:",
            { list: [
              "After the planned migration to Microsoft 365, all users must continue to authenticate to their mailbox and to SharePoint sites by using their UPN.",
              "The membership of the UserLicenses group must be validated monthly. Unused user accounts must be removed from the group automatically.",
              "After the planned migration to Microsoft 365, all users must be signed in to on-premises and cloud-based applications automatically.",
              "The principle of least privilege must be used."
            ] }
          ]
        }
      ]
    },
    "litware": {
      id: "litware",
      title: "Case study: Litware, Inc.",
      shortTitle: "Litware",
      sections: [
        {
          id: "overview", title: "Overview", blocks: [
            "Litware, Inc. is a consulting company that has a main office in Montreal and a branch office in Seattle.",
            "Litware collaborates with a third-party company named A. Datum Corporation."
          ]
        },
        {
          id: "environment", title: "Environment", blocks: [
            { heading: "On-Premises Environment" },
            "The network of Litware contains an Active Directory domain named litware.com. The domain contains three organizational units (OUs) named LitwareAdmins, Montreal Users, and Seattle Users and the users shown in the following table.",
            { table: {
              head: ["Name", "OU"],
              rows: [
                ["Admin1", "LitwareAdmins"],
                ["Admin2", "LitwareAdmins"],
                ["Admin3", "LitwareAdmins"],
                ["Admin4", "LitwareAdmins"]
              ]
            } },
            "The domain contains 2,000 Windows 10 Pro devices and 100 servers that run Windows Server 2019.",
            { heading: "Cloud Environment" },
            "Litware has a pilot Microsoft 365 subscription that includes Microsoft Office 365 Enterprise E3 licenses and Azure AD Premium P2 licenses.",
            "The subscription contains a verified DNS domain named litware.com.",
            "Azure AD Connect is installed and has the following configurations:",
            { list: [
              "Password hash synchronization is enabled.",
              "Synchronization is enabled for the LitwareAdmins OU only."
            ] },
            "Users are assigned the roles shown in the following table.",
            { table: {
              head: ["Name", "Role"],
              rows: [
                ["Admin1", "Global Administrator"],
                ["Admin2", "Helpdesk Administrator"],
                ["Admin3", "Security Administrator"],
                ["Admin4", "User Administrator"]
              ]
            } },
            "Self-service password reset (SSPR) is enabled.",
            "The Azure AD tenant has Security defaults enabled."
          ]
        },
        {
          id: "problem-statements", title: "Problem Statements", blocks: [
            "Litware identifies the following issues:",
            { list: [
              "Admin1 cannot create conditional access policies.",
              "Admin4 receives an error when attempting to use SSPR.",
              "Users access new Office 365 service and feature updates before the updates are reviewed by Admin2."
            ] }
          ]
        },
        {
          id: "requirements", title: "Requirements", blocks: [
            { heading: "Planned Changes" },
            "Litware plans to implement the following changes:",
            { list: [
              "Implement Microsoft Intune.",
              "Implement Microsoft Teams.",
              "Implement Microsoft Defender for Office 365.",
              "Ensure that users can install Office 365 apps on their device.",
              "Convert all the Windows 10 Pro devices to Windows 10 Enterprise ES.",
              "Configure Azure AD Connect to sync the Montreal Users OU and the Seattle Users OU."
            ] },
            { heading: "Technical Requirements" },
            "Litware identifies the following technical requirements:",
            { list: [
              "Administrators must be able to specify which version of an Office 365 desktop app will be available to users and to roll back to previous versions.",
              "Only Admin2 must have access to new Office 365 service and feature updates before they are released to the company.",
              "Litware users must be able to invite A. Datum users to participate in the following activities:",
              "Join Microsoft Teams channels.",
              "Join Microsoft Teams chats.",
              "Access shared files.",
              "Just in time access to critical administrative roles must be required.",
              "Microsoft 365 incidents and advisories must be reviewed monthly.",
              "Office 365 service status notifications must be sent to Admin2.",
              "The principle of least privilege must be used."
            ] }
          ]
        }
      ]
    },
    "series-user2-upn": {
      id: "series-user2-upn",
      title: "Scenario set: User2 fails to authenticate to Azure AD",
      shortTitle: "User2 sign-in",
      noReturn: true,
      sections: [
        {
          id: "overview", title: "Overview", blocks: [
            "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
            "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen."
          ]
        },
        {
          id: "scenario", title: "Scenario", blocks: [
            "Your network contains an on-premises Active Directory domain named contoso.com. The domain contains the users shown in the following table.",
            { table: {
              head: ["Name", "UPN suffix"],
              rows: [
                ["User1", "Contoso.com"],
                ["User2", "Fabrikam.com"]
              ]
            } },
            "The domain syncs to an Azure AD tenant named contoso.com as shown in the exhibit. (Click the Exhibit tab.)",
            "User2 fails to authenticate to Azure AD when signing in as User2@fabrikam.com.",
            "You need to ensure that User2 can access the resources in Azure AD."
          ]
        },
        {
          id: "exhibit", title: "Exhibit", blocks: [
            { image: "case-series-user2-upn-connect-status.png", alt: "Azure AD Connect status for the contoso.com tenant. PROVISION FROM ACTIVE DIRECTORY: Azure AD Connect cloud provisioning, 'This feature allows you to manage provisioning from the cloud.', link Manage provisioning (Preview). Azure AD Connect sync: Sync Status Enabled; Last Sync Less than 1 hour ago; Password Hash Sync Enabled. USER SIGN-IN: Federation Disabled, 0 domains; Seamless single sign-on Enabled, 1 domain; Pass-through authentication Enabled, 2 agents." }
          ]
        }
      ]
    },
    "series-sync-errors": {
      id: "series-sync-errors",
      title: "Scenario set: 10 user accounts in an OU are not synchronized",
      shortTitle: "Unsynchronized accounts",
      noReturn: true,
      sections: [
        {
          id: "overview", title: "Overview", blocks: [
            "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
            "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen."
          ]
        },
        {
          id: "scenario", title: "Scenario", blocks: [
            "Your network contains an Active Directory domain.",
            "You deploy an Azure AD tenant.",
            "Another administrator configures the domain to synchronize to Azure AD.",
            "You discover that 10 user accounts in an organizational unit (OU) are NOT synchronized to Azure AD. All the other user accounts synchronized successfully.",
            "You review Azure AD Connect Health and discover that all the user account synchronizations completed successfully.",
            "You need to ensure that the 10 user accounts are synchronized to Azure AD."
          ]
        }
      ]
    },
    "series-secadmin1": {
      id: "series-secadmin1",
      title: "Scenario set: SecAdmin1 must manage Defender for Office 365 policies",
      shortTitle: "SecAdmin1 role",
      noReturn: true,
      sections: [
        {
          id: "overview", title: "Overview", blocks: [
            "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
            "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen."
          ]
        },
        {
          id: "scenario", title: "Scenario", blocks: [
            "You have a Microsoft 365 E5 subscription.",
            "You create an account for a new security administrator named SecAdmin1.",
            "You need to ensure that SecAdmin1 can manage Microsoft Defender for Office 365 settings and policies for Microsoft Teams, SharePoint, and OneDrive."
          ]
        }
      ]
    },
    "series-password-policy": {
      id: "series-password-policy",
      title: "Scenario set: security solution for synchronized identities",
      shortTitle: "Synchronized identities",
      noReturn: true,
      sections: [
        {
          id: "overview", title: "Overview", blocks: [
            "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.",
            "After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen."
          ]
        },
        {
          id: "scenario", title: "Scenario", blocks: [
            "Your network contains an Active Directory forest.",
            "You deploy Microsoft 365.",
            "You plan to implement directory synchronization.",
            "You need to recommend a security solution for the synchronized identities. The solution must meet the following requirements:",
            { list: [
              "Users must be able to authenticate successfully to Microsoft 365 services if Active Directory becomes unavailable.",
              "User passwords must be 10 characters or more."
            ] }
          ]
        }
      ]
    },
    "series-mdo-policy": {
      id: "series-mdo-policy",
      title: "Scenario set: balanced baseline threat policy in Defender for Office 365",
      shortTitle: "Baseline threat policy",
      noReturn: true,
      sections: [
        {
          id: "overview", title: "Overview", blocks: [
            "Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.",
            "After you answer a question in this section, you will NOT be able to return. As a result these questions do not appear on the Review Screen."
          ]
        },
        {
          id: "scenario", title: "Scenario", blocks: [
            "You have a Microsoft 365 E5 subscription and use Microsoft Defender for Office 365.",
            "You need to implement a threat policy that will apply a balanced baseline protection profile to protect against spam, phishing, and malware."
          ]
        }
      ]
    },
    "series-device-policy": {
      id: "series-device-policy",
      title: "Scenario set: automatic onboarding to Defender for Endpoint at Intune enrollment",
      shortTitle: "Defender onboarding",
      noReturn: true,
      sections: [
        {
          id: "overview", title: "Overview", blocks: [
            "Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.",
            "After you answer a question in this section, you will NOT be able to return. As a result these questions do not appear on the Review Screen."
          ]
        },
        {
          id: "scenario", title: "Scenario", blocks: [
            "You have a Microsoft 365 E5 subscription.",
            "You integrate Microsoft Defender for Endpoint with Microsoft Intune.",
            "You need to ensure that devices automatically onboard to Defender for Endpoint when they are enrolled in Intune."
          ]
        }
      ]
    },
    "series-cloud-apps": {
      id: "series-cloud-apps",
      title: "Scenario set: OAuth app policies in Defender for Cloud Apps",
      shortTitle: "OAuth app policies",
      noReturn: true,
      sections: [
        {
          id: "overview", title: "Overview", blocks: [
            "Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.",
            "After you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen."
          ]
        },
        {
          id: "scenario", title: "Scenario", blocks: [
            "You have a Microsoft 365 E5 subscription.",
            "You are implementing Microsoft Defender for Cloud Apps.",
            "You need to ensure that you can create OAuth app policies."
          ]
        }
      ]
    }
  },

  questions: []
};
