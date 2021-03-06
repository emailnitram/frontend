with (scope('Privacy', 'App')) {

  route('#privacypolicy', function() {
    render(

      breadcrumbs(
        a({ href: '#' }, "Bountysource"),
        "Privacy Policy"
      ),

      h2({ style: 'text-align: center'}, "Bountysource"),
      h2({ style: 'text-align: center'}, "Privacy Policy"),
      
      p("Bountysource's Privacy Policy is designed to provide clarity about the information we collect and how we use it to provide a better experience. By using our Website or Services or agreeing to our Terms of Service, you consent to our collection, storage, use and disclosure of your personal information as described in this Privacy Policy."),
      
      //table of contents
      
      h1('1. Introduction'),
      
      p('We provide the Bountysource services (the "', b('Services'), '") through our website at www.Bountysource.com and related websites (the "', b('Websites'), '"). This Privacy Policy describes:'),
      
      ul(
          li('the information we collect, how we do so and the purposes of our collection'),
          li('how we use and with whom we share such information'),
          li('how you can access and update such information'),
          li('the choices you can make about how we collect, use and share your information'),
          li('how we protect the information we store about you')
        ),
        
      h1('2. Information We Collect'),
      
      p('When you use our Services or Websites, we may collect information about you as described below:'),
      
      p({style: 'padding-left: 15px'}, b('2.1 Registration Information')),
      
      p({style: 'padding-left: 15px'}, 'When you "register" with us, you may be required to provide the following information: your age or birthday (for age screening and/or to better understand who our users are); your first and last names; your e-mail address; your mailing address; a password and other information that helps us confirm that it is you accessing your account. We collect the information that you provide for purposes of enabling you to use our Service and Website.'),
      
      p({style: 'padding-left: 15px'}, 'We may also offer you the option to complete a user profile that is visible to other Bountysource users. Your user profile may include: a profile photo; username(s); gender; biographic details that you provide; and links to your profiles on various social networks.'),
      
      p({style: 'padding-left: 15px'}, 'Your first and last names and profile picture are considered "public" on Bountysource Websites. Please be aware that search engines may index this publicly available information. When we offer profiles, we will also offer functionality that allows you to opt-out of public indexing of your public profile information.'),
      
      p({style: 'padding-left: 15px'}, 'We may also offer you the ability to import your address book or social network contacts or manually enter e-mail addresses so that you can (i) locate your contacts on Bountysource; and (ii) invite those contacts to join Bountysource. If you elect to use this feature, we will access or store those contacts for purposes of helping you and your contacts make connections on our Website. If you do not want your contacts accessed or stored, please do not use this feature of our Service. Passwords provided to Bountysource for the purpose of accessing your address book or social network contacts will not be stored.'),
      
      p({style: 'padding-left: 15px'}, b('2.2 Payment Information')),

      p({style: 'padding-left: 15px'}, 'If you make a payment to us, or if we make a payment to you, we will collect the credit card, billing, account and banking information needed to receive or send payments. This information may include your bank name, account number, credit card information, postal and e-mail addresses.'),
      
      p({style: 'padding-left: 15px'}, b('2.3 Customer Support Correspondence')),
      
      p({style: 'padding-left: 15px'}, 'When you ask for assistance from our Customer Support team, we will collect and store the contact information you provide (generally your name and e-mail address), information about your Services, and the reason for your inquiry. We will also store the correspondence to and from you about your inquiry.'),
      
      p({style: 'padding-left: 15px'}, b('2.4 Technical and Usage Information')),
      
      p({style: 'padding-left: 15px'}, 'When you access our Website or use our Services, we collect (i) certain technical information about your mobile device or computer system, including IP Address and mobile device ID; and (ii) usage statistics about your use of our Services. This information is typically collected through the use of server log files or web log files ("', b('Log Files'), '"), mobile device software development kits and tracking technologies like browser cookies. We collect this information to enable us to understand our user base better and to analyze certain types of technical information. For more information on how we utilize cookies and other tracking technologies please review the "Cookies and Automated Information Collection" portion of Section 3.'),
      
      p({style: 'padding-left: 15px'}, b('2.5 Information About Issues, Solutions and Bounties')),
      
      p({style: 'padding-left: 15px'}, 'To enable you to use our Website and Services, we also collect information about the Issues that are posted on our Service, the Solutions that are submitted through our Service, and the Bounties that are posted and paid via our Service.  We associate information about Issues, Solutions and Bounties with particular users (e.g., Developers of a particular Solution, or Backers of a particular Issue).'),
      
      h1('3. How We Collect Information About You'),
      
      p('We may collect information about you in any one or more of the following ways:'),
      
      p({style: 'padding-left: 15px'}, b('3.1 Information about Your Activity on our Websites and Services')),
      
      p({style: 'padding-left: 15px'}, 'When you use our Services or Websites, we collect and store certain information that you provide directly or through a third party website that is offering our Services. To provide a better user experience, we also collect information about your interaction with other users and the Service. The bulk of this information is collected and stored through the use of Log Files, which are files on our web servers that record actions taken on our Website and Services.'),
      
      p({style: 'padding-left: 15px'}, b('3.2 Communications Features')),
      
      p({style: 'padding-left: 15px'}, 'You may be able to take part in certain activities on our Websites or Services that give you the opportunity to communicate or share information not just with Bountysource, but also with other users of our Services. These include:'),
      
      p({style: 'padding-left: 15px'}, 
        ul(
          li('posting information about a particular Issue or Solution'),
          li('participating in forums and message boards'),
          li('posting public comments to other users\' profiles'),
          li('sending private messages or invitations to other users, either directly on our Website or to their e-mail accounts'),
          li('chat with other users'),
          li('posting photos')
          )
      ),
      
      p({style: 'padding-left: 15px'}, 'We may record and store archives of these communications on our servers to protect the safety and well being of our users and our rights and property in connection with the Service. You acknowledge and consent to the recording and storage of such communications for these purposes.'),
      
      p({style: 'padding-left: 15px'}, b('3.3 Cookies and Automated Information Collection')),
      
      p({style: 'padding-left: 15px'}, 'When you access our Websites and Services, we collect certain technical information in order to (i) analyze the usage of our Websites and Services; (ii) provide a more personalized experience; and (iii) manage advertising. We and service providers acting on our behalf, such as Google Analytics, use Log Files and tracking technologies to collect and analyze certain types of technical information, including cookies, IP addresses, device type, device identifiers, browser types, browser language, referring and exit pages, and URLs, platform type, the number of clicks, domain names, landing pages, pages viewed and the order of those pages, the amount of time spent on particular pages, and the date and time of activity on our Websites or Services, and other similar information.'),
      
      p({style: 'padding-left: 15px'}, 'We may also employ other technologies including (i) web beacons, which allow us to know if a certain page was visited or whether an e-mail was opened; (ii) tracking pixels, which allow us to advertise more efficiently by excluding our current users from certain promotional messages, identifying the source of a new installation or delivering ads to you on other websites; and (iii) local shared objects also known as flash cookies, which help us to prevent fraud, remember your site preferences and speed up load times.'),
      
      p({style: 'padding-left: 15px'}, 'You can set your web browser to warn you about attempts to place cookies on your computer or limit the type of cookies you allow. Flash cookies operate differently than browser cookies and cookie management tools available in a web browser may not remove flash cookies. To learn more about and manage flash cookies you can visit ', a({ target: '_blank', href: 'http://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html' }, "http://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html"), '. If you disable cookies, you may lose some of the features and functionality of our Services, as Bountysource cookies are necessary to track and enhance your activities. Please note that companies delivering advertisements on our Websites may also use cookies or other technologies, and those practices are subject to their own policies.'),
      
      p({style: 'padding-left: 15px'}, b('3.4 Other Sources')),
      
      p({style: 'padding-left: 15px'}, 'We may collect or receive information about you from other sources including (i) other Bountysource users who choose to upload their email contacts; (ii) social networks (if you use these features of our Service); (iii) repositories such as GitHub; and (iv) third party information providers. This information will be used to supplement your profile, to help you and your contacts connect, to help manage and offer Service you request, and to offer you Services in which you may be interested. It may be combined with other information we collect.'),
      
      p({style: 'padding-left: 15px'}, b('3.5 Repositories')),
      
      p({style: 'padding-left: 15px'}, 'We may also collect or receive data and information about you from repositories (e.g., GitHub). This information might include the date and time when you submitted a proposed Solution to a particular Issue.  We collect this information to enable us to efficiently administer our Services.'),
      
      h1('4. How We Use the Information We Collect'),
      
      p('In general, we collect, store and use your information to provide you with a safe, smooth, efficient, and customized experience. For example, we may use information collected from you in any one or more of the following ways:'),
      
      ul(
          li('to create your accounts and allow use of our Services'),
          li('to provide technical support and respond to user inquiries'),
          li('to prevent fraud or potentially illegal activities'),
          li('to enforce our Terms of Service'),
          li('to notify users of updates to our Services, Terms of Service, or other rules and policies'),
          li('to solicit input and feedback to improve our Services and customize your user experience'),
          li('to inform users about new Services or promotional offers'),
          li('to assist in resolving disputes and administering the use of our Services'),
          li('to engage in commonly accepted practices, such as contacting you at the email address we have on file if you are a potential winner in a contest or sweepstakes'),
          li('to identify and suggest connections with other Bountysource users'),
          li('to enable user-to-user communications'),
          li('to deliver and target advertising')
        ),
      
      p('One important use of your information is communication. If you have provided your e-mail address to Bountysource, we\'ll use it to respond to (i) customer support inquiries, and (ii) keep you informed of your account activity. Some messages, such as invites for friends to join Bountysource, may include your name and profile photo. We may also send promotional e-mail messages and promotional SMS messages ("', b('Promotional Communications'), '") directly or in partnership with parties other than Bountysource. Each Promotional Communication will generally offer recipients choices about receiving additional messages.'),
      
      h1('5. Sharing of Your Information'),      
      
      p('We will share your information (in some cases personal information) with third parties, that is parties other than Bountysource, in the following circumstances:'),
      
      p({style: 'padding-left: 15px'}, b('5.1 Third Party Service Providers')),
      
      p({style: 'padding-left: 15px'}, 'We will provide your information to third party companies to perform services on our behalf, including payment processing, data analysis, e-mail delivery, hosting services, customer service and to assist us in our marketing efforts. We direct all such third party service providers to maintain the confidentiality of the information disclosed to them and to not use your information for any purpose other than to provide services on Bountysource\'s behalf.'),
      
      p({style: 'padding-left: 15px'}, b('5.2 Friends and Other Bountysource Users')),
      
      p({style: 'padding-left: 15px'}, 'The Service supports and may encourage interaction among users. In most Bountysource Services your social networks friends will see your name, profile photo and descriptions of your activity. In many Bountysource Services friends and other users will be able to see your profile, which may include your name and your profile photo. Other users may also be able to send you communications through our or the related social networks’ communication channels.'),
      
      p({style: 'padding-left: 15px'}, b('5.3 Advertising of Third Party Products and Services')),
      
      p({style: 'padding-left: 15px'}, 'We do not actively share personal information with third party advertisers for their direct marketing purposes unless you give us your consent. We may share (i) aggregated information (information about you and other users collectively, but not specifically identifiable to you); (ii) anonymous information; and (iii) certain technical information (including IP Addresses and mobile device IDs) to develop and deliver targeted advertising in the Service and on the websites of third parties. We may also allow advertisers to collect these types of information within the Service and they may share it with us. Advertisers may collect this information through the use of tracking technologies like browser cookies and web beacons. The information collected may be used to offer you targeted ad-selection and delivery in order to personalize your user experience by ensuring that advertisements for products and services you see will appeal to you, a practice known as behavioral advertising, and to undertake web analytics (i.e. to analyze traffic and other end user activity to improve your experience). To learn more about behavioral advertising or to opt-out of this type of advertising for participating ad networks, you can visit the ', a({ target: '_blank', href: 'http://www.networkadvertising.org/managing/opt_out.asp' }, "Network Advertising Initiative"), ' or the ', a({ target: '_blank', href: 'http://www.aboutads.info/choices/' }, "Digital Advertising Alliance"), '.'),

      p({style: 'padding-left: 15px'}, b('5.4 Safety, Security and Compliance with Law')),
      
      p({style: 'padding-left: 15px'}, 'Your information, and the contents of all of your online communications (including without limitation IP addresses and your personal information) may be accessed and monitored as necessary to provide the Service and may be disclosed: (i) when we have a good faith belief that we are required to disclose the information in response to legal process (for example, a court order, search warrant or subpoena); (ii) to satisfy any applicable laws or regulations (iii) where we believe that the Service is being used in the commission of a crime, including to report such criminal activity or to exchange information with other companies and organizations for the purposes of fraud protection and credit risk reduction; (iv) when we have a good faith belief that there is an emergency that poses a threat to the health and/or safety of you, another person or the public generally; and (v) in order to protect our rights or property, including to enforce our ', a({ target: '_blank', href: '#termsofservice' }, "Terms of Service"), ' or other agreements between you and us.'),
      
      p({style: 'padding-left: 15px'}, b('5.5 Sale or Merger')),
      
      p({style: 'padding-left: 15px'}, 'In the event that Bountysource undergoes a business transition, such as a merger, acquisition by another company, or sale of all or a portion of its assets, we may transfer all of your information, including personal information, to the successor organization in the transition.'),
      
      p({style: 'padding-left: 15px'}, b('5.6 Affiliates')),
      
      p({style: 'padding-left: 15px'}, 'As part of our Services, we may transfer data to or from our subsidiaries, parent companies, joint ventures and other corporate entities under common ownership (each an "', b('Affiliate'), '") from time to time for our legitimate business purposes. In such cases, your information may be transferred between us and our Affiliate to enable us or our Affiliate to provide our Services.'),
      
      p({style: 'padding-left: 15px'}, b('5.7 Anonymous or Aggregated Information')),
      
      p({style: 'padding-left: 15px'}, 'Our collection, use, and disclosure of anonymous or aggregated information are not subject to any of the restrictions in this Privacy Policy.'),
      
      h1('6. Our Policies Concerning Children'),
      
      p('Our Websites and Services are not intended for children under the age of 13 and we do not knowingly collect any personal information from such children. Children under the age of 13 should not use our Websites or Services at any time. In the event that we learn that we have inadvertently gathered personal information from children under the age of 13, we will take reasonable measures to promptly erase such information from our records.'),
      
      h1('7. How to Access and Update Your Information'),
      
      p({style: 'padding-left: 15px'}, b('7.1 Information We Receive From Social Networks')),
      
      p({style: 'padding-left: 15px'}, 'To manage the information Bountysource receives about you from a social network where you use our Services, you will need to follow the instructions at that site for updating your information and changing your privacy settings. The privacy management tools for various sites are below. You can manage certain aspects of information collection and use by going to the settings of your (mobile) device and reviewing the permissions of each application.'),
      
      p({style: 'padding-left: 15px'}, 'Facebook privacy information can be found ', a({ target: '_blank', href: 'http://www.facebook.com/settings/?tab=privacy' }, "here"), '.'),
      p({style: 'padding-left: 15px'}, 'Google+ privacy information can be found ', a({ target: '_blank', href: 'https://plus.google.com/u/0/settings/privacy?hl=en&tab=4' }, "here"), '.'),
      p({style: 'padding-left: 15px'}, 'Twitter privacy information can be found ', a({ target: '_blank', href: 'https://twitter.com/privacy' }, "here"), '.'),
      p({style: 'padding-left: 15px'}, 'GitHub privacy information can be found ', a({ target: '_blank', href: 'https://help.github.com/articles/github-privacy-policy' }, "here"), '.'),
      
      p({style: 'padding-left: 15px'}, 'Once Bountysource receives your information from a social network, that information is stored and used by Bountysource in accordance with this Privacy Policy, and you may access and update that information as described below. Accounts created with Bountysource are considered active until we receive a user request to delete them or deactivate them.'),
      
      p({style: 'padding-left: 15px'}, b('7.2 Other Methods of Accessing and Controlling your Information')),
      
      p({style: 'padding-left: 15px'}, 'If you no longer want Bountysource to make active use of your information, you may send an e-mail to ', a({ href: 'mailto:support@bountysource.com' }, "support@bountysource.com"), '. Place "Delete My Account" in the subject line and include your first name, last name, and e-mail address in the body of the e-mail. We will respond to your request within thirty (30) days. Please note that certain records, for example those pertaining to payments or customer service matters, will be retained for legal and accounting purposes. If you have sent or posted content on the Service, we may not be able to delete it.'),

      p({style: 'padding-left: 15px'}, 'You may change your e-mail preferences at any time, by visiting your e-mail preference page in your online account.'),
      
      p({style: 'padding-left: 15px'}, 'If you wish to review or change the information Bountysource has about you, or if you have additional questions about this Privacy Policy, contact us at ', a({ href: 'mailto:support@bountysource.com' }, "support@bountysource.com"), '.'),
      
      h1('8. Your Sharing and Messaging Options'),
      
      p({style: 'padding-left: 15px'}, b('8.1 Opting Out of Promotional Communications')),
      
      p({style: 'padding-left: 15px'}, 'You can choose to opt out of receiving additional promotional e-mails from Bountysource by clicking on the "unsubscribe" link in any such e-mail. Please note that once we receive your request, it may take an additional period of time for your opt-out to become effective. Your unsubscribe or e-mail preference change will be processed promptly, and in no event longer than 10 business days.'),
      
      p({style: 'padding-left: 15px'}, b('8.2 Opting Out of Other Communications')),
      
      p({style: 'padding-left: 15px'}, 'You can opt out of receiving SMS messages by texting STOP to the number we send from for that particular SMS program. When we receive an opt-out message from you for SMS messages, we may send a message confirming our receipt of your opt-out.'),
      
      p({style: 'padding-left: 15px'}, b('8.3 Essential Communications')),
      
      p({style: 'padding-left: 15px'}, 'Note that if you opt-out of our Promotional Communications or other forms of communication, we may still e-mail or communicate with you from time to time if we need to provide you with information or if we need to request information from you with respect to a transaction initiated by you or for other legitimate non-marketing reasons.'),
      
      h1('9. International Transfers'),
      
      p('If you are visiting this website from a country other than the country in which our servers are located (the United States), your communications with us may result in the transfer of information across international boundaries.  By visiting this website and communicating electronically with us, you consent to such transfers.'),
      
      h1('10. Privacy Policies of Linked Sites and Advertisers'),
      
      p('Our Website and Services may contain site links or advertisements from companies other than Bountysource that may link to their own websites. For example, our Service works in conjunction with Repositories such as GitHub, but we are not affiliated with these Repositories in any legal or corporate sense. We are not responsible for the privacy practices or the content of such websites. If you have any questions about how these other websites use your information, you should review their policies and contact them directly.'),
      
      h1('11. Security of Your Information'),
      
      p('Bountysource implements reasonable security measures to protect the security of your information both online and offline, and we are committed to the protection of customer information.'),
            
      p({style: 'padding-left: 15px'}, '11.1 User account information is protected by the password each member uses to access their online account. It is important that you protect and maintain the security of your account and that you immediately notify us of any unauthorized use of your account. If you forget the password to your Bountysource account, the Website allows you to request that instructions be sent to you that explain how to reset your password. When you sign into your account or enter payment information (such as a credit card number when purchasing virtual currency), we encrypt the transmission of that information using secure socket layer technology.'),
      
      p({style: 'padding-left: 15px'}, '11.2 While we take reasonable precautions against possible security breaches of our Websites and our customer databases and records, no website or Internet transmission is completely secure, and we cannot guarantee that unauthorized access, hacking, data loss, or other breaches will never occur. We urge you to take steps to keep your personal information safe (including your account password), and to log out of your account after use. If your social networks account is hacked, this may lead to unauthorized use of your Bountysource account, so be careful to keep your account information secure. If you have questions about the security of our Websites, please contact us at ', a({ href: 'mailto:support@bountysource.com' }, "support@bountysource.com"), '.'),
      
      p({style: 'padding-left: 15px'}, '11.3 Unfortunately, the transmission of information over the Internet is not completely secure. Although we strive to protect your personal data, we cannot guarantee the security of your data while it is being transmitted to our Website; any transmission is at your own risk. Once we have received your information, we have procedures and security features in place to try to prevent unauthorized access.'),
      
      h1('12. Changes to Our Privacy Policy'),
      
      p('If we decide to make material changes to our Privacy Policy, we will notify you and other users by placing a notice on Bountysource.com or by sending you a notice to the e-mail address we have on file for you. We may supplement this process by placing notices in our Services and on other Bountysource Websites. You should periodically check ', a({ target: '_blank', href: 'https://www.bountysource.com' }, "www.bountysource.com"), ' and this privacy page for updates.'),
      
      h1('13. Your California Privacy Rights'),
      
      p('We do not share personal information with third parties for their direct marketing purposes unless you affirmatively agree to such disclosure, typically by "opting in" to receive information from a third party that is participating in a sweepstakes or other promotion on our Website. If you do ask us to share your personal information with a third party for its marketing purposes, we will only share information in connection with that specific promotion, as we do not share information with any third party (other than our service providers) on a continual basis. To prevent disclosure of your personal information for use in direct marketing by a third party, do not opt in to such use when you provide personal information on one of our Websites.'),
      
      p('Users in certain jurisdictions have a right to access personal information held about themselves. Your right of access can be exercised in accordance with applicable law. Please submit any requests for access to your personal data in writing to ', a({ href: 'mailto:support@bountysource.com' }, "support@bountysource.com"), '.'),
      
      h1('14. Contact Us'),
      
      p('If you have any questions, comments or concerns regarding our Privacy Policy and/or practices, please e-mail us at ', a({ href: 'mailto:support@bountysource.com' }, "support@bountysource.com"), '.'),
      
      p('Bountysource Inc.',
        br(),
        '548 Market Street #40189, San Francisco, CA 94104-5401'
        ),
      
      p(i('Effective Date of Revision: March 7, 2013'))
    );
  });
}