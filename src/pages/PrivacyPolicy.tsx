import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 font-body text-sm text-gray hover:text-accent transition-colors mb-6"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4">
            Privacy Policy
          </h1>
          <div className="text-gray font-body mb-6">
            <p className="font-semibold text-dark mb-2">Ramen Capital Ltd</p>
            <p>Trading as: Ramen | Real Estate Photography</p>
            <p>Address: 67a Surbiton Road, Kingston upon Thames, KT1 2HG</p>
            <p>Email: ramen@ramenstudios.co.uk</p>
            <p>Phone: 07780038076</p>
            <p className="mt-4 text-sm">Last Updated: December 13, 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none font-body text-gray leading-relaxed">
          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">1. Introduction</h2>
            <p className="mb-4">
              This Privacy Policy explains how <strong>Ramen Capital Ltd</strong> (hereinafter "we," "us," "our," or "the Company") collects, uses, processes, stores, and protects your personal data when you engage our real estate photography services or interact with our website.
            </p>
            <p className="mb-4">
              We are committed to compliance with the <strong>UK General Data Protection Regulation (UK GDPR)</strong> and the <strong>Data Protection Act 2018</strong>. This policy applies to all clients, website visitors, and individuals whose data we process.
            </p>
            <p className="mb-4">
              <strong>Last Updated:</strong> December 13, 2025
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">2. Information We Collect</h2>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">2.1 Information You Provide Directly</h3>
            <p className="mb-4">When you book our services or contact us, we may collect:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Contact Information:</strong> Name, phone number, email address</li>
              <li><strong>Business Information:</strong> Company/agency name, business type, job title</li>
              <li><strong>Property Details:</strong> Property address, postcode, property type, selling/renting information</li>
              <li><strong>Communication Records:</strong> Emails, messages, phone call notes, WhatsApp conversations</li>
              <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely through regulated payment providers; we do not store full credit card numbers)</li>
              <li><strong>Service Preferences:</strong> Preferred communication method, special requests, accessibility requirements</li>
              <li><strong>Booking Details:</strong> Shoot date, time, deliverables requested, property access instructions</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">2.2 Information Collected Automatically</h3>
            <p className="mb-4">When you visit our website or communicate with us electronically:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Technical Data:</strong> IP address, browser type, device type, operating system</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on site, links clicked, referral source</li>
              <li><strong>Communication Data:</strong> Timestamps of emails/messages, read receipts, delivery confirmations</li>
              <li><strong>Location Data:</strong> General location inferred from property addresses (not GPS tracking)</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">2.3 Information from Third Parties</h3>
            <p className="mb-4">We may receive information about you from:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Realtor/Agent:</strong> Property details, seller contact information (with consent)</li>
              <li><strong>Payment Providers:</strong> Confirmation of successful transaction, payment method details</li>
              <li><strong>Email Providers:</strong> Delivery status, bounce notifications</li>
              <li><strong>Cloud Services:</strong> File access logs, storage usage analytics</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">2.4 Information Visible in Photographs</h3>
            <p className="mb-4">When we photograph properties, images may incidentally include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>People in background</strong> (passers-by, neighbors)</li>
              <li><strong>Identifying information</strong> (vehicle registration plates, personal documents, artwork with identifying markers)</li>
              <li><strong>Property-specific details</strong> (address markers, neighboring properties)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">3. Legal Basis for Processing</h2>
            <p className="mb-4">We process your personal data under the following legal bases (UK GDPR Article 6):</p>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">3.1 Contractual Necessity</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Processing is necessary to perform our service contract (booking, delivery of images, payment processing)</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">3.2 Legitimate Interest</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Marketing and promotional communications (where you have not objected)</li>
              <li>Fraud prevention and security</li>
              <li>Legal compliance and record-keeping</li>
              <li>Business operations and efficiency</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">3.3 Legal Obligation</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Tax compliance (VAT, income tax records)</li>
              <li>Anti-money laundering regulations</li>
              <li>Court orders or regulatory requests</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">3.4 Consent</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Using your image in portfolio or case studies (explicit opt-in)</li>
              <li>Direct marketing communications (where applicable)</li>
              <li>Sharing images on social media</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">4. How We Use Your Data</h2>
            <p className="mb-4">We use your personal data for the following purposes:</p>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">4.1 Service Delivery</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Booking & scheduling:</strong> Confirming shoot dates, managing calendar, sending reminders</li>
              <li><strong>Communication:</strong> Sending invoices, delivery confirmations, revisions requests</li>
              <li><strong>Payment processing:</strong> Billing, invoice generation, payment collection</li>
              <li><strong>Technical support:</strong> Responding to questions about deliverables, file access, or technical issues</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">4.2 Business Operations</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Record-keeping:</strong> Maintaining service history, client database, financial records</li>
              <li><strong>Quality assurance:</strong> Reviewing service quality, managing complaints, improving processes</li>
              <li><strong>Tax compliance:</strong> Maintaining invoices, payment records, business accounts</li>
              <li><strong>Legal protection:</strong> Documenting agreements, disputes, and contractual terms</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">4.3 Marketing & Business Development</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Portfolio use:</strong> Showcasing your property images in our portfolio (with consent)</li>
              <li><strong>Case studies:</strong> Sharing anonymized case studies about successful listings</li>
              <li><strong>Social media:</strong> Posting images to promote our services (if permitted)</li>
              <li><strong>Business promotion:</strong> Marketing materials, website updates, award submissions</li>
              <li><strong>Client testimonials:</strong> Requesting feedback and publishing positive reviews</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">4.4 Safety & Compliance</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Fraud prevention:</strong> Detecting and preventing unauthorized access or payment fraud</li>
              <li><strong>Legal compliance:</strong> Meeting tax obligations, responding to regulatory requests</li>
              <li><strong>Access security:</strong> Protecting against data breaches and unauthorized access</li>
              <li><strong>Property protection:</strong> Documenting property condition, access authorization</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">4.5 Communication & Updates</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Operational updates:</strong> Notifying you of scheduling changes, delivery delays, service updates</li>
              <li><strong>Service announcements:</strong> Informing you of new services, special offers, or relevant updates</li>
              <li><strong>Feedback requests:</strong> Asking for testimonials, reviews, or service feedback</li>
              <li><strong>Compliance notices:</strong> Notifying you of policy updates, data breaches, or regulatory changes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">5. Who We Share Your Data With</h2>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">5.1 Third-Party Service Providers (Data Processors)</h3>
            <p className="mb-4">We use GDPR-compliant third-party services for:</p>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border border-gray/20">
                <thead className="bg-light">
                  <tr>
                    <th className="border border-gray/20 px-4 py-2 text-left font-bold text-dark">Service Category</th>
                    <th className="border border-gray/20 px-4 py-2 text-left font-bold text-dark">Examples</th>
                    <th className="border border-gray/20 px-4 py-2 text-left font-bold text-dark">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Cloud Storage</strong></td>
                    <td className="border border-gray/20 px-4 py-2">Google Drive, Dropbox, WeTransfer, Adobe Cloud</td>
                    <td className="border border-gray/20 px-4 py-2">File storage, client access, backup</td>
                  </tr>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Payment Processing</strong></td>
                    <td className="border border-gray/20 px-4 py-2">Stripe, PayPal, Square, Wise, GoCardless</td>
                    <td className="border border-gray/20 px-4 py-2">Payment collection, invoicing, accounting</td>
                  </tr>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Communication</strong></td>
                    <td className="border border-gray/20 px-4 py-2">Gmail, WhatsApp, Zoom, Teams, Skype</td>
                    <td className="border border-gray/20 px-4 py-2">Client communication, scheduling, support</td>
                  </tr>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Business Tools</strong></td>
                    <td className="border border-gray/20 px-4 py-2">Calendly, Notion, Mailchimp, Square</td>
                    <td className="border border-gray/20 px-4 py-2">Booking management, CRM, email marketing</td>
                  </tr>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Accounting/Tax</strong></td>
                    <td className="border border-gray/20 px-4 py-2">Xero, FreeAgent, QuickBooks, ClearBooks</td>
                    <td className="border border-gray/20 px-4 py-2">Financial records, tax filing, compliance</td>
                  </tr>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Website Hosting</strong></td>
                    <td className="border border-gray/20 px-4 py-2">Squarespace, Wix, WordPress, Netlify</td>
                    <td className="border border-gray/20 px-4 py-2">Website operation, analytics, security</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-4"><strong>Data Protection Agreements:</strong> All third-party providers are bound by Data Processing Agreements (DPAs) ensuring GDPR compliance.</p>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">5.2 Sharing With Clients & Realtors</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Property images</strong> are shared with the property seller/realtor for marketing purposes (this is the primary purpose of our service)</li>
              <li><strong>Your name and contact details</strong> may be shared with realtors if you request we work directly with them</li>
              <li><strong>Delivery links</strong> to client file storage may include your contact information for access purposes</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">5.3 Legal & Regulatory Sharing</h3>
            <p className="mb-4">We may disclose your data if required by:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Law enforcement:</strong> Court orders, police investigations, lawful authority requests</li>
              <li><strong>Regulatory bodies:</strong> HMRC (tax compliance), ICO (data protection), Companies House</li>
              <li><strong>Legal proceedings:</strong> If we are party to litigation or dispute resolution</li>
              <li><strong>Fraud prevention:</strong> Reporting suspected fraud to fraud prevention agencies</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">5.4 Data NOT Shared</h3>
            <p className="mb-4">We <strong>explicitly do not:</strong></p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Sell personal data to third parties for marketing purposes</li>
              <li>Share data with unvetted external companies</li>
              <li>Use data for purposes beyond those stated in this policy</li>
              <li>Share data internationally (outside UK/EU) without appropriate safeguards</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">6. International Data Transfers</h2>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">6.1 Transfers Outside the UK/EU</h3>
            <p className="mb-4">Data transfers outside the UK and European Economic Area (EEA) are <strong>limited</strong>. Where necessary, we ensure:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Standard Contractual Clauses (SCCs):</strong> Transfers to non-GDPR countries include SCCs as specified by the UK GDPR</li>
              <li><strong>Adequacy Decisions:</strong> We only transfer to countries with UK GDPR adequacy decisions (e.g., Canada, Israel) or with protective measures in place</li>
              <li><strong>Third-party compliance:</strong> Service providers processing data outside the UK/EU must comply with UK GDPR standards</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">6.2 US-Based Services</h3>
            <p className="mb-4">Some services we use (Google, Dropbox, PayPal) may process data in the US. These providers:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Are bound by Data Processing Agreements with Standard Contractual Clauses</li>
              <li>Comply with GDPR standards</li>
              <li>Have their own data protection commitments (e.g., Google's SCC compliance)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">7. Data Retention</h2>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">7.1 Client Data Retention Schedule</h3>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border border-gray/20">
                <thead className="bg-light">
                  <tr>
                    <th className="border border-gray/20 px-4 py-2 text-left font-bold text-dark">Data Type</th>
                    <th className="border border-gray/20 px-4 py-2 text-left font-bold text-dark">Retention Period</th>
                    <th className="border border-gray/20 px-4 py-2 text-left font-bold text-dark">Reason for Retention</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Personal contact details</strong> (name, email, phone)</td>
                    <td className="border border-gray/20 px-4 py-2">5 years</td>
                    <td className="border border-gray/20 px-4 py-2">Tax/accounting records, dispute resolution</td>
                  </tr>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Booking & correspondence</strong> (emails, messages, notes)</td>
                    <td className="border border-gray/20 px-4 py-2">5 years</td>
                    <td className="border border-gray/20 px-4 py-2">Proof of service delivery, legal protection</td>
                  </tr>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Payment records</strong> (invoices, receipts, payment confirmations)</td>
                    <td className="border border-gray/20 px-4 py-2">5 years</td>
                    <td className="border border-gray/20 px-4 py-2">Tax compliance, accounting records</td>
                  </tr>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Raw photography files</strong></td>
                    <td className="border border-gray/20 px-4 py-2">1 month</td>
                    <td className="border border-gray/20 px-4 py-2">Client access, revisions, technical recovery</td>
                  </tr>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Edited photography files</strong></td>
                    <td className="border border-gray/20 px-4 py-2">1 month</td>
                    <td className="border border-gray/20 px-4 py-2">Client access, delivery confirmation</td>
                  </tr>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Website visit analytics</strong></td>
                    <td className="border border-gray/20 px-4 py-2">1-3 months</td>
                    <td className="border border-gray/20 px-4 py-2">Website optimization, security analysis</td>
                  </tr>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Email marketing data</strong></td>
                    <td className="border border-gray/20 px-4 py-2">Duration of consent</td>
                    <td className="border border-gray/20 px-4 py-2">Marketing communications, until unsubscribed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">7.2 Deletion Process</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>After retention period:</strong> Data is <strong>automatically deleted</strong> or securely destroyed</li>
              <li><strong>Client request:</strong> Upon written request to ramen@ramenstudios.co.uk, data can be deleted earlier (except where legal obligations require retention)</li>
              <li><strong>Secure deletion:</strong> Deleted data is <strong>permanently removed</strong> using secure deletion methods; it cannot be recovered</li>
              <li><strong>Exception:</strong> Data required for legal, tax, or fraud prevention purposes may be retained longer</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">7.3 Your Right to Request Deletion</h3>
            <p className="mb-4">Under UK GDPR Article 17 (Right to Erasure), you can request deletion of personal data, except where:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Legal obligations require retention (tax records, court orders)</li>
              <li>Disputes are ongoing or may arise</li>
              <li>Data is necessary for service delivery (e.g., invoice for already-provided services)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">8. Your Rights Under UK GDPR</h2>
            <p className="mb-4">You have the following rights regarding your personal data:</p>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">8.1 Right of Access (Article 15)</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Request:</strong> You can ask to see what personal data we hold about you</li>
              <li><strong>Response time:</strong> We will provide this information within <strong>30 calendar days</strong></li>
              <li><strong>Format:</strong> Information will be provided in a clear, portable format</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">8.2 Right to Rectification (Article 16)</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Correction:</strong> You can request correction of inaccurate or incomplete data</li>
              <li><strong>Examples:</strong> Wrong email address, incorrect phone number, spelling errors in name</li>
              <li><strong>Process:</strong> We will correct data and confirm the change within <strong>30 days</strong></li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">8.3 Right to Erasure (Article 17) - "Right to Be Forgotten"</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Deletion:</strong> You can request deletion of personal data, subject to exceptions</li>
              <li><strong>Exceptions:</strong> We may retain data if required by law, for legal disputes, or for legitimate business purposes</li>
              <li><strong>Response:</strong> We will confirm deletion (or explain why deletion isn't possible) within <strong>30 days</strong></li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">8.4 Right to Restrict Processing (Article 18)</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Restriction:</strong> You can ask us to limit how we use your data</li>
              <li><strong>Examples:</strong> Restricting marketing communications while retaining data for service delivery</li>
              <li><strong>Duration:</strong> Restriction continues until the reason for restriction is addressed</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">8.5 Right to Data Portability (Article 20)</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Export:</strong> You can request your data in a portable, machine-readable format (e.g., CSV, JSON)</li>
              <li><strong>Purpose:</strong> To transfer data to another service provider</li>
              <li><strong>Response time:</strong> <strong>30 calendar days</strong></li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">8.6 Right to Object (Article 21)</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Opt-out:</strong> You can object to processing for marketing or legitimate interest purposes</li>
              <li><strong>Immediate effect:</strong> You can opt out of marketing communications at any time</li>
              <li><strong>Portfolio use:</strong> You can request removal of your images from our portfolio or case studies</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">8.7 Rights Related to Automated Decision-Making (Article 22)</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>We do <strong>not</strong> use automated decision-making (e.g., AI profiling) to make decisions about you</li>
              <li>All service decisions are made by humans</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">8.8 Right to Withdraw Consent (Article 7)</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>If we rely on consent for processing, you can withdraw it at any time</li>
              <li>Withdrawal does not affect the lawfulness of prior processing</li>
              <li>Contact us at ramen@ramenstudios.co.uk to withdraw consent</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">8.9 Right to Lodge a Complaint</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>If you believe we are mishandling your data, you can lodge a formal complaint with the <strong>Information Commissioner's Office (ICO)</strong></li>
              <li><strong>ICO Contact:</strong> 0303 123 1113 or www.ico.org.uk</li>
              <li><strong>Your right is not affected</strong> by lodging a complaint with us first (though we encourage you to contact us directly)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">9. How to Exercise Your Rights</h2>
            <p className="mb-4">To exercise any of the above rights:</p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li><strong>Send a written request</strong> to: <strong>ramen@ramenstudios.co.uk</strong></li>
              <li><strong>Include:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Your full name and contact details</li>
                  <li>Which right you are exercising</li>
                  <li>Specific data or records you are referring to</li>
                  <li>Proof of identity (for security verification)</li>
                </ul>
              </li>
              <li><strong>Response timeline:</strong> We will respond within <strong>30 calendar days</strong></li>
              <li><strong>Extensions:</strong> If the request is complex, we may extend the deadline by <strong>2 months</strong> (with notification)</li>
              <li><strong>No fees:</strong> We will not charge for exercising your rights (except in cases of manifestly unfounded or excessive requests)</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">10. Image Privacy & Consent</h2>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">10.1 Photography in Public Spaces</h3>
            <p className="mb-4">When photographing properties, we may incidentally capture:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Neighbors, pedestrians, or workers in background</li>
              <li>Vehicle registration plates</li>
              <li>Identifiable property features</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">10.2 Privacy Protections</h3>
            <p className="mb-4">We automatically:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Blur or remove</strong> all visible vehicle registration plates</li>
              <li><strong>Blur or remove</strong> clearly visible faces of people in backgrounds</li>
              <li><strong>Remove or obscure</strong> personal documents, mail, or identifying markers visible in interior shots</li>
              <li><strong>Redact</strong> anything that could identify residents (family photos, personal artwork, etc.)</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">10.3 Consent for Incidental Captures</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Background people:</strong> Incidental captures of people are considered "processing" under GDPR</li>
              <li><strong>Our approach:</strong> We treat incidental people capture as <strong>necessary for the service purpose</strong> and do not require separate consent (GDPR Article 6(1)(b) - contractual necessity)</li>
              <li><strong>On request:</strong> If you are uncomfortable with images of people visible in the shoot, we will blur or remove them at no additional cost</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">10.4 Request for Image Removal</h3>
            <p className="mb-4">If you identify personal information in delivered images (faces, documents, number plates that weren't obscured), please:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Email:</strong> ramen@ramenstudios.co.uk</li>
              <li><strong>Include:</strong> Screenshot or description of the issue and which image</li>
              <li><strong>We will:</strong> Correct and redelivery within <strong>24 hours</strong> at no charge</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">11. Data Security & Protection</h2>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">11.1 Security Measures</h3>
            <p className="mb-4">We implement industry-standard security practices:</p>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border border-gray/20">
                <thead className="bg-light">
                  <tr>
                    <th className="border border-gray/20 px-4 py-2 text-left font-bold text-dark">Security Measure</th>
                    <th className="border border-gray/20 px-4 py-2 text-left font-bold text-dark">Implementation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Encryption</strong></td>
                    <td className="border border-gray/20 px-4 py-2">SSL/TLS encryption for data in transit; AES-256 for stored data</td>
                  </tr>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Access control</strong></td>
                    <td className="border border-gray/20 px-4 py-2">Password protection; two-factor authentication where available</td>
                  </tr>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Network security</strong></td>
                    <td className="border border-gray/20 px-4 py-2">Firewalls, regular security updates, intrusion detection</td>
                  </tr>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Staff training</strong></td>
                    <td className="border border-gray/20 px-4 py-2">Regular GDPR and data protection training for all personnel</td>
                  </tr>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Third-party vetting</strong></td>
                    <td className="border border-gray/20 px-4 py-2">GDPR compliance verification before using any service provider</td>
                  </tr>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Backup systems</strong></td>
                    <td className="border border-gray/20 px-4 py-2">Regular secure backups to prevent data loss</td>
                  </tr>
                  <tr>
                    <td className="border border-gray/20 px-4 py-2"><strong>Monitoring</strong></td>
                    <td className="border border-gray/20 px-4 py-2">Regular security audits and vulnerability assessments</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">11.2 Limitations of Security</h3>
            <p className="mb-4">While we take data protection seriously, <strong>no security system is 100% guaranteed</strong> against breaches. You acknowledge:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Data transmitted over the internet carries inherent risk</li>
              <li>We cannot guarantee absolute security despite best efforts</li>
              <li>You are responsible for securing your own access credentials (passwords, login details)</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">11.3 Data Breach Notification</h3>
            <p className="mb-4">If a data breach occurs that poses risk to your personal data:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>We will notify you</strong> within <strong>72 hours</strong> of discovery (as required by UK GDPR Article 33)</li>
              <li><strong>Notification will include:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Description of the breach</li>
                  <li>Data affected</li>
                  <li>Likely consequences</li>
                  <li>Measures we're taking to address it</li>
                  <li>Our contact details for further information</li>
                </ul>
              </li>
              <li><strong>Where appropriate:</strong> We will also notify the Information Commissioner's Office (ICO)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">12. Cookies & Tracking Technologies</h2>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">12.1 Website Cookies</h3>
            <p className="mb-4">Our website may use cookies for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Essential cookies:</strong> Session management, security</li>
              <li><strong>Analytics cookies:</strong> Understanding visitor behavior, improving website</li>
              <li><strong>Marketing cookies:</strong> Tracking return visitors (if applicable)</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">12.2 Your Cookie Choices</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You can <strong>disable cookies</strong> in your browser settings</li>
              <li>Disabling cookies may limit website functionality</li>
              <li>We will obtain <strong>consent before placing non-essential cookies</strong></li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">12.3 Third-Party Tracking</h3>
            <p className="mb-4">We use analytics services (e.g., Google Analytics) that may set their own cookies. These are governed by the third-party's privacy policy, not ours.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">13. Specific Processing Scenarios</h2>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">13.1 Delivery of Images to Clients</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>What data is shared:</strong> Photographs, floor plans, descriptions, access links</li>
              <li><strong>Legal basis:</strong> Contractual necessity (Article 6(1)(b))</li>
              <li><strong>Recipients:</strong> You (the photographer's client), the property seller/realtor</li>
              <li><strong>Retention:</strong> Until property is sold/delisted or 1 month (whichever is longer)</li>
              <li><strong>Rights impact:</strong> Minimal; images are the service product</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">13.2 Portfolio & Marketing Use</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>What data is shared:</strong> Images and property address (sometimes with location blurred)</li>
              <li><strong>Legal basis:</strong> Legitimate interest (Article 6(1)(f)) or consent (Article 6(1)(a) if explicit opt-in)</li>
              <li><strong>Recipients:</strong> Website visitors, social media followers, award judges</li>
              <li><strong>Retention:</strong> Indefinitely (or until removal requested)</li>
              <li><strong>Your rights:</strong> You can request removal from portfolio at any time</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">13.3 Email Communications</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>What data is shared:</strong> Email address, communication content</li>
              <li><strong>Legal basis:</strong> Contractual necessity (service updates) or consent (marketing)</li>
              <li><strong>Recipients:</strong> Our email system, messaging services</li>
              <li><strong>Retention:</strong> 5 years (service-related); deleted upon unsubscribe (marketing)</li>
              <li><strong>Your rights:</strong> Unsubscribe from marketing emails at any time (link in footer)</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">13.4 Payment Processing</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>What data is shared:</strong> Billing name, address, payment method (processed securely)</li>
              <li><strong>Legal basis:</strong> Contractual necessity (Article 6(1)(b))</li>
              <li><strong>Recipients:</strong> Payment processor (Stripe, PayPal, etc.)</li>
              <li><strong>Retention:</strong> 5 years (for accounting/tax records)</li>
              <li><strong>Security:</strong> Full PCI compliance; we do not store full credit card numbers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">14. Children's Privacy</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Our services are <strong>not directed at persons under 18 years old</strong></li>
              <li>We do not knowingly collect data from children</li>
              <li>If we become aware that a child has provided data, we will delete it immediately</li>
              <li>Parents/guardians concerned about child data can contact us immediately</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">15. Policy Changes & Updates</h2>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">15.1 Amendments to This Policy</h3>
            <p className="mb-4">We may update this Privacy Policy periodically to reflect:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Changes in UK GDPR requirements</li>
              <li>Updates to our business practices</li>
              <li>New third-party services</li>
              <li>Feedback from clients</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">15.2 Notification of Changes</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Significant changes</strong> will be announced via email or website notice</li>
              <li><strong>Continued use</strong> of our services after updates constitutes acceptance of the revised policy</li>
              <li><strong>Historical versions</strong> will be archived (upon request)</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">15.3 Your Right to Object</h3>
            <p className="mb-4">If you disagree with policy changes, you can:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Stop using our services</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Lodge a complaint with the ICO</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">16. Contact & Data Protection Officer</h2>
            <p className="mb-4">For privacy inquiries, data subject requests, or concerns:</p>
            
            <div className="bg-light p-6 rounded-lg mb-4">
              <p className="font-bold text-dark mb-2">Primary Contact:</p>
              <p>Email: <strong>ramen@ramenstudios.co.uk</strong></p>
              <p>Phone: <strong>07780038076</strong></p>
              <p>Address: <strong>67a Surbiton Road, Kingston upon Thames, KT1 2HG</strong></p>
            </div>

            <p className="mb-4"><strong>Response Time:</strong> We will acknowledge your inquiry within <strong>2 business days</strong> and provide a substantive response within <strong>30 calendar days</strong>.</p>

            <p className="mb-4"><strong>Data Protection Officer:</strong><br />
            For GDPR-specific concerns, contact: <strong>ramen@ramenstudios.co.uk</strong> (mark subject line "GDPR Request")</p>

            <div className="bg-light p-6 rounded-lg mb-4">
              <p className="font-bold text-dark mb-2">Information Commissioner's Office (ICO):</p>
              <p>If you wish to lodge a formal data protection complaint:</p>
              <p>Phone: <strong>0303 123 1113</strong></p>
              <p>Website: <strong>www.ico.org.uk</strong></p>
              <p>Address: <strong>Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF</strong></p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">17. Specific Disclosures for UK GDPR</h2>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">17.1 Data Controller & Processor</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Data Controller:</strong> Ramen Capital Ltd (we decide how your data is used)</li>
              <li><strong>Data Processors:</strong> Third-party services listed in Section 5.1 (we instruct them on how to process data)</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">17.2 Legitimate Interests Assessment</h3>
            <p className="mb-4">We have conducted a Legitimate Interests Assessment (LIA) for processing your data for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Marketing:</strong> Promoting our services, portfolio building (balanced against your privacy)</li>
              <li><strong>Fraud prevention:</strong> Protecting business against fraud (outweighs privacy interests)</li>
              <li><strong>Service improvement:</strong> Analyzing usage patterns to improve our offering</li>
            </ul>
            <p className="mb-4">These assessments conclude that our interests are balanced and do not override your rights.</p>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">17.3 Automated Decision-Making</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>We do <strong>NOT</strong> use automated decision-making (e.g., algorithmic profiling) to make decisions about your services</li>
              <li>All service decisions are made by human staff</li>
              <li>You have no right to automated decision-making in our service delivery</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">18. Additional Data Protection Commitments</h2>
            <p className="mb-4">We commit to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>✅ Being transparent about data collection and use</li>
              <li>✅ Collecting only necessary data (data minimization)</li>
              <li>✅ Keeping data accurate and up-to-date</li>
              <li>✅ Implementing strong security measures</li>
              <li>✅ Respecting your privacy rights</li>
              <li>✅ Responding promptly to privacy inquiries</li>
              <li>✅ Complying with UK GDPR and Data Protection Act 2018</li>
              <li>✅ Conducting Data Protection Impact Assessments for new processes</li>
              <li>✅ Maintaining documented evidence of GDPR compliance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">19. Severability & Interpretation</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>If any provision of this policy is found invalid, other provisions remain in effect</li>
              <li>Headings are for reference only and do not affect interpretation</li>
              <li>No waiver of any right constitutes waiver of future rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">20. Acknowledgment</h2>
            <p className="mb-4">By using our services or visiting our website, you acknowledge that you have:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Read this Privacy Policy</li>
              <li>Understood our data handling practices</li>
              <li>Agreed to our collection and use of personal data as described</li>
              <li>Understand your rights under UK GDPR</li>
            </ul>
          </section>

          <div className="border-t border-gray/20 pt-6 mt-8">
            <p className="text-sm text-gray">
              <strong>Last Updated:</strong> December 13, 2025<br />
              <strong>Effective Date:</strong> December 13, 2025
            </p>
            <p className="mt-4 text-sm text-gray">
              For questions or concerns about this Privacy Policy, please contact: <strong>ramen@ramenstudios.co.uk</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

