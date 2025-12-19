import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const TermsOfService = () => {
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
            Terms of Service
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
              These Terms of Service ("Terms") govern the relationship between <strong>Ramen Capital Ltd</strong> (hereinafter "the Company," "we," "us," or "our") and any individual or entity ("Client," "you," or "your") who engages our professional real estate photography services.
            </p>
            <p className="mb-4">
              By booking, confirming, or accepting delivery of services, you agree to be bound by these Terms. If you do not agree with any provision, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">2. Services Offered</h2>
            <p className="mb-4">We provide comprehensive real estate photography and documentation services, including but not limited to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Professional photography</strong> (edited high-resolution images)</li>
              <li><strong>Video documentation</strong> (property walkthroughs and cinematic sequences)</li>
              <li><strong>360° virtual tours</strong> (immersive property exploration)</li>
              <li><strong>Floor plans</strong> (professional layout documentation)</li>
              <li><strong>Property descriptions</strong> (written content for listings)</li>
              <li><strong>Additional deliverables</strong> (as agreed in writing prior to service delivery)</li>
            </ul>
            <p className="mb-4">All deliverables are customized based on the property requirements and client specifications discussed at the time of booking.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">3. Service Booking & Confirmation</h2>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">3.1 Booking Process</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Booking confirms your intention to engage our services</li>
              <li>Once a shoot date is scheduled, it is reserved exclusively for your property</li>
              <li>We will confirm all details via your preferred communication channel (email, phone, WhatsApp, etc.)</li>
              <li>A booking confirmation will include the shoot date, time, location, and agreed deliverables</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">3.2 Pre-Shoot Requirements</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The property must be <strong>accessible, vacant (where possible), and clean</strong></li>
              <li>Any persons present on the property must be prepared to appear in photographs or must vacate the premises</li>
              <li>Realtor or property representative must be present or provide access instructions</li>
              <li>Client or realtor is responsible for ensuring safe access to all areas to be photographed</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">3.3 Shoot Rescheduling (Client-Initiated)</h3>
            <p className="mb-4">If <strong>you</strong> need to reschedule:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>48 hours or more notice:</strong> Rescheduling is <strong>free</strong> and a new date will be arranged at mutual convenience</li>
              <li><strong>Less than 48 hours notice:</strong> A <strong>rescheduling fee of £50</strong> applies</li>
              <li><strong>No-show (property inaccessible, realtor unavailable):</strong> A <strong>no-show fee of £100</strong> applies, and the shoot will be rescheduled at our discretion</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">4. Cancellation Policy</h2>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">4.1 Client-Initiated Cancellation</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>More than 48 hours before scheduled shoot:</strong> <strong>No cancellation fee</strong>; all payments are fully refunded</li>
              <li><strong>Within 24-48 hours before scheduled shoot:</strong> <strong>£50 cancellation fee</strong> applies; remaining balance is refunded</li>
              <li><strong>Less than 24 hours before scheduled shoot or no-show:</strong> <strong>£100 cancellation fee</strong> applies; 50% of service fee is retained</li>
              <li><strong>Written cancellation notice required:</strong> Cancellation is only valid upon written confirmation to ramen@ramenstudios.co.uk</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">4.2 Company-Initiated Rescheduling</h3>
            <p className="mb-4">If we need to reschedule due to equipment failure, emergency, or unforeseen circumstances:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>We will provide as much notice as possible</li>
              <li>A new shoot date will be offered at no additional cost</li>
              <li>All previously collected payments remain valid for the rescheduled date</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">4.3 Property Access Issues</h3>
            <p className="mb-4">If the property is inaccessible due to realtor negligence, locked gates, or incomplete access instructions:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>A <strong>penalty fee of £75</strong> applies to cover travel and operational costs</li>
              <li>The shoot will be rescheduled at mutual convenience</li>
              <li>Client is liable for any additional costs incurred due to repeated access failures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">5. Pricing & Payment Terms</h2>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">5.1 Payment Schedule</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Payment due:</strong> 3 working days after deliverables have been sent and made available to the client</li>
              <li><strong>Invoice issued:</strong> Upon shoot completion</li>
              <li><strong>Payment methods accepted:</strong> All standard and regulated UK payment methods (bank transfer, card, PayPal, etc.)</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">5.2 Travel & Mileage</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>No travel fees</strong> are charged; all travel costs are included in the service fee</li>
              <li>Mileage and travel time are factored into our pricing model</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">5.3 Additional Services</h3>
            <p className="mb-4">Should the client request additional services beyond the agreed scope (e.g., extra properties, rush delivery, specialized editing), additional fees will be quoted and agreed upon in writing before delivery.</p>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">5.4 Currency & Late Payment</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>All fees are stated in <strong>British Pounds (£)</strong></li>
              <li>Payment must be received within the agreed timeframe</li>
              <li>Late payment may incur interest at <strong>8% per annum above the Bank of England base rate</strong> (as per Late Payment of Commercial Debts (Interest) Act 1998)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">6. Deliverables & Delivery</h2>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">6.1 Delivery Timeline</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Standard turnaround:</strong> All deliverables will be provided within <strong>24 hours of the shoot completion</strong></li>
              <li><strong>Delivery method:</strong> All files are delivered via secure cloud storage (Google Drive, Dropbox, WeTransfer, or client's preferred service)</li>
              <li><strong>File formats:</strong> Images (JPG/RAW), videos (MP4/MOV), 360° tours (web-link accessible), floor plans (PDF), and descriptions (Word/PDF)</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">6.2 Revisions</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Up to 5 rounds of revisions</strong> are included with each service</li>
              <li>Revisions include: minor color correction, cropping adjustments, object removal, lighting tweaks, and similar non-structural edits</li>
              <li>Revisions requested after the 5th round will be charged at <strong>£30 per revision</strong></li>
              <li><strong>Major rework</strong> (e.g., complete re-editing, staged photography) is considered a new service and will be quoted separately</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">6.3 File Retention & Deletion</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Raw files</strong> (unedited) are stored for <strong>1 month</strong> following delivery</li>
              <li><strong>Edited files</strong> are stored for <strong>1 month</strong> following delivery</li>
              <li>After 1 month, files are deleted unless the client has separately purchased extended storage (not currently offered)</li>
              <li>The client is responsible for maintaining their own backups of all received files</li>
              <li>In the event of a data breach or security incident, we will notify the client as required by UK GDPR</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">7. Intellectual Property & Image Rights</h2>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">7.1 Ownership & Licensing</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Copyright ownership:</strong> Ramen Capital Ltd retains full copyright ownership of all original photographs, videos, and creative content</li>
              <li><strong>Client license:</strong> Client receives a <strong>perpetual, non-exclusive, royalty-free license</strong> to use images for:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Commercial real estate purposes</strong> (selling, renting, marketing the property)</li>
                  <li><strong>Property listings</strong> (MLS, Rightmove, Zoopla, estate agent websites)</li>
                  <li><strong>Social media promotion</strong> (Instagram, Facebook, etc.)</li>
                  <li><strong>Print and digital marketing</strong> (brochures, websites, advertisements)</li>
                  <li><strong>Internal use</strong> (professional archives, property records)</li>
                </ul>
              </li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">7.2 Usage Restrictions</h3>
            <p className="mb-4">The client <strong>may not:</strong></p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Sell, resell, or redistribute the images to third parties without explicit written permission</li>
              <li>Use images for purposes other than those listed above (e.g., commercial use outside real estate, AI training datasets, unauthorized stock photography)</li>
              <li>Remove, alter, or modify watermarks, metadata, or copyright information without permission</li>
              <li>Use images beyond the scope of the property documented (e.g., using a kitchen photo for a different property)</li>
              <li>License or sublicense the images to other photographers or service providers</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">7.3 Photographer's Rights to Use Images</h3>
            <p className="mb-4">Ramen Capital Ltd retains the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Use images in our <strong>portfolio, website, and social media</strong> (Instagram, Facebook, etc.)</li>
              <li>Use images in <strong>case studies, testimonials, and marketing materials</strong></li>
              <li>Share images in <strong>industry publications and award submissions</strong></li>
              <li>Use images for <strong>educational and promotional purposes</strong></li>
            </ul>
            <p className="mb-4"><strong>Credit requirement:</strong> When our images are published online or in promotional materials, we request (but do not require) a photo credit: "Photography by Ramen Studios" or similar attribution.</p>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">7.4 Restrictions on Photographer's Use</h3>
            <p className="mb-4">We will <strong>not:</strong></p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Share images publicly without prior consent</li>
              <li>Use images in advertising without approval from the property seller/realtor</li>
              <li>Publish personal or identifying information visible in background elements</li>
              <li>Share images beyond the agreed timeline (typically 12 months from delivery)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">8. Privacy & Personal Data Protection</h2>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">8.1 GDPR Compliance</h3>
            <p className="mb-4">We are committed to protecting your personal data in accordance with the <strong>UK General Data Protection Regulation (UK GDPR)</strong> and the <strong>Data Protection Act 2018</strong>.</p>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">8.2 Data We Collect</h3>
            <p className="mb-4">We may collect and process the following personal data:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Name and contact details</strong> (email, phone number)</li>
              <li><strong>Property address</strong></li>
              <li><strong>Payment information</strong> (invoicing details, payment method)</li>
              <li><strong>Communication records</strong> (emails, messages, phone calls)</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">8.3 How We Use Your Data</h3>
            <p className="mb-4">Your personal data is used solely for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Delivering our services</li>
              <li>Sending invoices and payment reminders</li>
              <li>Communicating about scheduling, revisions, and deliverables</li>
              <li>Maintaining records for accounting and tax purposes</li>
              <li>Responding to inquiries or complaints</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">8.4 Data Retention</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Client correspondence and records</strong> are retained for <strong>5 years</strong> following the final service delivery</li>
              <li><strong>After 5 years</strong>, all personal data is <strong>permanently deleted</strong> unless legal obligations require retention</li>
              <li>Clients may request earlier deletion at any time by sending written notice to ramen@ramenstudios.co.uk</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">8.5 Data Sharing</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your personal data is <strong>not shared</strong> with third parties except where necessary for service delivery</li>
              <li>We use <strong>GDPR-compliant third-party services</strong> for:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Cloud storage (Google Drive, Dropbox, Adobe Cloud, etc.)</li>
                  <li>Payment processing (Stripe, PayPal, Square, etc.)</li>
                  <li>Communication tools (email, WhatsApp, etc.)</li>
                </ul>
              </li>
              <li>All third-party providers are bound by strict data protection agreements</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">8.6 Your Rights</h3>
            <p className="mb-4">Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Access</strong> your personal data (right of access)</li>
              <li><strong>Correct</strong> inaccurate data (right to rectification)</li>
              <li><strong>Delete</strong> your data (right to erasure, subject to legal obligations)</li>
              <li><strong>Restrict</strong> how your data is used (right to restrict processing)</li>
              <li><strong>Withdraw consent</strong> at any time</li>
              <li><strong>Lodge a complaint</strong> with the Information Commissioner's Office (ICO)</li>
            </ul>
            <p className="mb-4">To exercise these rights, please contact us in writing at <strong>ramen@ramenstudios.co.uk</strong>.</p>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">8.7 Image Privacy & Blurring</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Any <strong>personal information visible in photographs</strong> (faces, number plates, personal documents, etc.) will be <strong>blurred or removed</strong> upon request</li>
              <li>We maintain <strong>strict privacy protocols</strong> to protect individuals who may appear in background elements</li>
              <li>Number plates and other identifying information are <strong>automatically obscured</strong> in all exterior shots</li>
              <li>If sensitive information is visible, please notify us immediately, and we will correct the images at no additional cost</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">9. Liability & Insurance</h2>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">9.1 Limitation of Liability</h3>
            <p className="mb-4 font-bold text-dark">OUR LIABILITY IS LIMITED TO THE TOTAL AMOUNT PAID FOR SERVICES.</p>
            <p className="mb-4">We will not be liable for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Indirect or consequential damages</strong> (lost sales, lost profits, business interruption, reputational harm)</li>
              <li><strong>Damages arising from delays</strong> in delivery (beyond 24 hours)</li>
              <li><strong>Damages resulting from client negligence</strong> (e.g., providing incorrect property access details)</li>
              <li><strong>Damages from third-party interference</strong> (e.g., realtor errors, property access failures)</li>
              <li><strong>Lost or corrupted files</strong> (after 1-month retention period)</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">9.2 Insurance Coverage</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Professional Indemnity Insurance:</strong> Not currently held (client acknowledges this risk)</li>
              <li><strong>Public Liability Insurance:</strong> Not currently held (client acknowledges this risk)</li>
              <li><strong>Equipment Failure:</strong> Should our equipment fail during a shoot, we will <strong>bear the cost of rescheduling</strong> at no charge to the client</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">9.3 Client Assumption of Risk</h3>
            <p className="mb-4">By engaging our services, you acknowledge:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Our services are provided "as is" without warranties beyond those expressly stated</li>
              <li>We cannot guarantee specific sales outcomes or listing performance</li>
              <li>Image quality, lighting, and property presentation depend on property conditions at the time of the shoot</li>
              <li>We are not responsible for realtor decisions regarding listing strategy, pricing, or marketing</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">9.4 Damage to Property</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>We take reasonable care to avoid damaging the property during the shoot</li>
              <li>We use professional, non-invasive techniques (tripods, portable lighting, soft equipment)</li>
              <li>Should any accidental damage occur, we will immediately notify the client and discuss resolution</li>
              <li>Our liability for property damage is limited to the total service fee paid</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">10. Confidentiality</h2>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">10.1 Confidential Information</h3>
            <p className="mb-4">Any confidential information shared during the engagement (e.g., property value, sale history, strategic pricing information) will be treated as confidential and <strong>not disclosed to third parties</strong> except as required by law or legitimate business purposes.</p>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">10.2 Public Information</h3>
            <p className="mb-4">Information such as property address, basic architectural details, and general listing information is not considered confidential and may be referenced in marketing materials or portfolios.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">11. Dispute Resolution</h2>
            
            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">11.1 Mediation First</h3>
            <p className="mb-4">In the event of a dispute arising from these Terms or our services:</p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>The parties will first attempt to <strong>resolve the matter through good-faith negotiation</strong></li>
              <li>If negotiation fails, the parties agree to <strong>submit to mediation</strong> with a neutral third party</li>
              <li>Mediation costs will be <strong>shared equally</strong> between the parties</li>
              <li>Mediation is non-binding; either party may pursue further action if unresolved</li>
            </ol>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">11.2 Jurisdiction</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>These Terms are governed by <strong>English Law</strong></li>
              <li>Any legal proceedings will be handled in the <strong>courts of England and Wales</strong></li>
              <li>Both parties submit to the jurisdiction of these courts</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-dark mb-3 mt-6">11.3 Complaints</h3>
            <p className="mb-4">Should you wish to lodge a formal complaint:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Send written details to <strong>ramen@ramenstudios.co.uk</strong> within <strong>30 days</strong> of the issue arising</li>
              <li>We will investigate and respond within <strong>14 working days</strong></li>
              <li>If unresolved, formal mediation will be offered</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">12. Modifications to Terms</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>These Terms may be updated periodically to reflect changes in law, business practices, or service offerings</li>
              <li>Clients will be notified of significant changes via email or website notice</li>
              <li>Continued use of our services following updates constitutes acceptance of revised Terms</li>
              <li>For service agreements already in progress, the Terms in effect at the time of booking will apply</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">13. Entire Agreement</h2>
            <p className="mb-4">These Terms, together with any written service agreement or proposal, constitute the entire agreement between the parties and supersede all prior negotiations, understandings, and agreements, whether written or oral.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">14. Contact Information</h2>
            <p className="mb-4">For questions, disputes, or service inquiries:</p>
            <div className="bg-light p-6 rounded-lg mb-4">
              <p className="font-bold text-dark mb-2">Ramen Capital Ltd</p>
              <p>Email: ramen@ramenstudios.co.uk</p>
              <p>Phone: 07780038076</p>
              <p>Address: 67a Surbiton Road, Kingston upon Thames, KT1 2HG</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-dark mb-4">15. Severability</h2>
            <p className="mb-4">If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will continue in full force and effect. The unenforceable provision will be modified to the minimum extent necessary to make it valid.</p>
          </section>

          <div className="border-t border-gray/20 pt-6 mt-8">
            <p className="mb-4 font-bold text-dark">By booking or accepting services from Ramen Capital Ltd, you confirm that you have read, understood, and agree to be bound by these Terms of Service.</p>
            <p className="text-sm text-gray">
              <strong>Effective Date:</strong> December 13, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

